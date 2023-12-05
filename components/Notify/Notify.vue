<template>
  <view class="cu-modal" :class="list.length && notifyRoute === currentRoute ? 'show' : ''">
    <view class="cu-dialog">
      <view class="cu-bar bg-white justify-end">
        <view class="content text-bold">系统消息</view>
        <view class="action" @click="hide()">
          <text class="cuIcon-close text-red"></text>
        </view>
      </view>
      <view class="cu-list menu sm-border margin-xs" style="max-height: 61.8vh; overflow: auto">
        <template v-for="(item, index) in list">
          <view v-if="item.path" class="cu-item arrow text-left" :key="index" @click="detail(item.path)">
            <view class="content padding-tb-sm">
              <view>
                <text class="margin-right-xs text-bold">{{ item.title }}</text>
              </view>
              <view class="text-gray text-sm">
                <text class="margin-right-xs">{{ item.message }}</text>
              </view>
            </view>
          </view>
          <template v-else>
            <view class="cu-item text-left" :key="index">
              <view class="content padding-tb-sm">
                <view>
                  <text class="margin-right-xs text-bold">{{ item.title }}</text>
                </view>
                <view class="text-gray text-sm">
                  <text class="margin-right-xs">{{ item.message }}</text>
                </view>
              </view>
            </view>
          </template>
        </template>
      </view>
      <view class="cu-bar bg-white" @click="hide()">
        <view class="action margin-0 flex-sub solid-left">{{ text }}</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "Notify",
  data() {
    return {
      text: "我知道了",
    };
  },
  computed: {
    list() {
      return this.$store.state.app.notify;
    },
    notifyRoute() {
      return this.$store.state.app.notifyRoute;
    },
    currentRoute() {
      return this.$store.state.app.currentRoute;
    },
  },
  methods: {
    hide() {
      this.$store.state.app.notify = [];
      this.$store.state.app.notifyRoute = "";
    },
    detail(url) {
      uni.navigateTo({ url });
    },
  },
};
</script>

<style lang="scss"></style>
