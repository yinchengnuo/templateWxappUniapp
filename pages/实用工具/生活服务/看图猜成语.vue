<template>
  <Page ref="Page" bg type="S1" refresh @refresh="refresh">
    <template v-slot:default="{ page }">
      <template v-if="page">
        <view class="cu-bar solid-bottom margin-top-xs">
          <view class="action">
            <text class="cuIcon-titles" :class="'text-' + $refs.Page.bgClass.split('-')[2]"></text>
            <text class="text-bold">题目</text>
          </view>
        </view>
        <view class="margin radius">
          <Img v-if="result" :src="result" />
        </view>
        <view class="cu-bar solid-bottom margin-top-xs">
          <view class="action">
            <text class="cuIcon-titles" :class="'text-' + $refs.Page.bgClass.split('-')[2]"></text>
            <text class="text-bold">答案</text>
          </view>
          <view class="action">
            <switch class="radius" :class="$refs.Page.bgClass.split('-')[2]" :checked="checked" @change="change"> </switch>
          </view>
        </view>
        <TextBoard :blur="!checked" :result="answer" />
      </template>
    </template>
  </Page>
</template>

<script>
export default {
  data() {
    return {
      result: "",
      answer: "",
      checked: Boolean(uni.getStorageSync("kantucaichengyu")),
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
        .request({ url: "https://xiaoapi.cn/API/game_ktccy.php?msg=开始游戏" })
        .then(({ data }) => {
          console.log("👀  file: 看图猜成语.vue:46  .then  data:", data.data.pic);
          this.result = data.data.pic;
          this.answer = data.data.answer;
        })
        .catch(() => {})
        .finally(() => {
          this.$loaded();
          this.$refs.Page.refreshing = false;
        });
    },
    change(e) {
      if (e.detail.value) {
        this.checked = true;
        uni.setStorageSync("kantucaichengyu", true);
      } else {
        this.checked = false;
        uni.setStorageSync("kantucaichengyu", false);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
