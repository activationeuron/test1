import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import "./styles/tailwind.css";

Vue.config.productionTip = false;
import VCalendar from 'v-calendar';

// Use v-calendar & v-date-picker components
Vue.use(VCalendar, {
  componentPrefix: 'v',  // Use <vc-calendar /> instead of <v-calendar />
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
