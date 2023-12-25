<template>
  <Page ref="Page">
    <template v-slot:default="{ page }">
      <template v-if="page">
        <view>
          <view class="my-info">
            <text class="my-text">2010年第六次全国人口普查，我国人口平均预期寿命大约75岁，也就是900个月，我们用以下30x30的格子来代表人的一生，看看我们一生的时间吧 </text>
          </view>
          <view class="page-container">
            <text class="my-tip">请点击选择出生日期</text>
            <picker @change="bindDateChange" fields="month" mode="date" :value="l4">
              <view class="my-picker">{{ l3 }}</view>
            </picker>
            <canvas disableScroll canvasId="canvas-grid" class="my-canvas" :style="'width: ' + l1 + 'px; height: ' + l1 + 'px;'"></canvas>
          </view>
          <view class="adbt"></view>
        </view>
      </template>
    </template>
  </Page>
</template>

<script>
export default {
  data() {
    return {
      l1: 0,
      l2: 0,
      l3: "1990年1月",
      l4: "1990-01",
      l5: "life_time",
      l6: 0,
      singleWidth: "",
    };
  },
  onLoad: function (t) {
    var that = this;
    uni.getStorage({
      key: this.l5,
      success: function (t) {
        that.l6 = t.data;
      },
    });
    var e = (74 * uni.getSystemInfoSync().windowWidth) / 75;
    var n = parseInt((e - 2) / 30);
    e = 30 * n + 2;
    this.l1 = e;
    this.singleWidth = n;
  },
  onReady: function () {
    var t = uni.getStorageSync("lift_time_birth_date");
    if (t && t.length > 0) {
      this.processDate(t, false);
    } else {
      this.drawGrid(0);
    }
  },
  onShow: function () {},
  onHide: function () {},
  onUnload: function () {
    this.currentNum = this.monthNum;
    this.isAnimating = false;
  },
  methods: {
    drawGrid: function (t) {
      var i = this.l1;
      var e = this.singleWidth;
      var n = uni.createCanvasContext("canvas-grid");
      n.setFillStyle("#8ac6d1");
      if (t > 0) {
        for (var a = 0; a < 30; a++) {
          for (var r = false, s = 0; s < 30; s++) {
            n.fillRect(s * e + 1, a * e + 1, e, e);
            if (30 * a + s >= t - 1) {
              r = true;
              break;
            }
          }
          if (r) {
            break;
          }
        }
      }
      for (n.setStrokeStyle("#999"), n.strokeRect(0, 0, i, i), a = 0; a < 30; a++) {
        for (s = 0; s < 30; s++) {
          n.strokeRect(s * e + 1, a * e + 1, e, e);
        }
      }
      n.draw();
    },

    drawGridWithAnim: function () {
      var that = this;
      this.drawGrid(this.currentNum);
      if (this.currentNum != this.monthNum) {
        setTimeout(function () {
          that.isAnimating = true;
          if (that.currentNum > that.monthNum) {
            that.currentNum = that.currentNum - 1;
          } else {
            that.currentNum = that.currentNum + 1;
          }
          that.drawGridWithAnim();
        }, 40);
      } else {
        this.isAnimating = false;
      }
    },

    bindDateChange: function (t) {
      console.log("picker value=", t.detail.value);
      this.processDate(t.detail.value, true);
    },

    processDate: function (t, i) {
      var e = new Date();
      var n = e.getFullYear();
      var a = e.getMonth() + 1;
      console.log(n + ":" + a);
      var r = t.split("-");
      var s = parseInt(r[0]);
      var o = parseInt(r[1]);
      console.log(s + ":" + o);
      if (s > n || (s == n && o > a)) {
        this.showModal("所选时间超过当前时间");
      } else {
        var h = 12 * (n - s) + (a - o);
        console.log(h);
        if (h >= 720 && i && !this.shownWish) {
          this.showModal("祝愿身体健康");
          this.shownWish = true;
        }
        if (h > 900) {
          h = 900;
        }
        i ? (this.currentNum || (this.currentNum = 0), (this.monthNum = h), this.isAnimating || this.drawGridWithAnim()) : ((this.monthNum = this.currentNum = h), this.drawGrid(h));
        this.l4 = t;
        this.l3 = this.formatDateText(t);
        uni.setStorage({
          key: "lift_time_birth_date",
          data: t,
        });
      }
    },

    formatDateText: function (t) {
      return (t = t.split("-"))[0] + "年" + parseInt(t[1]) + "月";
    },

    showModal: function (t) {
      uni.showModal({
        title: "温馨提示",
        content: t,
        showCancel: false,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.page-container {
  display: flex;
  flex-direction: column;
  padding: 15rpx;
}

.my-info {
  background: #8ac6d1;
  color: #3a3a3a;
  font-size: 28rpx;
  padding: 10rpx;
}

.xf {
  bottom: 20%;
}

.my-tip {
  color: #8a8a8a;
  font-size: 28rpx;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10rpx;
}

picker {
  margin-top: 15rpx;
}

.my-picker {
  font-size: 62rpx;
  text-align: center;
  text-decoration: underline;
}

.my-canvas,
.my-share {
  margin-left: auto;
  margin-right: auto;
  margin-top: 20rpx;
}

.my-share {
  align-items: center;
  display: flex;
  flex-direction: row;
}

.my-share-btn {
  font-size: 35rpx;
  margin-left: 0rpx;
  margin-right: 0rpx;
  padding: 0rpx;
  text-align: center;
  width: 200rpx;
}

button {
  background-color: #fff;
  color: #2c2c2c;
}

button::after {
  border: none;
}
</style>
