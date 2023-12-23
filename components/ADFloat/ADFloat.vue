<template>
  <view v-show="show" class="index" :style="{ top: 'calc(' + index * 100 + 'vh + 233px)', left: index % 2 === 0 ? '0px' : 'auto', right: index % 2 === 1 ? '0px' : 'auto' }">
    <ad-custom v-if="show" unit-id="adunit-8b304cf8af7361f2" @error="error"></ad-custom>
  </view>
</template>

<script>
export default {
  name: "ADFloat",
  props: {
    index: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      show: true,
    };
  },
  computed: {
    vip() {
      return this.$store.state.user.vip;
    },
  },
  watch: {
    vip: {
      immediate: true,
      handler() {
        if (this.vip === true) {
          this.show = false;
          setTimeout(() => {
            this.$emit("load");
          });
        }
        if (this.vip === false) {
          this.show = true;
        }
      },
    },
  },
  methods: {
    error() {
      this.show = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.index {
  position: absolute;
  z-index: 999999999;
}
</style>
