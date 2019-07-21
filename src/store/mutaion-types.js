export default {
  // 商家评价总数量
  ratingsTotalCount(state){
    return state.ratings.length
  },

  // 商家满意的评价数量
  ratingsPositiveCount(state){
    return state.ratings.reduce((proCount, rating) => preCount + (rating.rateType === 0? 1: 0), 0)
  },

  // 购物车中 food 的总数量
  cartFoodCount(state){
    return state.cartFoods.reduce((preCount, food) => preCount + food.count, 0)
  },

  // 购物车中 food 的总数量
  cartFoodPrice(state){
    return state.cartFoods.reduce((preCount, food) => preCount + food.count * food.price, 0)
  }
}
