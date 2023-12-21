<template>
  <Page ref="Page">
    <template v-slot:default="{ page }">
      <template v-if="page">
        <view class="cu-bar solid-bottom margin-top-xs">
          <view class="action">
            <text class="cuIcon-titles" :class="'text-' + $refs.Page.bgClass.split('-')[2]"></text>
            <text class="text-bold">星座</text>
          </view>
          <picker :value="index" :range="types" @change="e => (index = +e.detail.value)" class="margin-right">
            <text>{{ types[index] }}</text>
            <text class="cuIcon-unfold"></text>
          </picker>
        </view>
        <Img v-if="src" ref="Img" :src="src" />
      </template>
    </template>
  </Page>
</template>

<script>
const map = ["水瓶座", "双鱼座", "白羊座", "金牛座", "双子座", "巨蟹座", "狮子座", "处女座", "天秤座", "天蝎座", "射手座", "摩羯座"];
export default {
  data() {
    return {
      src: "",
      types: map,
      index: Number(uni.getStorageSync("xingzuo")) || 8,
    };
  },
  created() {
    this.src = "https://xiaoapi.cn/API/xzys_pic.php?msg=" + this.types[this.index];
  },
  watch: {
    index() {
      uni.setStorageSync("xingzuo", this.index),
      this.src = "https://xiaoapi.cn/API/xzys_pic.php?msg=" + this.types[this.index];
    },
  },
};
</script>

<style lang="scss" scoped></style>
