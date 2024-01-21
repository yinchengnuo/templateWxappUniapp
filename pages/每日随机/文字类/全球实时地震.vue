<template>
  <view>
    <Page ref="Page">
      <template v-slot:default="{ page }">
        <template v-if="page">
          <view class="cu-list menu sm-border">
            <view class="cu-item" v-for="(item, index) in list" :key="index">
              <view class="content padding-tb-sm">
                <view>{{ item.place }} </view>
                <view class="text-black text-sm text-bold"> {{ item.magnitude }}级 深度：{{ item.depth }} </view>
                <view> {{ item.time }} </view>
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
    this.$("/proxy", { url: "https://api.pearktrue.cn/api/earthquake/" })
      .then(({ data }) => {
        this.list = data;
      })
      .finally(() => this.$loaded());
  },
};
</script>

<style lang="scss" scoped></style>
