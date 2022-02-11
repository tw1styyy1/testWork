import Vue from 'vue';
import vuetify from '@/plugins/vuetify';
import VueRouter from 'vue-router'

// components
import App from './App.vue';
import Table from "@/components/Table";


Vue.use(VueRouter)
Vue.config.productionTip = false;


const routes = [
  { path: '/', component: Table, props: (route) => ({ query: route.query.q })},
]


const router = new VueRouter({
  routes
})


new Vue({
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app')
