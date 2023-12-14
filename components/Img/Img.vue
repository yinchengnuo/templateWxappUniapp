<template>
  <view>
    <image v-if="src" :src="src" class="w100" mode="widthFix" show-menu-by-longpress @click="$preview(src)" @load="load" @error="error" />
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
    load() {
      this.$loaded();
    },
    error() {
      this.$loaded();
    },
  },
};
</script>

<style></style>
