<template>
  <view>
    <Page type="S1" ref="Page" bg>
      <template v-slot:default="{ page }">
        <template v-if="page">
          <view class="cu-bar bg-white solid-bottom margin-top">
            <view class="action">
              <text class="cuIcon-titles" :class="'text-' + $refs.Page.bgClass.split('-')[2]"></text>
              <text>输入手机号即可查询手机号码信息</text>
            </view>
          </view>
          <view class="cu-bar input">
            <input v-model.trim="text" ref="input" :focus="focus" class="my_input" confirm-type="search" placeholder="请输入手机号" type="number" @blur="focus = false" @confirm="make" />
            <text v-if="text" class="my_input_clear cuIcon-roundclosefill" @click="(text = ''), make()"></text>
            <button class="cu-btn lg shadow-blur" :class="'bg-' + $refs.Page.bgClass.split('-')[2]" @click="make">查询</button>
          </view>
          <view class="cu-bar solid-bottom margin-top-xs">
            <view class="action">
              <text class="cuIcon-titles" :class="'text-' + $refs.Page.bgClass.split('-')[2]"></text>
              <text class="text-bold">查询结果</text>
            </view>
          </view>
          <template v-if="result">
            <view class="cu-list menu sm-border card-menu margin-top margin-bottom">
              <view class="cu-item">
                <view class="content">
                  <text class="text-lg">运营商</text>
                </view>
                <view class="action" @click="$copy(result.mobiletype)">
                  <text class="text-lg text-bold">{{ result.mobiletype }}</text>
                  <text class="cuIcon-copy margin-left-xs"></text>
                </view>
              </view>
              <view class="cu-item">
                <view class="content">
                  <text class="text-lg">省份</text>
                </view>
                <view class="action" @click="$copy(result.mobileprovice)">
                  <text class="text-lg text-bold">{{ result.mobileprovice }}</text>
                  <text class="cuIcon-copy margin-left-xs"></text>
                </view>
              </view>
              <view class="cu-item">
                <view class="content">
                  <text class="text-lg">城市</text>
                </view>
                <view class="action" @click="$copy(result.mobilearea)">
                  <text class="text-lg text-bold">{{ result.mobilearea }}</text>
                  <text class="cuIcon-copy margin-left-xs"></text>
                </view>
              </view>
              <view class="cu-item">
                <view class="content">
                  <text class="text-lg">电话区号</text>
                </view>
                <view class="action" @click="$copy(result.areacode)">
                  <text class="text-lg text-bold">{{ result.areacode }}</text>
                  <text class="cuIcon-copy margin-left-xs"></text>
                </view>
              </view>
              <view class="cu-item">
                <view class="content">
                  <text class="text-lg">身份证号</text>
                </view>
                <view class="action" @click="$copy(result.areaid)">
                  <text class="text-lg text-bold">{{ result.areaid }}</text>
                  <text class="cuIcon-copy margin-left-xs"></text>
                </view>
              </view>
              <view class="cu-item">
                <view class="content">
                  <text class="text-lg">邮政编码</text>
                </view>
                <view class="action" @click="$copy(result.postcode)">
                  <text class="text-lg text-bold">{{ result.postcode }}</text>
                  <text class="cuIcon-copy margin-left-xs"></text>
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
      text: "18338112210",
      focus: true,
      result: null,
    };
  },
  onLoad() {
    this.make();
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
            url: "https://api.qqsuu.cn/api/dm-mobilelocal?apiKey=827da2c53b76ce0cc4f31bb6d0aecbbc&phone=" + this.text,
          })
          .then(({ data }) => {
            if (data.code === 200) {
              this.result = data.data;
            } else {
              this.focus = true;
              this.$toast(data.msg);
            }
          })
          .finally(() => this.$loaded());
      } else {
        this.focus = true;
        this.$toast("请输入手机号");
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
