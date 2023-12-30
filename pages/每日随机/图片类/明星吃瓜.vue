<template>
  <view>
    <Page ref="Page">
      <template v-slot:default="{ page }">
        <template v-if="page">
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
      src: "https://dayu.qqsuu.cn/mingxingbagua/apis.php",
    };
  },
};
</script>

<style lang="scss" scoped></style>
