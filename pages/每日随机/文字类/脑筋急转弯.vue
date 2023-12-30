<template>
  <view>
    <Page ref="Page" bg type="S1" refresh @refresh="refresh">
      <template v-slot:default="{ page }">
        <template v-if="page">
          <view class="cu-bar solid-bottom margin-top-xs">
            <view class="action">
              <text class="cuIcon-titles" :class="'text-' + $refs.Page.bgClass.split('-')[2]"></text>
              <text class="text-bold">题目</text>
            </view>
          </view>
          <TextBoard :result="result" />
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
  </view>
</template>

<script>
export default {
  data() {
    return {
      result: "",
      answer: "",
      checked: Boolean(uni.getStorageSync("naojinjizhuanwan")),
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
        .request({ url: "https://api.tq23.cn/api/xd-naowan?num=1" })
        .then(({ data }) => {
          this.result = data.data.list[0].quest;
          this.answer = data.data.list[0].result;
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
        uni.setStorageSync("naojinjizhuanwan", true);
      } else {
        this.checked = false;
        uni.setStorageSync("naojinjizhuanwan", false);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
