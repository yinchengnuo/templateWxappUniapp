<template>
	<view class="pulldown-refresher">
		<swiper class="pulldown" vertical @touchend="touchend" @transition="transition">
			<swiper-item class="pulldown-item" :style="{ top: pulldownRefreshingTop + 'px' }">
				<slot></slot>
			</swiper-item>
		</swiper>
		<view class="pulldown-text" 
			:style="{
				minHeight: pullDownRefreshDistance + 'px',
				height: (pulldownRefreshing ? (-pulldownRefresh - pullDownRefreshDistance > 0 ? -pulldownRefresh : pullDownRefreshDistance) : -pulldownRefresh) + 'px',
				opacity: pulldownRefreshing ? 1 : pulldownRefreshingTop ? pulldownRefreshingTop / pullDownRefreshDistance : -pulldownRefresh / pullDownRefreshDistance
			}"
		>{{ -pulldownRefresh > pullDownRefreshDistance + 40 ? '... 松开手指刷新列表 ...' : (pulldownRefreshing ? '... 加载中 ...' : '... 继续下拉刷新列表 ...') }}</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pulldownRefresh: 0, // 下拉刷新容器距离顶部的距离
				pullDownStopDistance: 0, //手指松开时下拉刷新容器距离顶部的距离
				pulldownRefreshingTop: 0, //手指松开后下拉刷新容器距离顶部的距离 
				pulldownRefreshing: false, // 页面是否正处于下拉刷新状态
				pullDownRefreshDistance: 60 // 下拉刷新距离
			}
		},
		methods: {
			transition({ detail: { dy } }) { // 下拉刷新
				this.pulldownRefresh = dy
				if (this.pulldownRefreshing) {
					this.pulldownRefreshingTop = (1 - -dy / this.pullDownStopDistance) * this.pullDownRefreshDistance
				}
			},
			touchend() {
				if (this.pulldownRefresh < -this.pullDownRefreshDistance) {
					this.$emit('pulldownRefresh')
					this.pulldownRefreshing = true
					this.pullDownStopDistance = -this.pulldownRefresh
				}
			},
			pullup() {
				this.pulldownRefreshing = false
				const timer = setInterval(() => {
					this.pulldownRefreshingTop -= 4
					if (this.pulldownRefreshingTop <= 0) {
						this.pulldownRefreshingTop = 0
						clearInterval(timer)
					}
				}, 10)
			},
			pulldown() {
				const timer = setInterval(() => {
					this.pulldownRefreshingTop += 4
					if (this.pulldownRefreshingTop >= this.pullDownRefreshDistance) {
						this.pulldownRefreshingTop = this.pullDownRefreshDistance
						this.pulldownRefreshing = true
						this.$emit('pulldownRefresh')
						clearInterval(timer)
					}
				}, 10)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.pulldown-refresher {
		z-index: 0;
		width: 100%;
		height: 100%;
		position: relative;
		.pulldown {
			width: 100%;
			height: 100%;
			position: relative;
			.pulldown-item {
				position: absolute;
				width: 100%;
				height: 100%;
			}
		}
		.pulldown-text {
			top: 0;
			left: 0;
			width: 100%;
			z-index: -1;
			display: flex;
			color: #333333;
			font-size: 26rpx;
			position: absolute;
			align-items: center;
			justify-content: center;
		}
	}
</style>
