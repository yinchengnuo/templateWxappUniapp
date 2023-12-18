<template>
  <Page type="S1" ref="Page" bg>
    <template v-slot:default="{ page }">
      <template v-if="page">
        <view class="cu-bar bg-white solid-bottom margin-top">
          <view class="action">
            <text class="cuIcon-titles" :class="'text-' + $refs.Page.bgClass.split('-')[2]"></text>
            <text>输入词语即可解梦</text>
          </view>
        </view>
        <view class="cu-bar input">
          <input v-model.trim="text" ref="input" :focus="focus" class="my_input" confirm-type="search" placeholder="请输入词语" type="digit" @blur="focus = false" @confirm="make" />
          <text v-if="text" class="my_input_clear cuIcon-roundclosefill" @click="(text = ''), make()"></text>
          <button class="cu-btn lg shadow-blur" :class="'bg-' + $refs.Page.bgClass.split('-')[2]" @click="make">解梦</button>
        </view>
        <view class="cu-bar solid-bottom margin-top-xs">
          <view class="action">
            <text class="cuIcon-titles" :class="'text-' + $refs.Page.bgClass.split('-')[2]"></text>
            <text class="text-bold">解梦结果</text>
          </view>
          <view class="action" @click="$copy(result)">
            <text class="cuIcon-copy margin-left-xs text-bold"></text>
          </view>
        </view>
        <TextBoard :result="result" />
      </template>
    </template>
  </Page>
</template>

<script>
export default {
  data() {
    return {
      text: "鲨鱼",
      focus: true,
      result: null,
    };
  },
  onLoad() {
    if (this.text) {
      this.make()
    }
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
            url: "https://api.tangdouz.com/a/zgjm.php?nr=" + this.text,
          })
          .then(({data}) => {
            this.result = data
          })
          .finally(() => this.$loaded());
      } else {
        this.focus = true;
        this.$toast("请输入词语");
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
