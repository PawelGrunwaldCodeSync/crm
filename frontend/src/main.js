import Vue from 'vue'
import App from './App.vue'
import router from './router/router';
import mdiVue from 'mdi-vue/v2';
import * as mdiJS from '@mdi/js';
import VCalendar from 'v-calendar';
import 'spectre.css';

Vue.config.productionTip = false;

Vue.use(mdiVue, {
  icons: mdiJS,
});
Vue.use(VCalendar, {
  componentPrefix: 'cs',
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
