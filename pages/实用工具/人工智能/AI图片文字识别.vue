<template>
  <Page ref="Page" bg>
    <template v-slot:default="{ page }">
      <template v-if="page">
        <view class="cu-bar bg-white solid-bottom margin-top">
          <view class="action">
            <text class="cuIcon-titles" :class="'text-' + $refs.Page.bgClass.split('-')[2]"></text>
            <text>选择图片即可识别</text>
          </view>
        </view>
        <view class="cu-bar input">
          <button class="w100 cu-btn xxl shadow-blur margin-top-sm margin-left-sm margin-bottom-sm" :class="'bg-' + $refs.Page.bgClass.split('-')[2]" @click="chooseImg">选择图片</button>
        </view>
        <view class="cu-bar solid-bottom margin-top-xs">
          <view class="action">
            <text class="cuIcon-titles" :class="'text-' + $refs.Page.bgClass.split('-')[2]"></text>
            <text class="text-bold">识别结果</text>
          </view>
          <view class="action" @click="result && $copy(result.join(''))">
            <text class="cuIcon-copy margin-left-xs text-bold"></text>
          </view>
        </view>
        <template v-if="result">
          <button class="block cu-btn shadow-blur margin" :class="'bg-' + $refs.Page.bgClass.split('-')[2]" @click.stop="$preview(text)">查看原图</button>
          <view class="cu-list menu sm-border card-menu margin-top margin-bottom">
            <view class="cu-item">
              <view class="content">
                <view class="text-lg text-black text-bold padding-top-sm padding-bottom-sm flex-wrap">
                  <text v-for="(item, index) in result" :key="index">
                    <text class="text-blue" @click="$copy(item)">{{ item }}</text>
                    <text>、</text>
                  </text>
                </view>
              </view>
            </view>
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
            .uploadFile({ filePath, name: "file", url: "https://api.oioweb.cn/api/ocr" })
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
