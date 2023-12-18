<template>
  <Page ref="Page" bg refresh @refresh="refresh">
    <template v-slot:default="{ page }">
      <template v-if="page">
        <TextBoard :result="result" arrayView indent />
        <button class="cu-btn block shadow-blur margin" :class="'bg-' + $refs.Page.bgClass.split('-')[2]" @click.stop="$copy(result)">复制</button>
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
      uni
        .request({ url: "https://api.tangdouz.com/a/love.php?gon=%E6%88%91&shou=%E4%BD%A0" })
        .then(({ data }) => {
          this.result = data.split("\\r").filter(e => e);
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
