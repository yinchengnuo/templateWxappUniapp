<template>
  <Page ref="Page" bg refresh @refresh="refresh">
    <template v-slot:default="{ page }">
      <template v-if="page">
        <view class="cu-bar solid-bottom margin-top-xs">
          <view class="flex margin-left">
            <CustomCounter v-model="row" :min="6" :max="29" />
            <text class="text-lg margin-xs">行</text>
          </view>
          <view class="flex">
            <CustomCounter v-model="col" :min="6" :max="29" />
            <text class="text-lg margin-xs">列</text>
          </view>
          <view class="action" @click="$copy(result)">
            <text class="cuIcon-copy margin-left-xs text-bold"></text>
          </view>
        </view>
        <TextBoard :result="result" arrayView />
        <button class="cu-btn block shadow-blur margin" :class="'bg-' + $refs.Page.bgClass.split('-')[2]" @click.stop="showAnswer">查看答案</button>
      </template>
    </template>
  </Page>
</template>

<script>
export default {
  data() {
    return {
      result: null,
      row: 20,
      col: 20,
      answer: "",
    };
  },
  watch: {
    row() {
      this.make();
    },
    col() {
      this.make();
    },
  },
  onLoad() {
    this.make();
  },
  methods: {
    make() {
      this.$loading();
      this.$refs.Page.refreshing = true;
      uni
        .request({
          url: "https://api.tangdouz.com/tdcq/wzzc.php?x=" + this.row + "&y=" + this.col,
        })
        .then(({ data }) => {
          this.answer = data.answer;
          this.result = data.subject.split("\\r").filter(e => e);
        })
        .finally(() => {
          this.$loaded();
          this.$refs.Page.refreshing = false;
        });
    },
    showAnswer() {
      const row = this.answer.slice(0, this.answer.length / 2);
      const col = this.answer.slice(this.answer.length / 2, this.answer.length);
      this.$toast(`第${row}行第${col}列：${this.result[row - 1][col - 1]}`);
    },
  },
};
</script>

<style lang="scss" scoped></style>
