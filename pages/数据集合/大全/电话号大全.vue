<template>
  <Page ref="Page" type="S1">
    <template v-slot:default="{ page }">
      <template v-if="page">
        <view class="flex margin-top-xs">
          <scroll-view class="cu-vertical-nav nav cu-timeline" scroll-y scroll-with-animation :scroll-top="VerticalNavTop1" style="width: 200rpx" :style="{ height: page.height + 'px' }">
            <view class="cu-item" style="padding: 0" :class="index == TabCur1 ? 'text-black text-bold cur' : 'text-black'" v-for="(item, index) in list" :key="index" @click="tabSelect1" :data-id="index">{{ item.name }} </view>
          </scroll-view>
          <scroll-view class="bg-ghostWhite" scroll-y scroll-with-animation style="width: 550rpx" :style="{ height: page.height + 'px' }" :scroll-into-view="'main-1-' + MainCur1" @scroll="VerticalMain1">
            <view class="padding-top-xs padding-lr-xs" v-for="(item, index) in list" :key="index" :id="'main-1-' + index">
              <view class="cu-bar solid-bottom bg-white" style="position: sticky; top: 0; z-index: 1; min-height: 80rpx">
                <view class="action">
                  <image v-if="item.categoryIcon" class="margin-right-xs radius" style="width: 34rpx; height: 34rpx" :src="item.categoryIcon" mode="aspectFill" />
                  <text class="text-bold text-black">{{ item.name }}</text>
                </view>
                <view class="action">{{ item.list.length }}</view>
              </view>
              <view class="padding-xs">
                <view v-for="(itemm, indexx) in item.list" :key="indexx" class="sm-border flex flex_sb bg-white shadow radius margin-xs padding-sm" @click="$call(itemm.phone)">
                  <view class="text-lg text-bold">{{ itemm.name }}</view>
                  <view class="text-lg">
                    <text>{{ itemm.phone }}</text>
                    <text class="cuIcon-right"></text>
                  </view>
                </view>
              </view>
            </view>
          </scroll-view>
        </view>
      </template>
    </template>
  </Page>
</template>

<script>
import list from "./电话号大全";
export default {
  data() {
    return {
      TabCur1: 0,
      MainCur1: 0,
      VerticalNavTop1: 0,
      list: list.map((e, i) => ({ ...e, id: i })),
    };
  },
  onLoad() {},
  methods: {
    tabSelect1(e) {
      this.TabCur1 = e.currentTarget.dataset.id;
      this.MainCur1 = e.currentTarget.dataset.id;
      this.VerticalNavTop1 = (e.currentTarget.dataset.id - 1) * 50;
    },
    VerticalMain1(e) {
      let tabHeight = 0;
      if (!this._load) {
        for (let i = 0; i < this.list.length; i++) {
          uni
            .createSelectorQuery()
            .in(this)
            .select("#main-1-" + this.list[i].id)
            .fields({ size: true }, data => {
              this.list[i].top = tabHeight;
              tabHeight = tabHeight + data.height;
              this.list[i].bottom = tabHeight;
            })
            .exec();
        }
        this._load = true;
      }
      let scrollTop = e.detail.scrollTop + 20;
      for (let i = 0; i < this.list.length; i++) {
        if (scrollTop > this.list[i].top && scrollTop < this.list[i].bottom) {
          this.TabCur1 = this.list[i].id;
          this.VerticalNavTop1 = (this.list[i].id - 1) * 50;
          return false;
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
