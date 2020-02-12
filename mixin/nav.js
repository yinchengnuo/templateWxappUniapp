export default {
	data() {
		return {
			MIXIN_DrogLeft: 0,
			MIXIN_NowIndex: 0,
			MIXIN_ActiveIndex: 0,
			MIXIN_FinishedIndex: 0,
			MIXIN_ScrollViewHeight: 0,
			MIXIN_ScreenWidth: uni.getSystemInfoSync().screenWidth // 屏幕宽
		}
	},
	mounted() {
		this.$offset('.swiper').then(res => this.MIXIN_ScrollViewHeight = res.height)
	},
	methods: {
		MIXIN_transition({ detail: { dx } }) {
			this.MIXIN_DrogLeft = this.MIXIN_FinishedIndex * (this.MIXIN_ScreenWidth / this.navList.length) +  dx / this.navList.length
		},
		MIXIN_change({ detail: { current } }) {
			this.MIXIN_ActiveIndex = current
		},
		MIXIN_animationfinish({ detail: { current } }) { // swiper 停止切换
			this.MIXIN_FinishedIndex = this.MIXIN_NowIndex = current
		},
		MIXIN_SwitchNav(index) {
			this.MIXIN_ActiveIndex = index
		}
	}
}