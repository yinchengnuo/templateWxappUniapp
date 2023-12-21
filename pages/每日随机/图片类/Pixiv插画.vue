<template>
  <Page ref="Page" bg refresh @refresh="refresh">
    <template v-slot:default="{ page }">
      <template v-if="page">
        <Img v-if="src" ref="Img" :src="src" />
        <view class="flex" style="flex-wrap: wrap">
          <view v-for="item in tags" :key="item.content" class="padding-xs">
            <view :class="'bg-' + item.color" class="cu-tag radius">{{ item.content }}</view>
          </view>
        </view>
      </template>
    </template>
  </Page>
</template>

<script>
export default {
  data() {
    return {
      src: "",
      tags: [],
    };
  },
  created() {
    this.refresh();
  },
  methods: {
    refresh() {
      this.$refs.Page.refreshing = true;
      uni
        .request({ url: "https://ybapi.cn/API/pixiv.php" })
        .then(({ data }) => {
          this.src = data.urls.original;
          const colors = getApp()
            .globalData.colors.slice()
            .sort(() => Math.random() - 0.5);
          this.tags = ["作者:" + data.author, "标题:" + data.title, ...data.tags].map((e, i) => ({ content: e, color: colors[i % 12] }));
        })
        .catch(() => {})
        .finally(() => {
          this.$refs.Page.refreshing = false;
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
