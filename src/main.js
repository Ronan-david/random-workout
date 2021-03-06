import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import {routes} from './routes/routes'
import store from './store'

Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router,
  store,
  components: { App }
}).$mount('#app')
