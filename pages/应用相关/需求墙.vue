<template>
  <Page ref="Page">
    <template v-slot:default="{ page }">
      <template v-if="page">
        <view class="cu-timeline">
          <block v-for="(item, index) in list" :key="index">
            <view class="cu-time w100" style="text-align: left">
              <text class="text-black text-xl text-bold margin-lr">{{ item.status }}</text>
              <text>{{ item.date }}</text>
            </view>
            <view class="cu-item">
              <view class="content shadow-blur" :class="colors[item.status]">
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
      colors: {
        开发中: "bg-green",
        规划中: "bg-blue",
        已完成: "bg-gray",
      },
      list: [
        { date: "2023-12-15", status: "开发中", desc: ["文案合集", "AI文字转语音", "周公解梦", "文字找茬"] },
        { date: "2023-12-07", status: "已完成", desc: ["增加邀请新用户在线推送消息提示"] },
        { date: "2023-12-07", status: "已完成", desc: ["增加浏览记录"] },
      ],
    };
  },
  onLoad() {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>
