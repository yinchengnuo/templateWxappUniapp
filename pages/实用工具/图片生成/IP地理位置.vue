<template>
  <view>
    <Page ref="Page" type="S1" bg>
      <template v-slot:default="{ page }">
        <template v-if="page">
          <view class="cu-bar bg-white solid-bottom margin-top">
            <view class="action">
              <text class="cuIcon-titles" :class="'text-' + $refs.Page.bgClass.split('-')[2]"></text>
              <text>输入ip即可生成</text>
            </view>
          </view>
          <view class="cu-bar input solid-bottom">
            <input v-model.trim="text" ref="input" :focus="focus" class="my_input" confirm-type="search" placeholder="请输入ip" type="digit" @blur="focus = false" @confirm="make" />
            <text v-if="text" class="my_input_clear cuIcon-roundclosefill" @click="(text = ''), make()"></text>
            <button class="cu-btn lg shadow-blur" :class="'bg-' + $refs.Page.bgClass.split('-')[2]" @click="make">生成</button>
          </view>
          <view class="cu-bar solid-bottom margin-top-xs">
            <view class="action">
              <text class="cuIcon-titles" :class="'text-' + $refs.Page.bgClass.split('-')[2]"></text>
              <text class="text-bold">生成结果</text>
            </view>
          </view>
          <view class="cu-list menu sm-border bg-white card-menu margin-top margin-bottom">
            <Img v-if="result" :src="result" />
            <Empty v-else />
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
      text: "",
      focus: false,
      result: null,
    };
  },
  onLoad() {
    if (this.$store.state.user.ip) {
      this.text = this.$store.state.user.ip;
      this.make();
    } else {
      uni.$once("LOGON", () => {
        this.text = this.$store.state.user.ip;
        this.make();
      });
    }
  },
  methods: {
    make() {
      this.focus = false;
      this.result = null;
      this.text = (this.text || "").toString().trim();
      if (this.text) {
        this.result = "http://api.cmvip.cn/API/diwzcx.php?ip=" + this.text;
      } else {
        this.focus = true;
        this.$toast("请输入ip");
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
