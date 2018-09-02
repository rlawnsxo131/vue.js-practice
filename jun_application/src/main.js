import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import header from '../components/header.vue'
import mainContent from '../components/mainContent.vue'
import subContent from '../components/subContent.vue'

var router = new VueRouter({
  mode: 'history',
  routes:[
    {
      path:'/',
      components:{
        header:header,
        Content:mainContent
      }
    },
    {
      path:'/todo',
      components:{
        header:header,
        Content:subContent
      }
    }
  ]
});


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
