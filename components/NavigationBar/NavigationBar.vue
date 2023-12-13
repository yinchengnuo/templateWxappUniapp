<template>
  <view class="index" :style="{ background: bg ? '' : '#E4E4E4', paddingTop: paddingTop + 'px' }" @click="test">
    <view class="bar flex" :style="{ height: height + 'px' }">
      <view class="left flex">
        <view class="action_bar h100 flex" :style="{ width: height + 'px' }" @click="back">
          <text v-if="PageStack.length === 1" class="cuIcon-home"></text>
          <text v-else class="cuIcon-back"></text>
        </view>
        <view v-if="favor" class="action_bar h100 flex" :style="{ width: height + 'px' }" @click="$emit('collect')">
          <text v-if="collected" class="cuIcon-favorfill" style="color: #f37b1d"></text>
          <text v-else class="cuIcon-favor"></text>
        </view>
      </view>
      <text class="text-bold" :class="refresh ? 'refresh' : ''">{{ title }}</text>
    </view>
  </view>
</template>

<script>
export default {
  name: "NavigationBar",
  props: {
    bg: {
      type: String,
      default: "",
    },
    refresh: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "ToolBox365",
    },
    favor: {
      type: Boolean,
      default: false,
    },
    collected: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      PageStack: getCurrentPages(),
      paddingTop: this.$app().globalData.statusBarHeight,
      height: this.$app().globalData.navigationBarHeight - this.$app().globalData.statusBarHeight,
    };
  },
  methods: {
    back() {
      if (this.PageStack.length === 1) {
        uni.reLaunch({
          url: "/pages/首页/首页",
        });
      } else {
        uni.navigateBack();
      }
    },
    test() {
      this.$store.state.user.vip = !this.$store.state.user.vip;
    },
  },
};
</script>

<style lang="scss" scoped>
.index {
  width: 100vw;
  box-sizing: border-box;

  .bar {
    font-size: 17px;
    position: relative;
  }

  .left {
    top: 0;
    left: 0;
    height: 100%;
    position: absolute;

    .action_bar {
      font-size: 20px;
    }
  }
}

.refresh {
  position: relative;
  &::after {
    left: 111%;
    bottom: 0;
    font-size: 18rpx;
    position: absolute;
    content: "下拉刷新";
    white-space: nowrap;
  }
}
</style>
