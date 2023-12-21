<template>
  <Page ref="Page" refresh @refresh="refresh">
    <template v-slot:default="{ page }">
      <template v-if="page">
        <Img ref="Img" :src="src" />
      </template>
    </template>
  </Page>
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
      this.$refs.Page.refreshing = true;
      wx.getImageInfo({ src: "https://api.lolimi.cn/API/boy/" })
        .then(({ path }) => (this.src = path))
        .finally(() => (this.$refs.Page.refreshing = false));
    },
  },
};
</script>

<style lang="scss" scoped></style>
