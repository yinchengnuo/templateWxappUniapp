<template>
  <view>
    <Page ref="Page" type="S1" refresh @refresh="refresh">
      <template v-slot:default="{ page }">
        <template v-if="page">
          <Img ref="Img" :src="src" />
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
    };
  },
  created() {
    this.refresh();
  },
  methods: {
    refresh() {
      this.$refs.Page.refreshing = true;
      uni
        .request({ url: "https://jkapi.com/api/wm_girl?type=text&apiKey=968b63a35bbbbc60193c18c4af14ad2b" })
        .then(({ data }) => {
          this.src = data;
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
