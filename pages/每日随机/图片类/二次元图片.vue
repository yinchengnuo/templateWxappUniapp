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
      this.$refs.Page.refreshing = true;
      this.$("/proxy", { url: "http://api.liangx.link/API/AGG.php?type=json" })
        .then(({ url }) => {
          this.src = url;
        })
        .catch(() => {})
        .finally(() => {
          this.$refs.Page.refreshing = false;
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
