<template>
  <view>
    <web-view v-if="src" :src="src" />
  </view>
</template>

<script>
export default {
  data() {
    return {
      src: "",
    };
  },
  onLoad({ src, title }) {
    this.src = src;
    title && uni.setNavigationBarTitle({ title });
  },
};
</script>

<style lang="scss" scoped></style>
