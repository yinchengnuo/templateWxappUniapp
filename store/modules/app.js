import Vue from "vue";

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
      }, 3456);
    },
    SET_LIST(state, payload) {
      state.list = payload.filter(e => e.online);
      console.log("👀  file: app.js:24  SET_LIST  state.list:", state.list)
    },
    UPDATE_FUNCTION(state, payload = {}) {
      const item = state.list.find(e => e._id === payload._id);
      item && Object.assign(item, payload);
    },
  },
  actions: {
    getFunction({ state, commit }) {
      return new Promise((resolve, reject) => {
        commit("LOADING");
        Vue.prototype
          .$("/functions")
          .then(data => {
            commit("SET_LIST", data);
            setTimeout(() => resolve(state));
          })
          .catch(reject)
          .finally(() => {
            commit("LOADED");
          });
      });
    },
  },
};
