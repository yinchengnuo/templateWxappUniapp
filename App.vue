<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	@import 'common/style/main.scss';  //引入 ColorUI 组件库主样式
	@import 'common/style/icon.scss';  //引入 ColorUI 组件库图标样式
	@import 'common/style/animation.scss';  //引入 ColorUI 组件库动画样式
	page {  //uniapp 中的 page 标签相当于 html 中的 body, 默认高度为 auto, 但是高度为 100% 更利于 app 布局,你也可以在 page 中设置一些全局样式, 比如全局背景色
		height: 100%;
		background: #FFFFFF;
	}
</style>
