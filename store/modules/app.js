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
    },
    UPDATE_FUNCTION(state, payload = {}) {
      const item = state.list.find(e => e._id === payload._id);
      item && Object.assign(item, payload);
    },
  },
  actions: {},
};
