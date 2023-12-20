<template>
  <view>
    <image v-if="src && !errored" :src="src" class="w100" mode="widthFix" show-menu-by-longpress @click="$preview(src)" @load="load" @error="error" />
    <view v-if="title && src && !errored" class="text-center">{{ title }}</view>
  </view>
</template>

<script>
export default {
  name: "Img",
  props: {
    src: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      errored: false,
    };
  },
  created() {
    this.$loading();
  },
  watch: {
    src() {
      this.$loading();
    },
  },
  methods: {
    load(e) {
      console.log("load", e);
      this.$loaded();
    },
    error() {
      this.errored = true;
      this.$loaded();
    },
  },
};
</script>

<style></style>
