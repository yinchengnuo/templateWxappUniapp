<template>
  <view>
    <Page ref="Page">
      <template v-slot:default="{ page }">
        <template v-if="page">
          <view :style="{ height: page.height + 'px' }">
            <canvas canvasId="ruler" class="ruler" :style="{ height: page.height + 'px', width: $app().globalData.systemInfo.windowWidth + 'px' }"></canvas>
            <view class="show_tip">小提示:如果测量有误差,可以调整分辨率系数校对</view>
            <view class="show">分辨率系数：{{ coefficient }}</view>
            <slider activeColor="#000000" @change="changeCoefficient" blockColor="#000000" class="slider" max="70" min="30" :value="coefficient"></slider>
            <view @tap="reset" class="button" hoverClass="button-hover">重置</view>
          </view>
        </template>
      </template>
    </Page>
  </view>
</template>

<script>
export default {
  data() {
    return {
      width: 0,
      height: 0,
      coefficient: Number(uni.getStorageSync("chizi")) || 56.3,
    };
  },
  onLoad() {
    this.height = this.$refs.Page.height;
    this.width = getApp().globalData.systemInfo.windowWidth;

    this.drawRuler(this.width, this.height, this.coefficient);
  },
  methods: {
    drawRuler: function (e, t, i) {
      for (var that = this, o = t / i + 1, s = uni.createCanvasContext("ruler", that), n = 0; n < 2; n++) {
        if (1 == n) {
          s.translate(e, t);
          s.rotate((180 * Math.PI) / 180);
        }
        s.setStrokeStyle("#000000");
        s.setLineWidth(1);
        for (var r = 0; r < o; r++) {
          var c = 10 + r * i;
          s.save();
          s.moveTo(0, c);
          s.lineTo(30, c);
          s.setFontSize(10);
          s.setTextBaseline("middle");
          s.setFillStyle("#000000");
          s.fillText(r, 35, c);
          s.moveTo(0, c + i / 2);
          s.lineTo(20, c + i / 2);
          s.restore();
          for (var f = 0; f < 10; f++) {
            if (4 != f) {
              s.save();
              s.moveTo(0, c + ((f + 1) * i) / 10);
              s.lineTo(10, c + ((f + 1) * i) / 10);
              s.restore();
            }
          }
        }
        s.stroke();
      }
      s.draw();
    },
    changeCoefficient(e) {
      this.coefficient = e.detail.value;
      uni.setStorageSync("chizi", e.detail.value);
      this.drawRuler(this.width, this.height, e.detail.value);
    },

    reset(e) {
      this.coefficient = 56.3;
      uni.setStorageSync("chizi", 56.3);
      this.drawRuler(this.width, this.height, 56.3);
    },
  },
};
</script>

<style lang="scss" scoped>
.show_tip {
  width: 350rpx;
  margin: 0 200rpx;
  font-size: 28rpx;
  position: fixed;
  top: 20vh;
  left: 0;
  z-index: 999;
  text-align: center;
  color: orange;
}

.show {
  width: 350rpx;
  margin: 0 200rpx;
  font-size: 40rpx;
  position: fixed;
  top: 40vh;
  left: 0;
  z-index: 999;
  text-align: center;
  color: #000000;
}

.slider {
  width: 350rpx;
  margin: 0 200rpx;
  position: fixed;
  top: 50vh;
  left: 0;
  z-index: 999;
}

.button {
  box-sizing: border-box;
  width: 350rpx;
  font-size: 30rpx;
  margin: 0 200rpx;
  position: fixed;
  top: 60vh;
  left: 0;
  z-index: 999;
  background-color: #000000;
  border-radius: 80rpx;
  text-align: center;
  height: 80rpx;
  line-height: 80rpx;
  color: #ffffff;
}

.button-hover {
  background-color: orange;
  color: #ffffff;
}
</style>
