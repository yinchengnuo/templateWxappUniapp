<template>
  <view>
    <Page ref="Page" refresh type="S1" bg @refresh="refresh">
      <template v-slot:default="{ page }">
        <template v-if="page">
          <view class="cu-bar solid-bottom margin-top-xs">
            <view class="action">
              <text class="cuIcon-titles" :class="'text-' + $refs.Page.bgClass.split('-')[2]"></text>
              <text class="text-bold">自动播放</text>
            </view>
            <view class="action">
              <switch class="radius" :class="$refs.Page.bgClass.split('-')[2]" :checked="auto" @change="e => (auto = e.detail.value)"> </switch>
            </view>
          </view>
          <view class="cu-list menu sm-border bg-white card-menu margin-top margin-bottom">
            <Audio class="w100" ref="Audio" :src="src" />
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
      auto: false,
      src: "http://api.yujn.cn/api/yujie.php",
    };
  },
  onLoad() {},
  methods: {
    refresh() {
      this.$refs.Audio.clear();
      this.src = "http://api.yujn.cn/api/yujie.php?t=" + Date.now();
      if (this.auto) {
        this.$refs.Audio.play(this.src);
      }
      setTimeout(() => {
        this.$refs.Page.refreshing = false;
      }, 567);
    },
  },
};
</script>

<style lang="scss" scoped></style>
