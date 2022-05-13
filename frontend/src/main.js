import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
// import liff from '@line/liff';
Vue.config.productionTip = false

// liff.init({ liffId: "1656540074-QGvA1Pdz",withLoginOnExternalBrowser: true,}).then(function() {
//   console.log('LIFF init');
//   console.log(liff.getProfile());
//   // 這邊開始寫使用其他功能
  
// }).catch(function(error) {
//   console.log(error);
// });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')




