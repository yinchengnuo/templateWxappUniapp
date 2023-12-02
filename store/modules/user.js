import Vue from "vue";

export default {
  namespaced: true,
  state: {
    openid: "",
    random_box_list: [],
    show_random_box: false,
  },
  mutations: {
    // 设置用户信息
    SET_USER_INFO(state, payload) {
      uni.setStorageSync("openid", payload.openid);
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
            .$("/login", { cid, code, openid: payload.openid })
            .then(data => {
              resolve(data)
              setTimeout(() => uni.$emit("LOGON"));
              commit("app/SET_LIST", data.functions, { root: true });
              commit("SET_USER_INFO", { ...data, functions: undefined });
            })
            .finally(() => commit("app/LOADED", null, { root: true }));
        })
        .catch(e => {
          reject(e)
          Vue.prototype.$toast(e.message);
          commit("app/LOADED", null, { root: true });
        });
      })
    },
    // 获取地理位置、天气
    async getCityWeather({ state, commit }) {
      if (!state.openid) await new Promise(resolve => uni.$once("LOGON", resolve));
      uni.request({ url: "https://api.oioweb.cn/api/weather/GetWeather" }).then(({ data: { result } }) => {
        const cpca = { country: result.city.country, province: result.city.economize, city: result.city.city_name, area: "" };
        commit("SET_USER_INFO", cpca);
        Vue.prototype.$("/setting", cpca).then(data => commit("SET_USER_INFO", data));
        uni.request({ url: "https://api.lolimi.cn/API/weather/?city=" + state.city }).then(({ data: { data } }) => {
          commit("SET_USER_INFO", { weather: { ...data, living: [{ tips: result.condition.tips }, ...data.living] } });
        });
      });
    },
  },
};
