<template>
  <Page ref="Page" bg type="S1" refresh @refresh="refresh">
    <template v-slot:default="{ page }">
      <template v-if="page">
        <view class="cu-bar solid-bottom margin-top-xs">
          <view class="action">
            <text class="cuIcon-titles" :class="'text-' + $refs.Page.bgClass.split('-')[2]"></text>
            <text class="text-bold">文案类型</text>
          </view>
          <picker :value="index" :range="types" @change="e => (index = +e.detail.value)" class="margin-right">
            <text>{{ types[index] }}</text>
            <text class="cuIcon-unfold"></text>
          </picker>
        </view>
        <TextBoard :result="result" />
        <button v-if="result" class="cu-btn block shadow-blur margin" :class="'bg-' + $refs.Page.bgClass.split('-')[2]" @click.stop="$copy(result)">复制</button>
        <navigator v-if="result" :url="'/pages/实用工具/图片生成/手写模拟器?text=' + result">
          <button class="cu-btn block shadow-blur margin" :class="'bg-' + $refs.Page.bgClass.split('-')[2]">生成文字</button>
        </navigator>
      </template>
    </template>
  </Page>
</template>

<script>
export default {
  data() {
    return {
      index: 0,
      types: ["早安", "晚安", "励志", "哲理", "正能量", "情感", "毕业", "午安", "感悟", "警句", "time"],
      result: "",
    };
  },
  watch: {
    index() {
      this.$refs.Page.refreshing = true;
    },
  },
  created() {
    this.refresh();
  },
  methods: {
    refresh() {
      this.$loading();
      this.$refs.Page.refreshing = true;
      uni
        .request({ url: "https://api.tangdouz.com/a/refuel.php?f=" + this.types[this.index] })
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
