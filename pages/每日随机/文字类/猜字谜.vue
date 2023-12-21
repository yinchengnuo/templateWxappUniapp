<template>
  <Page ref="Page" bg type="S1" refresh @refresh="refresh">
    <template v-slot:default="{ page }">
      <template v-if="page">
        <view class="cu-bar solid-bottom margin-top-xs">
          <view class="action">
            <text class="cuIcon-titles" :class="'text-' + $refs.Page.bgClass.split('-')[2]"></text>
            <text class="text-bold">字谜</text>
          </view>
        </view>
        <TextBoard :result="result" />
        <view class="cu-bar solid-bottom margin-top-xs">
          <view class="action">
            <text class="cuIcon-titles" :class="'text-' + $refs.Page.bgClass.split('-')[2]"></text>
            <text class="text-bold">谜底</text>
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
      checked: Boolean(uni.getStorageSync("caizimi")),
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
        .request({ url: "https://api.tangdouz.com/czm.php" })
        .then(({ data }) => {
          this.result = data.zm;
          this.answer = data.key;
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
        uni.setStorageSync("caizimi", true);
      } else {
        this.checked = false;
        uni.setStorageSync("caizimi", false);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
