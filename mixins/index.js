import Vue from "vue";

Vue.mixin({
  onShow() {
    const pages = getCurrentPages();
    if (pages && pages.length) {
      console.log(pages.at(-1));
      Vue.prototype.$store.state.app.currentRoute = pages.at(-1).route;
    }
    uni.showShareMenu({
      menus: ["shareAppMessage", "shareTimeline"],
    });
  },
  onShareAppMessage(res) {
    const item = this.$store.state.app.list.find(e => e.page === "/" + this.$scope.route) || {};
    const path = this.$scope.route.replace(/^(.|)pages\//, "").split("/");
    console.log(path);
    if (path.length === 2 && path[0] === "首页") {
      item.name = "50+工具";
      item.desc = "各类实用&AI&图文&信息查询&有趣&解压小工具免费使用";
    }
    if (path.length === 2 && path[0] === "每日") {
      item.name = "每日随机";
      item.desc = "看全网实时热搜&新闻&段子&日更&随机图片&文案大全等等全部都有";
    }
    if (path.length === 2 && path[0] === "聊天") {
      item.name = "AI聊天";
      item.desc = "有问提，问AI！文心一言&星火认知大模型&MineMax&OpneAI共六大语言模型随你提问";
    }
    if (path.length === 2 && path[0] === "数据") {
      item.name = "数据集合";
      item.desc = "看古籍，查资料";
    }
    return {
      title: item.name + " " + item.desc,
      path: `/pages/首页/首页?openid=${this.$store.state.user.openid}&path=${"/" + this.$scope.route}`,
    };
  },
});
