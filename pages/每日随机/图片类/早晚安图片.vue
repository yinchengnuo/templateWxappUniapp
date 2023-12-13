<template>
  <Page ref="Page" refresh @refresh="refresh">
    <template v-slot:default="{ page }">
      <template v-if="page">
        <image v-if="src" class="w100" show-menu-by-longpress :src="src" mode="widthFix" @load="load" @error="error" />
        <ErrorImage v-if="errored" />
      </template>
    </template>
  </Page>
</template>

<script>
import PageImg from "@/mixins/PageImg.js";
export default {
  mixins: [PageImg],
  data() {
    return {
      SRC: "https://api.lolimi.cn/API/image-zw/",
    };
  },
  created() {
    console.log(2312);
    wx.getImageInfo({
      src: this.SRC,
      success(res) {
        console.log(res);
      },
    });
  },
};
</script>

<style lang="scss" scoped></style>
