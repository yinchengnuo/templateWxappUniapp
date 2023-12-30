<template>
  <view class="w100">
    <view class="flex padding" @click="clickPlay">
      <image v-if="playing" style="width: 300rpx; height: 300rpx" src="../../static/audio/pause.png" />
      <image v-else style="width: 300rpx; height: 300rpx" src="../../static/audio/play.png" />
    </view>
    <view v-if="ctx" class="flex">
      <text class="margin">{{ currentTime.toFixed(2) }}S</text>
      <slider class="flex1" @change="change" @changing="changing" block-size="16" :step="0.01" :max="duration" :value="currentTime" activeColor="#FFA929" />
      <text class="margin">{{ duration.toFixed(2) }}S</text>
    </view>
  </view>
</template>

<script>
export default {
  name: "Audio",
  props: {
    src: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      ctx: null,
      duration: 0,
      currentTime: 0,
      playing: false,
    };
  },
  beforeDestroy() {
    if (this.ctx) {
      this.ctx.destroy()
    }
  },
  methods: {
    play(src) {
      if (this.ctx) {
        if (!(src || this.src)) return this.$toast("未接收到音频链接");
        if (this.ctx.paused === false) {
          this.ctx.stop();
        }
        this.ctx.destroy();
        this.ctx = null;
        this.playing = false;
      }
      this.$loading();
      this.ctx = uni.createInnerAudioContext({
        useWebAudioImplement: true,
      });
      this.ctx.src = src || this.src;
      if (uni.setInnerAudioOption) {
        uni.setInnerAudioOption({
          obeyMuteSwitch: false,
        });
      }
      this.ctx.onCanplay(() => {
        this.ctx.play();
        this.duration = this.ctx.duration;
        this.currentTime = this.ctx.currentTime;
      });
      this.ctx.onPlay(() => {
        this.$loaded();
        this.playing = true;
      });
      this.ctx.onTimeUpdate(e => {
        this.playing = true;
        this.duration = this.ctx.duration;
        this.currentTime = this.ctx.currentTime;
      });
      this.ctx.onPause(() => {
        this.playing = false;
      });
      this.ctx.onStop(() => {
        this.playing = false;
      });
      this.ctx.onEnded(() => {
        this.playing = false;
        this.currentTime = this.duration;
      });
      this.ctx.onError(() => {
        this.playing = false;
        this.$toast("播放失败");
      });
    },
    clear() {
      if (this.ctx) {
        this.ctx.destroy();
        this.ctx = null;
        this.duration = 0;
        this.currentTime = 0;
        this.playing = false;
      }
    },
    clickPlay() {
      if (this.ctx) {
        if (this.ctx.paused) {
          this.ctx.play();
        } else {
          this.ctx.pause();
        }
      } else {
        this.play();
      }
    },
    change(e) {
      this.ctx.seek(e.detail.value);
      this.ctx.play();
    },
    changing() {
      if (!this.ctx.paused) {
        this.ctx.pause();
      }
    },
  },
};
</script>

<style></style>
