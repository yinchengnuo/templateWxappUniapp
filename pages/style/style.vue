<template>
	<view class="style">
		<custom-nav :title="title" />
		<view class="content">
			<view class="nav-bar">
				<view class="nav-bar-items">
					<view v-for="(item, index) in navList" class="nav-bar-item" :class="{ active: MIXIN_ActiveIndex === index }" :key="index" @tap="MIXIN_SwitchNav(index)">{{ item }}</view>
				</view>
				<view class="nav-bar-drog" :style="{ left: MIXIN_DrogLeft + 'px' }"><text></text></view>
			</view>
			<view class="nav-view">
				<pulldown-refresher ref="pulldownRefresher" @pulldownRefresh="refresh">
					<swiper class="swiper" :duration="333" :current="MIXIN_ActiveIndex" @transition="MIXIN_transition" @change="MIXIN_change" @animationfinish="MIXIN_animationfinish">
						<swiper-item>
							<scroll-view scroll-y :style="{ height: MIXIN_ScrollViewHeight + 'px' }">
								<view class="p">uni-app插件市场有许多优秀的UI组件库，给出了许多通用样式的解决方案，非常值得我们学习和使用，如 ColorUI（作者：文晓港）：</view>
								<image @tap="preview('../../static/colorUIWXcode.png')" class="colorUI1" src="../../static/colorUIWXcode.png"></image>
								<image @tap="preview('../../static/colorUI.png')" class="colorUI2" src="../../static/colorUI.png"></image>
								<image @tap="preview('../../static/colorUIPreview.jpg')" class="colorUI3" src="../../static/colorUIPreview.jpg"></image>
							</scroll-view>
						</swiper-item>
						<swiper-item>
							<scroll-view scroll-y :style="{ height: MIXIN_ScrollViewHeight + 'px' }">
								<view class="p">uni-app插件市场也有许多优秀的图表库，如果你的小程序有这方面的需求，建议直接使用 uCharts（作者：秋云）：</view>
								<image class="uChart" @tap="previewChart('../../static/uChartWXcode.png')" src="../../static/uChartWXcode.png"></image>
								<image v-for="item in chartImgList" :key="item" :src="item" @tap="previewChart(item)" class="chartImg"></image>
							</scroll-view>
						</swiper-item>
						<swiper-item>
							<scroll-view scroll-y :style="{ height: MIXIN_ScrollViewHeight + 'px' }">
								<view class="p">微信小程序中如果要是想要实现下拉刷新效果，需要在页面配置 { "enablePullDownRefresh": true }，
								同时在页面生命周期内监听 onPullDownRefresh() { ... }。这本身没有什么问题，常规情况下使用起来也很方便。但是在一些场景下，
								比如当页面中出现 scroll-view 时，只监听页面级的下拉会忽略作用在 scroll-view 上的下拉手势，造成冲突。尤其是在像本页面，
								需要 swiper + scroll-view 达到左右拖动的列表同时实现下拉刷新和上拉加载，实现起来就很困难了。这里提供一个实现有 scroll-view 
								页面中实现下拉刷新效果的思路（作者：尹成诺）：</view>
								<view class="t">使用 uniappSwiperScrollview-Pullsownrefresh</view>
								<button class="url" @tap="copy">https://ext.dcloud.net.cn/plugin?id=1021</button>
								<view class="p">利用一个只有一个 swiper-item 纵向 swiper 组件，模拟下拉刷新效果。部分源码实现：</view>
								<rich-text :nodes="code"></rich-text>
							</scroll-view>
						</swiper-item>
					</swiper>
				</pulldown-refresher>
			</view>
		</view>
	</view>
</template>

