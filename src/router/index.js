import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Details from '@/components/details'
import ShoppingCart from '@/components/shoppingCart'
import shoppingCart1 from '@/components/shoppingCart1'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/foo/:id',
      name: 'Details',
      component: Details,

    },
    {
      path: '/ShoppingCart',
      name: 'ShoppingCart',
      component: ShoppingCart

    },
    {
      path: '/shoppingCart1',
      name: 'shoppingCart1',
      component: shoppingCart1

    }
  ]
})
