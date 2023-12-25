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
      {
          date: "2023-12-24",
          version: "6.1.1",
          desc: ["新增量角器", "新增尺子", "新增色盲测试", "新增一生时间", "新增手机清灰", "新增全屏时钟", "新增亲戚关系计算器"],
        },
        {
          date: "2023-12-23",
          version: "6.1.0",
          desc: ["新增车牌归属地", "新增宠物大全", "新增出版社大全", "新增电话号大全", "新增高校大全", "新增国家大全", "新增机场三字码", "新增快递大全", "新增区号大全", "新增银行大全"],
        },
        {
          date: "2023-12-21",
          version: "6.0.9",
          desc: ["新增帅哥图片", "新增二次元图片", "新增Pixiv插画", "新增看图猜成语", "新增狗屁不通文章生成器"],
        },
        {
          date: "2023-12-21",
          version: "6.0.8",
          desc: ["新增头像", "新增星座运势", "新增脑筋急转弯", "新增渣男语录", "新增生活小窍门", "新增冷知识"],
        },
        {
          date: "2023-12-21",
          version: "6.0.7",
          desc: ["新增悲报", "新增黑板报", "新增小人举牌", "新增IP地理位置", "新增CosPlay", "新增网站出装", "新增点阵字生成", "优化交互逻辑"],
        },
        {
          date: "2023-12-19",
          version: "6.0.6",
          desc: ["新增周公解梦", "新增对对联", "新增文字找茬", "新增身份证信息查询", "新增手写模拟器", "新增猜字谜", "新增文案合集", "新增舔狗日记文字版", "新增王者荣耀语录", "新增小姐姐图片", "新增美女研究所"],
        },
        {
          date: "2023-12-18",
          version: "6.0.5",
          desc: ["新增妹子图片", "新增情侣名字", "新增笑话", "新增爱情公寓一言", "新增美腿图片", "新增初音图片", "新增毒鸡汤", "新增心灵鸡汤", "新增土味情话", "新增绕口令", "新增文章"],
        },
        {
          date: "2023-12-16",
          version: "6.0.4",
          desc: ["修复邀请新用户消息推送通知异常"],
        },
        {
          date: "2023-12-15",
          version: "6.0.3",
          desc: ["修复无法分享"],
        },
        {
          date: "2023-12-15",
          version: "6.0.2",
          desc: ["修复无法分享"],
        },
        {
          date: "2023-12-15",
          version: "6.0.1",
          desc: ["异常冗余违规广告", "增加喜报", "增加中草药", "优化图片查看效果", "移除树洞", "增加聊天删除"],
        },
        { date: "2023-12-13", version: "6.0.0", desc: ["V6.0.0重构初版上线"] },
      ],
    };
  },
  onLoad() {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>
