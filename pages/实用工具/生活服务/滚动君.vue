<template>
	<Page bg ref="Page">
		<template v-slot:default="{ page }">
			<template v-if="page">
				<view class="roll-man" :style="{ height: page.height + 'px' }">
					<ColorPicker @cancel="colorPickerCancel1" @change="colorPickerChange1" @preview="colorPickerPreview1"
						ref="colorPicker1" />
					<ColorPicker @cancel="colorPickerCancel2" @change="colorPickerChange2" @preview="colorPickerPreview2"
						ref="colorPicker2" />
					<ColorPicker @cancel="colorPickerCancel3" @change="colorPickerChange3" @preview="colorPickerPreview3"
						ref="colorPicker3" />
					<view class="content">
						<view class="preview">
							<view class="left"></view>
							<view class="center" :style="{ background: bgPreviewColor || bgColor }">
								<view class="roll-view" :class="animationDirectionRange[animationDirectionIndex].value" :style="{
									color: fontPreviewColor || fontColor,
									fontSize: _fontSize,
									fontWeight: fontWeightRange[fontWeightIndex].value,
									fontStyle: fontStyle,
									fontFamily: fontFaceRange[fontFaceIndex].value,
									textDecoration: fontDecorationRange[fontDecorationIndex].value,
									textShadow: fontShadowPreviewColor ? (fontShadowH + 'px ' + fontShadowV + 'px ' + fontShadowB + 'px ' + fontShadowPreviewColor) : (fontShadowH + 'px ' + fontShadowV + 'px ' + fontShadowB + 'px ' + fontShadowColor),
									opacity: 0.01 * opacity,
									letterSpacing: letterSpacing + 'px',
									animationDuration: animationDuration + 's',
									animationDelay: animationDelay + 's',
									animationTimingFunction: animationTimingFunctionRange[animationTimingFunctionIndex].value
								}">{{ rollText }}</view>
							</view>
							<view class="right">
								<text class="cuIcon-back"></text>
								<text class="cuIcon-home"></text>
								<text class="cuIcon-sort"></text>
							</view>
						</view>
						<textarea v-model="value" placeholder="请输入滚动字幕文字" />
						<view class="config">
							<view class="config-item" @tap="chooseColor(1)">
								<text>文本颜色</text>
								<view class="choosedColor">
									<view class="bold">{{ fontColor }} </view>
									<view class="choosedColorPreview" :style="{ background: fontColor }"></view>
								</view>
								<text class="cuIcon-right"></text>
							</view>
							<view class="config-item">
								<text>文本尺寸</text>
								<text class="bold">0 ~ 100</text>
								<CustomCounter v-model="fontSize" />
							</view>
							<view class="config-item">
								<text>文本粗细</text>
								<picker mode="selector" @change="fontWeightPickerChange" :value="fontWeightIndex" :range="fontWeightRange"
									range-key="name">
									<view class="bold">{{ fontWeightRange[fontWeightIndex].name }}</view>
								</picker>
								<text class="cuIcon-right"></text>
							</view>
							<view class="config-item">
								<text>文本斜体</text>
								<switch :checked="fontStyle != 'normal'" @change="fontStyleChange" />
							</view>
							<view class="config-item">
								<text>文本装饰</text>
								<picker mode="selector" @change="fonDecorationPickerChange" :value="fontDecorationIndex"
									:range="fontDecorationRange" range-key="name">
									<view class="bold">{{ fontDecorationRange[fontDecorationIndex].name }}</view>
								</picker>
								<text class="cuIcon-right"></text>
							</view>
							<!-- <view class="config-item">
								<text>文本字体</text>
								<picker mode="selector" @change="fonFacePickerChange" :value="fontFaceIndex" :range="fontFaceRange"
									range-key="name">
									<view class="bold">{{ fontFaceRange[fontFaceIndex].name }}</view>
								</picker>
								<text class="cuIcon-right"></text>
							</view> -->
							<view class="config-item">
								<text>文本阴影</text>
								<CustomCounter v-model="fontShadowH" mini />
								<CustomCounter v-model="fontShadowV" mini />
								<CustomCounter v-model="fontShadowB" mini />
								<view @tap="chooseColor(2)" class="choosedColor">
									<view class="bold">{{ fontShadowColor }} </view>
									<view class="choosedColorPreview" :style="{ background: fontShadowColor }"></view>
								</view>
								<text class="cuIcon-right" @tap="chooseColor(2)"></text>
							</view>
							<view class="config-item">
								<text>文本透明</text>
								<text class="bold">0 ~ 100</text>
								<CustomCounter v-model="opacity" />
							</view>
							<view class="config-item">
								<text>字符间距</text>
								<text class="bold">px</text>
								<CustomCounter v-model="letterSpacing" />
							</view>
							<view class="config-item" @tap="chooseColor(3)">
								<text>背景颜色</text>
								<view class="choosedColor">
									<view class="bold">{{ bgColor }} </view>
									<view class="choosedColorPreview" :style="{ background: bgColor }"></view>
								</view>
								<text class="cuIcon-right"></text>
							</view>
							<view class="config-item">
								<text>动画周期</text>
								<text class="bold">秒</text>
								<CustomCounter v-model="animationDuration" />
							</view>
							<view class="config-item">
								<text>动画延时</text>
								<text class="bold">秒</text>
								<CustomCounter v-model="animationDelay" />
							</view>
							<view class="config-item">
								<text>动画曲线</text>
								<picker mode="selector" @change="animationTimingFunctionPickerChange"
									:value="animationTimingFunctionIndex" :range="animationTimingFunctionRange" range-key="name">
									<view class="bold">
										{{ animationTimingFunctionRange[animationTimingFunctionIndex].name }}
									</view>
								</picker>
								<text class="cuIcon-right"></text>
							</view>
							<view class="config-item">
								<text>动画方向</text>
								<picker mode="selector" @change="animationDirectionPickerChange" :value="animationDirectionIndex"
									:range="animationDirectionRange" range-key="name">
									<view class="bold">{{ animationDirectionRange[animationDirectionIndex].name }}
									</view>
								</picker>
								<text class="cuIcon-right"></text>
							</view>
						</view>
						<button class="w100 cu-btn xxl shadow-blur" :class="'bg-' + ($refs.Page.bgClass || '').split('-')[2]"
							@tap="toRoll">滚动吧！滚动君！</button>
					</view>
				</view>
			</template>
		</template>
	</Page>
