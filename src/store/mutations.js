/*
vuex 的 mutations 模块
mutation 由 action 触发调用：commit('mutationName')
 */
import Vue from 'vue'

import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER,
  RESET_USER,
  RECEIVE_GOODS,
  RECEIVE_RATINGS,
  RECEIVE_INFO,
  INCREASE_FOOD_COUNT,
  DECREASE_FOOD_COUNT
} from './mutation-types'

export default {
  // 传入的是包含 address 的对象
  [RECEIVE_ADDRESS](state, {address}){
    // 更新 state 的 address 属性
    state.address = address
  },
  [RECEIVE_CATEGORYS](state, {categorys}){
    state.categorys = categorys
  },
  [RECEIVE_SHOPS](state, {shops}){
    state.shops = shops
  },
  [RECEIVE_USER](state, {user}){
    state.user = user
  },
  [RESET_USER](state){
    state.user = {}
  },
  [RECEIVE_GOODS](state, {goods}){
    state.goods = goods
  },
  [RECEIVE_RATINGS](state, {ratings}){
    state.ratings = ratings
  },
  [RECEIVE_INFO](state, {info}){
    state.info = info
  },

  [INCREASE_FOOD_COUNT](state, {food}){
    if(food.count){
      food.count++
    }else{
      // 新添加一个 count 属性，指定值为 1
      // food.count = 1 // 新的属性没有数据绑定，界面不会更新
      Vue.set(food, 'count', 1) // 这样添加的属性是有数据绑定，界面就会更新

      // 将 food 添加到 cartFood 中
      state.cartFoods.push(food)
    }
  },
  [DECREASE_FOOD_COUNT](state, {food}){
    if(food.count){ // 当 count > 0 才减 1
      food.count--
      // 当变为 0 时，将 food 从 cartFoods 中移除
      if(food.count === 0){
        state.cartFoods.splice(state.cartFoods.indexOf(food), 1)
      }
    }
  }
}












