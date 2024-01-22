<template>
  <view class="index" style="overflow: hidden">
    <image class=".page_bg" mode="aspectFill" src="../../static/page_bg.png"></image>
    <view class="flex" style="box-sizing: border-box; padding: 0 30rpx; position: relative" :style="{ marginTop: `${$app().globalData.menuButtonBoundingClientRect.top}px`, height: `${$app().globalData.menuButtonBoundingClientRect.height}px` }">
      <navigator url="/pages/用户中心/我的能量" class="flex h100" style="position: absolute; top: 0; left: 0; padding: 0 30rpx; font-weight: bolder">
        <text class="cuIcon-lightauto text-purple text-shadow">{{ user.energy }}</text>
        <text class="cuIcon-right text-purple text-shadow text-bold" style="margin: 0 6rpx"></text>
      </navigator>
      <text class="page_title text-black text-shadow">有问题，问AI</text>
    </view>
    <swiper class="tips-swiperitem" autoplay circular interval="5432" duration="4321" style="height: 64rpx">
      <swiper-item v-for="(item, index) in swiper_list" :key="index">
        <view class="bg-blue light">
          <view class="padding-xs text-xl padding-left flex" @click="swiperDetail(item)">
            <text class="cuIcon-lightauto text-blue margin-right-xs"></text>
            <text class="text-df">{{ item.content }}</text>
          </view>
        </view>
      </swiper-item>
    </swiper>
    <scroll-view v-if="list.length" scroll-y show-scrollbar enhanced enable-passive :scroll-top="scroll" :style="{ height: `calc(100vh - ${$app().globalData.menuButtonBoundingClientRect.bottom}px - 164rpx)` }">
      <view class="cu-chat">
        <view v-if="total > 100" class="cu-info">
          <text>仅展示最近100条对话记录</text>
        </view>
        <template v-for="(item, index) in list">
          <view v-if="item.type === 'chat'" :key="item.id" class="cu-item self" style="padding: 12rpx 24rpx 48rpx">
            <view class="flex1 flex" style="align-self: flex-end; justify-content: flex-end">
              <view class="flex padding-lr-xs bg-white shadow radius margin-right-xs" @click="longpress('chat', item._)">
                <text class="cuIcon-more"></text>
              </view>
            </view>
            <view class="main" style="margin: 0 24rpx 0 0; max-width: 494rpx" @longpress="longpress('chat', item._, true)">
              <view class="content bg-green shadow">
                <text style="word-break: break-all">{{ item.content }}</text>
              </view>
            </view>
            <view v-if="user.avatar" class="cu-avatar" type="userAvatarUrl">
              <image class="w100 h100 radius" :src="user.avatar" mode="aspectFill" />
            </view>
            <open-data v-else class="cu-avatar radius" type="userAvatarUrl"></open-data>
            <view class="date" style="bottom: 8rpx; left: auto; right: 128rpx">
              <text>{{ item.time }}</text>
              <text v-if="item.energy" class="cuIcon-lightauto text-green flex" style="position: absolute; 100%; left: 100%; top: 0; white-space: nowrap; width: 128rpx;">-{{ item.energy }}</text>
            </view>
          </view>

          <view v-if="item.type === 'reply'" :key="item.id" class="cu-item" style="padding: 12rpx 24rpx 48rpx">
            <view class="cu-avatar radius">
              <image mode="aspectFill" :src="'../../static/ai/' + item.provider + '.jpg'" class="w100 h100"></image>
            </view>
            <view class="main" style="margin: 0 0 0 24rpx; max-width: 494rpx" @longpress="longpress('reply', item._, true)">
              <view class="content shadow">
                <text style="word-break: break-all">{{ item.content }} </text>
                <LoadingSpin v-if="generating && index === list.length - 1"></LoadingSpin>
              </view>
            </view>
            <view class="flex" style="align-self: flex-end">
              <view class="flex padding-lr-xs bg-white shadow radius margin-left-xs" @click="longpress('reply', item._)">
                <text class="cuIcon-more"></text>
              </view>
            </view>
            <view class="date" style="bottom: 8rpx; right: auto; left: 128rpx">
              <text class="cuIcon-lightauto text-green flex" style="position: absolute; left: -128rpx; width: 128rpx; top: 0; white-space: nowrap">-{{ item.energy || item._energy }}</text>
              <text class="margin-right-xs">{{ item.time }} </text>
              <text v-if="item.long" class="text-gray text-xs">
                <text class="text-bold">{{ item.content.length }}</text> 字 耗时 <text class="text-bold">{{ item.long }}</text> S</text
              >
            </view>
          </view>
        </template>
        <AIRandomBox v-if="show_random_box" :len="list.length" />
        <view v-else style="height: 28rpx"></view>
      </view>
    </scroll-view>
    <view class="flexc" v-if="!list.length && show_random_box" :style="{ height: `calc(100vh - ${$app().globalData.menuButtonBoundingClientRect.bottom}px - 164rpx)` }" style="justify-content: flex-end; overflow: auto">
      <AIRandomBox />
    </view>
    <view class="cu-bar foot input" style="bottom: 1rpx">
      <view class="action" @click="showSettings()" style="margin: 0; padding: 0 20rpx">
        <text class="cuIcon-settings text-grey" style="margin: 0"></text>
      </view>
      <input class="solid-bottom" v-model="chat" @confirm="send" confirm-type="send" placeholder="请输入问题" style="background: #ededed; border-radius: 8rpx; margin: 0; padding: 0 20rpx; box-sizing: border-box" />
      <view class="action" style="padding: 0 20rpx; margin: 0" @click="showQuestions()">
        <text class="cuIcon-roundadd text-grey"></text>
      </view>
      <button class="cu-btn bg-green shadow" @click="send">发送</button>
    </view>
    <page-container :show="page_container_show" :z-index="2048" round @afterleave="page_container_show = page_container_ai_settings_show = page_container_ai_questions_show = false">
      <AISettings v-if="page_container_ai_settings_show" />
      <AIQuestions :show="page_container_ai_questions_show" v-show="page_container_ai_questions_show" />
    </page-container>
    <ADFloat ref="ADFloat" />
  </view>
