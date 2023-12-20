<template>
  <Page type="S1" ref="Page" bg>
    <template v-slot:default="{ page }">
      <template v-if="page">
        <view class="cu-bar bg-white solid-bottom margin-top">
          <view class="action">
            <text class="cuIcon-titles" :class="'text-' + $refs.Page.bgClass.split('-')[2]"></text>
            <text>输入数字即可转换</text>
          </view>
        </view>
        <view class="cu-bar input">
          <input v-model.trim="text" ref="input" :focus="focus" class="my_input" confirm-type="search" placeholder="请输入数字" type="digit" @blur="focus = false" @confirm="make" />
          <text v-if="text" class="my_input_clear cuIcon-roundclosefill" @click="(text = ''), make()"></text>
          <button class="cu-btn lg shadow-blur" :class="'bg-' + $refs.Page.bgClass.split('-')[2]" @click="make">转换</button>
        </view>
        <view class="cu-bar solid-bottom margin-top-xs">
          <view class="action">
            <text class="cuIcon-titles" :class="'text-' + $refs.Page.bgClass.split('-')[2]"></text>
            <text class="text-bold">转换结果</text>
          </view>
          <picker :value="type" :range="typeList" @change="e => (type = +e.detail.value)">
            <text>{{ typeList[type] }}</text>
            <text class="cuIcon-unfold"></text>
          </picker>
          <picker :value="to" :range="toList" @change="e => (to = +e.detail.value)">
            <text>{{ toList[to] }}</text>
            <text class="cuIcon-unfold"></text>
          </picker>
          <view class="action" @click="$copy(result)">
            <text class="cuIcon-copy margin-left-xs text-bold"></text>
          </view>
        </view>
        <TextBoard :result="result" />
      </template>
    </template>
  </Page>
</template>

<script>
import NZH from "nzh";
export default {
  data() {
    return {
      text: "1234567.89",
      to: 0,
      type: 0,
      typeList: ["简体", "繁体"],
      toList: ["转金额", "转大写", "转小写"],
      focus: true,
      result: null,
    };
  },
  watch: {
    to() {
      this.make();
    },
    type() {
      this.make();
    },
  },
  onLoad() {
    this.make();
  },
  methods: {
    make() {
      this.focus = false;
      this.result = null;
      this.text = (this.text || "").toString().trim();
      if (this.text) {
        if (this.type === 0) {
          if (this.to === 0) {
            this.result = NZH.cn.toMoney(this.text);
          }
          if (this.to === 1) {
            this.result = NZH.cn.encodeB(this.text);
          }
          if (this.to === 2) {
            this.result = NZH.cn.encodeS(this.text);
          }
        }
        if (this.type === 1) {
          if (this.to === 0) {
            this.result = NZH.hk.toMoney(this.text);
          }
          if (this.to === 1) {
            this.result = NZH.hk.encodeB(this.text);
          }
          if (this.to === 2) {
            this.result = NZH.hk.encodeS(this.text);
          }
        }
        console.log(this.result);
      } else {
        this.focus = true;
        this.$toast("请输入数字");
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
