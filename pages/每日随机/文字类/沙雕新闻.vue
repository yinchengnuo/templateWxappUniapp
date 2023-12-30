<template>
  <view>
    <Page ref="Page" bg type="S1" refresh @refresh="refresh">
      <template v-slot:default="{ page }">
        <template v-if="page">
          <TextBoard v-if="result1" :result="result1" />
          <TextBoard v-if="result2" :result="result2" />
          <TextBoard v-if="result3" :result="result3" />
          <button v-if="result3" class="cu-btn block shadow-blur margin" :class="'bg-' + $refs.Page.bgClass.split('-')[2]" @click.stop="$copy(result3)">复制新闻出处链接</button>
        </template>
      </template>
    </Page>
  </view>
</template>

<script>
export default {
  data() {
    return {
      result1: "",
      result2: "",
      result3: "",
    };
  },
  created() {
    this.refresh();
  },
  methods: {
    refresh() {
      this.$loading();
      this.$refs.Page.refreshing = true;
      this.$("/proxy", { url: "https://api.yujn.cn/api/shadiao.php" })
        .then(data => {
          this.result1 = data.title;
          this.result2 = data.content;
          this.result3 = data.video;
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
