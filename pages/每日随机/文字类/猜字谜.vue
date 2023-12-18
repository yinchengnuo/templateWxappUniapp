<template>
  <Page ref="Page" bg type="S1" refresh @refresh="refresh">
    <template v-slot:default="{ page }">
      <template v-if="page">
        <TextBoard :result="result" />
        <button class="cu-btn block shadow-blur margin" :class="'bg-' + $refs.Page.bgClass.split('-')[2]" @click.stop="showAnswer">查看答案</button>
      </template>
    </template>
  </Page>
</template>

<script>
export default {
  data() {
    return {
      result: "",
      answer: ""
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
        .request({ url: "https://api.tangdouz.com/czm.php" })
        .then(({ data }) => {
          this.result = data.zm
          this.answer = data.key
        })
        .catch(() => {})
        .finally(() => {
          this.$loaded()
          this.$refs.Page.refreshing = false;
        });
    },
    showAnswer() {
      this.$toast(this.answer)
    }
  },
};
</script>

<style lang="scss" scoped></style>
