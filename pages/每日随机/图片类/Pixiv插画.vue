<template>
  <view>
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
  </view>
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
      this.$("/proxy", { url: "https://api.lolicon.app/setu/v2" })
        .then(({ data: [data] }) => {
          this.src = data.urls.original;
          console.log("👀  .then  this.src:", this.src)
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
