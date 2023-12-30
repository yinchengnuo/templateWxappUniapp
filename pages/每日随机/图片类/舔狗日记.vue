<template>
  <view>
    <Page ref="Page" type="S1" refresh @refresh="refresh">
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
      this.$refs.Page.refreshing = true;
      wx.getImageInfo({ src: "https://api.lykep.com/api/tgbj" })
        .then(({ path }) => (this.src = path))
        .finally(() => (this.$refs.Page.refreshing = false));
    },
  },
};
</script>

<style lang="scss" scoped></style>
