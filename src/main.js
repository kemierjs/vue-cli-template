import Vue from 'vue'
import App from '@/App.vue'
import TDesign from 'tdesign-vue';
import 'tdesign-vue/es/style/index.css';
import ('./assets/stylus/index.styl')
Vue.config.productionTip = false
import router from "@/router";
import store from "@/store";
Vue.use(TDesign);
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
