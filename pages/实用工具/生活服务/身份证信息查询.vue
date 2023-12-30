<template>
  <view>
    <Page type="S1" ref="Page" bg>
      <template v-slot:default="{ page }">
        <template v-if="page">
          <view class="cu-bar bg-white solid-bottom margin-top">
            <view class="action">
              <text class="cuIcon-titles" :class="'text-' + $refs.Page.bgClass.split('-')[2]"></text>
              <text>输入身份证号即可查询身份证号码信息</text>
            </view>
          </view>
          <view class="cu-bar input">
            <input v-model.trim="text" ref="input" :focus="focus" class="my_input" confirm-type="search" placeholder="请输入身份证号" type="idcard" @blur="focus = false" @confirm="make" />
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
                  <text class="text-lg">性别</text>
                </view>
                <view class="action" @click="$copy(result.gender)">
                  <text class="text-lg text-bold">{{ result.gender }}</text>
                  <text class="cuIcon-copy margin-left-xs"></text>
                </view>
              </view>
              <view class="cu-item">
                <view class="content">
                  <text class="text-lg">年龄</text>
                </view>
                <view class="action" @click="$copy(result.age)">
                  <text class="text-lg text-bold">{{ result.age }}</text>
                  <text class="cuIcon-copy margin-left-xs"></text>
                </view>
              </view>
              <view class="cu-item">
                <view class="content">
                  <text class="text-lg">籍贯</text>
                </view>
                <view class="action" @click="$copy(result.region)">
                  <text class="text-lg text-bold">{{ result.region }}</text>
                  <text class="cuIcon-copy margin-left-xs"></text>
                </view>
              </view>
              <view class="cu-item">
                <view class="content">
                  <text class="text-lg">生日</text>
                </view>
                <view class="action" @click="$copy(result.birthday)">
                  <text class="text-lg text-bold">{{ result.birthday }}</text>
                  <text class="cuIcon-copy margin-left-xs"></text>
                </view>
              </view>
              <view class="cu-item">
                <view class="content">
                  <text class="text-lg">生肖</text>
                </view>
                <view class="action" @click="$copy(result.zodiac)">
                  <text class="text-lg text-bold">{{ result.zodiac }}</text>
                  <text class="cuIcon-copy margin-left-xs"></text>
                </view>
              </view>
              <view class="cu-item">
                <view class="content">
                  <text class="text-lg">星座</text>
                </view>
                <view class="action" @click="$copy(result.constellation)">
                  <text class="text-lg text-bold">{{ result.constellation }}</text>
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
      text: "",
      focus: true,
      result: null,
    };
  },
  onLoad() {},
  methods: {
    make() {
      this.focus = false;
      this.result = null;
      this.text = (this.text || "").toString().trim();
      if (this.text) {
        this.$loading();
        uni
          .request({
            url: "https://api.nanyinet.com/api/sfz/api.php?id=" + this.text,
          })
          .then(res => {
            if (typeof res.data === "object") {
              this.result = res.data;
            } else {
              this.focus = true;
              this.$toast(res.data);
            }
          })
          .finally(() => this.$loaded());
      } else {
        this.focus = true;
        this.$toast("请输入身份证号");
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
