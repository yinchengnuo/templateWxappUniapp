<template>
  <Page ref="Page" bg refresh @refresh="refresh">
    <template v-slot:default="{ page }">
      <template v-if="page">
        <TextBoard :result="result" arrayView />
      </template>
    </template>
  </Page>
</template>

<script>
export default {
  data() {
    return {
      result: "",
    };
  },
  created() {
    this.refresh();
  },
  methods: {
    refresh() {
      this.$loading()
      this.$refs.Page.refreshing = true;
      uni
        .request({ url: "https://api.tangdouz.com/wenzhang.php" })
        .then(({ data }) => {
          this.result = data.split("\\r").filter(e => e);
        })
        .catch(() => {})
        .finally(() => {
          this.$loaded()
          this.$refs.Page.refreshing = false;
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
