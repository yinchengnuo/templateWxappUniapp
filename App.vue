<script>
import dayjs from "dayjs";
const appBaseInfo = uni.getAppBaseInfo();
const systemInfo = uni.getSystemInfoSync();
const statusBarHeight = systemInfo.statusBarHeight;
const menuButtonBoundingClientRect = uni.getMenuButtonBoundingClientRect();
const navigationBarHeight = menuButtonBoundingClientRect.bottom + (menuButtonBoundingClientRect.top - statusBarHeight);
// const getNames = (name, num) =>
//   Array(num)
//     .fill(0)
//     .map((e, i) => `${name}${(i + 1).toString().padStart(2, "0")}`);
// [
//   ...getNames("clones", 20),
//   ...getNames("cut", 10),
//   ...getNames("dancers", 10),
//   ...getNames("hungry", 8),
//   ...getNames("time", 10),
//   ...getNames("nature", 16),
//   ...getNames("colorful", 20),
//   ...getNames("continuous", 10),
//   ...getNames("flipping", 20),
//   ...getNames("wobbling", 20),
//   ...getNames("progress", 20),
//   ...getNames("shapes", 40),
//   ...getNames("spinner", 29),
// ];
export default {
  globalData: {
    systemInfo,
    appBaseInfo,
    statusBarHeight,
    navigationBarHeight,
    menuButtonBoundingClientRect,
    loadings: [
      "clones08",
      "clones10",
      "clones16",
      "clones18",
      "cut01",
      "clones20",
      "hungry01",
      "hungry02",
      "hungry03",
      "hungry08",
      "time05",
      "nature08",
      "nature07",
      "nature16",
      "colorful19",
      "continuous04",
      "wobbling05",
      "wobbling12",
      "wobbling11",
      "progress03",
      "shapes16",
      "spinner02",
      "spinner03",
      "spinner12",
      "spinner16",
      "spinner17",
      "spinner15",
      "spinner26",
      "flipping09",
      "dancers02",
    ],
    images: [
      "https://image.meiye.art/FhtISupNHMibBgrGZOe15CPQ-d5R",
      "https://image.meiye.art/FlqKg5bugFQD5Qzm_QhGM7ET4Mtx",
      "https://image.meiye.art/Fha6tqRTIwHtlLW3xuZBJj8ZXSX3",
      "https://image.meiye.art/FgaFNs-YNxw_vRtqCbvQru3z6s3P",
      "https://image.meiye.art/FiqphSjedkvi1y0hfqeNrYGXqLKo",
      "https://image.meiye.art/FqZALKFWQ7vEZtmJyMyB_w776B_H",
      "https://image.meiye.art/FhHGe9NyO0uddb6D4203jevC_gzc",
      "https://image.meiye.art/FiLUT-wb9DP0-dpxRQH19HJOOJOW",
    ],
    bgClass: ["bg-gradual-red-light", "bg-gradual-orange-light", "bg-gradual-green-light", "bg-gradual-purple-light", "bg-gradual-pink-light", "bg-gradual-blue-light", "bg-gradual-pinknew-light", "bg-gradual-cyan-light"],
    colors: ["red", "orange", "yellow", "olive", "green", "cyan", "blue", "purple", "mauve", "pink", "brown", "grey"],
  },
  onPageNotFound() {
    uni.reLaunch({ url: "/pages/首页/首页" });
  },
  onLaunch(option) {
    // 监听消息推送
    uni.onPushMessage(({ data: { payload } }) => {
      if (payload.type === "collect") {
        this.$store.commit("app/UPDATE_FUNCTION", payload.data);
        this.$toast(JSON.stringify(payload.data))
        if (payload.data.collected) {
          this.$toast("收藏成功");
        } else {
          this.$toast("取消收藏成功");
        }
      } else {
        uni.vibrateLong(); // 震动一下
        // 如果是支付消息
        if (payload.type === "pay") {
          this.$store.commit("user/SET_USER_INFO", {
            vip_time: payload.data.vip_end_time, // 更新 VIP 时间
            energy: this.$store.state.user.energy + payload.data.energy, // 更新总能量
            total_income: this.$store.state.user.total_income + payload.data.energy, // 更新总入账能量
          });
        }
        // 如果是邀请新用户奖励到账
        if (payload.type === "share") {
          this.$store.commit("user/SET_USER_INFO", {
            energy: this.$store.state.user.energy + payload.data.energy, // 更新总能量
            total_income: this.$store.state.user.total_income + payload.data.energy, // 更新总入账能量
          });
        }
        this.$store.state.app.notify.push(payload); // 弹出系统消息提示框
        this.$store.state.app.notifyRoute = this.$store.state.app.currentRoute; // 标记弹出系统消息提示框的页面
      }
    });
    // 小程序启动即登录
    this.$store.dispatch("user/login", { ...option.query, path: option.path }).then(async () => {
      // 检查用户是否 VIP
      const check = () => {
        if (this.$store.state.user.vip_time) {
          if (Date.now() > dayjs(this.$store.state.user.vip_time).valueOf()) {
            this.$store.state.user.vip = false;
          } else {
            this.$store.state.user.vip = true;
          }
        } else {
          this.$store.state.user.vip = false;
        }
      };
      setInterval(() => check(), 1000); // 1秒钟检查一次，时间一到立马切换状态
    });
  },
  async onShow() {},
  onHide() {},
};
</script>

