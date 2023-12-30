<template>
  <view>
    <Page type="B1" ref="Page">
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
      src: "https://api.vvhan.com/api/moyu",
    };
  },
};
</script>

<style lang="scss" scoped></style>
