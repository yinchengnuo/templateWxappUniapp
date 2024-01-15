<template>
  <view>
    <Page ref="Page">
      <template v-slot:default="{ page }">
        <template v-if="page">
          <view class="cu-list menu sm-border">
            <view class="cu-item" v-for="(item, index) in list" :key="index">
              <view class="content padding-tb-sm">
                <view>{{ item.date }} </view>
                <view class="text-black text-sm text-bold"> {{ item.title }} </view>
              </view>
            </view>
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
      list: [],
    };
  },
  mounted() {
    this.$loading();
    uni
      .request({
        url: "https://luckycola.com.cn/tools/historyday?appKey=6527caf0e95421d678425ec3&uid=hE1ted1697106634851IEl7XIiJN6&ColaKey=mDcDdsBWSaoaJ61702307027143mI4HojUKhv",
      })
      .then(({ data }) => {
        this.list = data.data.today_in_history;
      })
      .finally(() => this.$loaded());
  },
};
</script>

<style lang="scss" scoped></style>
