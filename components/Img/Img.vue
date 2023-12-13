<template>
  <view style="position: relative" :style="{ height: loading ? '100vh' : 'auto' }">
    <view v-if="loading" class="flex" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.1)">
      <LoadingSpin />
    </view>
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
      loading: true,
      errored: false,
    };
  },
  watch: {
    src() {
      this.loading = true;
    },
  },
  methods: {
    load() {
      this.loading = false;
    },
    error() {
      this.loading = false;
    },
  },
};
</script>

<style></style>
