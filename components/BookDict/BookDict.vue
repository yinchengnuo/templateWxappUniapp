<template>
  <view>
    <view v-if="result.desc" class="cu-list menu sm-border card-menu margin-top margin-bottom">
      <view class="cu-item">
        <view class="content">
          <view class="text-black text-bold padding-top-sm padding-bottom-sm">{{ result.desc }}</view>
        </view>
      </view>
    </view>
    <view class="cu-bar bg-white solid-bottom margin-top">
      <view class="action">
        <text class="cuIcon-titles" :class="'text-' + color"></text>
        <text>目录</text>
      </view>
    </view>
    <view v-if="result" class="cu-list menu">
      <block v-for="(item, index) in result.content" :key="index">
        <view class="cu-item text-lg text-bold" @click="clickDict(item)">
          <view class="content padding-tb-sm">
            <view>{{ item.dict || item.name }}</view>
          </view>
          <view class="action padding-left-xs">
            <text :class="'cuIcon-' + (item.checked ? 'unfold' : 'right')"></text>
          </view>
        </view>
        <view v-if="item.dict" class="cu-item text-black" :class="item.checked ? '' : 'piano-hidden-content'" v-for="(itemm, indexx) in item.list" :key="indexx" @click="clickDetail(result.name, item.dict, itemm.name)">
          <view class="content margin-left">
            <text>{{ itemm.name }}</text>
          </view>
          <view class="action padding-left-xs margin-right">
            <text class="cuIcon-right"></text>
          </view>
        </view>
      </block>
    </view>
  </view>
</template>

<script>
export default {
  name: "Book",
  props: {
    color: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      result: null,
    };
  },
  created() {
    this.$loading();
    this.$("/book_dict", { name: getCurrentPages().at(-1).route.split("/").at(-1) })
      .then(data => {
        this.result = { ...data, content: data.content.map(e => ({ ...e, checked: Boolean(e.dict) })) };
      })
      .finally(() => {
        this.$loaded();
      });
  },
  methods: {
    clickDict(item) {
      if (item.dict) {
        item.checked = !item.checked;
      } else {
        uni.navigateTo({ url: `/pages/数据集合/电子书?book=${this.result.name}&name=${item.name}` });
      }
    },
    clickDetail(book, dict, name) {
      uni.navigateTo({ url: `/pages/数据集合/电子书?book=${book}&dict=${dict}&name=${name}` });
    },
  },
};
</script>

<style lang="scss"></style>
