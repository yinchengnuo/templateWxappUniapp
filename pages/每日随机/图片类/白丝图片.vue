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
      uni
        .request({ url: "https://jkapi.com/api/baisi_img?type=text&apiKey=10288b2eab60ec06db3a2b3bcfd0c4c3" })
        .then(({ data }) => {
          this.src = data;
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
