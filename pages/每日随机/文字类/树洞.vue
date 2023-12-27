<template>
  <Page ref="Page" bg refresh @refresh="refresh">
    <template v-slot:default="{ page }">
      <template v-if="page">
        <TextBoard :result="result" arrayView indent />
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
      this.$loading();
      this.$refs.Page.refreshing = true;
      this.$("/proxy", { url: "http://api.yujn.cn/api/shudong.php?type=json" })
        .then(data => {
          this.result = [(data.content || "").trim(), data.time];
          console.log(data);
        })
        .finally(() => {
          this.$loaded();
          this.$refs.Page.refreshing = false;
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
