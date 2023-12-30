<template>
  <view>
    <Page ref="Page" bg type="S1">
      <template v-slot:default="{ page }">
        <template v-if="page">
          <view class="cu-list menu">
            <view class="cu-item" v-for="(item, index) in clock_records" :key="index">
              <view class="content padding-tb-sm">
                <view>
                  <text class="text-black margin-right-xs">{{ item.date }}</text>
                </view>
                <view class="text-gray text-sm">
                  <text class="margin-right-xs">{{ item.create_time }}</text>
                </view>
              </view>
              <view class="action">
                <text class="text-lg text-bold text-green">+{{ item.energy }}</text>
              </view>
            </view>
            <view class="margin flex text-grey text-sm">仅展示最新100条记录...</view>
          </view>
        </template>
      </template>
    </Page>
  </view>
</template>

<script>
export default {
  data() {
    return {
      clock_records: uni.getStorageSync("clock_records"),
    };
  },
  onShow() {
    uni.hideShareMenu({
      menus: ["shareAppMessage", "shareTimeline"],
    });
  },
  mounted() {
    this.$refs.Page.showAD();
  },
};
</script>

<style lang="scss" scoped></style>
