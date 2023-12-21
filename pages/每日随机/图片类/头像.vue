<template>
  <Page ref="Page" bg refresh @refresh="refresh">
    <template v-slot:default="{ page }">
      <template v-if="page">
        <view class="cu-bar solid-bottom margin-top-xs">
          <view class="action">
            <text class="cuIcon-titles" :class="'text-' + $refs.Page.bgClass.split('-')[2]"></text>
            <text class="text-bold">类型</text>
          </view>
          <picker :value="index" :range="types" @change="e => (index = +e.detail.value)" class="margin-right">
            <text>{{ types[index] }}</text>
            <text class="cuIcon-unfold"></text>
          </picker>
        </view>
        <view class="cu-list menu sm-border bg-white card-menu margin-top margin-bottom">
          <Img ref="Img" :src="src" />
        </view>
        <view v-if="src1" class="cu-list menu sm-border bg-white card-menu margin-top margin-bottom">
          <Img ref="Img" :src="src1" />
        </view>
      </template>
    </template>
  </Page>
</template>

<script>
const map = {
  情侣头像: "ql",
  男生头像: "nan",
  女生头像: "nv",
  卡通头像: "kt",
  风景静物头像: "fj",
  微信头像: "wx",
  qq头像: "qq",
};
export default {
  data() {
    return {
      src: "",
      src1: "",
      index: uni.getStorageSync("touxinag") || 0,
      types: Object.keys(map),
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
        .request({ url: "https://api.linhun.vip/api/gexingtouxiang?apiKey=6e58be5b1f231a21d36b5dd8c3ac820c&type=" + map[this.types[this.index]] })
        .then(({ data }) => {
          this.src = data.img;
          this.src1 = data.img1 || "";
        })
        .catch(() => {})
        .finally(() => {
          this.$loaded();
          this.$refs.Page.refreshing = false;
        });
      uni.setStorageSync("touxiang", index);
    },
  },
};
</script>

<style lang="scss" scoped></style>
