<template>
  <Page ref="Page" type="S1" refresh @refresh="refresh">
    <template v-slot:default="{ page }">
      <template v-if="page">
        <image v-if="src" class="w100" :src="src" mode="widthFix" show-menu-by-longpress @load="load" @error="error" />
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
    return {
      SRC: "https://api.vvhan.com/api/zhichang",
    };
  },
};
</script>

<style lang="scss" scoped></style>
