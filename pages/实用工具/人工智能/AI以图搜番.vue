<template>
  <Page ref="Page" bg>
    <template v-slot:default="{ page }">
      <template v-if="page">
        <view class="cu-bar bg-white solid-bottom margin-top">
          <view class="action">
            <text class="cuIcon-titles" :class="'text-' + $refs.Page.bgClass.split('-')[2]"></text>
            <text>选择图片即可搜索番剧</text>
          </view>
        </view>
        <view class="cu-bar input">
          <button class="w100 cu-btn xxl shadow-blur margin-top-sm margin-left-sm margin-bottom-sm" :class="'bg-' + $refs.Page.bgClass.split('-')[2]" @click="chooseImg">选择图片</button>
        </view>
        <view class="cu-bar solid-bottom margin-top-xs">
          <view class="action">
            <text class="cuIcon-titles" :class="'text-' + $refs.Page.bgClass.split('-')[2]"></text>
            <text class="text-bold">搜索结果</text>
          </view>
        </view>
        <template v-if="result">
          <button class="block cu-btn shadow-blur margin" :class="'bg-' + $refs.Page.bgClass.split('-')[2]" @click.stop="$preview(text)">查看原图</button>
          <view v-for="(item, index) in result" :key="index" class="cu-card case margin">
            <view class="cu-item shadow">
              <view class="image">
                <image :src="item.image" mode="aspectFill" @click="$preview(item.image)" style="max-height: 360rpx"> </image>
                <view class="cu-tag bg-blue">相似度：{{ item.similarity }}</view>
                <view class="cu-bar bg-shadeBottom">
                  <text class="text-cut">第{{ item.episode }}集{{ " " }}{{ item.from }}S~{{ item.to }}S</text>
                </view>
              </view>
              <view class="cu-list menu-avatar">
                <view class="cu-item">
                  <view class="cu-avatar round lg">
                    <image class="w100 h100 radius" :src="item.image" mode="aspectFill"></image>
                  </view>
                  <view class="content flex-sub">
                    <view class="text-grey">{{ item.anilist.title.native }}</view>
                    <view class="text-gray text-sm flex justify-between">
                      <text>{{ item.anilist.title.english }}</text>
                      <view class="text-blue text-sm" @click="$copy(item.video, '复制成功，请粘贴至浏览器打开即可观看预览视频')">
                        <text class="cuIcon-copy">点击复制预览播放地址</text>
                      </view>
                    </view>
                  </view>
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
            .uploadFile({ filePath, name: "file", url: "https://api.oioweb.cn/api/search/anilistInfo" })
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
