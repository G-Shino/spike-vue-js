import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Form from "../views/Form.vue";
import Tab from "../views/Tab.vue";
import Samples from "../views/Samples.vue";
import FreeWriting from "../views/FreeWriting.vue";
import DragAndDrop from "../views/DragAndDrop.vue";
import SpikeKonva from "../views/SpikeKonva.vue";
import SpikeKonvaText from "../views/SpikeKonvaText.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/form",
    name: "Form",
    component: Form
  },
  {
    path: "/tab",
    name: "Tab",
    component: Tab
  },
  { path: "/samples", name: "Samples", component: Samples },
  { path: "/freewriting", name: "FreeWriting", component: FreeWriting },
  { path: "/drag-and-drop", name: "DragAndDrop", component: DragAndDrop },
  { path: "/spike-konva", name: "SpikeKonva", component: SpikeKonva },
  {
    path: "/spike-konva-text",
    name: "SpikeKonvaText",
    component: SpikeKonvaText
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
