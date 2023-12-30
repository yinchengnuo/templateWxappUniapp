<template>
  <view>
    <Page ref="Page">
      <template v-slot:default="{ page }">
        <template v-if="page">
          <view class="flex" style="flex-wrap: wrap">
            <view class="flexc" style="width: 250rpx; height: 250rpx" v-for="(item, index) in list" :key="index" @click="choose(item)" :style="{ background: chooseed.includes(item) ? '#dedede' : '' }">
              <LoadingSpin :loading="item" />
            </view>
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
      list: [],
      chooseed: [],
    };
  },
  onLoad() {
    this.list = getApp().globalData.loadings;
  },
  methods: {
    choose(e) {
      if (this.chooseed.includes(e)) {
        this.chooseed.splice(this.chooseed.indexOf(e), 1);
      } else {
        this.chooseed.push(e);
      }
      this.$copy(this.chooseed.join());
      this.$toast(this.chooseed.length);
    },
  },
};
</script>

<style lang="scss" scoped></style>
