const make = e => {
  e.type = e.page.split("/")[2];
  e.name = e.page.split("/")[4];
  e.icon = `/static/functions/${e.name}.${e.type === "数据集合" ? "jpg" : "svg"}`;
  if (e.webview) {
    e._page = e.page
    e.src = `https://ycn.link/toolbox365/${e.name}/index.html`
    e.page = `/pages/WebView/WebView?src=${e.src}`
  }
  return e
}

export default {
  namespaced: true,
  state: {
    list: [],
    notify: [],
    loading: false,
    notifyRoute: "",
    currentRoute: "",
  },
  mutations: {
    LOADED(state) {
      state.loading = false;
    },
    LOADING(state) {
      state.loading = true;
      setTimeout(() => {
        state.loading = false;
      }, 6666);
    },
    SET_LIST(state, payload) {
      payload.forEach(e => {
        make(e)
      });
      state.list = payload.filter(e => e.online);
    },
    UPDATE_FUNCTION(state, payload = {}) {
      const item = state.list.find(e => e._id === payload._id);
      item && Object.assign(item, make(payload));
    },
  },
  actions: {},
};
