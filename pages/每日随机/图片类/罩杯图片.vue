<template>
  <Page ref="Page" type="S1" refresh @refresh="refresh">
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
        .request({ url: "https://jkapi.com/api/yo_cup?type=text&apiKey=a580bcd81968c389bc55384807b565ad" })
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
