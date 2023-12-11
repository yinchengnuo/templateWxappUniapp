<template>
  <view class="index" style="position: relative; min-height: 100vh; overflow: hidden">
    <image class="page_bg" mode="aspectFill" src="../../static/page_bg.png"></image>
    <view class="page_bg bg-gradual-blue-light"></view>
    <image class="w100;" mode="widthFix" style="position: absolute; top: 0; left: 0; opacity: 0.2; z-index: 0" src="../../static/logo.png"></image>
    <view class="relative UCenter-bg">
      <image v-if="user.avatar" :src="user.avatar" class="png bg-white shadow" mode="aspectFill"></image>
      <open-data v-else class="png bg-white shadow" type="userAvatarUrl"></open-data>
      <text class="cuIcon-camera margin-left-xs text-black" style="text-shadow: none; position: absolute; top: 140rpx; left: calc(50% + 40rpx); font-size: 48rpx"></text>
      <button open-type="chooseAvatar" style="position: absolute; width: 350rpx; height: 200rpx; border-radius: 50%; opacity: 0; top: 0; left: 200rpx" @chooseavatar="chooseavatar"></button>
      <view class="margin text-xxl text-black text-bold" @click="focus = true">
        <view v-if="focus" class="flex" style="background: rgba(0, 0, 0, 0.1); border-radius: 32rpx">
          <input v-model="nickname" type="nickname" focus placeholder="请输入昵称" style="width: 400rpx; padding: 0 24rpx" @confirm="saveNickname()" />
          <button class="cu-btn round margin-left bg-green shadow" @click="saveNickname()">保存昵称</button>
        </view>
        <template v-else>
          <text class="text-bold">{{ user.nickname || "微信用户" }}</text>
          <text class="cuIcon-edit margin-left-xs text-xl text-black" style="text-shadow: none"></text>
        </template>
      </view>
      <view class="margin-bottom text-black text-bold" @click="$copy(user.openid)">
        <text>ID:</text>
        <text>{{ (user.openid || "").slice(0, 4) }}****{{ (user.openid || "").slice(-5, -1) }}</text>
        <text class="cuIcon-copy margin-left-xs text-black" style="text-shadow: none"></text>
      </view>
    </view>

    <view class="relative cu-list menu card-menu sm-border margin-top-sm margin-bottom-sm shadow radius-lg">
      <navigator url="/pages/用户中心/我的能量" class="cu-item arrow">
        <view class="content">
          <text class="cuIcon-lightauto text-green"></text>
          <text class="text-black">我的能量</text>
        </view>
      </navigator>
      <navigator url="/pages/用户中心/我的收藏" class="cu-item arrow">
        <view class="content">
          <text class="cuIcon-favorfill text-yellow"></text>
          <text class="text-black">我的收藏</text>
        </view>
      </navigator>
      <navigator url="/pages/用户中心/浏览记录" class="cu-item arrow">
        <view class="content">
          <text class="cuIcon-attention text-cyan"></text>
          <text class="text-black">浏览记录</text>
        </view>
      </navigator>
      <navigator url="/pages/用户中心/我的分享" class="cu-item arrow">
        <view class="content">
          <text class="cuIcon-wefill text-red"></text>
          <text class="text-black">我的分享</text>
        </view>
      </navigator>
      <navigator v-if="user.vip" url="/pages/用户中心/找到组织" class="cu-item arrow">
        <view class="content">
          <text class="cuIcon-communityfill text-pink"></text>
          <text class="text-black">找到组织</text>
        </view>
      </navigator>
      <navigator url="/pages/应用相关/关于小程序" class="cu-item arrow">
        <view class="content">
          <text class="cuIcon-link text-green"></text>
          <text class="text-black">关于小程序</text>
        </view>
      </navigator>
    </view>

    <view v-if="user.contact || user.feedback" class="relative cu-list menu card-menu sm-border margin-tb-sm shadow-lg">
      <view v-if="user.contact" class="cu-item arrow">
        <button class="cu-btn content" open-type="contact">
          <text class="cuIcon-service text-orange text-xl"></text>
          <text class="text-l text-black">联系作者</text>
        </button>
      </view>
      <view v-if="user.feedback" class="cu-item arrow">
        <button class="cu-btn content" open-type="feedback">
          <text class="cuIcon-write text-cyan text-xl"></text>
          <text class="text-l text-black">意见反馈</text>
        </button>
      </view>
    </view>
    <ADFloat ref="ADFloat" />
  </view>
</template>

<script>
import dayjs from "dayjs";
export default {
  data() {
    return {
      show: 0,
      focus: false,
      nickname: "",
    };
  },
  computed: {
    user() {
      return this.$store.state.user || {};
    },
  },
  onShow() {
    this.show++;
    if (this.show !== 0 && this.show % 4 === 0) {
      !this.$store.state.user.vip && this.interstitialAd.show();
    }
  },
  onLoad() {
    this.interstitialAd = uni.createInterstitialAd({ adUnitId: "adunit-e3f467955c2226a4" });
  },
  onPullDownRefresh() {
    this.$store.dispatch("user/login").finally(() => uni.stopPullDownRefresh());
  },
  methods: {
    // 修改头像
    async chooseavatar(e) {
      this.$loading();
      const filePath = e.target.avatarUrl;
      // 如果用户已有头像，删除云端图片
      if (this.user.avatar) {
        await this.$("/delete_file", {
          file: this.user.avatar,
        });
      }
      // 上传图片
      uniCloud
        .uploadFile({
          filePath: filePath,
          cloudPathAsRealPath: true,
          cloudPath: `/ToolBox365/avatar/${dayjs().format("YYYY-MM-DD_HH:mm:ss")}_${this.user.openid}.png`,
        })
        .then(res => {
          this.$store.state.user.avatar = res.fileID; // 更新前端图片显示
          this.setting({
            avatar: this.$store.state.user.avatar,
          }); // 更新后端头像图片链接
        })
        .catch(() => this.$loaded());
    },
    // 修改昵称
    saveNickname() {
      if ((this.nickname || "").trim()) {
        this.$loading();
        this.$("/msg_sec_check", {
          content: this.nickname.trim(),
        })
          .then(() => {
            this.$store.state.user.nickname = this.nickname.trim();
            this.setting({
              nickname: this.$store.state.user.nickname,
            });
          })
          .finally(() => {
            this.nickname = "";
            this.focus = false;
            this.$loaded();
          });
      } else {
        this.$toast("请输入昵称");
      }
    },
    // 设置用户信息
    setting(payload) {
      this.$("/user_setting", payload).finally(() => this.$loaded());
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
    position: absolute;
  }

  .page_title {
    // font-size: 13pt;
    // font-weight: bold;
  }

  .relative {
    z-index: 2;
    position: relative;
  }

  .UCenter-bg {
    /* background-image: url(https://image.weilanwl.com/color2.0/index.jpg); */
    background-size: cover;
    display: flex;
    justify-content: center;
    overflow: hidden;
    position: relative;
    flex-direction: column;
    align-items: center;
    color: #fff;
    font-weight: 300;
    overflow: hidden;
    text-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  }

  .UCenter-bg .text {
    opacity: 0.8;
  }

  .png {
    width: 200rpx !important;
    height: 200rpx !important;
    overflow: hidden;
    border-radius: 50%;
  }

  .UCenter-bg .gif-wave {
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    z-index: 99;
    mix-blend-mode: screen;
    height: 100rpx;
  }
}
</style>
