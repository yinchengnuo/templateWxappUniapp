<template>
  <view>
    <web-view v-if="src" :src="src" />
  </view>
</template>

<script>
export default {
  data() {
    return {
      time: 0,
      src: "",
      interstitialAd: null,
      times: [30, 90, 150, 210, 330, 450, 570, 750, 930],
    };
  },
  computed: {
    vip() {
      return this.$store.state.user.vip;
    },
  },
  watch: {
    // 时间变化控制弹窗弹出
    time() {
      if (this.times.includes(this.time)) {
        !this.vip && this.showAD();
      }
      if (this.time > this.times.at(-1)) {
        clearInterval(this.timer);
      }
    },
  },
  created() {
    // 初始化弹屏广告
    this.interstitialAd = uni.createInterstitialAd({ adUnitId: "adunit-e3f467955c2226a4" });
    this.interstitialAd.onError(() => {});

    // 进入页面开始计时，控制弹出广告
    this.timer = setInterval(() => {
      this.time++;
    }, 1000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
    if (this.$store.state.app.loading) {
      this.$store.commit("app/LOADED");
    }
  },
  onLoad({ src }) {
    if (this.$store.state.user.openid) {
      src && this.init(src);
    } else {
      uni.$once("LOGON", () => src && this.init(src));
    }
  },
  methods: {
    init(src) {
      const func = this.$store.state.app.list.find(e => e.src === src);
      if (func) {
        if (process.env.NODE_ENV === "production") {
          this.$loading();
          this.$("/function_view", func)
            .then(data => {
              this.$store.commit("app/UPDATE_FUNCTION", data);
              this.src = `${src}?openid=${this.$store.state.user.openid}&_id=${func._id}&collected=${data.collected ? 1 : 0}`;
            })
            .finally(() => this.$loaded());
        } else {
          this.src = src;
        }
      } else {
        this.src = src;
      }
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
  },
};
</script>

<style lang="scss" scoped></style>
