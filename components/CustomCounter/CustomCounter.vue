<template>
  <view class="custom-counter" :class="{ mini: mini }">
    <text class="text reduce" @tap.stop="reduce" @longpress.stop="longpress(1)" @touchend="longpressEnd">-</text>
    <text class="text val">{{ counterValue }}</text>
    <text class="text add" @tap.stop="add" @longpress.stop="longpress(2)" @touchend="longpressEnd">+</text>
  </view>
</template>

<script>
export default {
  props: {
    value: String,
    mini: String,
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
  },
  data() {
    return {
      timer: null,
      counterValue: Number(this.value),
    };
  },
  methods: {
    reduce() {
      // -
      if (this.counterValue > this.min) {
        this.counterValue--;
        this.$emit("input", this.counterValue);
      }
    },
    add() {
      // +
      if (this.counterValue < this.max) {
        this.counterValue++;
        this.$emit("input", this.counterValue);
      }
    },
    longpress(type) {
      // 长按
      if (type === 1) {
        this.timer = setInterval(() => this.reduce(), 88);
      }
      if (type === 2) {
        this.timer = setInterval(() => this.add(), 88);
      }
    },
    longpressEnd() {
      // 长按结束
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.custom-counter {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 224rpx;
  height: 52rpx;
  font-size: 40rpx;
  border-radius: 8rpx;
  border: 1rpx solid #000000;

  &.mini {
    width: 98rpx;
    height: 40rpx;
    font-size: 44rpx;

    .val {
      font-size: 24rpx;
    }
  }

  .text {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    height: 100%;
    box-sizing: border-box;

    &.reduce {
      border-right: 2rpx solid #000000;
    }

    &.add {
      border-left: 2rpx solid #000000;
    }
  }
}
</style>
