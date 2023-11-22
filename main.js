import Vue from "vue";
import App from "./App";

import "./utils/mixin.js";
import "./utils/prototype.js";
import "./uni.promisify.adaptor";

Vue.config.productionTip = false;
App.mpType = "app";

const app = new Vue({
  ...App,
});
app.$mount();
