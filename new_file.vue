<template>
  <view>
    <Page ref="Page">
      <template v-slot:default="{ page }">
        <template v-if="page">
          <view class="flex" :style="{ height: page.height + 'px' }">
            <text class="text-black text-bold text-xxl">开发中</text>
          </view>
        </template>
      </template>
    </Page>
  </view>
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

<style lang="scss" scoped></style>
