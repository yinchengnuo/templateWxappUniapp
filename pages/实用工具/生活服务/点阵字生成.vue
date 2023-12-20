<template>
  <Page ref="Page" bg>
    <template v-slot:default="{ page }">
      <template v-if="page">
        <view class="cu-bar bg-white solid-bottom margin-top">
          <view class="action">
            <text class="cuIcon-titles" :class="'text-' + $refs.Page.bgClass.split('-')[2]"></text>
            <text>输入文字即可生成</text>
          </view>
          <view class="action">
            <text v-if="text" class="my_textarea_clear cuIcon-roundclosefill" @click="(text = ''), make()"></text>
          </view>
        </view>
        <view class="cu-bar input solid-bottom">
          <input v-model.trim="text1" ref="input" :focus="focus" class="my_input no_button" confirm-type="search" placeholder="请输入文字" type="text" @blur="focus = false" @confirm="make" />
          <text v-if="text1" class="my_input_clear no_button cuIcon-roundclosefill" @click.stop="(text1 = ''), make()"></text>
        </view>
        <view class="cu-bar input solid-bottom">
          <input v-model.trim="text2" ref="input" :focus="focus" class="my_input no_button" confirm-type="search" placeholder="请输入文字" type="text" @blur="focus = false" @confirm="make" />
          <text v-if="text2" class="my_input_clear no_button cuIcon-roundclosefill" @click.stop="(text2 = ''), make()"></text>
        </view>
        <button class="margin cu-btn block lg shadow-blur" :class="'bg-' + $refs.Page.bgClass.split('-')[2]" @click="make">生成</button>
        <view class="cu-bar solid-bottom margin-top-xs">
          <view class="action">
            <text class="cuIcon-titles" :class="'text-' + $refs.Page.bgClass.split('-')[2]"></text>
            <text class="text-bold">生成结果</text>
          </view>
          <view class="action" @click="$copy(result)">
            <text class="cuIcon-copy margin-left-xs text-bold"></text>
          </view>
        </view>
        <view class="cu-list menu sm-border bg-white card-menu margin-top margin-bottom flex">
          <text v-if="result">{{ result }}</text>
          <Empty v-else />
        </view>
      </template>
    </template>
  </Page>
</template>

<script>
export default {
  data() {
    return {
      text1: "叮当",
      text2: "中",
      focus: false,
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
      this.text1 = (this.text1 || "").toString().trim();
      this.text2 = (this.text2 || "").toString().trim();
      if (this.text1 && this.text2) {
        uni
          .request({
            url: "https://api.lolimi.cn/API/dzz/?msg=" + this.text1 + "&fill=" + this.text2,
          })
          .then(({ data }) => {
            if (data.code === 1) {
              this.result = data.data;
            } else {
              this.$toast(data.data);
            }
          })
          .finally(() => {
            this.$loaded();
          });
      } else {
        this.focus = true;
        this.$toast("请输入文字");
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
