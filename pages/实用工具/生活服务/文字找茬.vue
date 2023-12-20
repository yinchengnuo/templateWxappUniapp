<template>
  <Page ref="Page" bg refresh @refresh="refresh">
    <template v-slot:default="{ page }">
      <template v-if="page">
        <view class="cu-bar solid-bottom margin-top-xs">
          <view class="flex margin-left">
            <CustomCounter v-model="rowNum" :min="6" :max="29" />
            <text class="text-lg margin-xs">行</text>
          </view>
          <view class="flex">
            <CustomCounter v-model="colNum" :min="6" :max="29" />
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
      rowNum: 18,
      colNum: 18,
      row: 0,
      col: 0,
    };
  },
  watch: {
    rowNum() {
      this.refresh();
    },
    colNum() {
      this.refresh();
    },
  },
  onLoad() {
    this.$refs.Page.refreshing = true;
  },
  methods: {
    refresh() {
      this.$loading();
      this.$refs.Page.refreshing = true;
      uni
        .request({
          url: "https://api.tangdouz.com/tdcq/wzzc.php?x=" + this.rowNum + "&y=" + this.colNum,
        })
        .then(({ data }) => {
          this.result = data.subject.split("\\r").filter(e => e);
          this.row = this.result.findIndex(e => this.result.findIndex(ee => ee === e) === this.result.findLastIndex(ee => ee === e));
          const rows = this.result[this.row].split("");
          this.col = rows.findIndex(e => rows.findIndex(ee => ee === e) === rows.findLastIndex(ee => ee === e));
        })
        .finally(() => {
          this.$loaded();
          this.$refs.Page.refreshing = false;
        });
    },
    showAnswer() {
      this.$toast(`第${this.row + 1}行第${this.col + 1}列：${this.result[this.row][this.col]}`);
    },
  },
};
</script>

<style lang="scss" scoped></style>
