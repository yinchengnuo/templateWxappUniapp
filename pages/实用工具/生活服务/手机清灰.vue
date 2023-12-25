<template>
  <Page ref="Page" type="S1">
    <template v-slot:default="{ page }">
      <template v-if="page">
        <view>
          <progress :active="true" activeMode="forwards" color="#F69B30" :percent="newprogress" :style="'display:' + isProgress"></progress>
          <view class="container">
            <image class="bo" src="http://xue.ccy1994.top/xiaochengxu/mini-tools/static/pages/my_module/qh/bo.png"></image>
            <view class="progress">
              {{ progress }}
              <image class="good" :src="goodUrl" :style="'display:' + isGood"></image>
            </view>
            <text class="tip">{{ tip }}</text>
            <text class="tip2" :style="'display:' + isTip2">{{ tip2 }}</text>
            <view class="btn">
              <button @tap="cleanNew" :disabled="subing">{{ btnData }}</button>
            </view>
          </view>
        </view>
      </template>
    </template>
  </Page>
</template>

<script>
var app = getApp();
var audio = uni.createInnerAudioContext();
var n = (uni.createCanvasContext("progress"), null);
export default {
  data() {
    return {
      title: "手机清灰",
      bannerUnitId: getApp().globalData.bannerUnitId,
      bar: "",
      tip: "(原理：利用声波震动，使灰尘震动脱离扬声器)",
      tip2: "(安卓、苹果通用，需打开声音)",
      isActive: "none",
      isTip2: "block",
      isGood: "none",
      progress: "清理手机喇叭灰尘",
      goodUrl: "",
      src: "https://xue.ccy1994.top/xiaochengxu/mini-tools/static/getvoice.mp3",
      isProgress: "none",
      newprogress: "0",
      btnData: "马上清理",
      addLeft: "208.5rpx",
      isClean: 0,
      duration: 510000,
      goodWidth: "",
      goodHeight: "",
      subing: "",
    };
  },
  onLoad() {
    uni.setKeepScreenOn({
      keepScreenOn: true,
    });
  },
  onShow() {
    var that = this;
    var o = void 0;
    try {
      o = uni.getMenuButtonBoundingClientRect ? uni.getMenuButtonBoundingClientRect() : null;
    } catch (t) {
      console.log("CatchClause", t);
      console.log("CatchClause", t);
      this.addLeft = o.left - 80 + "rpx";
    }
    audio.src = this.src;
    if (uni.setInnerAudioOption) {
      uni.setInnerAudioOption({
        obeyMuteSwitch: false,
      });
    }
    audio.onCanplay(function () {
      audio.onPlay(function () {
        console.log("开始播放");
      });
      audio.onTimeUpdate(function () {
        console.log("进度更新：", audio.currentTime);
        var n = Math.round(audio.currentTime);
        var o = Math.round(audio.duration);
        var i = parseInt((n / o) * 100);
        that.newprogress = i;
      });
      audio.onEnded(function () {
        console.log("结束播放");
        that.progress = "清理完成";
        that.tip = "(建议每周清理一次)";
        that.goodWidth = "44rpx";
        that.goodHeight = "44rpx";
        that.goodUrl = "http://xue.ccy1994.top/xiaochengxu/mini-tools/static/pages/my_module/qh/good.png";
        that.isActive = "block";
        that.isGood = "block";
        that.isTip2 = "none";
        that.btnData = "马上清理";
        that.isClean = 0;
        setTimeout(function () {
          if (n) {
            n.show().catch(function (t) {
              console.error(t);
            });
          }
        }, 1500);
      });
    });
  },
  onUnload() {
    if (this.isClean == 1) {
      audio.stop();
    }
  },
  methods: {
    cleanNew: function () {
      if (this.isClean == 1) {
        audio.stop();
        this.progress = "清理完成";
        this.tip = "(建议每周清理一次)";
        this.goodWidth = "44rpx";
        this.goodHeight = "44rpx";
        this.goodUrl = "http://xue.ccy1994.top/xiaochengxu/mini-tools/static/pages/my_module/qh/good.png";
        this.isActive = "block";
        this.isGood = "block";
        this.isTip2 = "none";
        this.btnData = "马上清理";
        this.isClean = 0;
        this.isProgress = "none";
        return;
      }
      audio.play();
      this.isActive = "block";
      this.progress = "清理中...";
      this.tip = "(将音量调至最大效果更佳)";
      this.isTip2 = "none";
      this.btnData = "结束";
      this.isProgress = "block";
      this.goodUrl = "";
      this.isClean = 1;
    },
  },
};
</script>

