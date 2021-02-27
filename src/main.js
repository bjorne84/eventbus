import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import Routes from "./routes";

/* Enable VueRouter in in the Vue object*/
Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes,
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
