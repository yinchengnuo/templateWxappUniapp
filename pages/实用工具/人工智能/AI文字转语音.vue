<template>
  <Page ref="Page" bg>
    <template v-slot:default="{ page }">
      <template v-if="page">
        <view class="cu-bar bg-white solid-bottom margin-top">
          <view class="action">
            <text class="cuIcon-titles" :class="'text-' + $refs.Page.bgClass.split('-')[2]"></text>
            <text>输入文字即可生成</text>
          </view>
          <view class="action">
            <text v-if="text" class="my_textarea_clear cuIcon-roundclosefill" @click="(text = ''), make()"></text>
          </view>
        </view>
        <view class="cu-form-group padding-left-sm padding-right-sm">
          <textarea v-model="text" class="my_textarea" :focus="focus" confirm-type="search" maxlength="-1" placeholder="请输入文字" @blur="focus = false" @confirm="make"></textarea>
        </view>
        <view class="cu-form-group padding-left-sm padding-right-sm">
          <button class="w100 cu-btn block xxl shadow-blur margin-top-xs margin-bottom-xs" :class="'bg-' + $refs.Page.bgClass.split('-')[2]" @click="make">生成并播放</button>
        </view>
        <view class="cu-bar solid-bottom margin-top-xs">
          <view class="action">
            <text class="cuIcon-titles" :class="'text-' + $refs.Page.bgClass.split('-')[2]"></text>
            <text class="text-bold">生成结果</text>
          </view>
        </view>
        <view class="cu-list menu sm-border bg-white card-menu margin-top margin-bottom">
          <Audio v-if="result" class="w100" ref="Audio" />
          <Empty v-else />
        </view>
      </template>
    </template>
  </Page>
</template>

<script>
export default {
  data() {
    return {
      text: "",
      focus: true,
      result: null,
    };
  },
  onLoad({ text }) {
    if (text) {
      this.text = text;
      this.make();
    } else {
      setTimeout(() => (this.focus = true), 1234);
      setTimeout(() => (this.focus = true), 2345);
      setTimeout(() => (this.focus = true), 3456);
    }
  },
  methods: {
    make() {
      this.focus = false;
      this.result = null;
      this.text = (this.text || "").toString().trim();
      if (this.text) {
        this.result = "https://yuanxiapi.cn/api/voice/?pit=9&text=" + this.text;
        setTimeout(() => {
          this.$refs.Audio.play(this.result);
        });
      } else {
        this.focus = true;
        this.$toast("请输入文字");
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
