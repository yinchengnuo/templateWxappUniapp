<template>
  <view>
    <Page ref="Page" bg refresh @refresh="refresh">
      <template v-slot:default="{ page }">
        <template v-if="page">
          <TextBoard v-if="result1" :result="result1" />
          <view v-if="result3" class="margin">
            <Img :src="result3" />
          </view>
          <TextBoard v-if="result2" :result="result2" />
        </template>
      </template>
    </Page>
  </view>
</template>

<script>
export default {
  data() {
    return {
      result1: "",
      result2: "",
      result3: "",
    };
  },
  created() {
    this.refresh();
  },
  methods: {
    refresh() {
      this.$loading();
      this.$refs.Page.refreshing = true;
      this.$("/proxy", { url: "https://api.yujn.cn/api/wjzm.php?type=wjzm" })
        .then(data => {
          this.result1 = data.title;
          this.result2 = (data.content || "").trim();
          this.result3 = data.img_url ? data.img_url[0] : "";
        })
        .finally(() => {
          this.$loaded();
          this.$refs.Page.refreshing = false;
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
