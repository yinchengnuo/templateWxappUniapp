<template>
  <Page ref="Page" type="S1">
    <template v-slot:default="{ page }">
      <template v-if="page">
        <navigator url="/pages/用户中心/我的签到记录" class="flex padding-sm justify-between solid-bottom">
          <view class="flex">
            <view class="padding-lr-xs">
              <view class="cu-avatar lg round">
                <image v-if="user.avatar" class="w100 h100" :src="user.avatar" mode="aspectFill" />
                <open-data v-else class="w100 h100" type="userAvatarUrl"></open-data>
              </view>
            </view>
            <view class="padding-xs text-xl text-black">
              <view>{{ user.nickname || "微信用户" }}</view>
              <view v-if="result" class="text-sm padding-top-xs">累计签到{{ result.records.length }}天</view>
            </view>
          </view>
          <view v-if="result" class="padding-right padding-top-sm">
            <text>签到累计获得能量：{{ result.total }}</text>
            <text class="cuIcon-right"></text>
          </view>
        </navigator>
        <view class="margin-top">
          <view v-if="result" class="flex justify-center">
            <view v-if="result.clocked" class="cu-clockin-time_over flex justify-center align-center flex-column">
              <text class="text-white" style="z-index: 99">今日已签到</text>
              <text class="text-white" style="z-index: 99">+{{ result.energy }}</text>
            </view>
            <view v-else class="cu-clockin-time flex justify-center align-center" :animation="animationData" @click="clockInStart">
              <view class="text-white" style="z-index: 99">
                <text class="text-xxl">今日签到</text>
                <text>+{{ result.energy }}</text>
              </view>
            </view>
          </view>
          <view class="padding-tb flex justify-center align-center text-grey" @click="$copy(user.ip)">
            <text>当前ip：</text>
            <text class="cuIcon-location">{{ user.ip }}</text>
            <text class="cuIcon-copy"></text>
          </view>
        </view>
        <view class="cu-bar bg-white solid-bottom">
          <view class="action">
            <text class="text-bold">连续签到领能量！</text>
          </view>
          <view class="action">
            <text>已连续签到：{{ result.continuous }}天</text>
          </view>
        </view>
        <view class="cu-list grid col-5">
          <view class="cu-item" v-for="item in 7" :key="item">
            <view :class="result && result.continuous > item ? 'text-green' : ''">第{{ item + 1 }}天</view>
            <view :class="result && result.continuous > item ? 'text-green' : ''" class="text-bold">+{{ 100 + item * 100 }} </view>
          </view>
          <view class="cu-item">
            <view :class="result && result.continuous > 7 ? 'text-green' : ''" class="text-bold">...</view>
            <view :class="result && result.continuous > 7 ? 'text-green' : ''" class="text-bold">...</view>
          </view>
          <view class="cu-item">
            <view :class="result && result.continuous >= 10 ? 'text-green' : ''">第10天</view>
            <view :class="result && result.continuous >= 10 ? 'text-green' : ''" class="text-bold">+1000</view>
          </view>
          <view class="cu-item">
            <view :class="result && result.continuous > 10 ? 'text-green' : ''">第10+天</view>
            <view :class="result && result.continuous > 10 ? 'text-green' : ''" class="text-bold">+1000</view>
          </view>
        </view>
      </template>
    </template>
  </Page>
</template>

<script>
import dayjs from "dayjs";
export default {
  data() {
    return {
      date: "",
      result: null,
      animationData: {},
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  created() {
    // 获取签到状态
    this.getStatus();
    // 定时器一直运行，如果过了凌晨12点，重新获取下签到状态
    this.timer = setInterval(() => {
      if (this.date !== dayjs().format("YYYY-MM-DD")) {
        this.getStatus();
      }
    }, 1000);
  },
  beforeDestroy() {
    // 退出页面清除定时器
    clearInterval(this.timer);
  },
  onShow() {
    this.$refs.Page?.showAD();
  },
  mounted() {
    this.$refs.Page.showAD();
  },
  methods: {
    // 获取签到状态
    getStatus() {
      this.$loading();
      this.$("/clock_status")
        .then(data => {
          this.result = data;
          this.date = dayjs().format("YYYY-MM-DD");
          uni.setStorageSync("clock_records", data.records);
        })
        .finally(() => {
          this.$loaded();
        });
    },
    // 点击签到
    clockInStart() {
      if (this.$store.state.app.loading) return;
      this.$loading();
      uni.vibrateLong();
      let animationData = wx.createAnimation({
        duration: 1000,
        timingFunction: "ease-in",
      });
      animationData.rotateY(180).step();
      this.animationData = animationData.export();
      this.$("/clock")
        .then(data => {
          this.result = data;
          this.$store.commit("user/SET_USER_INFO", {
            energy: this.$store.state.user.energy + data.energy,
            total_chat_count: this.$store.state.user.total_chat_count + data.energy,
          });
          uni.setStorageSync("clock_records", data.records);
          uni.showModal({
            title: "签到成功",
            content: `已连续签到${data.continuous}天，今日签到免费赠送${data.energy}能量已到账，请查收`,
            showCancel: false,
            confirmText: "好的",
            complete: () => {
              this.$refs.Page.showAD();
            },
          });
        })
        .finally(() => {
          this.$loaded();
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
