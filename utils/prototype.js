import Vue from "vue";

import $ from "@/utils/request.js";
import $store from "@/store/index.js";

Vue.prototype.$ = $;
Vue.prototype.$app = getApp;
Vue.prototype.$store = $store;

Vue.prototype.$toast = (title, conf = {}) => {
  title = title + "";
  setTimeout(() => {
    uni.showToast({
      title,
      mask: false,
      icon: "none",
      duration: 3456,
      ...conf,
    });
  });
};
Vue.prototype.$toasted = () => {
  uni.hideToast();
};

Vue.prototype.$loading = function () {
  Vue.prototype.$store.state.app.loading = true;
};

Vue.prototype.$loaded = function () {
  Vue.prototype.$store.state.app.loading = false;
};

Vue.prototype.$copy = (data, message = "") => {
  data = data.toString();
  uni.setClipboardData({
    data,
    complete() {
      message && Vue.prototype.$toast(message);
    },
  });
};

Vue.prototype.$call = phoneNumber => {
  Vue.prototype.$loading();
  uni.makePhoneCall({
    phoneNumber,
    complete: () => Vue.prototype.$loaded(),
  });
};

Vue.prototype.$preview = async (url, current) => {
  const urls = typeof url === "string" ? [url] : url;
  uni.previewImage({ urls, current });
};

Vue.prototype.$offset = function (selector) {
  if (!(this instanceof Vue)) throw new Error("必须在组件中执行");
  return new Promise((resolve, reject) => {
    uni
      .createSelectorQuery()
      .in(this)
      .select(`#${selector}`)
      .boundingClientRect(data => {
        data ? resolve(data) : reject("元素不存在");
      })
      .exec();
  });
};

Vue.prototype.$clone = object => {
  if (!(typeof object === "object")) return object;
  return JSON.parse(JSON.stringify(object));
};

Vue.prototype.$choose = object => {
  return new Promise((resolve, reject) => {
    object = {
      success: ({ tempFiles: [e] }) => {
        resolve({ path: e.path || e.tempFilePath, filePath: e.path || e.tempFilePath, ...e });
      },
      count: 1,
      mediaType: ["image"],
      fail: e => reject(e),
      ...object,
    };
    uni.showActionSheet({
      itemList: ["拍摄", "从聊天选择", "从手机相册选择"],
      success: ({ tapIndex }) => {
        if (tapIndex === 0) {
          uni.chooseMedia({ sourceType: ["camera"], ...object });
        }
        if (tapIndex === 1) {
          uni.chooseMessageFile({ type: "image", ...object });
        }
        if (tapIndex === 2) {
          uni.chooseMedia({ sourceType: ["album"], ...object });
        }
      },
      fail: e => reject(e),
    });
  });
};
