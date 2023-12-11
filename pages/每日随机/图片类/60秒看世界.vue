<template>
  <Page ref="Page" refresh @refresh="refresh">
    <template v-slot:default="{ page }">
      <template v-if="page">
        <image v-if="src" class="w100" :src="src" mode="widthFix" @load="load" @error="error" />
        <ErrorImage v-if="errored" />
      </template>
    </template>
  </Page>
</template>

<script>
import PageImg from "@/mixins/PageImg.js";
export default {
  mixins: [PageImg],
  data() {
    return {};
  },
  mounted() {
    this.refresh();
  },
  methods: {
    refresh() {
      this.$loading();
      this.errored = false;
      uni
        .request({
          url: "https://api.tangdouz.com/60.php",
        })
        .then(res => {
          setTimeout(() => {
            this.src = res.data + '?t=' + Date.now();
          });
        })
        .catch(() => {
          this.error();
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
