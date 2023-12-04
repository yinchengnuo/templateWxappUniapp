<template>
  <Page bg ref="Page">
    <template v-slot:default="{ page }">
      <template v-if="page">
        <view class="bg-white padding-xs margin-sm align-center radius-lg">
          <view class="padding-xs p">
            叮当工具箱，又名 ToolxBox365，是基于 DCloud 技术栈开发的微信小程序。使用了包括但不仅限于 uni-app、uni-ai、unicloud、uni-push、uni-ui、uni-pay、uni-config-center等大量 DCloud 系列技术。前端主要借鉴了 ColorUI、ColorUIGA 的样式，后端使用了
            unicloud 云开发。</view
          >
          <view class="padding-xs p"> 本项目已备案并长期维护，请放心使用。如果您在使用过程中遇到任何问题，都在可在【我的】页面点击【联系作者】或者【意见反馈】，或者您也可以充值能量解锁【VIP】能力，就可以加入我们的专属服务群随时反馈。</view>
          <view class="padding-xs p"> 本程序绝大多数功能及内容都来自互联网开放接口。如果您在使用过程中发现本程序出现了令人不适、侵犯个人隐私或违法犯罪行为，请立即与我们联系，我们会第一时间处理，感谢您的反馈。 </view>
          <view class="padding-xs p">
            ToolxBox365 前名叫做【滚动君】，是作者在最开始学习小程序时做来练手用的，包含了一个手持字幕滚动工具，还有一些 uni-app
            开发心得。当时在开源市场的名字叫做【UNIAPP小程序开发模板】，也因此结识了不少朋友，大家互相帮助成长。几年过去，当时做的不少工具，现在官方也提供了类似的解决方案，之前写的很多库就没有存在的必要了。因此就带着这几年做开发的心得和经验，重新实现了当前这版
            ToolxBox365。既是自身对技术生涯成长至今的一份总结，也算是个人在独立开发方面的一次探索。本项目仍然保持前端部分公开源代码，有需要可以联系作者获取。</view
          >
          <view class="padding-xs p"> 同时如果您有有趣的想法或者迫切需要的功能，也可以联系作者专门为您定制开发。欢迎反馈。</view>
        </view>
        <view class="cu-bar bg-white solid-bottom">
          <view class="action">
            <text class="cuIcon-titles" :class="'text-' + $refs.Page.bgClass.split('-')[2]">更多</text>
          </view>
        </view>
        <view class="relative cu-list menu card-menu sm-border margin-top-sm margin-bottom-sm shadow radius-lg">
          <navigator url="/pages/应用相关/更新记录" class="cu-item arrow">
            <view class="content">
              <text class="cuIcon-link text-green"></text>
              <text class="text-black">更新记录</text>
            </view>
          </navigator>
          <navigator url="/pages/应用相关/需求墙" class="cu-item arrow">
            <view class="content">
              <text class="cuIcon-favorfill text-yellow"></text>
              <text class="text-black">需求墙</text>
            </view>
          </navigator>
          <navigator url="/pages/应用相关/加载效果" class="cu-item arrow">
            <view class="content">
              <text class="cuIcon-lightauto text-green"></text>
              <text class="text-black">加载效果</text>
            </view>
          </navigator>
        </view>
        <view class="margin bg-white padding radius-lg shadow">
          <view class="text-center margin-bottom text-lg text-bold text-blue">⛱️致谢</view>
          <view class="text-content">
            <view v-for="(item, index) in apis" :key="index" class="flex flex-wrap" @click="$copy(item.doc)" data-link="https://github.com/weilanwl/ColorUI">
              <view class="flex1">
                <view class="text-cut" style="width: 600rpx">
                  <text class="text-bold">{{ item.api }}：</text>
                  <text>{{ item.doc }}</text>
                </view>
              </view>
              <view class="cuIcon-copy text-blue"></view>
            </view>
          </view>
        </view>
        <AD2 />
        <AD3 />
      </template>
    </template>
  </Page>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    apis() {
      const apis = [
        { api: "uni-app", doc: "https://uniapp.dcloud.net.cn/" },
        { api: "uni-ai", doc: "https://uniapp.dcloud.net.cn/uniCloud/uni-ai-intro.html" },
        { api: "unicloud", doc: "https://uniapp.dcloud.net.cn/uniCloud/" },
        { api: "uni-push", doc: "https://uniapp.dcloud.net.cn/unipush-v2.html" },
        { api: "uni-ui", doc: "https://uniapp.dcloud.net.cn/component/uniui/uni-ui.html" },
        { api: "uni-pay", doc: "https://uniapp.dcloud.net.cn/uniCloud/unipay.html" },
        { api: "uni-config-center", doc: "https://uniapp.dcloud.net.cn/uniCloud/uni-config-center.html" },
        { api: "ColorUI", doc: "https://github.com/weilanwl/ColorUI" },
        { api: "ColorUIGA", doc: "https://github.com/XiaokangLei/ColorUI-GA" },
        { api: "美叶", doc: "https://www.meiye.art/inspiration" },
      ];
      const func = this.$store.state.app.list.filter(e => e.api && e.api !== "自研API" && e.api !== "极速数据");
      return [...apis, ...func, ...(this.$store.state.user.images || [])];
    },
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
