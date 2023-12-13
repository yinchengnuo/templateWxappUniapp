<template>
  <Page ref="Page">
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
      src: ''
    };
  },
  created() {
    this.refresh();
  },
  methods: {
    refresh() {
      uni
        .request({ url: "https://api.tangdouz.com/60.php" })
        .then(({ data }) => {
          this.src = data;
        })
        .catch(() => {});
    },
  },
};
</script>

<style lang="scss" scoped></style>
