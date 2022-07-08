import Vue from "vue";
import App from "./App.vue";
import components from "./components/UI";
import store from "./store";
import "./index.scss";

Vue.config.productionTip = false;

components.forEach((component) => Vue.component(component.name, component));

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
