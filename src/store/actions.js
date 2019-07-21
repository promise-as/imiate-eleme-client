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
import {
  reqAddress,
  reqCategorys,
  reqShops,
  reqUser,
  logout,
  reqGoods,
  reqRatings,
  reqInfo
} from "../api"

export default {
  // 异步获取当前地址信息
  async getAddress({commit, state}){
    // 调用接口请求函数从后台获取数据
    const {latitude, longitude} = state
    const geohash = `${latitude}, ${longitude}`
    const result = await reqAddress(geohash) // {code: 0, data: address}

    if(result.code === 0){
      const address = result.data
      commit(RECEIVE_ADDRESS, {address})
    }
  },

  // 异步获取商品分类列表
  async getCategorys({commit, state}){
    // 调用接口请求函数从后台获取数据
    const result = await reqCategorys() // {code: 0, data: []}
    if(result.code === 0){
      const categorys = result.data
      commit(RECEIVE_CATEGORYS, {categorys})
    }
  },

  // 异步获取当前地址信息
  async getShops({commit, state}){
    // 调用接口请求函数从后台获取数据
    const {latitude, longitude} = state
    const result = await reqShops({latitude, longitude}) // {code: 0, data: []}

    if(result.code === 0){
      const shops = result.data
      commit(RECEIVE_SHOPS, {shops})
    }
  },

  // 先获取到数据再保存，所以是同步的
  // 同步保存 user
  saveUser({commit}, user){
    commit(RECEIVE_USER, {user})
  },

  // 异步用户信息
  async getUser({commit, state}){
    const result = await reqUser() // {code: 0, data: {}}
    if(result.code === 0){
      const user = result.data
      commit(RECEIVE_USER, {user})
    }
  },

  // 重置用户信息
  async resetUser({commit}){
    const result = await logout() // {code: 0, data: {}}
    if(result.code === 0){
      commit(RESET_USER)
    }
  },

  // 异步获取点餐分类列表
  async getGoods({commit, state}, callback){
    const result = await reqGoods() // {code: 0, data: []}
    if(result.code === 0){
      const goods = result.data
      commit(RECEIVE_GOODS, {goods})
      callback && callback();
    }
  },

  // 异步获取评论列表
  async getRatings({commit, state}, callback){
    // 调用接口请求函数从后台获取数据
    const result = await reqRatings() // {code: 0, data: []}
    if(result.code === 0){
      const ratings = result.data
      commit(RECEIVE_RATINGS, {ratings})
      callback && callback();
    }
  },

  // 异步获取商家消息
  async getInfo({commit, state}, callback){
    // 调用接口请求函数从后台获取数据
    const result = await reqInfo() // {code: 0, data: {}}
    if(result.code === 0){
      const info = result.data
      commit(RECEIVE_INFO, {info})
      callback && callback();
    }
  },

  // 同步更新 food
  updateFoodCount({commit}, {food, isAdd}){
    if(isAdd){
      commit(INCREASE_FOOD_COUNT, {food})
    }else{
      commit(DECREASE_FOOD_COUNT, {food})
    }
  }
}



























