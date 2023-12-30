<template>
  <view>
    <Page ref="Page" bg refresh @refresh="refresh">
      <template v-slot:default="{ page }">
        <template v-if="page">
          <Img v-for="item in list" :key="item.src" ref="Img" :title="title" :src="item.src" @error="error" />
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
      list: [],
      title: "",
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
        .request({ url: "https://oiapi.net/API/Cosplay" })
        .then(({ data }) => {
          this.title = data.data.title;
          this.list = data.data.images.map(e => ({ src: e, errored: false }));
        })
        .catch(() => {})
        .finally(() => {
          this.$loaded();
          this.$refs.Page.refreshing = false;
        });
    },
    error(src) {
      this.list.find(e => e.src === src).errored = true;
      if (this.list.every(e => e.errored == true)) {
        this.refresh();
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
