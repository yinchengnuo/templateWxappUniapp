<template>
	<view class="uniCloud padding-sm">
		<view class="content">
			<view class="t">uni_cloud_router</view>
			<view class="p">uni_cloud_router 是对在 uniCloud 云函数 url 化的使用场景下，方便快速开发各端均能访问的接口的封装。</view>
			<view class="p">对一个整体项目来说，后台的比重通常都是通常是大于前台的。这就导致大量需要 url 化的云函数以供后台访问。</view>
			<view class="p">同时云函数的数量限制和管理过多云函数容易导致项目混乱使得在单个云函数内开发多个接口乃至某个模块更为可取。</view>
			<view class="p">为了前后台统一风格，本项目使用了前台（小程序客户端）和后台（管理系统）都调用 url 化调用云函数使用。uni_cloud_router 项目链接（作者：尹成诺）：</view>
			<button class="url" @tap="$copy('https://ext.dcloud.net.cn/plugin?id=1089')">开源地址:https://ext.dcloud.net.cn/plugin?id=3819(点击复制)</button>
			<view class="t">使用前：</view>
			<rich-text :nodes="nodesBefore"></rich-text>
			<view class="t">使用后：</view>
			<rich-text :nodes="nodesAfter"></rich-text>
			<view class="t">解决问题：</view>
			<view class="p">1. 自动判断 path 和 method</view>
			<view class="p">2. 支持模块化</view>
			<view class="p">3. 支持统一拦截器</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				nodesBefore: `
<pre style="border: 1px solid #AAAAAA; border-radius: 8px; background: #FFFAE8; padding: 8px; margin: 8px 0px; overflow: scroll;">exports.main = async (event, context) => {
  if (event.path === '/a' && event.httpMethod === 'GET') {
    // ...
    return event
  }
  if (event.path === '/a/b' && event.httpMethod === 'POST') {
    // ...
    return event
  }	
}
</pre>			
				`,
				nodesAfter: `
<pre style="border: 1px solid #AAAAAA; border-radius: 8px; background: #FFFAE8; padding: 8px; margin: 8px 0px; overflow: scroll;">exports.main = async (event, context) => {
  await router.get('/a', async data => {
    // ...
    router.response = event
  })
  await router.post('/a/b', async data => {
    // ...
    router.response = event
  })
  return router.response || new Error('404 not found')
}
</pre>				
				`
			}
		}
	}
</script>

<style lang="scss" scoped>
	.uniCloud {
		
	}
</style>
