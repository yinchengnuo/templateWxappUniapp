import Vue from "vue";
import dayjs from "dayjs";

function onShare({ from }) {
  let title = "";
  const route = this.$store.state.app.currentRoute;
  let path = "/" + this.$store.state.app.currentRoute;

  let item = this.$store.state.app.list.find(e => e.page === path);
  if (route === "pages/滚动君/滚动君") {
    item = this.$store.state.app.list.find(e => e.name === "滚动君");
    path = item.page;
  }
  if (route === "pages/电子书/电子书") {
    item = this.$store.state.app.list.find(e => e.page === "/" + getCurrentPages().at(-2).route);
    path = item.page;
  }
  if (item) title = item.name + " " + item.desc;

  if (route === "pages/首页/首页") title = "100+工具 各类实用&AI&图文&信息查询&有趣&解压小工具免费使用";
  if (route === "pages/每日/每日") title = "每日随机 看全网实时热搜&新闻&段子&日更&随机图片&文案大全等等全部都有";
  if (route === "pages/聊天/聊天") title = "AI聊天 有问提，问AI！文心一言&星火认知大模型&MineMax&OpneAI共六大语言模型随你提问";
  if (route === "pages/数据/数据") title = "数据集合 看古籍，查资料";
  if (route === "pages/我的/我的") title = "生活工作好帮手";

  if (!title) title = route.split("/").at(-1);

  return {
    title,
    path: `${path}?openid=${this.$store.state.user.openid}&t=${dayjs().valueOf()}&from=${from}`
  };
}

Vue.mixin({
  onShow() {
    const pages = getCurrentPages();
    if (pages && pages.length) {
      Vue.prototype.$store.state.app.currentRoute = pages.at(-1).route;
    }
  },
  onShareTimeline() {
    return onShare.call(this, {});
  },
  onShareAppMessage(action) {
    return onShare.call(this, action);
  },
});
