<template>
  <view>
    <Page type="S1" ref="Page" bg>
      <template v-slot:default="{ page }">
        <template v-if="page">
          <view class="cu-bar bg-white solid-bottom margin-top">
            <view class="action">
              <text class="cuIcon-titles" :class="'text-' + $refs.Page.bgClass.split('-')[2]"></text>
              <text>输入中&英文即可翻译</text>
            </view>
            <view class="action">
              <text v-if="text" class="my_textarea_clear cuIcon-roundclosefill" @click="(text = ''), make()"></text>
            </view>
          </view>
          <view class="cu-form-group padding-left-sm padding-right-sm">
            <textarea v-model="text" class="my_textarea" auto-focus :focus="focus" confirm-type="search" maxlength="-1" placeholder="请输入输入中&英文" @blur="focus = false" @confirm="make"></textarea>
          </view>
          <view class="cu-form-group padding-left-sm padding-right-sm">
            <button class="w100 cu-btn block xxl shadow-blur margin-top-xs margin-bottom-xs" :class="'bg-' + $refs.Page.bgClass.split('-')[2]" @click="make">翻译</button>
          </view>
          <view class="cu-bar solid-bottom margin-top-xs">
            <view class="action">
              <text class="cuIcon-titles" :class="'text-' + $refs.Page.bgClass.split('-')[2]"></text>
              <text class="text-bold">翻译结果</text>
            </view>
            <view class="action" @click="$copy(result.result)">
              <text class="cuIcon-copy margin-left-xs text-bold"></text>
            </view>
          </view>
          <template v-if="result">
            <view class="cu-list menu sm-border card-menu margin-top margin-bottom">
              <view class="cu-item">
                <view class="content">
                  <view class="text-lg text-black text-bold padding-top-sm padding-bottom-sm">{{ result.result }}</view>
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
  </view>
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
  onLoad() {
    setTimeout(() => (this.focus = true), 1234);
    setTimeout(() => (this.focus = true), 2345);
    setTimeout(() => (this.focus = true), 3456);
  },
  methods: {
    make() {
      this.focus = false;
      this.result = null;
      this.text = (this.text || "").toString().trim();
      if (this.text) {
        this.$loading();
        uni
          .request({
            url: "https://www.yuanxiapi.cn/api/translation/?text=" + this.text,
          })
          .then(res => {
            this.result = res.data;
          })
          .finally(() => this.$loaded());
      } else {
        this.focus = true;
        this.$toast("请输入翻译内容");
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
