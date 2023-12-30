<template>
  <Page ref="Page" refresh bg @refresh="getList">
    <template v-slot:default="{ page }">
      <template v-if="page">
        <view v-for="item in list" :key="item.group_id" class="cu-card article no-card margin-sm radius" @click="$copy(item.url)">
          <view class="cu-item shadow" style="padding: 0rpx">
            <view class="title flex flex_sb">
              <view class="text-cut text-grey">点击复制链接至微信或浏览器打开即可购买</view>
              <text class="cuIcon-copy text-grey"></text>
            </view>
            <view class="content" style="padding: 24rpx">
              <image :src="item.image" mode="aspectFill" @click.stop="$preview(item.image)"></image>
              <view class="desc">
                <view class="text-content" style="color: black"> {{ item.content }}</view>
              </view>
            </view>
          </view>
        </view>
      </template>
    </template>
  </Page>
</template>

<script>
export default {
  data() {
    return {
      list: [],
    };
  },
  onLoad() {
    this.getList();
  },
  methods: {
    getList() {
      this.$loading();
      uni
        .request({
          url: "https://api.avdgw.com/api/pdd/pdd2?key=alggXAgaZYAgfi2VIZneEDzEEs",
        })
        .then(({ data: { data } }) => {
          const list = [];
          data.forEach((e, i) => {
            if (i % 3 === 0) {
              const arr = e.content.split("https://p.pinduoduo.com/");
              e.content = arr[0].trim();
              e.url = "https://p.pinduoduo.com/" + arr[1];
              list.push(e);
            }
            if (i % 3 === 1) {
              list.at(-1).image = e.content;
            }
          });
          this.list = list;
        })
        .finally(() => {
          this.$loaded();
          this.$refs.Page.refreshing = false;
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
