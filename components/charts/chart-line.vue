<template>
	<view class="chart-line">
		<canvas canvas-id="line" id="line" class="chart" disable-scroll=true @touchstart="touchLine" @touchmove="moveLine" @touchend="touchEndLine"></canvas>
	</view>
</template>

<script>
	import uCharts from './js/u-charts.js'
	export default {
		props: {
			unit: String,
			color: String,
			chartData: Object,
			background: String
		},
		watch: {
			chartData() {
				this.draw(this.chartData)
			}
		},
		methods: {
			draw(data){
				data.categories.push('')
				data.categories.unshift('')
				data.series[0].data.push(null)
				data.series[0].data.unshift(null)
				
				this.line = new uCharts({
					$this: this, // this
					type: 'line', // 类型
					canvasId: 'line', // id
					colors: [this.color ? this.color : '#F76454'], // 颜色
					width: uni.upx2px(688), // 宽
					height: uni.upx2px(567), // 高
					fontSize: uni.upx2px(28), // 字体大小
					enableScroll: true, // 是否可以拖拽
					enableMarkLine: true, // 是否显示辅助线
					legend: {
						show: false,
					},
					extra: {
						line: {
							type: 'straight',
							width: uni.upx2px(8)
						}
					},
					dataPointShape: true, // 是否在图表中显示数据点图形标识
					dataPointShapeType: 'hollow', // 数据点图形标识类型 可选值：实心solid、空心hollow
					background: this.background,
					categories: data.categories,
					series: data.series,
					xAxis: {
						itemCount: 7, // X轴可见区域数据数量（即X轴数据密度），配合拖拽滚动使用（即仅在启用enableScroll时有效）
						scrollShow: true, // 是否显示滚动条
						disableGrid: true, // 不绘制 X 轴网格线
						scrollAlign: 'right', // 滚动条起始位置
						fontColor: this.color, // X 轴文字颜色
						boundaryGap: 'justify', // 折线图、区域图起画点结束点方法：center为单元格中间起画，justify为0点起画即两端对齐
						scrollColor: this.color, // X轴滚动条颜色
						axisLineColor: '#CCCCCC', // 坐标轴轴线颜色
						scrollBackgroundColor: this.background, // X轴滚动条背景颜色
					},
					yAxis: {
						min: 0,
						disabled: false,
						format: val => '',
						gridColor: '#FFFFFF',
						max: Math.max.apply(Math, data.series[0].data) + 123
					}
				});
				
			},
			touchLine (e) {
				this.line.scrollStart(e)
			},
			moveLine (e) {
				this.line.scroll(e)
			},
			touchEndLine (e) {
				this.line.scrollEnd(e)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.chart-line {
		width: 100%;
		height: 100%;
		position: relative;
		.chart {
			width: 100%;
			height: 100%;
			// transform: translateX(-30px);
		}
	}
</style>
