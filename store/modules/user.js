import Vue from "vue";

export default {
  namespaced: true,
  state: {
    vip: true,
    openid: "",
    random_box_list: [],
    show_random_box: false,
  },
  mutations: {
    // 设置用户信息
    SET_USER_INFO(state, payload) {
      Object.keys(payload).forEach(key => {
        Vue.prototype.$set(state, key, payload[key]);
      });
    },
  },
  actions: {
    // 登录接口
    async login({ commit }, payload = {}) {
      return new Promise((resolve, reject) => {
        commit("app/LOADING", null, { root: true });
        Promise.all([uni.getPushClientId(), uni.login()])
          .then(([{ cid }, { code }]) => {
            Vue.prototype
              .$("/login", { cid, code, ...payload })
              .then(data => {
                resolve(data);
                setTimeout(() => uni.$emit("LOGON"));
                commit("app/SET_LIST", data.functions, { root: true });
                commit("SET_USER_INFO", { ...data, functions: undefined, vip: undefined });
              })
              .finally(() => commit("app/LOADED", null, { root: true }));
          })
          .catch(e => {
            reject(e);
            Vue.prototype.$toast(e.message);
            commit("app/LOADED", null, { root: true });
          });
      });
    },
  },
};
