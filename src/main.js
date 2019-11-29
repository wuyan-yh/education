import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/element.js";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import axios from "axios";
axios.interceptors.request.use(function(config) {
  store.state.show = true; //在请求发出之前进行一些操作
  return config;
});
//定义一个响应拦截器
axios.interceptors.response.use(function(config) {
  store.state.show = false; //在这里对返回的数据进行处理
  return config;
});

Vue.config.productionTip = false;

Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
