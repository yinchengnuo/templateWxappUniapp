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
      src: "",
    };
  },
  onLoad() {
    this.refresh();
  },
  methods: {
    refresh() {
      this.$refs.Audio && this.$refs.Audio.clear();
      this.$loading();
      this.$refs.Page.refreshing = true;
      this.$("/proxy", { url: "https://api.pearktrue.cn/api/greentea", dataType: "text" })
        .then(data => {
          this.src = "https://api.pearktrue.cn/api/greentea" + data.split(".").find(e => e.startsWith("/voice/")) + ".mp3";
          if (this.auto) {
            this.$refs.Audio.play(this.src);
          }
        })
        .finally(() => {
          this.$loaded();
          this.$refs.Page.refreshing = false;
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
