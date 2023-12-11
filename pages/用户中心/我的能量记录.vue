<template>
  <Page ref="Page">
    <template v-slot:default="{ page }">
      <template v-if="page">
        <view class="cu-list menu">
          <view class="cu-item" v-for="(item, index) in result" :key="index">
            <view class="content padding-tb-sm">
              <view>
                <text v-if="item.type === 'ad'" class="text-black margin-right-xs">观看视频广告奖励</text>
                <text v-if="item.type === 'pay'" class="text-black margin-right-xs">购买</text>
                <text v-if="item.type === 'chat'" class="text-black margin-right-xs">AI对话消耗</text>
                <text v-if="item.type === 'clock'" class="text-black margin-right-xs">当日签到</text>
                <text v-if="item.type === 'logon'" class="text-black margin-right-xs">新用户赠送1000</text>
                <text v-if="item.type === 'share'" class="text-black margin-right-xs">邀请新用户奖励</text>
              </view>
              <view class="text-gray text-sm">
                <text class="margin-right-xs">{{ item.create_time }}</text>
              </view>
            </view>
            <view class="action">
              <text v-if="item.energy > 0" class="text-lg text-bold text-green">+{{ item.energy }}</text>
              <text v-else class="text-lg text-bold text-red">{{ item.energy }}</text>
            </view>
          </view>
          <view class="margin flex text-grey text-sm">仅展示最新100条记录...</view>
        </view>
      </template>
    </template>
  </Page>
</template>

<script>
export default {
  data() {
    return {
      result: [],
    };
  },
  created() {
    this.$loading();
    this.$("/energy_record")
      .then(data => {
        this.result = data;
      })
      .finally(() => {
        this.$loaded();
      });
  },
  onLoad() {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>
