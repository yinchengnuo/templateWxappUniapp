<template>
  <view class="index">
    <view class="nav-list">
      <view v-for="(item, index) in list" :key="index" :class="['nav-li', 'shadow']" style="background: #fff; padding: 0; width: 333rpx; border-radius: 24rpx; overflow: hidden; position: relative; margin: 10rpx 0 10rpx" @click="navigateTo(item)">
        <image class="w100" :src="item.icon" mode="widthFix"></image>
        <view class="text-white padding-xs text-bold text-shadow padding-xs w100" style="z-index: 0; white-space: nowrap; line-height: 2; position: absolute; top: 0; left: 0; background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.05))">
          {{ item.desc }}
        </view>
        <view
          class="text-white padding-xs text-bold text-shadow padding-xs w100"
          style="z-index: 0; white-space: nowrap; line-height: 2; position: absolute; bottom: 0; left: 0; background: linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.4))">
          <view class="flex flex_sb">
            <view class="cuIcon-peoplefill text-progress"
              ><text style="font-weight: bold">{{ item.user_num }}</text></view
            >
            <view class="cuIcon-favorfill text-orange"
              ><text style="font-weight: bold">{{ item.collect_num }}</text></view
            >
            <text class="cuIcon-attentionfill text-black"
              ><text style="font-weight: bold">{{ item.view_num }}</text>
            </text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      show: 0,
      cardCur: 0,
      interstitialAd: {},
    };
  },
  computed: {
    list() {
      return this.$store.state.app.list.filter(e => e.type === "数据集合");
    },
  },
  onShow() {
    this.show++;
    if (this.show !== 0 && this.show % 4 === 0) {
      !this.$store.state.user.vip && this.interstitialAd.show();
    }
  },
  onLoad() {
    this.interstitialAd = uni.createInterstitialAd({
      adUnitId: "adunit-e3f467955c2226a4",
    });
  },
  onPullDownRefresh() {
    this.getList();
  },
  methods: {
    getList() {
      this.$store.dispatch("app/getFunction").finally(() => {
        uni.stopPullDownRefresh();
      });
    },
    navigateTo(item) {
      uni.navigateTo({
        url: item.page,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.index {
  .page_bg {
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 100vh;
    position: fixed;
  }

  .page_title {
    font-size: 13pt;
    font-weight: bold;
  }
}
</style>
