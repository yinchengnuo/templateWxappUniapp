<template>
  <Page ref="Page" bg>
    <template v-slot:default="{ page }">
      <template v-if="page">
        <view class="cu-list menu">
          <template v-if="records.length">
            <view class="cu-item" v-for="(item, index) in records" :key="index">
              <view class="content padding-tb-sm">
                <view>
                  <text class="text-black margin-right-xs" style="white-space: nowrap" @click="$copy(item.openid)">
                    <text>微信用户:</text>
                    <text class="text-xs text-bold">{{ item.openid }}</text>
                    <text class="cuIcon-copy text-bold text-grey"></text>
                  </text>
                </view>
                <view class="text-gray text-sm">
                  <text class="margin-right-xs">注册时间：{{ item.register_time }}</text>
                </view>
                <view class="text-gray text-sm">
                  <text class="margin-right-xs">分享时间：{{ item.share_time }}</text>
                </view>
              </view>
              <view class="action">
                <text class="text-lg text-bold text-green">+{{ item.energy }}</text>
              </view>
            </view>
            <view class="margin flex text-grey text-sm">仅展示最新100条记录...</view>
          </template>
          <Empty v-if="empty" />
        </view>
      </template>
    </template>
  </Page>
</template>

<script>
export default {
  data() {
    return {
      records: [],
      empty: false,
    };
  },
  created() {
    this.$loading();
    this.$("/share_record")
      .then(data => {
        this.records = data;
        if (!this.records.length) {
          this.empty = true;
        }
      })
      .finally(() => this.$loaded());
  },
  onLoad() {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>
