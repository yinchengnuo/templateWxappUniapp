<template>
  <Page ref="Page" bg type="S1" refresh @refresh="refresh">
    <template v-slot:default="{ page }">
      <template v-if="page">
        <TextBoard :result="result" />
        <button class="cu-btn block shadow-blur margin" :class="'bg-' + $refs.Page.bgClass.split('-')[2]" @click.stop="$copy(result)">复制</button>
        <navigator v-if="result" :url="'/pages/实用工具/图片生成/手写模拟器?text=' + result">
          <button class="cu-btn block shadow-blur margin" :class="'bg-' + $refs.Page.bgClass.split('-')[2]">生成手写图</button>
        </navigator>
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
        .request({ url: "https://api.tangdouz.com/a/jt.php" })
        .then(({ data }) => {
          this.result = data;
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
