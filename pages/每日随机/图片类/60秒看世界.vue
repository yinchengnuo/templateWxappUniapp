<template>
  <Page ref="Page" refresh @refresh="refresh">
    <template v-slot:default="{ page }">
      <template v-if="page">
        <image v-if="src" class="w100" :src="src" mode="widthFix" @load="load" @error="error" />
        <ErrorImage v-if="errored" />
        <AD2 />
        <AD3 />
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
          url: "http://api.tangdouz.com/60.php",
        })
        .then(res => {
          this.src = "";
          setTimeout(() => {
            this.src = res.data;
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
