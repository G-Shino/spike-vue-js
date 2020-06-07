import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
//@ts-ignore
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";
Vue.use(VueMaterial);
// import { CreateElement } from "vue/types/umd";

Vue.config.productionTip = false;

new Vue({
  router,
  ...App
  // render: (h: CreateElement) => h(App)
}).$mount("#app");
