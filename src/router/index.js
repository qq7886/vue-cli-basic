import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

// 新添加的 harden 組件
import HardenDown from '@/components/HardenDown'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/down',
      name: 'HardenDown',
      component: HardenDown
    }
  ]
})
