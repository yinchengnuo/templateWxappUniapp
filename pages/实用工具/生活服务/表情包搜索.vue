<template>
  <Page ref="Page" bg>
    <template v-slot:default="{ page }">
      <template v-if="page">
        <view class="cu-bar bg-white solid-bottom margin-top">
          <view class="action">
            <text class="cuIcon-titles" :class="'text-' + $refs.Page.bgClass.split('-')[2]"></text>
            <text>输入关键字即可查询表情包</text>
          </view>
        </view>
        <view class="cu-bar input solid-bottom">
          <input v-model.trim="text" ref="input" :focus="focus" class="my_input" confirm-type="search" placeholder="请输入关键字" type="text" @blur="focus = false" @confirm="make" />
          <text
            v-if="text"
            class="my_input_clear cuIcon-roundclosefill"
            @click="
              text = '';
              make();
            "></text>
          <button class="cu-btn lg shadow-blur" :class="'bg-' + $refs.Page.bgClass.split('-')[2]" @click="make">查询</button>
        </view>
        <view class="cu-bar solid-bottom margin-top-xs">
          <view class="action">
            <text class="cuIcon-titles" :class="'text-' + $refs.Page.bgClass.split('-')[2]"></text>
            <text class="text-bold">查询结果</text>
          </view>
        </view>
        <template v-if="result">
          <view class="cu-list menu sm-border card-menu">
            <view class="flex justify-between flex-wrap">
              <image
                class="margin-top-xs margin-bottom-xs"
                v-for="(item, index) in result"
                :key="item[0]"
                :src="item[0]"
                style="width: 222rpx; height: 222rpx; border-radius: 28rpx; overflow: hidden"
                show-menu-by-longpress
                mode="aspectFill"
                @click="$preview(result)">
              </image>
            </view>
            <view class="flex text-grey text-sm">没有更多了...</view>
          </view>
        </template>
        <view v-else class="cu-list menu sm-border bg-white card-menu margin-top margin-bottom">
          <Empty />
        </view>
      </template>
    </template>
  </Page>
</template>

<script>
export default {
  data() {
    return {
      text: "",
      // text: '香蕉',
      focus: true,
      result: null,
    };
  },
  onLoad() {
    this.make();
  },
  methods: {
    scan() {
      uni.scanCode({
        success: ({ result }) => {
          this.text = result;
          this.make();
        },
      });
    },
    make() {
      this.focus = false;
      this.result = null;
      this.text = (this.text || "").toString().trim();
      this.$loading();
      uni
        .request({
          url: "https://api.oioweb.cn/api/picture/emoticon?keyword=" + (this.text || "Hi"),
        })
        .then(res => {
          if (res.data.code === 200) {
            this.result = res.data.result;
          } else {
            this.$toast(res.data.msg);
          }
        })
        .finally(() => {
          this.$loaded();
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
