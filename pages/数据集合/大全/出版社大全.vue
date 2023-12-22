<template>
  <Page ref="Page" type="S1">
    <template v-slot:default="{ page }">
      <template v-if="page">
        <view class="flex" :style="{ height: page.height + 'px' }">
          <button class="block cu-btn xxl shadow-blur margin-top-sm margin-left-sm margin-bottom-sm bg-black" @click="view">查看数据</button>
        </view>
      </template>
    </template>
  </Page>
</template>

<script>
export default {
  data() {
    return {
      show: 0,
    };
  },
  onShow() {
    if (this.show) {
      this.$refs.Page.showAD();
    }
    this.show++;
  },
  onLoad() {
    this.view();
  },
  methods: {
    view() {
      this.$loading();
      uni
        .downloadFile({
          url: "https://mp-f3138cb7-2a3b-4344-8e79-a1f65871aab2.cdn.bspapp.com/ToolBox365/数据集合/数据集/出版社大全.xls",
        })
        .then(({ tempFilePath }) => {
          this.$toast(tempFilePath);
          uni.openDocument({ showMenu: true, filePath: tempFilePath });
        })
        .finally(() => this.$loaded());
    },
  },
};
</script>

<style lang="scss" scoped></style>