<style lang="scss" scoped>
#progress {
  height: 18rpx;
  background-color: #f69b30;
}

.add-mine {
  position: fixed;
  top: 5px;
  left: 208.5rpx;
}

.add-mine .add-bg {
  height: 100rpx;
  width: 500rpx;
}

.add-mine .add-close {
  width: 32rpx;
  height: 32rpx;
  position: absolute;
  top: 18rpx;
  right: 15rpx;
}

.add-mine view {
  font-size: 24rpx;
  width: 420rpx;
  position: absolute;
  top: 18rpx;
  right: 60rpx;
  z-index: 2;
}

.cleaned {
  width: 1rpx;
}

.newprogress {
  background: #f69b30;
  height: 14rpx;
}

.container .btn button {
  background-color: #f69b30;
  color: #fff;
  width: 540rpx;
  font-size: 38rpx;
  border-radius: 20rpx;
  margin-top: 100rpx;
  margin-bottom: 100rpx;
}

.ad-wrap {
  padding: 0;
  height: auto;
  margin-top: 10rpx;
}

.container .bo {
  height: 90rpx;
  width: 440rpx;
  overflow: inherit;
}

.container .progress {
  color: #2edfa3;
  padding: 30rpx 0rpx 0rpx;
  display: block;
  font-size: 46rpx;
}

.container .tip {
  color: #e9a659;
  font-size: 30rpx;
  margin-top: 30rpx;
}

.container .tip2 {
  color: #e9a659;
  margin: 20rpx 0rpx 0rpx;
  font-size: 26rpx;
}

.container .good {
  float: right !important;
  width: 44rpx;
  height: 44rpx;
  margin-left: 8rpx;
}

.my-ad {
  position: fixed;
  z-index: 2;
  top: 750rpx;
  right: 20rpx;
  background-color: #fff;
  border-radius: 50%;
  margin: 0 auto;
}

.ad-logo,
.my-ad {
  width: 100rpx;
  height: 100rpx;
}

.ad-close {
  width: 30rpx;
  height: 30rpx;
  position: absolute;
  top: -12rpx;
  right: -12rpx;
}

.my-ad text {
  display: block;
  width: 60rpx;
  height: 25rpx;
  color: #fff;
  background: rgba(0, 0, 0, 0.3);
  font-size: 16rpx;
  border-radius: 6rpx;
  text-align: center;
  opacity: 0.5;
  position: absolute;
  right: 20rpx;
  bottom: 8rpx;
}

.time-wrap {
  position: absolute;
  top: 22rpx;
  left: 35rpx;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}

.time {
  font-size: 26rpx;
  color: #e9a659;
}

.time text {
  font-size: 40rpx;
  color: #e9a659;
}

.add-time {
  font-size: 28rpx;
  color: #e9a659;
}

.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 200rpx 0 100rpx;
  box-sizing: border-box;
}

.wxapp-toast-mask {
  opacity: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 888;
}

.wxapp-toast-content-box {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 999;
}

.wxapp-toast-content {
  width: 50%;
  padding: 20rpx;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 20rpx;
}

.wxapp-toast-content-text {
  height: 100%;
  width: 100%;
  color: #fff;
  font-size: 28rpx;
  text-align: center;
}
</style>
