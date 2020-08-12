<template>
	<view class="index-global padding-sm">
		<view class="content">
			<view class="p">在开发 uni-app 项目时，个人习惯在全局变量 uni 上挂载一些工具方法。但是随着项目的深入，这些方法一定会越来越多。
			这时候就又出现了那个老生常谈的问题：命名冲突。uni 作为全局变量，是由官方维护的。如果处理不好命名问题，很容易覆盖一些官方的 API。这就得不偿失了。</view>
			<view class="p">于是我在 vue.config.js 中定义了一个全局变量 G 对象。将所有的工具方法全部放在 G 对象里面。G 对象的源码在 G 文件夹里。
			同时为了使用起来更方便，我把 Vue.prototype 对象的原型指向了 G对象。如此，G 中的方法便可以通过 this 调用。G 对象中有如下等方法：</view>
			<button class="url" @click="$loading('加载ing', false)">显示 loading：this/G.$loading('加载ing', false)</button>
			<button class="url" @click="$loaded()">隐藏 loading：this/G.$loaded()</button>
			<button class="url" @click="$toast('文字提示')">显示 toast：this/G.$toast('文字提示')</button>
			<button class="url" @click="$toasted()">隐藏 toast：this/G.$toasted()</button>
			<button class="url" @click="model">this/G.$model('是否确定？').then(...).catch(...)</button>
			<button class="url" @click="$copy('复制文字', '复制成功')">复制到剪切板：this/G.$copy('复制文字', '复制成功')</button>
			<button class="url" @click="$call('12345678910')">拨打电话：this/G.$call('12345678910')</button>
			<button class="url" @click="$preview('../../../static/preview.jpg')">预览图片：this/G.$preview('../../../static/preview.jpg')</button>
			<view class="p">更多方法如：$offset、$clone、$request等请看源码。</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods: {
			model() {
				this.$model('是否确定？').then(() => this.$toast('确定')).catch(() => this.$toast('取消'))
			}
		}
	}
</script>

<style lang="scss" scoped>
	.index-global {
		
	}
</style>
