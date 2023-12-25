<template>
  <Page ref="Page">
    <template v-slot:default="{ page }">
      <template v-if="page">
        <view :style="{ height: page.height + 'px' }">
          <camera devicePosition="back" flash="off" v-if="show" class="h100"></camera>
          <canvas canvasId="firstCanvas" id="can"></canvas>
          <canvas @touchmove="move" @touchstart="move" canvasId="secCanvas" id="can2"></canvas>
          <cover-view class="co">
            <button @tap.stop.prevent="toint" class="int">取 整</button>
          </cover-view>
          <cover-view class="showWrap co">
            <button @tap="showFun" class="ph" v-if="!show && !isTake">开摄像头</button>
            <button @tap="close" class="ph" v-if="show">关摄像头</button>
            <button @tap="reset" class="ph" v-if="isTake && !show">复 位</button>
          </cover-view>
          <cover-view class="takeWrap co">
            <button @tap="takePhoto" class="take" v-if="!isTake && show">拍 照</button>
            <button @tap="takePhoto" class="take" v-if="isTake && !show">重 拍</button>
          </cover-view>
        </view>
      </template>
    </template>
  </Page>
</template>

<script>
export default {
  data() {
    return {
      isTake: false,
      show: false,
      isAuth: uni.getStorageSync("isAuth"),
    };
  },
  onLoad() {
    uni.showShareMenu();
    this.n = 0;
    var t = uni.getSystemInfoSync();
    t.windowHeight > 1.6 * t.windowWidth ? (this.w = 0.8 * t.windowWidth) : (this.w = t.windowHeight / 2);
    this.h = t.windowHeight;
    this.width = t.windowWidth;
    this.cxt = uni.createCanvasContext("secCanvas");
    this.bgcanvas = uni.createCanvasContext("firstCanvas");
    this.bgcanvas.drawImage("http://xue.ccy1994.top/xiaochengxu/mini-tools/static/pages/my_module/protractor/BackGround.jpg", 0, 0, 400, 1000, 0, 0, this.width, this.h);
    this.cxt.translate(0.04 * this.w, this.h / 2);
    this.drawbg();
    this.drawPointer();
  },
  methods: {
    move(t) {
      var a = this.cxt;
      var i = this.w;
      var e = this.h;
      var s = t.touches[0].y;
      a.clearRect(0, 0, i, e);
      var h = Math.atan((s - e / 2) / t.touches[0].x);
      this.n = (h / Math.PI) * 180;
      a.translate(0.04 * i, e / 2);
      a.moveTo(0, 0);
      a.lineTo(0.84 * i * Math.cos(h), 0.84 * i * Math.sin(h));
      a.stroke();
      a.beginPath();
      a.arc(0.87 * i * Math.cos(h), 0.87 * i * Math.sin(h), 0.03 * i, 0, 2 * Math.PI);
      a.stroke();
      a.fillStyle = "rgba(255, 255, 255, 0.5)";
      a.fill();
      a.moveTo(0.9 * i * Math.cos(h), 0.9 * i * Math.sin(h));
      a.lineTo(0.95 * i * Math.cos(h), 0.95 * i * Math.sin(h));
      a.stroke();
      a.rotate(0.5 * Math.PI);
      a.textAlign = "center";
      a.fillStyle = "#000";
      a.font = "bold 30px Arial";
      a.fillText((90 + this.n).toFixed(1) + "°", 0, 0.4 * -i);
      a.font = "bold 20px Arial";
      a.fillText("(" + (90 - this.n).toFixed(1) + "°)", 0, 0.3 * -i);
      a.draw();
    },

    drawbg() {
      var t = this.bgcanvas;
      var a = this.w;
      var i = this.h;
      t.save();
      t.translate(0.04 * a, i / 2);
      t.fillStyle = "rgba(255,255,255,0.5)";
      t.arc(0, 0, 0.8 * a, 0.5 * Math.PI, 1.5 * Math.PI, true);
      t.closePath();
      t.stroke();
      t.fill();
      t.beginPath();
      t.fillStyle = "#000";
      t.arc(0, 0, 5, 0, 2 * Math.PI, true);
      t.fill();
      for (var e = Math.PI / 180, s = 1; s < 181; s++) {
        t.beginPath();
        t.rotate(e);
        if (s % 10 == 0 && 180 !== s) {
          t.moveTo(0, 0.73 * -a);
          t.textAlign = "center";
          t.font = "bold 12px Arial";
          t.fillText(s, 0, 0.68 * -a);
        } else {
          if (s % 5 == 0) {
            t.moveTo(0, 0.75 * -a);
          } else {
            t.moveTo(0, 0.77 * -a);
          }
        }
        t.lineTo(0, 0.8 * -a);
        t.stroke();
      }
      t.restore();
      t.draw();
    },

    drawPointer() {
      var t = this.cxt;
      var a = this.w;
      var i = this.n;
      t.moveTo(0, 0);
      t.lineTo(0.84 * a * Math.cos((i / 180) * Math.PI), 0.84 * a * Math.sin((i / 180) * Math.PI));
      t.stroke();
      t.beginPath();
      t.arc(0.87 * a * Math.cos((i / 180) * Math.PI), 0.87 * a * Math.sin((i / 180) * Math.PI), 0.03 * a, 0, 2 * Math.PI);
      t.stroke();
      t.fillStyle = "rgba(255, 255, 255, 0.5)";
      t.fill();
      t.moveTo(0.9 * a * Math.cos((i / 180) * Math.PI), 0.9 * a * Math.sin((i / 180) * Math.PI));
      t.lineTo(0.95 * a * Math.cos((i / 180) * Math.PI), 0.95 * a * Math.sin((i / 180) * Math.PI));
      t.stroke();
      t.font = "bold 30px Arial";
      t.textAlign = "center";
      t.fillStyle = "#000";
      t.rotate(0.5 * Math.PI);
      t.fillText((90 + i).toFixed(1) + "°", 0, 0.4 * -a);
      t.font = "bold 20px Arial";
      t.fillText("(" + (90 - i).toFixed(1) + "°)", 0, 0.3 * -a);
      t.draw();
    },

    reset() {
      this.bgcanvas.drawImage("http://xue.ccy1994.top/xiaochengxu/mini-tools/static/pages/my_module/protractor/BackGround.jpg", 0, 0, 400, 1000, 0, 0, this.width, this.h);
      this.drawbg();
      this.show = false;
      this.isTake = false;
    },

    close() {
      this.show = false;
      this.bgcanvas.drawImage("http://xue.ccy1994.top/xiaochengxu/mini-tools/static/pages/my_module/protractor/BackGround.jpg", 0, 0, 400, 1000, 0, 0, this.width, this.h);
      this.drawbg();
    },

    showFun() {
      var that = this;
      false !== uni.getStorageSync("isAuth")
        ? (true === uni.getStorageSync("isAuth") && ((this.show = true), this.bgcanvas.clearRect(0, 0, this.width, this.h), this.drawbg()),
          "" === uni.getStorageSync("isAuth") &&
            uni.authorize({
              scope: "scope.camera",
              success: () => {
                this.show = true;
                this.isAuth = true;
                uni.getSetting({
                  success: function (t) {
                    uni.setStorageSync("isAuth", t.authSetting["scope.camera"]);
                  },
                });
                that.bgcanvas.clearRect(0, 0, that.width, that.h);
                that.drawbg();
              },
              fail: function () {
                uni.setStorageSync("isAuth", false);
              },
            }))
        : uni.openSetting({
            success: function (t) {
              uni.setStorageSync("isAuth", t.authSetting["scope.camera"]);
            },
          });
    },

    takePhoto(t) {
      var that = this;
      this.isTake
        ? (this.bgcanvas.clearRect(0, 0, this.width, this.h), this.drawbg(), (this.show = true), (this.isTake = false))
        : uni.createCameraContext().takePhoto({
            quality: "high",
            success: function (t) {
              that.bgcanvas.drawImage(t.tempImagePath, 0, 0, that.width, that.h);
              that.drawbg();
              this.show = false;
              this.isTake = true;
            },
          });
    },

    toint(t) {
      var a = this.cxt;
      var i = this.w;
      var e = this.h;
      this.n = Math.round(this.n);
      a.clearRect(0, 0, i, e);
      a.translate(0.04 * i, e / 2);
      this.drawPointer();
    },

    jumpMeasure() {
      uni.navigateBack();
    },
  },
};
</script>

<style lang="scss" scoped>
camera {
  z-index: 1;
}

#can,
#can2 {
  background-color: initial;
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 0;
}

#can2 {
  z-index: 1;
}

.co {
  background-color: initial;
  bottom: 147rpx;
  height: 80rpx;
  position: fixed;
  right: 40rpx;
  transform: rotateZ(90deg);
  transform-origin: right top;
  width: 150rpx;
  z-index: 2;
}

.showWrap {
  right: 140rpx;
}

.takeWrap {
  right: 240rpx;
}

.co1 {
  background-color: initial;
  position: fixed;
  right: 40rpx;
  top: 40rpx;
  transform: rotateZ(90deg) translateX(150rpx);
  transform-origin: right top;
  z-index: 999;
}

.co1,
button {
  height: 80rpx;
  width: 150rpx;
}

button {
  background: #5cb85c;
  color: #fff;
  font-size: 30rpx;
  line-height: 80rpx;
  z-index: 199;
}

.chi {
  background-color: #5bc0de;
}

.ph {
  background-color: #f0ad4e;
}

button {
  text-align: center;
}
</style>
