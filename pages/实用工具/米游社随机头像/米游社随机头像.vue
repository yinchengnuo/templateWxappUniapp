<template>
	<Page type="B1" ref="Page">
		<template v-slot="{ info }">
			<view class="flex">
				<scroll-view class="cu-vertical-nav nav cu-timeline" scroll-y scroll-with-animation
					:scroll-top="VerticalNavTop" :style="{ height: info.height - 20 + 'px'}" style="width: 222rpx;">
					<view :class="['cu-item', index==TabCur?'text-green cur':'']" v-for="(item, index) in list"
						:key="index" @click='tabSelect' :data-id="index">
						{{item.name}}
					</view>
				</scroll-view>

				<scroll-view class="bg-ghostWhite" scroll-y scroll-with-animation
					:style="{ height: info.height - 20 + 'px'}" :scroll-into-view="'main-' + MainCur"
					@scroll="VerticalMain">
					<view class="padding-lr" v-for="(item, index) in list" :key="index" :id="'main-' + index">
						<view class='cu-bar solid-bottom bg-white'>
							<view class='action'>
								<text class='cuIcon-title text-green'></text>{{item.name}}
							</view>
						</view>
						<view class="cu-list menu-avatar">
							<view class="cu-item" v-for="(itemm, indexx) in item.list" :key="indexx"
								style="background: #fcfcfc;" @click="preview(itemm.icon, item.list.map(e => e.icon))">
								<view class="cu-avatar round lg shadow bg-white" style="width: 120rpx; height: 120rpx;"
									:style="{ 'background-image': 'url(' + itemm.icon + ')' }">
								</view>
								<view class="content" style="left: 180rpx;">
									<view class="text-green" style="font-weight: bolder;">{{ itemm.name }}</view>
								</view>
								<view class="action">
									<text class="cuIcon-right"></text>
								</view>
							</view>
						</view>

					</view>
				</scroll-view>
			</view>
		</template>
	</Page>
</template>

<script>
	export default {
		data() {
			return {
				list: [],
				TabCur: 0,
				load: true,
				MainCur: 0,
				VerticalNavTop: 0
			}
		},
		created() {
			this.$loading()
			uni.request({
				url: 'https://api.oioweb.cn/api/picture/miyoushe_avatar'
			}).then((res) => {
				this.list = res.data.result
			}).finally(() => {
				this.$loaded()
			})
		},
		methods: {
			preview(current, urls) {
				uni.previewImage({
					urls,
					current
				})
			},
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id
				this.MainCur = e.currentTarget.dataset.id
				this.VerticalNavTop = (e.currentTarget.dataset.id - 1) * 50
			},
			VerticalMain(e) {
				let list = this.list;
				let tabHeight = 0;
				if (this.load) {
					for (let i = 0; i < list.length; i++) {
						let view = uni.createSelectorQuery().select("#main-" + list[i].id);
						view.fields({
							size: true
						}, data => {
							list[i].top = tabHeight;
							tabHeight = tabHeight + data.height;
							list[i].bottom = tabHeight;
						}).exec();
					}
					this.load = false,
						this.list = list
				}
				let scrollTop = e.detail.scrollTop + 20;
				for (let i = 0; i < list.length; i++) {
					if (scrollTop > list[i].top && scrollTop < list[i].bottom) {
						this.VerticalNavTop = (list[i].id - 1) * 50
						this.TabCur = list[i].id
						return false
					}
				}
			}
		}
	}
</script>

<style>

</style>