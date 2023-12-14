<template>
  <view class="cu-list menu sm-border card-menu margin-tb bg-white">
    <view v-if="result" class="cu-item">
      <view class="content">
        <view class="text-lg text-black text-bold padding-tb-sm">
          <template v-if="arrayView">
            <view>
              <view v-for="(item, index) in result" :key="index">{{ item }}</view>
            </view>
          </template>
          <template v-if="arrayText">
            <view>
              <view v-for="(item, index) in result" :key="index">{{ item }}</view>
            </view>
          </template>
          <template v-if="!arrayView && !arrayText">
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
    arrayText: {
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