</template>

<script>
import dayjs from "dayjs";
export default {
  data() {
    return {
      show: 0,
      list: [],
      total: 0,
      chat: "",
      scroll: 999999999,
      generating: false,
      interstitialAd: {},
      page_container_show: false,
      page_container_ai_settings_show: false,
      page_container_ai_questions_show: false,
      bg: getApp()
        .globalData.bgClass.slice()
        .sort(() => Math.random() - 0.5)[0],
      swiper_list: [],
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    show_random_box() {
      return this.user.show_random_box;
    },
  },
  watch: {
    show_random_box() {
      setTimeout(() => this.scroll++);
    },
  },
  onShow() {
    this.show++;
    if (this.show !== 0 && this.show % 4 === 0) {
      !this.$store.state.user.vip && this.interstitialAd.show();
    }

    if (uni.getStorageSync("showSettings")) {
      uni.removeStorageSync("showSettings");
      this.page_container_ai_questions_show = false;
      this.showSettings();
    }
  },
  onLoad() {
    this.interstitialAd = uni.createInterstitialAd({
      adUnitId: "adunit-e3f467955c2226a4",
    });
    this.getList();

    this.swiper_list = [
      { content: "10,000 能量只需一元！多买多送，最低3折！", func: () => uni.navigateTo({ url: "/pages/用户中心/我的能量" }) },
      { content: "每日签到、邀请新用户、看视频广告都可以获取能量", func: () => this.showSettings() },
      { content: "对话不智能？试试切换AI厂商&大语音模型？", func: () => this.showSettings() },
      { content: "不知道问什么？看看大家怎么问", func: () => this.showQuestions() },
      { content: "设置【连续对话记忆次数】，让AI理解对话上下文", func: () => this.showSettings() },
    ];
  },
  methods: {
    swiperDetail(item) {
      item.func();
    },
    // 显示设置
    showSettings() {
      this.page_container_show = true;
      this.page_container_ai_settings_show = true;
    },
    // 显示百宝箱
    showQuestions() {
      this.page_container_show = true;
      this.page_container_ai_questions_show = true;
    },
    // 获取聊天记录
    getList(data, unScroll) {
      const make = data => {
        if (data.length) {
          const list = [];
          data.forEach(e => {
            list.push({
              _: e,
              id: e._id,
              type: "chat",
              content: e.chat,
              time: e.chat_time,
              provider: e.provider,
              energy: e.promptTokens,
              _energy: e.totalTokens,
            });
            list.push({
              _: e,
              type: "reply",
              id: e._id + "1",
              content: e.reply,
              time: e.reply_time,
              provider: e.provider,
              _energy: e.totalTokens,
              energy: e.completionTokens,
              long: +((e._reply_time - e._chat_time) / 1000).toFixed(2),
            });
            !unScroll && setTimeout(() => this.scroll++);
          });
          this.list = list;
        }
        this.showRandowBox();
      };
      if (data) {
        setTimeout(() => {
          make(data);
        });
      } else {
        this.$loading();
        this.$("/chat_record")
          .then(({ total, records }) => {
            this.total = total;
            make(records);
          })
          .finally(() => {
            this.$loaded();
          });
      }
    },
    // 发送问题
    async send() {
      if (this.generating) {
        return this.$toast("AI正在生成对话，请稍后再试");
      }
      if (this.$store.state.user.energy < 1) {
        uni.showModal({
          title: "能量不足",
          content: "您可以选择付费或免费获取能量",
          confirmText: "立即充值",
          cancelText: "免费获取",
          success: ({ confirm }) => {
            if (confirm) {
              uni.navigateTo({ url: "/pages/用户中心/我的能量" });
            } else {
              this.showSettings();
            }
          },
        });
        return
      }
      if (this.chat.trim()) {
        this.generating = true;
        const chat = {
          id: "1",
          energy: 0,
          _energy: 0,
          type: "chat",
          content: this.chat,
          time: new Date().toLocaleString(),
          provider: this.$store.state.user.ai_provider,
        };
        const reply = {
          id: "2",
          time: "",
          energy: 0,
          _energy: 0,
          content: "",
          type: "reply",
          provider: this.$store.state.user.ai_provider,
        };
        this.list.push(chat);
        this.list.push(reply);
        this.$store.state.user.show_random_box = false;
        setTimeout(() => this.scroll++);
        this.$("/chat", { chat: this.chat })
          .then(data => {
            chat._ = data;
            chat.id = data._id;
            chat.time = data.chat_time;
            chat.energy = data.promptTokens;
            chat._energy = data.totalTokens;

            reply._ = data;
            reply.id = data._id + "1";
            reply.content = data.reply;
            reply.time = data.reply_time;
            reply._energy = data.totalTokens;
            reply.energy = data.completionTokens;
            reply.long = +((data._reply_time - data._chat_time) / 1000).toFixed(2);
            setTimeout(() => this.scroll++);
            this.$store.state.user.total_chat_count++;
            this.$store.state.user.energy -= data.totalTokens;
            this.$store.state.user.total_payout += data.totalTokens;

            this.total++;
            if (this.total > 100) {
              this.list.shift();
              this.list.shift();
            }
          })
          .catch(e => {
            this.list.pop();
            this.list.pop();
            this.showRandowBox();
            uni.showModal({ title: "提示", content: e, showCancel: false, confirmText: "我知道了" });
          })
          .finally(() => {
            this.generating = false;
          });
        this.chat = "";
      } else {
        this.$toast("请输入问题");
      }
    },
    // 是否显示随机推荐盒子
    showRandowBox() {
      if (this.list.length === 0) {
        this.$store.state.user.show_random_box = true;
      } else {
        const hide = uni.getStorageSync("hide_random_box");
        if (!(hide && hide === dayjs().format("YYYY-MM-DD"))) {
          this.$store.state.user.show_random_box = true;
        }
      }
    },
    longpress(type, item, vibrate) {
      if (vibrate) uni.vibrateShort();
      const itemList = type === "chat" ? ["再次提问", "复制问题", "删除问答"] : ["复制回答", "删除问答"];
      uni.showActionSheet({
        itemList,
        title: type === "chat" ? "问题操作" : "回答操作",
        success: ({ tapIndex }) => {
          if (itemList[tapIndex] === "再次提问") {
            this.chat = item.chat;
            this.send();
          }
          if (itemList[tapIndex] === "复制问题") {
            this.$copy(item.chat);
          }
          if (itemList[tapIndex] === "复制回答") {
            this.$copy(item.reply);
          }
          if (itemList[tapIndex] === "删除问答") {
            this.delete(item);
          }
        },
      });
    },
    // 删除
    delete(item) {
      uni.showModal({
        title: "提示",
        content: "确定删除该问答记录？删除后将无法恢复！",
        success: ({ confirm }) => {
          if (confirm) {
            this.$loading();
            this.$("/chat_delete", { ids: [item._id] })
              .then(({ total, records }) => {
                this.total = total;
                this.$toast("操作成功");
                this.getList(records, true);
              })
              .finally(() => {
                this.$loaded();
              });
          }
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.index {
  .page_bg {
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 100vh;
    position: fixed;
  }

  .page_title {
    font-size: 13pt;
    font-weight: bold;
  }
}
</style>
