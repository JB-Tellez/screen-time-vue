// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App'
import router from './router'

Vue.use(Vuex);
Vue.use(BootstrapVue);

Vue.config.productionTip = false

/* eslint-disable no-new */

// Store
const store = new Vuex.Store({
  state: {
    loggedIn: false
  },
  mutations: {
    login (state) {
      state.loggedIn = true
    },
    logout (state) {
      state.loggedIn = false
    }
  }
})

console.log('store', store);

new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
