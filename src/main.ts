import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { CreateElement } from "vue/types/umd";

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h: CreateElement) => h(App)
}).$mount("#app");