<script>
	import MIXIN_Nav from '@/mixin/nav.js'
	import pulldownRefresher from '@/components/pulldown-refresher.vue'
	export default {
		onShareAppMessage (res) {  //分享小程序
			return {
				title: '滚动吧！滚动君！',
				path: '/pages/index/index'
			}
		},
		mixins: [MIXIN_Nav],
		components: { pulldownRefresher },
		data() {
			return {
				title: '关于样式',
				navList: ['样式', '图表', '下拉刷新'],
				chartImgList: [
					'https://img.kancloud.cn/ac/ef/acef49105d33936d872f8eb9d3526af1_468x453.gif',
					'https://img.kancloud.cn/b4/df/b4dfcc01461fc6b918932f1e15c06172_446x337.gif',
					'https://img.kancloud.cn/0f/8e/0f8e525821ab2fe671095ece89ff6a1a_460x342.gif',
					'https://box.kancloud.cn/1d5e2c60898de86f5f33f93020ff029e_468x342.gif',
					'https://box.kancloud.cn/63e5833a7ccd8308b0f8ab59522c36c1_468x349.gif',
					'https://github.com/16cheng/uCharts/blob/master/example/uni-app/static/mix.gif?raw=true',
					'https://github.com/16cheng/uCharts/blob/master/example/uni-app/static/mix2.gif?raw=true',
					'https://box.kancloud.cn/2f00fcf5a8ce7a9593aea3bc14b8f150_468x411.gif',
					'https://img.kancloud.cn/c2/1f/c21f7f84c5ff42d323267323d7f48b05_468x337.gif',
					'https://github.com/16cheng/uCharts/blob/master/example/uni-app/static/yibiaopan.gif?raw=true',
					'https://github.com/16cheng/uCharts/blob/master/example/uni-app/static/arcbar.gif?raw=true',
					'https://box.kancloud.cn/af4fb86f40538d85da3e8def8669b87d_468x342.gif',
					'https://github.com/16cheng/uCharts/blob/master/example/uni-app/static/lineA.gif?raw=true',
					'https://github.com/16cheng/uCharts/blob/master/example/uni-app/static/lineA-scroll.gif?raw=true',
					'https://github.com/16cheng/uCharts/blob/master/example/uni-app/static/dashLine.gif?raw=true',
					'https://github.com/16cheng/uCharts/blob/master/example/uni-app/static/area.gif?raw=true',
					'https://box.kancloud.cn/1a7b5b2908751cbb3f135e5071e42f1b_468x345.gif',
					'https://box.kancloud.cn/a3c42919a45fbf93db028fe9a0975adc_468x345.gif',
					'https://box.kancloud.cn/fe5f988bfb017c5d46d695e4626bd656_468x345.gif',
					'https://github.com/16cheng/uCharts/blob/master/example/uni-app/static/radar.gif?raw=true',
					'https://github.com/16cheng/uCharts/blob/master/example/uni-app/static/lineB.gif?raw=true'
				],
				code: `
<pre style="border: 1px solid #AAAAAA; border-radius: 8px; background: #FFFAE8; padding: 8px; margin: 8px 0px; white-space: wrap; overflow: scroll;">&lt;swiper 
  class="pulldown"
  vertical
  @touchend="touchend"
  @transition="transition"&gt;
	&lt;swiper-item 
	  class="pulldown-item" 
	  :style="{ top: top + 'px' }"&gt;
		&lt;slot&gt;&lt;/slot&gt;
	&lt;/swiper-item&gt;
&lt;/swiper&gt;
</pre>	
				`
			}
		},
		methods: {
			refresh() {
				uni.showToast({ icon: 'none', title: '下拉刷新了', duration: 1234 })
				setTimeout(() => this.$refs.pulldownRefresher.pullup(), 1234)
			},
			preview(src) {
				uni.compressImage({ src, quality: 100 }).then(([, { tempFilePath }]) => uni.previewImage({ urls: [tempFilePath] }))
			},
			previewChart(tempFilePath) {
				tempFilePath[0] === 'h' ? uni.previewImage({ urls: [tempFilePath] }) : this.preview(tempFilePath)
			},
			copy() { uni.setClipboardData({ data: 'https://ext.dcloud.net.cn/plugin?id=1021' }) }
		} 
	}
</script>

<style lang="scss" scoped>
	.style {
		@include page();
		.content {
			@include flex(column);
			padding: 0;
			.nav-bar-drog {
				width: 250rpx;
			}
			.swiper {
				scroll-view {
					padding: 24rpx;
					border-radius: 8rx;
					box-sizing: border-box;
					.colorUI1, .uChart {
						width: 702rpx;
						height: 702rpx;
					}
					.colorUI2 {
						width: 702rpx;
						height: 488.5rpx;
					}
					.colorUI3 {
						width: 702rpx;
						height: 4666rpx;
					}
					.chartImg {
						width: 702rpx;
						height: 567rpx;
					}
				}
			}
		}
	}
</style>
