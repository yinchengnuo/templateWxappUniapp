<template>
  <Page ref="Page" type="S1">
    <template v-slot:default="{ page }">
      <template v-if="page">
        <view class="flexc" style="justify-content: space-evenly" :style="{ height: page.height + 'px' }">
          <button class="block cu-btn xxl shadow-blur margin-top-sm margin-left-sm margin-bottom-sm bg-black" @click="view(0)">亲戚关系计算器</button>
          <button class="block cu-btn xxl shadow-blur margin-top-sm margin-left-sm margin-bottom-sm bg-black" @click="view(1)">通过称谓查关系</button>
          <button class="block cu-btn xxl shadow-blur margin-top-sm margin-left-sm margin-bottom-sm bg-black" @click="view(2)">两者之间的称谓</button>
          <button class="block cu-btn xxl shadow-blur margin-top-sm margin-left-sm margin-bottom-sm bg-black" @click="view(3)">两者的关系合称</button>
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
      list: ["/", "/chain/", "/both/", "/pair/"],
    };
  },
  onShow() {
    if (this.show) {
      this.$refs.Page.showAD();
    }
    this.show++;
  },
  mounted() {
    this.view(0);
  },
  methods: {
    view(index) {
      uni.navigateTo({ url: "/pages/WebView/WebView?src=" + "https://ycn.link/functions/亲戚关系计算器.html#" + this.list[index] });
    },
  },
};
</script>

<style lang="scss" scoped></style>
