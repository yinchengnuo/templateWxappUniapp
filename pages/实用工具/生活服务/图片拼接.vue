<template>
  <Page ref="Page">
    <template v-slot:default="{ page }">
      <template v-if="page">
        <view class="index" style="position: relative" :style="{ height: page.height + 'px' }">
          <view @tap="changePreview" class="preview-image" :data-src="item.url" :style="'background-image:url(' + item.url + ');background-repeat:no-repeat;background-size:100% auto;'" v-for="(item, index) in imageInfo" :key="index">
            <view @tap.stop.prevent="removeImage" class="remove" :data-index="index">移除{{ index + 1 }} </view>
          </view>
          <view @tap="showActions" class="select-image" hoverClass="select-image-hover">选择图片 </view>
          <view class="bottom-tab">
            <view @click="goToPage" class="tabBtn" data-direction="horizontal">横向拼接 </view>
            <view @click="goToPage" class="tabBtn" data-direction="vertical">竖向拼接 </view>
          </view>
        </view>
      </template>
      <page-container :show="show" :z-index="999999999" round @afterleave="show = false">
        <view style="height: 66.6vh; position: relative; overflow: auto">
          <view class="cu-list menu card-menu sm-borde bg-white radius-lg" style="margin: 0 26rpx; position: sticky; top: 0; z-index: 1; border-radius: 0">
            <view class="cu-bar">
              <view class="action">
                <text class="text-bold">拼接结果</text>
              </view>
              <view class="flex" style="width: 42rpx; height: 42rpx" @click="show = false">
                <text class="cuIcon-close"></text>
              </view>
            </view>
          </view>
          <view v-if="!hidden" style="opacity: 0">
            <canvas canvasId="draw" :style="'width:' + canvasWidth + 'px;height:' + canvasHeight + 'px'"></canvas>
          </view>
          <view class="tips">小提示：点击图片预览,再长按即可保存!</view>
          <view class="image-box" :style="'height:' + showImage.height + 'px;'">
            <image @tap="previewImage" class="image"  :src="showImage.url" :style="'max-width:' + showImage.width + 'px;width:' + showImage.width + 'px;height:' + showImage.height + 'px'"></image>
          </view>
        </view>
      </page-container>
    </template>
  </Page>
</template>

