<template>
  <Page ref="Page" bg refresh @refresh="refresh">
    <template v-slot:default="{ page }">
      <template v-if="page">
        <view class="cu-bar input solid-bottom">
          <text class="margin-left text-bold">题目</text>
          <input v-model.trim="text1" ref="input" :focus="focus" class="my_input no_button" confirm-type="search" placeholder="请输入题目" type="text" @blur="focus = false" @confirm="refresh" />
          <text v-if="text1" class="my_input_clear no_button cuIcon-roundclosefill" @click.stop="text1 = ''"></text>
        </view>
        <view class="cu-bar input solid-bottom">
          <text class="margin-left text-bold">字数</text>
          <input v-model.trim="text2" ref="input" :focus="focus" class="my_input no_button" confirm-type="search" placeholder="请输入字数" type="number" @blur="focus = false" @confirm="refresh" />
          <text v-if="text2" class="my_input_clear no_button cuIcon-roundclosefill" @click.stop="text2 = ''"></text>
        </view>
        <button class="margin cu-btn block lg shadow-blur" :class="'bg-' + $refs.Page.bgClass.split('-')[2]" @click="$refs.Page.refreshing = true">生成</button>
        <button class="cu-btn block shadow-blur margin" :class="'bg-' + $refs.Page.bgClass.split('-')[2]" @click.stop="$copy(result)">复制</button>
        <TextBoard :result="result" />
      </template>
    </template>
  </Page>
</template>

<script>
export default {
  data() {
    return {
      text1: "如何吃饭",
      text2: 800,
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
        .request({ url: "https://api.lolimi.cn/API/dog/api.php?type=text&msg=" + (this.text1 || "请输入题目") + "&num=" + (this.text2 || 200) })
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
