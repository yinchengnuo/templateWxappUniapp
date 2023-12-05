<template>
  <Page bg ref="Page">
    <template v-slot:default="{ page }">
      <template v-if="page">
        <view class="bg-white padding-xs margin-sm align-center radius-lg">
          <view class="padding-xs p"> </view>
          <view class="padding-xs p"></view>
          <view class="padding-xs p"> </view>
          <view class="padding-xs p"></view>
          <view class="padding-xs p"> </view>
        </view>
        <view class="cu-bar bg-white solid-bottom">
          <view class="action">
            <text class="cuIcon-titles" :class="'text-' + $refs.Page.bgClass.split('-')[2]">能量介绍</text>
          </view>
        </view>
        <AD2 />
        <AD3 />
      </template>
    </template>
  </Page>
</template>

<script>
export default {
  data() {
    return {};
  },
  onLoad() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.p {
  text-indent: 2em;
}
</style>
