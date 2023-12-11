<template>
  <Page ref="Page">
    <template v-slot:default="{ page }">
      <template v-if="page">
        <image class="w100" :src="src" @click="$preview(src)" show-menu-by-longpress mode="widthFix" />
        <view class="relative cu-list menu card-menu sm-border margin-tb-sm shadow-lg">
          <view class="cu-item arrow">
            <button class="cu-btn content" open-type="contact">
              <text class="cuIcon-service text-orange text-xl"></text>
              <text class="text-l text-black">联系作者</text>
            </button>
          </view>
          <view class="cu-item arrow">
            <button class="cu-btn content" open-type="feedback">
              <text class="cuIcon-write text-cyan text-xl"></text>
              <text class="text-l text-black">意见反馈</text>
            </button>
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
      src: "https://mp-f3138cb7-2a3b-4344-8e79-a1f65871aab2.cdn.bspapp.com/ToolBox365/组织.jpg",
    };
  },
  onShow() {
    uni.hideShareMenu({
      menus: ["shareAppMessage", "shareTimeline"],
    });
  },
  onLoad() {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>
