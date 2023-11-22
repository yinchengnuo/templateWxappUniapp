<script>
	const getNames = (name, num) => {
		return Array(num).fill(0).map((e, i) => `${name}${(i + 1).toString().padStart(2, '0')}`)
	}
	const appBaseInfo = uni.getAppBaseInfo()
	const systemInfo = uni.getSystemInfoSync()
	const statusBarHeight = systemInfo.statusBarHeight
	const menuButtonBoundingClientRect = uni.getMenuButtonBoundingClientRect()
	const navigationBarHeight = menuButtonBoundingClientRect.bottom + (menuButtonBoundingClientRect.top -
		statusBarHeight)
	export default {
		globalData: {
			systemInfo,
			appBaseInfo,
			statusBarHeight,
			navigationBarHeight,
			menuButtonBoundingClientRect,
			loadings: [
				...getNames('clones', 20),
				...getNames('cut', 10),
				...getNames('dancers', 10),
				...getNames('hungry', 8),
				...getNames('time', 10),
				...getNames('nature', 16),
				...getNames('colorful', 20),
				...getNames('continuous', 10),
				...getNames('flipping', 20),
				...getNames('wobbling', 20),
				...getNames('progress', 20),
				...getNames('shapes', 40),
				...getNames('spinner', 29),
			],
			images: [
				"https://image.meiye.art/FhtISupNHMibBgrGZOe15CPQ-d5R",
				"https://image.meiye.art/FlqKg5bugFQD5Qzm_QhGM7ET4Mtx",
				"https://image.meiye.art/Fha6tqRTIwHtlLW3xuZBJj8ZXSX3",
				"https://image.meiye.art/FgaFNs-YNxw_vRtqCbvQru3z6s3P",
				"https://image.meiye.art/FiqphSjedkvi1y0hfqeNrYGXqLKo",
				"https://image.meiye.art/FqZALKFWQ7vEZtmJyMyB_w776B_H",
				"https://image.meiye.art/FhHGe9NyO0uddb6D4203jevC_gzc",
				"https://image.meiye.art/FiLUT-wb9DP0-dpxRQH19HJOOJOW",
			],
			bgClass: ["bg-gradual-red-light", "bg-gradual-orange-light", "bg-gradual-green-light",
				"bg-gradual-purple-light", "bg-gradual-pink-light", "bg-gradual-blue-light",
				"bg-gradual-pinknew-light", "bg-gradual-cyan-light"
			],
			colors: ["red", "orange", "yellow", "olive", "green", "cyan", "blue", "purple", "mauve", "pink",
				"brown", "grey"
			],
		},
		onLaunch(option) {
			this.$store.dispatch('user/login', {
				openid: option.query.openid
			})
			this.$store.dispatch('user/getCityWeather')
		},
		async onShow(option) {
			if (option.query.path) {
				if (this.$store.state.user.openid) {
					uni.navigateTo({
						url: option.query.path
					})
				} else {
					uni.$on('LOGON', () => uni.navigateTo({
						url: option.query.path
					}))
				}
			}
			// this.$store.dispatch('user/getCityWeather')
		},
		onHide() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	@import "colorui/main.css";
	@import "colorui/icon.css";
	@import "colorui/icon-new.css";

	.w100 {
		width: 100% !important;
	}

	.h100 {
		height: 100% !important;
	}

	.flex {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.flexc {
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
	}

	.flex1 {
		flex: 1;
	}

	.flex_sb {
		justify-content: space-between;
	}

	.my_input {
		border-radius: 10rpx;
		padding: 0 66rpx 0 20rpx;
		border: 1px solid #efefef;
		margin: 0 20rpx !important;
		min-height: 74rpx !important;
	}

	.my_input_clear {
		top: 28rpx;
		right: 190rpx;
		font-size: 44rpx;
		position: absolute;
	}

	.my_textarea {
		padding: 0 20rpx;
		border-radius: 10rpx;
		border: 1px solid #efefef;
	}

	.my_textarea_clear {
		font-size: 44rpx;
	}

	.container {
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		padding: 200rpx 0;
		box-sizing: border-box;
	}

	.nav-list {
		display: flex;
		flex-wrap: wrap;
		padding: 0px 30rpx 0px;
		justify-content: space-between;
	}

	.nav-li {
		padding: 0 0 16rpx 20rpx;
		border-radius: 20rpx;
		width: 48%;
		margin: 0 0 32rpx;
		background-size: cover;
		background-position: center;
		position: relative;
		z-index: 1;
	}

	// .nav-li::after {
	// 	content: "";
	// 	position: absolute;
	// 	z-index: -1;
	// 	background-color: inherit;
	// 	width: 100%;
	// 	height: 100%;
	// 	left: 0;
	// 	bottom: -10%;
	// 	border-radius: 10rpx;
	// 	opacity: 0.2;
	// 	transform: scale(0.9, 0.9);
	// }

	.nav-title {
		font-size: 30rpx;
		font-weight: 480;
	}

	.nav-title>view::first-letter {
		font-size: 40rpx;
		margin-right: 4rpx;
	}

	.nav-title>view {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		width: calc(100% - 60rpx);
	}

	/* .nav-name {
		font-size: 28rpx;
		text-transform: Capitalize;
		margin-top: 20rpx;
		position: relative;
	}

	.nav-des {
		font-size: 24rpx;
		text-transform: Capitalize;
		margin-top: 30rpx;
		position: relative;
	} */

	/* .nav-name::before {
		content: "";
		position: absolute;
		display: block;
		width: 40rpx;
		height: 6rpx;
		background: #fff;
		bottom: 0;
		left: 0;
		opacity: 0.5;
	} */

	/* .nav-name::after {
		content: "";
		position: absolute;
		display: block;
		width: 90rpx;
		height: 1px;
		background: #fff;
		bottom: 0;
		right: 40rpx;
		opacity: 0.3;
	}

	.nav-name::first-letter {
		font-weight: bold;
		font-size: 36rpx;
		margin-right: 1px;
	} */

	/* .nav-li text {
		position: absolute;
		right: 24rpx;
		top: 16rpx;
		font-size: 52rpx;
		width: 60rpx;
		height: 60rpx;
		text-align: center;
		line-height: 60rpx;
	} */

	.text-light {
		font-weight: 300;
	}

	.nodata {
		font-size: 30rpx;
		line-height: 1.2;
		font-weight: normal;
		text-align: center;
		color: #999;
		margin-top: 200rpx;
		margin-bottom: 200rpx;
	}

	.nodata .icon {
		height: 240rpx;
		background: url("https://img01.yzcdn.cn/vant/empty-image-default.png") no-repeat center/210rpx auto;
	}

	.nodata .txt {
		padding-top: 60rpx;
	}

	.nav-lie {
		border-radius: 28rpx;
		width: 46%;
		margin: 0 1.0% 40rpx;
		background-size: cover;
		background-position: center;
		position: relative;
		z-index: 1;
	}

	.nav-lie::after {
		content: "";
		position: absolute;
		z-index: -1;
		background-color: inherit;
		width: 100%;
		height: 100%;
		left: 0;
		bottom: -10%;
		border-radius: 10rpx;
		opacity: 0.2;
		transform: scale(0.9, 0.9);
	}

	.image-bg-ui {
		min-height: 680rpx;
	}
</style>