/*
路由器模块
*/
import Vue from 'vue'
import VueRouter from 'vue-router'

// 使用import()引入模块, webpack会对组件进行拆分(单独)打包(code split)
/*import Msite from '../pages/Msite/Msite'
import Search from '../pages/Search/Search'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile'*/

const Msite = () => import('../pages/Msite/Msite')
const Search = () => import('../pages/Search/Search')
const Order = () => import('../pages/Order/Order')
const Profile = () => import('../pages/Profile/Profile')

import Login from '../pages/Login/Login'

import Shop from '../pages/Shop/Shop'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods'
import ShopRatings from '../pages/Shop/ShopRating/ShopRatings'
import ShopInfo from '../pages/ShopInfo/ShopInfo'

// 使用插件
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/miste',
      component: Msite, // 返回组件的函数, 需要时才执行从后台请求获取对应的打包文件
      meta: { showFooter: true }
    },
    {
      path: '/search',
      component: Search,
      meta: { showFooter: true }
    },
    {
      path: '/order',
      component: Order,
      meta: { showFooter: true }
    },
    {
      path: '/profile',
      component: Profile,
      meta: { showFooter: true }
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/shop',
      component: Shop,
      children: [
        {
          path: '/shop/goods',
          component: ShopGoods,
        },
        {
          path: '/shop/ratings',
          component: ShopRatings
        },
        {
          path: '/shop/info',
          component: ShopInfo
        },
        {
          path: '',
          redirect: '/shop/goods'
        }
      ]
    },
    {
      path: '/',
      redirect: '/msite'
    }
  ]
})

export default router


