<template>
  <view class="Page" :class="classList.length ? classList : bg ? bgClass : ''">
    <view class="cu-drawer-page flex flexc" :class="show ? 'show' : ''">
      <!-- <image v-if="favor" class="inlet animation-shake" :src="inlet" @click="show = true"></image> -->
      <NavigationBar :bg="classList.length || bg" :title="title" :favor="favor" :collected="collected" @collect="collect" />
      <view :id="PageID" class="flex1 w100" style="position: relative">
        <view class="w100 h100" style="position: absolute; top: 0; left: 0; overflow: hidden">
          <scroll-view
            scroll-y
            show-scrollbar
            enhanced
            scroll-with-animation
            enable-passive
            using-sticky
            :bounces="false"
            :scroll-top="willScrollTop"
            :style="{ height: height + 'px' }"
            :refresher-enabled="refresh"
            :refresher-triggered="refreshing"
            @refresherrefresh="refresherrefresh"
            @scroll="scroll"
            @scrolltoupper="nowScrollTop = 0">
            <slot ref="slot" :page="{ height, bgClass }"></slot>
          </scroll-view>
        </view>
      </view>
      <view v-if="nowScrollTop > 50" class="flex _to_top shadow padding-sm" :class="bgClass || 'bg-white'" @click="toTop">
        <text class="cuIcon-top" style="font-size: 56rpx"></text>
      </view>
      <view class="w100">
        <!-- 原生横幅广告 -->
        <AD1 v-if="type === 'YHF'" @load="getHeight" @error="getHeight" @close="getHeight" />
        <!-- 横幅广告 -->
        <AD2 v-if="type === 'B1'" @load="getHeight" @error="getHeight" @close="getHeight" />
        <!-- 视频广告 -->
        <AD3 v-if="type === 'S1'" @load="getHeight" @error="getHeight" @close="getHeight" />
        <!-- 原生多格广告 -->
        <!-- <ad-custom v-if="type === 'YDG'" unit-id="adunit-e986a45f75420d2e"></ad-custom> -->
      </view>
    </view>

    <view class="cu-drawer-window" :class="show ? 'show' : ''">
      <TreeHole v-if="show && animation" />
    </view>
    <view class="cu-drawer-close" :class="show ? 'show' : ''" @click="show = false">
      <text class="cuIcon-pullright"></text>
    </view>
  </view>
</template>

<script>
export default {
  name: "Page",
  props: {
    bg: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "YHF",
    },
    refresh: {
      type: String,
      default: "",
    },
    classList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      time: 0,
      page: {},
      show: false,
      favor: false,
      nowScrollTop: 0,
      willScrollTop: 0,
      collected: false,
      animation: false,
      refreshing: false,
      interstitialAd: {},
      rewardedVideoAd: {},
      PageID: "Page_" + Date.now(),
      inlet: "../../static/树洞.jpg",
      title: getCurrentPages().at(-1).route.split("/").at(-1),
      bgClass: this.bg
        ? getApp()
            .globalData.bgClass.slice()
            .sort(() => Math.random() - 0.5)[0]
        : "",
      height: this.$app().globalData.systemInfo.windowHeight - this.$app().globalData.navigationBarHeight,
    };
  },
  computed: {
    vip() {
      return this.$store.state.user.vip;
    },
  },
  watch: {
    // 控制树洞弹窗动画
    show() {
      if (this.show) {
        this.animation = true;
      } else {
        setTimeout(() => {
          this.animation = false;
        }, 400);
      }
    },
  },
  created() {
    // 初始化弹屏广告
    this.interstitialAd = uni.createInterstitialAd({
      adUnitId: "adunit-e3f467955c2226a4",
    });
    this.interstitialAd.onError(() => {});

    if (this.$store.state.user.openid) {
      this.recordView();
    } else {
      uni.$once("LOGON", () => this.recordView());
    }

    // 进入页面开始计时，控制弹出广告
    const times = [30, 90, 150, 210, 330, 450, 570, 750, 930];
    this.timer = setInterval(() => {
      this.time++;
      if (times.includes(this.time)) {
        !this.vip && this.showAD();
      }
      if (this.time > times.at(-1)) {
        clearInterval(this.timer);
      }
    }, 1000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
    if (this.$store.state.app.loading) {
      this.$store.commit("app/LOADED");
    }
  },
  mounted() {},
  methods: {
    // 广告渲染状态变化，重新获取内容区域高度
    getHeight() {
      this.$offset(this.PageID).then(res => {
        this.height = res.height;
      });
    },
    // 记录浏览及获取收藏状态
    recordView() {
      this.page = this.$store.state.app.list.find(e => e.page.includes(getCurrentPages().at(-1).route.split("?")[0]));
      if (this.page) {
        this.$("/record_view", this.page)
          .then(data => {
            this.collected = data.collected;
            this.$store.commit("app/UPDATE_FUNCTION", data);
          })
          .finally(() => {
            this.favor = true;
          });
      }
    },
    // 点击收藏
    collect() {
      this.$loading();
      this.$("/record_collect", this.page)
        .then(data => {
          this.collected = data.collected;
          this.$store.commit("app/UPDATE_FUNCTION", data);
          if (this.collected) {
            this.$toast("收藏成功");
          } else {
            this.$toast("取消收藏成功");
            uni.$emit("COLLECT_CANCEL", data._id);
          }
        })
        .finally(() => {
          this.$loaded();
        });
    },
    // 显示广告
    showAD(type = 1, cb = () => {}) {
      return new Promise((resolve, reject) => {
        if (type === 1) {
          !this.$store.state.user.vip &&
            this.interstitialAd
              .show()
              .then(resolve)
              .catch(() => {});
        }
        if (type === 2) {
          this.rewardedVideoAd
            .show()
            .then(resolve)
            .catch(() => {});
        }
      });
    },
    // 滚动记录滚动距离
    scroll(e) {
      this.nowScrollTop = e.detail.scrollTop;
    },
    // 回到顶部
    toTop() {
      this.willScrollTop = this.nowScrollTop;
      setTimeout(() => {
        this.willScrollTop = 0;
      });
    },
    // 下拉刷新触发
    refresherrefresh() {
      this.refreshing = true;
      this.$emit("refresh");
    },
  },
};
</script>

<style lang="scss" scoped>
.Page {
  height: 100vh;
  position: relative;

  .inlet {
    bottom: 59%;
    left: -12rpx;
    z-index: 999;
    width: 61rpx;
    height: 61rpx;
    position: absolute;
    border-radius: 20rpx;
  }

  ._to_top {
    bottom: 34%;
    right: 56rpx;
    width: 96rpx;
    height: 96rpx;
    z-index: 999999;
    border-radius: 50%;
    position: absolute;
  }
}

@keyframes shake {
  0%,
  100% {
    transform: translateX(0);
  }

  10% {
    transform: translateX(-9px);
  }

  20% {
    transform: translateX(8px);
  }

  30% {
    transform: translateX(-7px);
  }

  40% {
    transform: translateX(6px);
  }

  50% {
    transform: translateX(-5px);
  }

  60% {
    transform: translateX(4px);
  }

  70% {
    transform: translateX(-3px);
  }

  80% {
    transform: translateX(2px);
  }

  90% {
    transform: translateX(-1px);
  }
}

.animation-shake {
  animation: shake 5s infinite;
}
</style>
