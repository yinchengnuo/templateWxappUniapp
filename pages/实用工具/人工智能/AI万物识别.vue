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
        </view>
        <template v-if="result">
          <button class="block cu-btn shadow-blur margin" :class="'bg-' + $refs.Page.bgClass.split('-')[2]" @click.stop="$preview(text)">查看原图</button>
          <view class="cu-list menu sm-border card-menu margin-top margin-bottom">
            <block v-for="(item, index) in result" :key="index">
              <view class="cu-item">
                <view class="content padding-tb-sm">
                  <view>
                    <text class="text-blue margin-right-xs">{{ item.name }}</text>
                  </view>
                  <view class="text-gray text-sm">
                    <text class="margin-right-xs">{{ item.root }}</text>
                  </view>
                </view>
                <view class="action">
                  <text>相似度：{{ item.score }}</text>
                </view>
              </view>
              <view v-if="item.baike_info && item.baike_info.image_url" class="cu-item" @click="$preview(item.baike_info.image_url)">
                <image class="w100 radius" :src="item.baike_info.image_url" show-menu-by-longpress mode="widthFix"></image>
              </view>
              <view v-if="item.baike_info && item.baike_info.description" class="cu-item">
                <view class="content">
                  <text class="text-sm text-black text-bold">{{ item.baike_info.description }}</text>
                </view>
              </view>
            </block>
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
      focus: true,
      result: null,
    };
  },
  onLoad() {},
  methods: {
    chooseImg() {
      this.$choose()
        .then(({ filePath }) => {
          this.$loading();
          this.text = filePath;
          uni
            .uploadFile({ filePath, name: "file", url: "https://api.oioweb.cn/api/ocr/recognition" })
            .then(({ data }) => {
              data = JSON.parse(data);
              if (data.code === 200) {
                this.result = data.result;
              } else {
                this.$toast(data.msg || "当前图片无法处理");
              }
            })
            .catch(() => this.$toast("当前图片无法处理"))
            .finally(() => this.$loaded());
        })
        .catch(() => this.$loaded());
    },
  },
};
</script>

<style lang="scss" scoped></style>
