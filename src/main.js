/* 入口js */

import Vue from 'vue';
import {Button} from 'mint-ui';
import VueLazyload from 'vue-lazyload';

import app from './App';
import router from './router';
import store from './store';
import Split from './components/Split/Split';
import loading from './common/imgs/loading.gif';

/* 引入mock服务器 */
import './mock/mockServer';
import './filters'; // 加载自定义过滤器

/* 注册全局组件标签 */
Vue.component(Button.name, Button);
Vue.component('Split', Split);

/* or with options 也可以直接在这里设置参数 */
Vue.use(VueLazyload, {
  loading // 图片加载的路径
})

new Vue({
  el: '#app',
  /*render: function (h) {
    return h(app);
  }*/
  render: h => h(app),
  router, // 配置路由器
  store, // 注册store, 全局都有一个$store
})
