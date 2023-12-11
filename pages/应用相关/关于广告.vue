<template>
  <Page bg ref="Page">
    <template v-slot:default="{ page }">
      <template v-if="page">
        <view class="bg-white padding-xs margin-sm align-center radius-lg">
          <view class="padding-xs p">本应用后端服务基于 serverless 技术开发。除了日常云函数、云数据库、云存储等服务费用开销，AI 对话能力也需要提前购买大模型厂商付费套餐。</view>
          <view class="padding-xs p">虽然【AI 聊天】功能实现了能量购买功能，但是您仍然可以通过【每日签到】、【邀请新用户】、【观看视频广告】的方式免费获取能量体验【AI 聊天】。 </view>
          <view class="padding-xs p">除此之外我们承诺除 【AI 聊天】外，其余总计约 200+ 功能永不收费。</view>
          <view class="padding-xs p">综上所述，我们在应用中植入了大量的 Banner、插屏、视频、浮动广告，用于获取一部分广告收入支付服务器费用。</view>
          <view class="padding-xs p">因此我们尽可能的优化了很多前端交互逻辑来保证用户体验。</view>
          <view class="padding-xs p">同时我们实现了 VIP 功能，即购买能量支付的金额会自动转化为对应天数的 VIP，多次购买多次叠加。</view>
          <view class="padding-xs p">VIP 除了免广告（即：不展示所有页面和操作的 Banner、插屏、视频、浮动广告），同时会在【我的】页面解锁【加入组织】入口，用于加入用户服务群为您提供更好的服务。</view>
          <view class="padding-xs p">VIP 记录及时效页面可以在 <navigator url="/pages/用户中心/我的购买记录" style="display: inline" class="text-blue margin-sm">我的购买记录</navigator>页面查看，VIP 暂不支持单独购买，感谢理解支持。</view>
        </view>
      </template>
    </template>
  </Page>
</template>

<script>
export default {
  data() {
    return {};
  },
  onLoad() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.p {
  text-indent: 2em;
}
</style>
