<template>
  <view>
    <Page ref="Page" bg type="S1">
      <template v-slot:default="{ page }">
        <template v-if="page">
          <view class="cu-bar bg-white solid-bottom margin-top">
            <view class="action">
              <text class="cuIcon-titles" :class="'text-' + $refs.Page.bgClass.split('-')[2]"></text>
              <text>输入金额即可生成</text>
            </view>
          </view>
          <view class="cu-bar input solid-bottom">
            <input v-model.trim="text" ref="input" :focus="focus" class="my_input" confirm-type="search" placeholder="请输入金额" type="number" @blur="focus = false" @confirm="make" />
            <text v-if="text" class="my_input_clear cuIcon-roundclosefill" @click="(text = ''), make()"></text>
            <button class="cu-btn lg shadow-blur" :class="'bg-' + $refs.Page.bgClass.split('-')[2]" @click="make">生成</button>
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
      focus: false,
      text: 12345678,
      src: "https://api.pearktrue.cn/api/alipay/?number=12345678",
    };
  },
  onLoad() {},
  methods: {
    make() {
      this.focus = false;
      this.text = (this.text || "").toString().trim();
      if (this.text) {
        this.$refs.Audio.clear();
        this.src = "https://api.pearktrue.cn/api/alipay/?number=" + this.text + "&t=" + Date.now();
        this.$refs.Audio.play(this.src);
      } else {
        this.focus = true;
        this.$toast("请输入金额");
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
