<template>
  <Page ref="Page" type="S1">
    <template v-slot:default="{ page }">
      <template v-if="page">
        <view :style="{ height: page.height + 'px' }">
          <view class="flex">
            <view class="score-time">
              <text class="text-black">得分: {{ score }}</text>
              <text class="text-black">时间: {{ time }}</text>
            </view>
            <view class="box">
              <view @tap="nextBlock" class="inbox" :data-id="index" :style="'width:' + 100 / block.lv + '%;height:' + 100 / block.lv + '%;background:' + item" v-for="(item, index) in block.color" :key="index"></view>
            </view>
          </view>
          <view class="modal" v-if="!isHidden">
            <view class="content">
              <text class="modal-result">{{ score }}</text>
              <button @tap="again" class="modal-btn" style="background: rgb(39, 114, 226)">再测一次</button>
            </view>
          </view>
        </view>
      </template>
    </template>
  </Page>
</template>

<script>
export default {
  data() {
    return {
      block: {
        lv: 0,
        color: [],
      },
      randNum: "",
      score: 0,
      time: 30,
      isHidden: true,
    };
  },
  onLoad() {
    this.createBlock(0);
    this.stop();
  },
  methods: {
    again: function () {
      this.createBlock(0);
      this.stop();
      this.time = 30
      this.score = 0
      this.isHidden = true
    },

    stop: function () {
      var that = this;
      var n = setInterval(() => {
        if (that.time > 0) {
          var a = that.time;
          a -= 1;
          this.time = a;
        } else {
          clearInterval(n);
          this.isHidden = false;
        }
      }, 1000);
    },

    createBlock: function (t) {
      var n = [2, 3, 4, 5, 5, 6, 6, 7, 7, 7, 8, 8, 8, 8, 8, 8, 9];
      var a = t < n.length ? n[t] : 9;
      var o = Math.pow(a, 2);
      var e = this.createColor(a);
      var i = e[1];
      var r = e[0];
      r =
        "rgb(" +
        (r = r.map(function (t) {
          return t + 15 * Math.max(9 - a, 1);
        })).join(",") +
        ")";
      var c = new Array(o).fill(i);
      var d = Math.floor(Math.random() * o);
      c[d] = r;
      this.block = {
        lv: a,
        color: c,
      };
      this.randNum = d;
    },

    createColor: function (t) {
      var n;
      n = 15 * Math.max(9 - t, 1);
      var a = [Math.round(Math.random() * (255 - n)), Math.round(Math.random() * (255 - n)), Math.round(Math.random() * (255 - n))];
      return [a, "rgb(" + a.join(",") + ")"];
    },

    nextBlock: function (t) {
      if (t.currentTarget.dataset.id == this.randNum) {
        var n = this.score + 1;
        this.score = n;
        this.createBlock(n);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.score-time {
  width: 90%;
  /* margin-left: 5%; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: white;
  margin-top: 10rpx;
}

.box {
  background-color: #ddd;
  border-radius: 10px;
  bottom: 0;
  height: 710rpx;
  left: 0;
  margin: auto;
  padding: 10px;
  position: absolute;
  right: 0;
  top: 20px;
  width: 710rpx;
}

button {
  box-sizing: border-box !important;
  text-align: center !important;
}

.xf {
  bottom: 12% !important;
}

.xf2 {
  box-sizing: inherit !important;
}

.inbox {
  border: 5rpx solid #ddd;
  border-radius: 10px;
  box-sizing: border-box;
  cursor: pointer;
  display: block;
  float: left;
}

.modal {
  background: hsla(0, 0%, 47%, 0.6);
  bottom: 0;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
}

.content,
.modal {
  align-items: center;
  display: flex;
  flex-direction: column;
}

.content {
  background: #fff;
  border-radius: 10rpx;
  height: 500rpx;
  padding-top: 20rpx;
  position: relative;
  width: 80%;
}

.modal-result {
  color: #d8c00d;
  font-size: 80px;
  font-weight: 700;
}

.modal-btn {
  bottom: -146rpx;
  color: #fff;
  position: relative;
  width: 80%;
}
</style>
