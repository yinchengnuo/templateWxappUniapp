<template>
  <view>
    <Page ref="Page" bg refresh @refresh="refresh">
      <template v-slot:default="{ page }">
        <template v-if="page">
          <view class="cu-bar input solid-bottom">
            <text class="margin-left text-bold">收信人</text>
            <input v-model.trim="text1" ref="input" :focus="focus" class="my_input no_button" confirm-type="search" placeholder="请输入收信人" type="text" @blur="focus = false" @confirm="refresh" />
            <text v-if="text1" class="my_input_clear no_button cuIcon-roundclosefill" @click.stop="(text1 = ''), refresh()"></text>
          </view>
          <view class="cu-bar input solid-bottom">
            <text class="margin-left text-bold">写信人</text>
            <input v-model.trim="text2" ref="input" :focus="focus" class="my_input no_button" confirm-type="search" placeholder="请输入写信人" type="text" @blur="focus = false" @confirm="refresh" />
            <text v-if="text2" class="my_input_clear no_button cuIcon-roundclosefill" @click.stop="(text2 = ''), refresh()"></text>
          </view>
          <button class="margin cu-btn block lg shadow-blur" :class="'bg-' + $refs.Page.bgClass.split('-')[2]" @click="$refs.Page.refreshing = true">生成</button>
          <button class="cu-btn block shadow-blur margin" :class="'bg-' + $refs.Page.bgClass.split('-')[2]" @click.stop="$copy(result)">复制</button>
          <TextBoard :result="result" arrayView indent />
        </template>
      </template>
    </Page>
  </view>
</template>

<script>
export default {
  data() {
    return {
      text1: "阿珍",
      text2: "阿强",
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
        .request({ url: "https://api.tangdouz.com/a/love.php?gon=" + (this.text2 || "宝贝") + "&shou=" + (this.text1 || "我") })
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
