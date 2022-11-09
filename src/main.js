import Vue from 'vue'
import App from './App.vue'
import router from "./routes";

import VueSession from 'vue-session'

import Axios from 'axios'
import vuetify from './plugins/vuetify'

import VueSimpleAlert from "vue-simple-alert";
import VueCryptojs from 'vue-cryptojs';
 
Vue.use(VueSimpleAlert);
Vue.use(VueSession);

Vue.use(VueCryptojs);



Vue.prototype.$hostname = "https://localhost:44351"
Vue.prototype.$Axios = Axios;

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
