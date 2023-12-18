<template>
  <Page ref="Page" bg>
    <template v-slot:default="{ page }">
      <template v-if="page">
        <view class="cu-bar solid-bottom margin-top-xs">
          <view class="flex margin-left">
            <CustomCounter v-model="row" :min="6" :max="29" />
            <text>行</text>
          </view>
          <view class="flex">
            <CustomCounter v-model="col" :min="6" :max="29" />
            <text>列</text>
          </view>
          <view class="action" @click="$copy(result)">
            <text class="cuIcon-copy margin-left-xs text-bold"></text>
          </view>
        </view>
        <TextBoard :result="result" arrayView />
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
      uni
        .request({
          url: "https://api.tangdouz.com/tdcq/wzzc.php?x=" + this.row + "&y=" + this.col,
        })
        .then(({ data }) => {
          this.result = data.subject.split("\\r").filter(e => e);
        })
        .finally(() => this.$loaded());
    },
  },
};
</script>

<style lang="scss" scoped></style>
