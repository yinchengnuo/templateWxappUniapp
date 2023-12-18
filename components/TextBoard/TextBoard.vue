<template>
  <view class="cu-list menu sm-border card-menu margin-tb bg-white">
    <view v-if="result" class="cu-item">
      <view class="content">
        <view class="text-lg text-black text-bold padding-tb-sm" style="word-wrap: break-word">
          <template v-if="arrayView">
            <view>
              <view v-for="(item, index) in result" :key="index" style="text-indent: 2em">{{ item }}</view>
            </view>
          </template>
          <template v-if="!arrayView">
            {{ result }}
          </template>
        </view>
      </view>
    </view>
    <Empty v-else />
  </view>
</template>

<script>
export default {
  name: "TextBoard",
  props: {
    richText: {
      type: String,
      default: "",
    },
    arrayView: {
      type: String,
      default: "",
    },
    result: {
      type: String | Array,
      default: "",
    },
  },
  data() {
    return {};
  },
};
</script>

<style></style>
