<template>
  <Page ref="Page" bg>
    <template v-slot:default="{ page }">
      <template v-if="page">
        <view class="cu-bar bg-white solid-bottom margin-top">
          <view class="action">
            <text class="cuIcon-titles" :class="'text-' + $refs.Page.bgClass.split('-')[2]"></text>
            <text>选择图片即可抠图</text>
          </view>
        </view>
        <view class="cu-bar input">
          <button class="w100 cu-btn xxl shadow-blur margin-top-sm margin-left-sm margin-bottom-sm" :class="'bg-' + $refs.Page.bgClass.split('-')[2]" @click="chooseImg">选择图片</button>
        </view>
        <view class="cu-bar solid-bottom margin-top-xs">
          <view class="action">
            <text class="cuIcon-titles" :class="'text-' + $refs.Page.bgClass.split('-')[2]"></text>
            <text class="text-bold">处理结果</text>
          </view>
        </view>
        <template v-if="result">
          <view class="cu-list menu sm-border card-menu margin-top margin-bottom" @click="$preview(result)">
            <ErrorImage v-if="errored" />
            <image v-else class="solid" :src="result" mode="widthFix" show-menu-by-longpress style="width: 686rpx" @load="load" @error="error"> </image>
            <button class="w100 cu-btn shadow-blur margin-top-sm" :class="'bg-' + $refs.Page.bgClass.split('-')[2]" @click.stop="$preview(text)">查看原图</button>
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
import PageImg from "@/mixins/PageImg.js";
export default {
  mixins: [PageImg],
  data() {
    return {
      text: "",
      focus: true,
      result: "",
    };
  },
  onLoad() {},
  methods: {
    chooseImg() {
      this.$choose()
        .then(({ tempFiles: [{ tempFilePath: filePath }] }) => {
          this.$loading();
          this.text = filePath;
          uni
            .uploadFile({ filePath, name: "file", url: "https://api.oioweb.cn/api/ai/matting" })
            .then(({ data }) => {
              data = JSON.parse(data);
              if (data.code === 200) {
                this.result = data.result;
              } else {
                this.$toast(data.msg || "当前图片无法处理");
              }
            })
            .catch(() => {
              this.$toast("当前图片无法处理");
            })
            .finally(() => {
              this.$loaded();
            });
        })
        .catch(({ errMsg }) => {
          this.$loaded();
          this.$toast(errMsg);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
