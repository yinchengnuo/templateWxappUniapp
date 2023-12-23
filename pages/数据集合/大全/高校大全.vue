<template>
  <Page ref="Page" type="S1">
    <template v-slot:default="{ page }">
      <template v-if="page">
        <view class="flex" :style="{ height: page.height + 'px' }" style="flex-direction: column; justify-content: space-evenly">
          <button class="block cu-btn xxl shadow-blur margin-top-sm margin-left-sm margin-bottom-sm bg-black" @click="view(1)">全国普通高等学校名单</button>
          <button class="block cu-btn xxl shadow-blur margin-top-sm margin-left-sm margin-bottom-sm bg-black" @click="view(2)">全国成人高等学校名单</button>
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
  onLoad() {},
  methods: {
    view(type) {
      this.$loading();
      uni
        .downloadFile({
          url: `https://mp-f3138cb7-2a3b-4344-8e79-a1f65871aab2.cdn.bspapp.com/ToolBox365/数据集合/数据集/${type === 1 ? "全国普通高等学校名单" : "全国成人高等学校名单"}.xls`,
        })
        .then(({ tempFilePath }) => {
          uni.openDocument({ showMenu: true, filePath: tempFilePath });
        })
        .finally(() => this.$loaded());
    },
  },
};
</script>

<style lang="scss" scoped></style>
