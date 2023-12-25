<template>
  <Page ref="Page">
    <template v-slot:default="{ page }">
      <template v-if="page">
        <view :style="{ height: page.height + 'px' }">
          <button @tap="onChooseSuccess" class="button" hoverClass="button-hover">选择图片</button>
          <image class="image" v-if="!(isChoose == true ? false : true)" :src="img" :style="'width:' + showInfo.width + 'px;height:' + showInfo.height + 'px'"></image>
          <view class="choose" v-if="!(isChoose == true ? false : true)" :style="'width:' + showInfo.width + 'px;height:' + showInfo.height + 'px'">
            <view
              @tap="previewImage"
              :class="'choose-module ' + (index % 2 == 0 ? 'choose-module-odd' : '')"
              :data-index="index"
              :style="'width:' + showInfo.width / 3 + 'px;height:' + showInfo.height / 3 + 'px;line-height:' + showInfo.height / 3 + 'px;'"
              v-for="(item, index) in [0, 1, 2, 3, 4, 5, 6, 7, 8]"
              :key="index">
              {{ index + 1 }}
            </view>
          </view>
          <canvas :canvasId="canvasInfo.id" class="canvas" :style="'width:' + canvasInfo.width + 'px;height:' + canvasInfo.height + 'px;position:absolute;top:' + (showInfo.height + systemInfo.height) + 'px;left:0;'"></canvas>
        </view>
      </template>
    </template>
  </Page>
</template>

<script>
export default {
  data() {
    return {
      canvasInfo: {
        id: "mycanvas",
        width: getApp().globalData,
        height: 568,
      },
      showInfo: {
        width: 320,
        height: 568,
      },
      systemInfo: {
        width: 320,
        height: 568,
      },
      img: "",
      isChoose: false,
    };
  },
  onLoad() {
    this.systemInfo.width = getApp().globalData.systemInfo.windowWidth;
    this.systemInfo.height = getApp().globalData.systemInfo.windowHeight;
  },
  methods: {
    imageToCanvas: function (t) {
      var that = this;
      var i = that.canvasInfo;
      var s = uni.createCanvasContext(i.id, that);
      s.drawImage(t, 0, 0, i.width, i.height);
      s.draw();
    },

    cutImage: function (t) {
      var that = this;
      uni.getImageInfo({
        src: t,
        success: function (i) {
          var s = i.width;
          var a = i.height;
          uni.getSystemInfo({
            success: function (i) {
              that.systemInfo.width = i.windowWidth;
              that.systemInfo.height = i.windowHeight;
              that.canvasInfo.width = s;
              that.canvasInfo.height = a;
              that.showInfo.width = i.windowWidth;
              that.showInfo.height = (i.windowWidth / s) * a;
              that.imageToCanvas(t);
            },
          });
        },
      });
    },

    previewImage: function (t) {
      var that = this;
      var i = that.canvasInfo;
      var s = t.currentTarget.dataset.index;
      uni.canvasToTempFilePath(
        {
          canvasId: i.id,
          x: ((s % 3) * i.width) / 3,
          y: (parseInt(s / 3) * i.height) / 3,
          width: i.width / 3,
          height: i.height / 3,
          success: function (t) {
            console.log("成功路径： " + t.tempFilePath);
            var e = [];
            e.push(t.tempFilePath);
            uni.previewImage({
              urls: e,
            });
          },
        },
        that
      );
    },

    onChooseSuccess() {
      this.$choose().then(({ path }) => {
        this.img = path;
        this.isChoose = true;
        this.cutImage(path);
        uni.showToast({
          title: "点击图片预览,再长按即可保存!",
          icon: "none",
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.image {
  display: block;
  box-sizing: border-box;
  overflow: hidden;
  position: absolute;
  top: 140rpx;
  left: 0;
  z-index: 99;
}

.choose {
  display: block;
  box-sizing: border-box;
  overflow: hidden;
  position: absolute;
  top: 140rpx;
  left: 0;
  z-index: 100;
}

.choose-module {
  box-sizing: border-box;
  overflow: hidden;
  float: left;
  background-color: rgba(0, 0, 0, 0.5);
  border: 1rpx dashed #ffffff;
  text-align: center;
  color: #ffffff;
  font-size: 40rpx;
}

.choose-module-oddc {
  background-color: rgba(251, 114, 160, 0.8);
}

.canvas {
  z-index: 1;
  display: block;
  box-sizing: border-box;
  overflow: hidden;
  opacity: 0;
}

.button {
  appearance: none;
  box-sizing: border-box;
  width: 700rpx;
  font-size: 30rpx;
  margin: 20rpx 25rpx;
  background-color: #0bc15f;
  border-radius: 4rpx;
  text-align: center;
  height: 100rpx;
  line-height: 100rpx;
  color: #ffffff;
  border: none;
}

.button::after {
  border: none;
}

.button-hover {
  background-color: #000000;
  color: #ffffff;
}
</style>
