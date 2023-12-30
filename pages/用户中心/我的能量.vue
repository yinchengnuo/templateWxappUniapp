<template>
  <view>
    <Page type="no" ref="Page" refresh @refresh="refresh">
      <template v-slot:default="{ page }">
        <template v-if="page">
          <view class="flex solid-bottom margin-top justify-center">
            <view class="cu-coupon-box radius-lg padding-sm">
              <view class="flex justify-between">
                <view class="text-white text-xl text-bold">ToolBox 能量卡</view>
                <navigator url="/pages/用户中心/我的能量记录" class="cu-tag line-white round text-df padding-lr-sm text-grey">
                  <text>消费明细 </text>
                  <text class="cuIcon-right"></text>
                </navigator>
              </view>
              <view class="flex justify-center align-end padding-tb cu-coupon-content text-white">
                <text class="text-lg padding-bottom-xs">余额</text>
                <text class="text-sl text-bold text-shadow" style="text-shadow: 0px 0px 2rpx black"> {{ user.energy || 0 }} </text>
                <text class="text-lg text-shadow cuIcon-lightauto">能量</text>
              </view>
              <view class="flex justify-around align-center margin-top-xl text-white">
                <view class="text-center">
                  <view>总入账</view>
                  <view class="text-bold text-shadow">{{ user.total_income || 0 }}</view>
                </view>
                <view class="text-center">
                  <view>总出账</view>
                  <view class="text-bold text-shadow">{{ user.total_payout || 0 }}</view>
                </view>
                <view class="text-center">
                  <view>已使用</view>
                  <view class="text-bold text-shadow">{{ user.total_chat_count || 0 }}次</view>
                </view>
              </view>
            </view>
          </view>
          <view v-show="show" class="cu-bar bg-white solid-bottom margin-top">
            <view class="action">
              <text class="cuIcon-titles" :class="'text-' + $refs.Page.bgClass.split('-')[2]"></text>
              <text class="text-bold">
                <text>能量充值</text>
                <text class="text-grey" style="font-size: 24rpx; font-weight: normal; line-height: 2" @click="toAD">
                  <text class="margin-lr-xs">充值赠送免广告</text>
                  <text class="cuIcon-questionfill"></text>
                </text>
              </text>
            </view>
            <navigator url="/pages/用户中心/我的购买记录" class="action text-grey">
              <text>购买记录</text>
              <text class="cuIcon-right"></text>
            </navigator>
          </view>
          <view v-show="show" class="cu-list no-border grid col-3">
            <view v-for="(item, index) in PAY" :key="item.num" class="cu-item radius light" :class="[active === index ? 'bg-' + color : '', active === index ? active : '']" @click="active = index">
              <view class="flex text-bold text-xl text-shadow margin-top-sm">
                {{ (item.num * 10000).toFixed(0) }}
                <text class="text-green text-shadow cuIcon-lightauto" style="font-size: 24rpx; display: inline; width: auto"></text>
              </view>
              <view style="position: absolute; top: 0rpx; right: 0rpx; border-radius: 0rpx 8rpx 0rpx 8rpx" class="text-xs text-bold padding-lr-xs" :class="[active === index ? 'bg-' + color : '', active === index ? 'text-white' : 'text-grey']"
                >{{ item.num }}万
              </view>
              <view class="flex text-price text-lg text-bold" :class="active === index ? '' : 'text-orange'"
                >{{ item.price }}
                <text class="text-price margin-left-xs" style="text-decoration: line-through; font-weight: normal">{{ item.num }}</text>
              </view>
              <view class="text-xs text-bold" :class="active === index ? '' : 'text-yellow'" style="position: absolute; right: 4rpx; bottom: 2rpx">{{ item.discount }}折</view>
            </view>
          </view>
          <button v-show="show" class="margin cu-btn xxl block" :class="'bg-' + color" @click="pay()">
            <text>立即充值</text>
            <text class="text-price margin-left-xs">{{ PAY[active] ? PAY[active].price : "" }}</text>
            <text class="text-sm" style="position: absolute; right: 50rpx; bottom: 8rpx; font-style: italic"> 赠送{{ PAY[active] ? PAY[active].price : "" }}天免广告 </text>
          </button>
          <view v-show="show">
            <navigator url="/pages/应用相关/关于能量" class="flex text-blue padding">关于能量</navigator>
          </view>
          <view v-if="!show" class="margin-top">
            <AD3 />
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
      active: 4,
      color: "",
      payMessage: null,
    };
  },
  computed: {
    show() {
      if (getApp().globalData.systemInfo.platform === "ios" && this.user.INREVIEW) {
        return false;
      } else {
        return true;
      }
    },
    user() {
      return this.$store.state.user;
    },
    PAY() {
      return this.$store.state.user.PAY || [];
    },
  },
  watch: {
    active() {
      this.getClass();
    },
  },
  created() {
    this.getClass();
  },
  mounted() {
    this.$refs.Page.getHeight();
    clearInterval(this.$refs.Page.timer);
  },
  onLoad() {},
  methods: {
    onPush({ data: { payload } }) {
      if (payload.type === "pay") {
        const energy = data.num * 10000;
        this.$store.commit("user/SET_USER_INFO", {
          energy: this.$store.state.user.energy + energy,
          total_chat_count: this.$store.state.user.total_chat_count + energy,
        });
        uni.showModal({
          title: "购买成功",
          content: `您购买的${energy}能量已到账，请查收`,
          showCancel: false,
          confirmText: "好的",
        });
      }
    },
    getClass() {
      this.color = getApp()
        .globalData.bgClass.slice()
        .filter(e => e !== "bg-gradual-pinknew-light")
        .sort(() => Math.random() - 0.5)[0]
        .split("-")[2];
    },
    pay() {
      this.$loading();
      this.$("/pay", this.PAY[this.active])
        .then(data => {
          uni.requestPayment({
            ...data,
            complete: () => this.$loaded(),
          });
        })
        .catch(() => this.$loaded());
    },
    toAD() {
      uni.navigateTo({ url: "/pages/应用相关/关于广告" });
    },
    refresh() {
      this.$store.dispatch("user/login").finally(() => {
        this.$refs.Page.refreshing = false;
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
