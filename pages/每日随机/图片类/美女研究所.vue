<template>
  <Page ref="Page" bg refresh @refresh="refresh">
    <template v-slot:default="{ page }">
      <template v-if="page">
        <Img v-for="item in list" :key="item" ref="Img" :title="title" :src="item" />
      </template>
    </template>
  </Page>
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
          this.list = data.data.images;
        })
        .catch(() => {})
        .finally(() => {
          this.$loaded();
          this.$refs.Page.refreshing = false;
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
