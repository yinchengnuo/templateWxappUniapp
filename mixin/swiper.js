export default {
	data() {
		return {
			MIXIN_NowIndex: 0,
			MIXIN_ActiveIndex: 0,
			MIXIN_MoveBarLeft: 0,
			MIXIN_FinishedIndex: 0,
			MIXIN_ScrollViewHeight: 0, // scroll view 高
			MIXIN_ScreenWidth: this.$store.state.device.screenWidth // 屏幕宽
		}
	},
	mounted() {
		this.$offset('.swiper').then(res => { this.MIXIN_ScrollViewHeight = res.height }) // 设置scrollview 高
	},
	methods: {
		MIXIN_transition({ detail: { dx } }) { // swiper 切换时 ///////////////////////////////////////////////////////////////////<固定写法>
			// this.MIXIN_MoveBarLeft = this.MIXIN_FinishedIndex * (this.MIXIN_ScreenWidth / this.typeList.length) +  dx / this.typeList.length
		},
		MIXIN_change({ detail: { current } }) {
			this.MIXIN_ActiveIndex = current
			this.MIXIN_MoveBarLeft = this.MIXIN_ActiveIndex * (this.MIXIN_ScreenWidth / this.typeList.length)
		},
		MIXIN_animationfinish({ detail: { current } }) { // swiper 停止切换
			this.MIXIN_FinishedIndex = this.MIXIN_NowIndex = current
			if (!this.lists[this.MIXIN_NowIndex].length && this.page[this.MIXIN_NowIndex] !== 0) { // 当当前类型数量为 0 且有不是 没有更多时请求列表
				this.MIXIN_request()
			}
		},
		switchSwiper(index) { // 点击导航栏切换
			this.MIXIN_NowIndex = index
			this.MIXIN_MoveBarLeft = this.MIXIN_NowIndex * (this.MIXIN_ScreenWidth / this.typeList.length)
		}, /////////////////////////////////////////////////////////////////////////////////////////////////////////////////<固定写法>
		MIXIN_pulldownrefresh() { // 下拉刷新
			this.page[this.MIXIN_NowIndex] = 1
			this.MIXIN_request().then(() => { this.$refs.pulldownRefresher.pullup() })
		},
		MIXIN_scrolltolower() { // 上拉加载
			this._requesting ? '': this.MIXIN_request('loadmore')
		},
		MIXIN_request(action) { // 请求数据
			return new Promise(resolve => { // 只有在 首次加载列表或者下拉刷新时才显示 liaoding
				if (this.page[this.MIXIN_NowIndex]) { // 当上一批数量不小于 size 时执行
					!action && this.$refs.ltm.loading() // 开始 loading, 只有在 首次加载列表或者下拉刷新时才显示 liaoding
					this._requesting = true // 请求加锁防抖
					this.apis[this.MIXIN_NowIndex]({ page: this.page[this.MIXIN_NowIndex] }).then(res => {
						this.MIXIN_requestHandle ? this.MIXIN_requestHandle(res) : '' // 执行请求结束处理函数
						!action ? this.lists[this.MIXIN_NowIndex] = [] : '' // 如果是下拉刷新，清空列表
						this.lists[this.MIXIN_NowIndex] = [...this.lists[this.MIXIN_NowIndex], ...res.data.list]
						res.data.list.length < +res.data.size ? this.page[this.MIXIN_NowIndex] = 0 : this.page[this.MIXIN_NowIndex] += 1 // 如果返回列表数量小于 10 表示没有更多了
					}).catch(() => { // 网络请求失败 进入失败状态
						this.page[this.MIXIN_NowIndex] = -1
						this.lists[this.MIXIN_NowIndex] = []
					}).finally(() => { // promise 结束
						this._requesting = false // 取消请求加锁防抖
						resolve() // 通知下拉刷新收起并把数据传出去
					})
				}
			})
		} ///////////////////////////////////////////////////////////////////////////////////////<固定写法>
	}
}