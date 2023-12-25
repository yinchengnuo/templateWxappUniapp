import Vue from "vue";
import dayjs from "dayjs";

function onShare({ from }) {
  let title = "";
  const route = this.$store.state.app.currentRoute;
  let path = "/" + this.$store.state.app.currentRoute;

  // 滚动君滚动页分享跳转到滚动君
  let item = this.$store.state.app.list.find(e => e.page === path);
  if (route === "pages/实用工具/滚动君/滚动君") {
    item = this.$store.state.app.list.find(e => e.name === "滚动君");
    item && (path = item.page);
  }
  // 电子书读书页分享跳转到
  if (route === "pages/数据集合/电子书") {
    item = this.$store.state.app.list.find(e => e.page === "/" + getCurrentPages().at(-2).route);
    item && (path = item.page);
  }
  if (item) {
    title = item.name + " " + item.desc;
  }

  if (route === "pages/首页/首页") title = "100+工具 各类实用&AI&图文&信息查询&有趣&解压小工具免费使用";
  if (route === "pages/每日/每日") title = "每日随机 新闻&段子&日更&随机图片&文案大全等等全部都有";
  if (route === "pages/聊天/聊天") title = "AI聊天 有问提，问AI！文心一言&星火认知大模型随你提问";
  if (route === "pages/数据/数据") title = "数据集合 查资料";
  if (route === "pages/我的/我的") title = "生活工作好帮手";

  if (route === "pages/WebView/WebView") {
    if (this.src) {
      item = this.$store.state.app.list.find(e => e.src === this.src);
      path = `/pages/WebView/WebView?src=${this.src}`;
      if (item) {
        title = item.desc;
      }
    } else {
      path = "/pages/首页/首页";
    }
  }

  if (!title) {
    title = route.split("/").at(-1);
  }

  if (this.$store.state.user.openid) {
    if (route === "pages/WebView/WebView") {
      path = `${path}&openid=${this.$store.state.user.openid}&t=${dayjs().valueOf()}&from=${from}`;
    } else {
      path = `${path}?openid=${this.$store.state.user.openid}&t=${dayjs().valueOf()}&from=${from}`;
    }
  } else {
    path = "/pages/首页/首页";
  }

  console.log(path, title);
  return { path, title };
}

Vue.mixin({
  onShow() {
    const pages = getCurrentPages();
    if (pages && pages.length) {
      Vue.prototype.$store.state.app.currentRoute = pages.at(-1).route;
    }
    uni.showShareMenu({
      menus: ["shareAppMessage", "shareTimeline"],
    });
  },
  onShareTimeline() {
    return onShare.call(this, {});
  },
  onShareAppMessage(action) {
    return onShare.call(this, action);
  },
});
