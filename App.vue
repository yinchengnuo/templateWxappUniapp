<script>
	export default {
		onLaunch() {
			// this.$store.dispatch('app/getFontFaceList') // 下载字体
			this.$loading() // 带有 mask 的 loading
			uni.getUserInfo().then(([err, res]) => { // 通常进入小程序就要获取用户信息
				if (err) { // 获取失败的操作
					// this.$toast(err.errMsg)
				} else { // 获取成功就保存起来
					// this.$toast(res.rawData)
					this.$storage[this.Storage['WX_INFO']] = res.userInfo // 保存到本地存储
					this.$store.commit('userInfo/SAVE_USER_WX_INFO', res.userInfo) // 保存到 vuex 中
				}
			}).finally(() => this.$loaded())
		}
	}
</script>

<style>
	@import '@/styles/main.css'; //引入 ColorUI 组件库主样式
	@import '@/styles/icon.css'; //引入 ColorUI 组件库图标样式
	@import '@/styles/animation.css'; //引入 ColorUI 组件库动画样式
	page {
		height: 100%;
		background: #FFFFFF;
	}
</style>
