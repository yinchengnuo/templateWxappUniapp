<template>
  <view class="cu-list menu sm-border card-menu margin-tb bg-white">
    <view v-if="result" class="cu-item" :style="{ filter: blur ? 'blur(6px)' : 'blur(0px)' }">
      <view class="content">
        <view class="text-lg text-black text-bold padding-tb-sm" style="word-wrap: break-word; white-space: pre-wrap">
          <template v-if="arrayView">
            <view>
              <view v-for="(item, index) in result" :key="index" :style="{ textIndent: indent ? '2em' : '0em' }">{{ item }}</view>
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
    blur: {
      type: Boolean,
      default: false,
    },
    indent: {
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
