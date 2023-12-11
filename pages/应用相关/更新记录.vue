<template>
  <Page ref="Page">
    <template v-slot:default="{ page }">
      <template v-if="page">
        <view class="cu-timeline">
          <block v-for="(item, index) in list" :key="index">
            <view class="cu-time w100" style="text-align: left">
              <text class="text-black text-xl text-bold margin-lr">V {{ item.version }}</text>
              <text>{{ item.date }}</text>
            </view>
            <view class="cu-item">
              <view class="content shadow-blur" :class="index === 0 ? 'bg-green' : ''">
                <view v-for="(itemm, indexx) in item.desc" :key="itemm">
                  <text v-if="item.desc.length > 1">{{ indexx + 1 }}、</text>
                  <text>{{ itemm }}</text>
                </view>
              </view>
            </view>
          </block>
        </view>
      </template>
    </template>
  </Page>
</template>

<script>
export default {
  data() {
    return {
      list: [
        // {
        // 	date: "2023-12-15",
        // 	version: "6.0.1",
        // 	desc: ['增加功能搜索', '修复每日60S看世界无法使用'],
        // },
        { date: "2023-12-13", version: "6.0.0", desc: ["V6.0.0重构初版上线"] },
      ],
    };
  },
  onLoad() {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>
