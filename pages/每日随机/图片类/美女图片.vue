<template>
  <view>
    <Page ref="Page" refresh @refresh="refresh">
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
        .request({ url: "https://jkapi.com/api/meinv_img?type=text&apiKey=385c3a57e003ecbe19aa0abc8a87ec3a" })
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
