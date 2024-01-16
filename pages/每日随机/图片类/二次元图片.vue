<template>
  <view>
    <Page ref="Page" bg refresh @refresh="refresh">
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
      src: "",
    };
  },
  created() {
    this.refresh();
  },
  methods: {
    refresh() {
      this.$loading();
      this.$refs.Page.refreshing = true;
      uni
        .getImageInfo({ src: "https://shanhe.kim/api/tu/anime.php" })
        .then(({ path }) => (this.src = path))
        .finally(() => {
          this.$loaded();
          this.$refs.Page.refreshing = false;
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
