<template>
  <view>
    <Page ref="Page">
      <template v-slot:default="{ page }">
        <template v-if="page">
          <Img ref="Img" src="https://api.andeer.top/API/img_history.php" />
          <Img ref="Img" :src="src" />
        </template>
      </template>
    </Page>
  </view>
</template>

<script>
export default {
  data() {
    return {
      src: "https://xiaoapi.cn/API/lssdjt_pic.php",
    };
  },
};
</script>

<style lang="scss" scoped></style>
