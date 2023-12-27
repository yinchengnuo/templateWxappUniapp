<template>
  <Page ref="Page" bg>
    <template v-slot:default="{ page }">
      <template v-if="page">
        <view class="cu-bar bg-white solid-bottom margin-top">
          <view class="action">
            <text class="cuIcon-titles" :class="'text-' + $refs.Page.bgClass.split('-')[2]"></text>
            <text>输入文字即可生成</text>
          </view>
        </view>
        <view class="cu-bar input solid-bottom">
          <text class="margin-left text-bold">姓名</text>
          <input v-model.trim="text1" ref="input" :focus="focus" class="my_input no_button" confirm-type="search" placeholder="请输入姓名" type="text" @blur="focus = false" @confirm="make" />
          <text v-if="text1" class="my_input_clear no_button cuIcon-roundclosefill" @click.stop="(text1 = ''), make()"></text>
        </view>
        <view class="cu-bar input solid-bottom">
          <text class="margin-left text-bold">奖项</text>
          <input v-model.trim="text2" ref="input" :focus="focus" class="my_input no_button" confirm-type="search" placeholder="请输入奖项" type="text" @blur="focus = false" @confirm="make" />
          <text v-if="text2" class="my_input_clear no_button cuIcon-roundclosefill" @click.stop="(text2 = ''), make()"></text>
        </view>
        <view class="cu-bar input solid-bottom">
          <text class="margin-left text-bold">班级</text>
          <input v-model.trim="text3" ref="input" :focus="focus" class="my_input no_button" confirm-type="search" placeholder="请输入班级" type="text" @blur="focus = false" @confirm="make" />
          <text v-if="text3" class="my_input_clear no_button cuIcon-roundclosefill" @click.stop="(text3 = ''), make()"></text>
        </view>
        <button class="margin cu-btn block lg shadow-blur" :class="'bg-' + $refs.Page.bgClass.split('-')[2]" @click="make">生成</button>
        <view class="cu-bar solid-bottom margin-top-xs">
          <view class="action">
            <text class="cuIcon-titles" :class="'text-' + $refs.Page.bgClass.split('-')[2]"></text>
            <text class="text-bold">生成结果</text>
          </view>
        </view>
        <view class="cu-list menu sm-border bg-white card-menu margin-top margin-bottom">
          <Img v-if="result" :src="result" />
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
      text1: "小叮当",
      text2: "三好学生",
      text3: "翻斗小学43班",
      focus: false,
      result: null,
    };
  },
  onLoad() {
    this.make()
  },
  methods: {
    make() {
      this.focus = false;
      this.result = null;
      this.text = (this.text || "").toString().trim();
      this.result = `https://api.pearktrue.cn/api/certcommend/?name=${this.text1 || '张三'}&title=${this.text2 || '法外狂徒'}&classname=${this.text3 || '小小班'}`
    },
  },
};
</script>

<style lang="scss" scoped></style>
