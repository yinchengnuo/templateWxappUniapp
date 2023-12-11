<template>
  <Page bg ref="Page">
    <template v-slot:default="{ page }">
      <template v-if="page">
        <view class="bg-white padding-xs margin-sm align-center radius-lg">
          <view class="padding-xs p">1.能量是本应用为您提供的数字化商品，用于支付 AI 对话消耗 <navigator url="/pages/应用相关/关于ToolBoxAI" style="display: inline" class="text-blue margin-xs">token</navigator> 其他增值服务等</view>
          <view class="padding-xs p">2.您可以在本应用内通过购买、签到、邀请新用户、看广告等途径获取能量 </view>
          <view class="padding-xs p">3.能量长期有效，不支持退款、交易或其他增值服务替换 </view>
          <view class="cu-bar bg-white solid-bottom">
            <view class="action">
              <text class="cuIcon-titles" :class="'text-' + $refs.Page.bgClass.split('-')[2]">能量获取方式</text>
            </view>
          </view>
          <view class="padding-xs text-bold">购买</view>
          <view class="padding-xs p">您可以在 <navigator url="/pages/用户中心/我的能量" style="display: inline" class="text-blue margin-xs">我的能量</navigator> 页面购买能量</view>
          <view class="padding-xs text-bold">每日签到</view>
          <view class="padding-xs p">您可以在 <navigator url="/pages/用户中心/我的签到" style="display: inline" class="text-blue margin-xs">我的签到</navigator> 页面每日签到获取能量，连续签到10天后每日即可获取 1000 能量</view>
          <view class="padding-xs text-bold">邀请新用户</view>
          <view class="padding-xs p">在 <text @click="toSetting" style="display: inline" class="text-blue margin-xs">ToolBoxAI 设置</text> 中点击【邀请好友】转发至新用户打开后即可获取 1000 能量。注意：分享链接仅当天有效，每日上限邀请 10 人</view>
          <view class="padding-xs text-bold">看 30S 视频广告</view>
          <view class="padding-xs p">在 <text @click="toSetting" style="display: inline" class="text-blue margin-xs">ToolBoxAI 设置</text> 中点击【看30S广告】，观看广告完成后点击 【关闭】即可获取 1000 奖励，每日上限 9 次</view>
          <view class="cu-bar bg-white solid-bottom">
            <view class="action">
              <text class="cuIcon-titles" :class="'text-' + $refs.Page.bgClass.split('-')[2]">常见能量问题</text>
            </view>
          </view>
          <view class="padding-xs text-bold">能量是什么 ？</view>
          <view class="padding-xs p">能量是本应用为您提供的数字化商品，用于支付 AI 对话消耗 <navigator url="/pages/应用相关/关于ToolBoxAI" style="display: inline" class="text-blue margin-xs">token</navigator> 其他增值服务等</view>
          <view class="padding-xs text-bold">如何查询能量 ？</view>
          <view class="padding-xs p">可以在 <navigator url="/pages/用户中心/我的能量记录" style="display: inline" class="text-blue margin-xs">我的能量记录</navigator> 页面中查看到全部能量获取、消耗明细</view>
          <view class="padding-xs text-bold">能量有什么用处 ？</view>
          <view class="padding-xs p">主要用于支付 AI 对话消耗 <navigator url="/pages/应用相关/关于ToolBoxAI" style="display: inline" class="text-blue margin-xs">token</navigator> </view>
          <view class="padding-xs text-bold">AI 对话提问失败会消耗能量吗 ？</view>
          <view class="padding-xs p">不会</view>
        </view>
        <ad-custom unit-id="adunit-ca19851efd20b3b7"></ad-custom>
        <ad unit-id="adunit-bb0d1a5ba7a52eac"></ad>
        <ad unit-id="adunit-42238affd4939e6a" ad-type="video" ad-theme="white"></ad>
        <view style="right: 8rpx; top: 38.2%; position: fixed; z-index: 9999999999">
          <ad-custom unit-id="adunit-8b304cf8af7361f2"></ad-custom>
        </view>
        <view style="left: 8rpx; bottom: 38.2%; position: fixed; z-index: 9999999999">
          <ad-custom unit-id="adunit-8b304cf8af7361f2"></ad-custom>
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
  methods: {
    toSetting() {
      uni.setStorageSync('showSettings', 'showSettings')
      uni.switchTab({
        url: "/pages/聊天/聊天"
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.p {
  text-indent: 2em;
}
</style>