<script>
export default {
  data() {
    return {
      direction: "horizontal",
      imageInfo: [],
      imageUrls: [],
      canvasWidth: 0,
      canvasHeight: 0,
      actions: [
        {
          name: "拍照",
        },
        {
          name: "从相册选择",
        },
        {
          name: "从聊天记录选择",
        },
      ],
      show: false,
      showImage: {
        url: "",
        width: 0,
        height: 0,
      },
      hidden: false,
    };
  },
  onLoad() {},
  methods: {
    showActions() {
      uni.showActionSheet({
        itemList: ["拍照", "从相册选择", "从聊天记录选择"],
        success: ({ tapIndex }) => {
          this.select({ index: tapIndex });
        },
      });
    },
    close() {
      this.show = false;
    },

    select({ index }) {
      switch (index) {
        case 0:
          {
            this.chooseFromPhoto();
          }
          break;
        case 1:
          {
            this.chooseFromAlbum();
          }
          break;
        case 2:
          {
            this.chooseFromMessageFile();
          }
          break;
        default: {
          this.chooseFromAlbum();
        }
      }
    },

    onChooseSuccess(e) {
      var that = this;
      for (var t = 0; t < (e.tempFilePaths || e.tempFiles).length; t++) {
        let fileInfo = (e.tempFilePaths || e.tempFiles)[t];
        if (typeof fileInfo !== "string") {
          fileInfo = fileInfo.path;
        }
        that.getImageInfo(fileInfo);
      }
    },

    chooseFromAlbum(e) {
      var that = this;
      uni.chooseImage({
        count: 9,
        sourceType: ["album"],
        success: that.onChooseSuccess,
      });
    },

    chooseFromPhoto(e) {
      var that = this;
      uni.chooseImage({
        sourceType: ["camera"],
        count: 9,
        success: that.onChooseSuccess,
      });
    },

    chooseFromMessageFile(e) {
      var that = this;
      uni.chooseMessageFile({
        type: "image",
        count: 9,
        success: that.onChooseSuccess,
      });
    },

    getImageInfo(e) {
      var that = this;
      uni.getImageInfo({
        src: e,
        success(t) {
          var n = that.imageInfo;
          var i = that.imageUrls;
          var s = new Object();
          s.url = e;
          s.width = t.width;
          s.height = t.height;
          n.push(s);
          i.push(e);
          that.imageInfo = n;
          that.imageUrls = i;
        },
      });
    },

    changePreview(e) {
      var that = this;
      uni.previewImage({
        current: e.currentTarget.dataset.src,
        urls: that.imageUrls,
      });
    },

    removeImage(e) {
      var that = this;
      var t = that.imageInfo;
      var n = that.imageUrls;
      var i = e.currentTarget.dataset.index;
      t.splice(i, 1);
      n.splice(i, 1);
      that.imageInfo = t;
      that.imageUrls = n;
    },

    goToPage(e) {
      var that = this;
      this.direction = e.currentTarget.dataset.direction;
      if (void 0 == that.imageInfo[1]) {
        uni.showToast({ title: "至少要选两张图！", icon: "none" });
      } else {
        this.systemWidth = getApp().globalData.systemInfo.windowWidth;
        this.systemHeight = getApp().globalData.systemInfo.windowHeight;
        this.show = true;
        that.hidden = false;
        this.showImage = {
          url: "",
          width: 0,
          height: 0,
        };
        setTimeout(() => {
          that.connectImage();
        });
      }
    },
    connectImage: function () {
      var that = this;
      var e = uni.createCanvasContext("draw", that);
      var a = 0;
      var i = 0;
      var h = that.imageInfo;
      if ("vertical" == that.direction) {
        a = that.systemWidth;
        for (var n = 0, s = 0; n < h.length; n++) {
          i += s = (h[n].height * a) / h[n].width;
        }
        that.canvasWidth = a;
        that.canvasHeight = i;
        for (var n = 0, s = 0, o = 0; n < h.length; n++) {
          s = (h[n].height * a) / h[n].width;
          if (n > 0) {
            o += (h[n - 1].height * a) / h[n - 1].width;
          }
          e.drawImage(h[n].url, 0, o, a, s);
        }
      } else {
        i = that.systemHeight;
        for (var n = 0, g = 0; n < h.length; n++) {
          a += g = (h[n].width * i) / h[n].height;
        }
        that.canvasWidth = a;
        that.canvasHeight = i;
        for (var n = 0, g = 0, d = 0; n < h.length; n++) {
          g = (h[n].width * i) / h[n].height;
          if (n > 0) {
            d += (h[n - 1].width * i) / h[n - 1].height;
          }
          e.drawImage(h[n].url, d, 0, g, i);
        }
      }
      e.draw();
      setTimeout(function (e) {
        uni.canvasToTempFilePath(
          {
            canvasId: "draw",
            success: function (e) {
              console.log(e.tempFilePath);
              that.hidden = true;
              that.showImage.url = e.tempFilePath;
              that.setShowImage(e.tempFilePath);
              uni.hideLoading();
            },
          },
          that
        );
      }, 500);
    },
    previewImage: function (t) {
      var that = this;
      var a = [];
      a.push(that.showImage.url);
      uni.previewImage({
        current: a[0],
        urls: a,
      });
    },

    setShowImage: function (t) {
      var that = this;
      var a = that.direction;
      var i = 0;
      var h = 0;
      uni.getSystemInfo({
        success: function (n) {
          uni.getImageInfo({
            src: t,
            success: function (t) {
              if ("vertical" == a) {
                s = 0.93;
                i = n.windowWidth * s;
                h = (n.windowWidth / t.width) * t.height * s;
              } else {
                var s = 0.5;
                h = n.windowHeight * s;
                i = (n.windowHeight / t.height) * t.width * s;
              }
              that.showImage.width = i;
              that.showImage.height = h;
            },
          });
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.preview-image,
.select-image {
  display: block;
  box-sizing: border-box;
  width: 210rpx;
  height: 370rpx;
  overflow: hidden;
  margin-top: 30rpx;
  margin-left: 30rpx;
  box-shadow: 0rpx 0rpx 20rpx rgba(0, 0, 0, 0.2);
  float: left;
  position: relative;
}

.select-image {
  background-color: #0bc15f;
  color: #ffffff;
  text-align: center;
  line-height: 370rpx;
}

.remove {
  position: absolute;
  top: 0;
  right: 0;
  font-size: 24rpx;
  width: 80rpx;
  height: 40rpx;
  line-height: 40rpx;
  overflow: hidden;
  box-sizing: border-box;
  background-color: #f8678d;
  color: #ffffff;
  text-align: center;
  box-shadow: -4rpx 4rpx 10rpx rgba(0, 0, 0, 0.2);
}

.bottom-tab {
  position: absolute;
  z-index: 2;
  bottom: 0;
  left: 0;
  font-size: 30rpx;
  width: 750rpx;
  overflow: hidden;
  box-sizing: border-box;
  color: #ffffff;
  text-align: center;
  box-shadow: 0rpx -4rpx 10rpx rgba(0, 0, 0, 0.2);
}

.tabBtn {
  width: 375rpx;
  height: 100rpx;
  line-height: 100rpx;
  text-align: center;
  float: left;
}

.tabBtn:nth-child(1) {
  background-color: green;
}

.tabBtn:nth-child(2) {
  background-color: orangered;
}

.tabBtn:active,
.select-image-hover {
  background-color: #000000;
}

.tips {
  box-sizing: border-box;
  width: 700rpx;
  margin: 25rpx;
  border-radius: 4rpx;
  background-color: #0bc15f;
  color: #ffffff;
  min-height: 100rpx;
  line-height: 100rpx;
  font-size: 30rpx;
  padding-left: 30rpx;
}

.image-box {
  width: 700rpx;
  margin: 25rpx;
  border-radius: 4rpx;
  overflow-x: scroll;
  overflow-y: hidden;
  box-shadow: 0rpx 0rpx 20rpx rgba(0, 0, 0, 0.2);
}

.image {
  display: block;
  margin: 0 auto;
}
</style>
