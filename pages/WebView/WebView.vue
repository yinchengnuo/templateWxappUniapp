<template>
  <view>
    <!-- <web-view v-if="src" :src="src" /> -->
    123
  </view>
</template>

<script>
export default {
  data() {
    return {
      src: "https://p.pinduoduo.com/1rljK8Ft",
    };
  },
  onLoad({ src, title }) {
    this.src = src;
    uni.setNavigationBarTitle({ title });
  },
};
</script>

<style lang="scss" scoped></style>
