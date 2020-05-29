import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
Vue.use(VueMaterial);
// import { CreateElement } from "vue/types/umd";

Vue.config.productionTip = false;

new Vue({
  router,
  ...App
  // render: (h: CreateElement) => h(App)
}).$mount("#app");
