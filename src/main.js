import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from '/src/router/index'
import VueCookies from "vue-cookies";

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueCookies);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