</template>

<script>
export default {
	data() {
		return {
			show: 0,
			value: '叮当工具箱',
			chooseColorType: 1, // 选择颜色类型 1 文本颜色 2 文本阴影颜色 3 背景颜色
			fontColor: '#000000', // 文本颜色
			fontPreviewColor: '#000000', // 文本颜色（打开颜色选择器选择颜色预览时的颜色）
			fontSize: 66, // 文本尺寸
			fontWeightIndex: 1, // 文本粗细所选下标
			fontWeightRange: [ // 文本粗细可选项目
				{
					name: '更细',
					value: 'lighter'
				},
				{
					name: '正常',
					value: 'normal'
				},
				{
					name: '更粗',
					value: 'bold'
				},
				{
					name: '最粗',
					value: 'bolder'
				},
			],
			fontStyle: 'normal', // 文本是否斜体
			fontFaceIndex: 0,
			fontFaceRange: [{
				name: '默认',
				value: ''
			},
				// ...this.$store.state.app.fontFaceList.map(({
				// 	family
				// }) => ({
				// 	name: family,
				// 	value: family
				// }))
			],
			fontDecorationIndex: 0, // 文本装饰所选下标
			fontDecorationRange: [ // 文本装饰可选项目
				{
					name: '无',
					value: 'none'
				},
				{
					name: '定义文本下的一条线',
					value: 'underline'
				},
				{
					name: '定义文本上的一条线',
					value: 'overline'
				},
				{
					name: '定义穿过文本下的一条线',
					value: 'line-through'
				},
			],
			fontShadowH: 0, // 文本水平阴影的位置
			fontShadowV: 0, // 文本垂直阴影的位置
			fontShadowB: 0, // 文本阴影模糊的距离
			fontShadowColor: '#000000', // 文本阴影颜色
			fontShadowPreviewColor: '', // 文本阴影颜色（打开颜色选择器选择颜色预览时的颜色）
			opacity: 100, // 文本透明度
			letterSpacing: 0, // 文字间隔
			bgColor: '#FFFFFF', // 背景色
			bgPreviewColor: '#FFFFFF', // 背景色（打开颜色选择器选择颜色预览时的颜色）
			animationDuration: 6, // 动画周期时常
			animationDelay: 1, // 动画延时时长
			animationTimingFunctionIndex: 0, // 文本装饰所选下标
			animationTimingFunctionRange: [ // 文本装饰可选项目
				{
					name: '匀速',
					value: 'linear'
				},
				{
					name: '低速-高速-低速',
					value: 'ease'
				},
				{
					name: '低速-匀速',
					value: 'ease-in'
				},
				{
					name: '匀速-低速',
					value: 'ease-out'
				},
				{
					name: '低速-匀速-低速',
					value: 'ease-in-out'
				},
			],
			animationDirectionIndex: 0, // 动画方向所选下标
			animationDirectionRange: [ // 动画方向可选项目
				{
					name: '自右向左',
					value: ''
				},
				{
					name: '自左向右',
					value: 'left-right'
				},
			],
		}
	},
	computed: {
		_fontSize() {
			return uni.upx2px(300) / 100 * this.fontSize + 'px'
		},
		rollText() {
			return Number(this.animationDirectionIndex) === 0 ? this.value : Array.from(this.value).reverse().join('')
		}
	},
	onShow() {
		if (this.show) {
			this.$refs.Page.showAD()
		}
		this.show++
	},
	onLoad() {},
	methods: {
		toRoll() { // 去work页面
			this.$loading()
			this.$('/msg_sec_check', {
				scene: 3,
				content: this.rollText,
			}).then(() => {
				const config = {
					rollText: this.rollText,
					fontColor: this.fontColor,
					fontSize: this.fontSize,
					fontWeight: this.fontWeightRange[this.fontWeightIndex].value,
					fontStyle: this.fontStyle,
					textDecoration: this.fontDecorationRange[this.fontDecorationIndex].value,
					textShadow: `${this.fontShadowH}px ${this.fontShadowV}px ${this.fontShadowB}px ${this.fontShadowColor}`,
					opacity: this.opacity,
					fontFamily: this.fontFaceRange[this.fontFaceIndex] ? this.fontFaceRange[this
						.fontFaceIndex].value : '',
					letterSpacing: `${this.letterSpacing}px`,
					bgColor: this.bgColor,
					animationDuration: `${this.animationDuration}s`,
					animationDelay: `${this.animationDelay}s`,
					animationTimingFunction: this.animationTimingFunctionRange[this
						.animationTimingFunctionIndex].value,
					animationDirection: this.animationDirectionRange[this.animationDirectionIndex]
						.value
				}
				uni.navigateTo({
					url: '/pages/滚动君/滚动君' + Object.entries(config).reduce((t, e) => t +
						`${e[0]}=${e[1]}&`, '?').slice(0, -1)
				})
			}).catch((e) => {
				this.fontColor = '#FF0000'
				this.animationDuration = '16'
				this.value = '富强、民主、文明、和谐，自由、平等、公正、法治，爱国、敬业、诚信、友善'
			}).finally(() => {
				this.$loaded()
			})
		},
		colorPickerPreview1(color) {
			this.fontPreviewColor = color
		}, // 颜色选择器选择预览色变化
		colorPickerPreview2(color) {
			this.fontShadowPreviewColor = color
		}, // 颜色选择器选择预览色变化
		colorPickerPreview3(color) {
			this.bgPreviewColor = color
		}, // 颜色选择器选择预览色变化
		colorPickerCancel1() {
			this.fontPreviewColor = ''
		}, // 颜色选择器取消选择，清除预览色
		colorPickerCancel2() {
			this.fontShadowPreviewColor = ''
		}, // 颜色选择器取消选择，清除预览色
		colorPickerCancel3() {
			this.bgPreviewColor = ''
		}, // 颜色选择器取消选择，清除预览色
		colorPickerChange1(color) {
			this.fontColor = color;
			this.colorPickerCancel1()
		}, // 颜色选择器选择颜色
		colorPickerChange2(color) {
			this.fontShadowColor = color;
			this.colorPickerCancel2()
		}, // 颜色选择器选择颜色
		colorPickerChange3(color) {
			this.bgColor = color;
			this.colorPickerCancel3()
		}, // 颜色选择器选择颜色
		chooseColor(type) {
			this.$refs[`colorPicker${type}`].show()
		}, // 点击选择颜色
		fontWeightPickerChange(e) {
			this.fontWeightIndex = e.detail.value
		}, // 选择文本粗细类型
		fontStyleChange(e) {
			this.fontStyle = e.detail.value ? 'Oblique' : 'normal'
		}, // 设置文本斜体
		fonFacePickerChange(e) {
			this.fontFaceIndex = e.detail.value
		}, // 选择文本字体
		fonDecorationPickerChange(e) {
			this.fontDecorationIndex = e.detail.value
		}, // 选择文本装饰类型
		animationTimingFunctionPickerChange(e) {
			this.animationTimingFunctionIndex = e.detail.value
		}, // 选择动画速度曲线类型
		animationDirectionPickerChange(e) {
			this.animationDirectionIndex = e.detail.value
		} // 选择动画方向类型
	}
}
</script>

