<template>
	<view class="other">
		<custom-nav :title="title" />
		<view class="content">
			<view class="t">如何优雅的 getUserInfo()</view>
			<view class="p">先来张老图：</view>
			<image src="https://mmbiz.qpic.cn/mmbiz_gif/Runn1Kf4kyakic2icMYZkrndUjWqyJEhnJkuvV0AHZOGxRsmnDJdibYicibTAPrp980rxNUHrKicib99SyYaQjGuLYicSg/640?wx_fmt=gif" mode=""></image>
			<view class="p">微信小程序的 getUserInfo() 接口可以让微信小程序获取当前微信用户的微信公开信息，比如昵称、头像、性别、地区等。
			现在如果要调用 getUserInfo() 获取用户信息，只能通过：</view>
			<rich-text :nodes="code1"></rich-text>
			<view class="p">因为如果当前小程序的缓存中没有用户允许小程序获取用户信息的记录，在调用 getUserInfo() 时，小程序会提示弹窗，就像这样：</view>
			<image src="../../static/getUserInfo.png" mode=""></image>
			<view class="p">许多开发者滥用 getUserInfo() 导致小程序体验下降。因此小程序官方才把 getUserInfo() 接口改为：如果当前小程序的缓存中没有用户允许小程序获取用户信息的记录，getUserInfo() 接口只能以用户点击的方式触发调用，而不能直接调用：</view>
			<rich-text :nodes="code2"></rich-text>
			<view class="p">所有这里我们不讨论是否应该废弃 getUserInfo() 接口，而是在这种情况下我们如果更优雅的调用 getUserInfo() 接口，也就是如何更优雅地让用户点击一个 open-type 属性为 getUserInfo 的按钮。</view>
			<view class="p">当然你可以在调用 getUserInfo() 接口获取失败后弹出一个信息提示用户需要登陆，引导用户去点击登录按钮。</view>
			<view class="p">而我的方案是：</view>
			<view class="p">定义一个 open-type 属性为 getUserInfo 的按钮，并让其 v-if="false",按钮的样式如下：</view>
			<rich-text :nodes="code3"></rich-text>
			<view class="p">当调用 uni(wx).getUserInfo() 接口失败后，设置按钮 的 v-if="true"</view>
			<view class="p">这样这个页面都会被一个铺满整个屏幕而且透明的按钮遮挡，用户要进行下一步操作就势必要点击屏幕，点击按钮，进而触发 getUserInfo()。</view>
			<button type="primary" @tap="showGetUserInfoButton = true">试一试？</button>
		</view>
		<button v-if="showGetUserInfoButton" class="getUserInfo" open-type="getUserInfo" @getuserinfo="getuserinfo">getUserInfo()</button>
	</view>
</template>

<script>
	export default {
		onShareAppMessage (res) {  //分享小程序
			return {
				title: '滚动吧！滚动君！',
				path: '/pages/index/index'
			}
		},
		data() {
			return {
				title: '关于其他',
				showGetUserInfoButton: false,
				code1: `
<pre style="border: 1px solid #AAAAAA; border-radius: 8px; background: #FFFAE8; padding: 8px; margin: 8px 0px; overflow: scroll;">&lt;button open-type="getUserInfo" @getuserinfo="getuserinfo"&gt;点我获取我的信息&lt;/button&gt;
</pre>
				`,
				code2: `
<pre style="border: 1px solid #AAAAAA; border-radius: 8px; background: #FFFAE8; padding: 8px; margin: 8px 0px; overflow: scroll;">onLaunch() {
  uni(wx).getUserInfo().then(...) // 会获取失败
}
</pre>
				`,
				code3: `
<pre style="border: 1px solid #AAAAAA; border-radius: 8px; background: #FFFAE8; padding: 8px; margin: 8px 0px; overflow: scroll;">{
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.4; // 只是为了演示，实际开发设置为 0
  z-index: 9999;
  position: fixed;
}
</pre>
				`
			}
		},
		methods: {
			getuserinfo({ detail }) {
				this.showGetUserInfoButton = false
			}
		}
	}
</script>

<style lang="scss" scoped>
	.other {
		@include page();
		button {
			margin: 24rpx 0;
		}
		.getUserInfo {
			@include flex();
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			opacity: 0.4;
			z-index: 9999;
			position: fixed;
			font-size: 123rpx;
		}
		image {
			width: 700rpx;
			height: 392rpx;
			margin: 8rpx 0;
			overflow: hidden;
			border-radius: 24rpx;
			box-shadow: 0 0 1rpx 1rpx #C0C0C0;
		}
	}
</style>
