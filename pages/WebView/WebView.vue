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
    // this.src = src;
    // uni.setNavigationBarTitle({ title });
    // uni.downloadFile({
    //   url: "https://mp-f3138cb7-2a3b-4344-8e79-a1f65871aab2.cdn.bspapp.com/快递大全.xls",
    //   success: ({ tempFilePath }) => {
    //     this.$toast(tempFilePath);
    //     uni.openDocument({
    //       showMenu: true,
    //       filePath: tempFilePath,
    //     });
    //   },
    // });
  },
};
</script>

<style lang="scss" scoped></style>