<style lang="scss" scoped>
.roll-man {
	overflow: hidden;
	position: relative;
	background: #FFFFFF;
	padding: 20rpx 20rpx 0;
	box-sizing: border-box;

	.content {
		height: 100%;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;

		.preview {
			display: flex;
			align-items: center;
			justify-content: center;
			;
			width: 100%;
			z-index: 1000;
			height: 300rpx;
			overflow: hidden;
			position: relative;
			background: #000000;
			border-radius: 23rpx;
			border: 1rpx solid #000000;

			.left {
				width: 56rpx;
				height: 100%;
				border-right: 1rpx solid #FFFFFF;
			}

			.center {
				display: flex;
				align-items: center;
				justify-content: center;
				;
				flex: 1;
				height: 100%;
				overflow: hidden;
				justify-content: flex-start;

				.roll-view {
					width: auto;
					white-space: nowrap;
					transform: translateX(-100%);
					animation: right-left infinite;

					&.left-right {
						animation: left-right infinite;
					}
				}
			}

			.right {
				display: flex;
				align-items: center;
				justify-content: center;
				flex-direction: column;
				width: 88rpx;
				height: 100%;
				justify-content: space-around;
				border-left: 1rpx solid #FFFFFF;

				text {
					color: #FFFFFF;
					font-size: 34rpx;
					border-radius: 50%;
					transform: rotateZ(-90deg);
				}
			}
		}

		textarea {
			width: 100%;
			padding: 8rpx;
			height: 96rpx;
			font-size: 32rpx;
			margin-top: 12rpx;
			border-radius: 8rpx;
			box-sizing: border-box;
			border: 1rpx solid #AAAAAA;
		}

		.config {
			flex: 1;
			width: 100%;
			margin: 12rpx 0;
			overflow: scroll;
			border-radius: 8rpx;
			border: 1rpx solid #AAAAAA;

			.config-item {
				display: flex;
				align-items: center;
				justify-content: center;
				;
				width: 100%;
				height: 88rpx;
				padding: 8rpx;
				font-size: 32rpx;
				position: relative;
				line-height: 88rpx;
				box-sizing: border-box;
				justify-content: space-between;
				border-top: 1rpx solid #CCCCCC;

				picker {
					flex: 1;
					height: 100%;
					text-align: center;
				}

				.choosedColor {
					display: flex;
					align-items: center;
					justify-content: center;
					;

					.choosedColorPreview {
						width: 32rpx;
						height: 32rpx;
						margin-left: 8rpx;
					}
				}
			}
		}
	}
}

@keyframes right-left {
	0% {
		transform: translateX(556rpx);
	}

	100% {
		transform: translateX(-100%);
	}
}

@keyframes left-right {
	0% {
		transform: translateX(-100%);
	}

	100% {
		transform: translateX(556rpx);
	}
}
</style>