<style lang="scss">
@import "colorui/main.css";
@import "colorui/icon.css";
@import "colorui/icon-new.css";

.w100 {
  width: 100% !important;
}

.h100 {
  height: 100% !important;
}

.flex {
  align-items: center;
  display: flex !important;
  justify-content: center;
}

.flexc {
  align-items: center;
  flex-direction: column;
  display: flex !important;
  justify-content: center;
}

.flex1 {
  flex: 1;
}

.flex_sb {
  justify-content: space-between;
}

.my_input {
  border-radius: 10rpx;
  padding: 0 66rpx 0 20rpx;
  border: 1px solid #efefef;
  margin: 0 20rpx !important;
  min-height: 74rpx !important;
  &.no_button {
    padding-right: 20rpx;
  }
}

.my_input_clear {
  top: 28rpx;
  right: 190rpx;
  font-size: 44rpx;
  position: absolute;
  &.no_button {
    right: 56rpx;
  }
}

.my_textarea {
  border-radius: 10rpx;
  border: 1px solid #efefef;
  padding: 10rpx 14rpx !important;
}

.my_textarea_clear {
  font-size: 44rpx;
}

.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
}

.nav-list {
  display: flex;
  flex-wrap: wrap;
  padding: 0px 30rpx 0px;
  justify-content: space-between;
}

.nav-li {
  padding: 0 0 16rpx 20rpx;
  border-radius: 20rpx;
  width: 48%;
  margin: 0 0 32rpx;
  background-size: cover;
  background-position: center;
  position: relative;
  z-index: 1;
}

// .nav-li::after {
// 	content: "";
// 	position: absolute;
// 	z-index: -1;
// 	background-color: inherit;
// 	width: 100%;
// 	height: 100%;
// 	left: 0;
// 	bottom: -10%;
// 	border-radius: 10rpx;
// 	opacity: 0.2;
// 	transform: scale(0.9, 0.9);
// }

.nav-title {
  font-size: 30rpx;
  font-weight: 480;
}

.nav-title > view::first-letter {
  font-size: 40rpx;
  margin-right: 4rpx;
}

.nav-title > view {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: calc(100% - 60rpx);
}

/* .nav-name {
		font-size: 28rpx;
		text-transform: Capitalize;
		margin-top: 20rpx;
		position: relative;
	}

	.nav-des {
		font-size: 24rpx;
		text-transform: Capitalize;
		margin-top: 30rpx;
		position: relative;
	} */

/* .nav-name::before {
		content: "";
		position: absolute;
		display: block;
		width: 40rpx;
		height: 6rpx;
		background: #fff;
		bottom: 0;
		left: 0;
		opacity: 0.5;
	} */

/* .nav-name::after {
		content: "";
		position: absolute;
		display: block;
		width: 90rpx;
		height: 1px;
		background: #fff;
		bottom: 0;
		right: 40rpx;
		opacity: 0.3;
	}

	.nav-name::first-letter {
		font-weight: bold;
		font-size: 36rpx;
		margin-right: 1px;
	} */

/* .nav-li text {
		position: absolute;
		right: 24rpx;
		top: 16rpx;
		font-size: 52rpx;
		width: 60rpx;
		height: 60rpx;
		text-align: center;
		line-height: 60rpx;
	} */

.text-light {
  font-weight: 300;
}

.nodata {
  font-size: 30rpx;
  line-height: 1.2;
  font-weight: normal;
  text-align: center;
  color: #999;
  margin-top: 200rpx;
  margin-bottom: 200rpx;
}

.nodata .icon {
  height: 240rpx;
  background: url("https://img01.yzcdn.cn/vant/empty-image-default.png") no-repeat center/210rpx auto;
}

.nodata .txt {
  padding-top: 60rpx;
}

.nav-lie {
  border-radius: 28rpx;
  width: 46%;
  margin: 0 1% 40rpx;
  background-size: cover;
  background-position: center;
  position: relative;
  z-index: 1;
}

.nav-lie::after {
  content: "";
  position: absolute;
  z-index: -1;
  background-color: inherit;
  width: 100%;
  height: 100%;
  left: 0;
  bottom: -10%;
  border-radius: 10rpx;
  opacity: 0.2;
  transform: scale(0.9, 0.9);
}

.image-bg-ui {
  min-height: 680rpx;
}
</style>
