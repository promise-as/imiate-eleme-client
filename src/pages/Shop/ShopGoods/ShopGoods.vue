<template>
  <div>
    <div class="goods">
      <div class="menu-wrapper">
        <ul ref="menuUl">
          <li class="menu-item" v-for="(good, index) in goods" :key="index"
              :class="{current: index===currentIndex}" @click="clickItem(index)">
            <span class="text bottom-border-1px">
              <img class="icon" v-if="good.icon" :src="good.icon">
              {{good.name}}
            </span>
          </li>
        </ul>
      </div>

      <div class="foods-wrapper">
        <ul ref="foodsUl">
          <li class="food-list-hook" v-for="(good, index) in goods" :key="index">
            <h1 class="title">{{good.name}}</h1>

            <ul>
              <li class="food-item bottom-border-1px"
                  v-for="(food, index) in good.foods" :key="index" @click="showFood(food)">
                <div class="icon">
                  <img width="57" height="57" :src="food.icon">
                </div>
                <div class="content">
                  <h2 class="name">{{food.name}}</h2>
                  <p class="desc">{{food.description}}</p>
                  <div class="extra">
                    <span class="count">月售{{food.sellCount}}份</span>
                    <span>好评率{{food.rating}}%</span>
                  </div>
                  <div class="price">
                    <span class="now">￥{{food.price}}</span>
                    <span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
                  </div>
                  <div class="cartcontrol-wrapper">
                    <CartControl :food="food"/>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <ShopCart/>
    </div>

    <Food :food="food" ref="food"/>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'

  import CartControl from '../../../components/CartControl/CartControl'
  import Food from '../../../components/Food/Food'
  import ShopCart from '../../../components/ShopCart/ShopCart'

  export default {
    data(){
      return{
        scrollY: 0, // 右侧列表滚动的y坐标
        tops: [],   // 右侧所有分类<li>的top组成的数组
        food: {}    // 需要显示的当前food
      }
    },

    mounted(){
      this.$store.dispatch('getGoods', () => {
        this.$nextTick(() => {
          this._initTop();
          // 初始化scroll
          this._initScroll();
        })
      })
    },

    computed: {
      ...mapState(['goods']),

      // 当前分类的下标
      currentIndex(){
        const {scrollY, tops} = this;
        // scrollY>=top && scrollY<nextTop
        // 得到当前分类的下标
        // return tops.findIndex((top, index) => scrollY >= top && scrollY < tops[index + 1])

        // 得到当前分类的下标
        const index = tops.findIndex((top, index) => scrollY >= top && scrollY < tops[index + 1])

        this._scrollLeftList(index)

        return index // 左侧列表选中
      }
    },

    methods: {
      // 统计分类<li>的top
      _initTop(){
        const tops = [];
        let top = 0;
        tops.push(top);
        // 获取所有li, lis是伪数组
        const lis = this.$refs.foodsUl.getElementsByClassName('food-list-hook');

        Array.prototype.slice.call(lis).forEach(li => {
          top += li.clientHeight;
          tops.push(top)
        });
        this.tops = tops;
      },

      _initScroll(){
        // 为左侧列表创建scroll对象
        this.leftScroll = new BScroll('.menu-wrapper', {
          click: true,
        })

        // 为右侧列表创建scroll对象
        this.rightScroll = new BScroll('.foods-wrapper', {
          probeType: 1, // 只有手指触摸滑动(一定距离)
          click: true,
        })

        // better-scroll禁用了原生的dom事件, 所有事件都自定义实现
        // 绑定scroll监听
        this.rightScroll.on('scroll', ({x, y}) => {
          // console.log('scroll', {x, y});
          this.scrolly = Math.abs(y)
        })

        this.rightScroll.on('scrollEnd', ({x, y}) => {
          // console.log('scrollEnd', {x, y});
          this.scrolly = Math.abs(y)
        })
      },

      // 滚动左侧列表到指定下标对应的位置
      _scrollLeftList(index){
        if(this.leftScroll){
          // 得到当前分类的<li>
          const li = this.$refs.menuUl.children[index]

          this.leftScroll.scrollToElement(li, 300)
        }
      },

      clickIitem(index){
        // 得到index对应的top
        const top = this.tops[index]
        // 立即更新scrollY
        this.scrollY = top
        // 右侧列表滚动top处
        this.rightScroll.scrollTo(0, -top, 300)
      },

      showFood(food){
        // 更新food状态
        this.food = food

        // 显示food组件(父组件调用子组件的方法)
        this.$refs.food.toggleShow()
      }
    },
    components: {
      CartControl,
      Food,
      ShopCart
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss">
  @import "../../../common/sass/mixins.scss";
  .goods{
    display: flex;
    position: absolute;
    top: 250px;
    bottom: 46px;
    width: 100%;
    background: #ffffff;
    overflow: hidden;
    .menu-wrapper{
      flex: 0 0 80px;
      width: 80px;
      background: #f3f5f7;
      .menu-item{
        display: table;
        width: 56px;
        height: 54px;
        padding: 0 12px;
        line-height: 14px;
        &.current{
          position: relative;
          z-index: 10;
          margin-top: -1px;
          background: #ffffff;
          color: $green;
          font-weight: 700;
          .text{
            border: none;
          }
          .icon{
            display: inline-block;
            vertical-align: top;
            width: 12px;
            height: 12px;
            margin-right: 2px;
            background-size: 12px 12px;
            background-repeat: no-repeat;
          }
          .text{
            display: table-cell;
            width: 56px;
            vertical-align: middle;
            font-size: 12px;
          }
        }
      }
    }
    .foods-wrapper{
      flex: 1;
      .title{
        padding-left: 14px;
        height: 26px;
        line-height: 26px;
        border-left: 2px solid #69dde1;
        font-size: 12px;
        color: rgb(147, 153, 159);
        background: #f3f5f7;
      }
      .food-item{
        display: flex;
        margin: 18px;
        border-bottom: 18px;
        @include bottom-border-1px(rgba(7, 17, 27, 0.1));
        &:last-child{
          border: none;
          margin-bottom: 0;
          .icon{
            flex: 0 0 57px;
            margin-right: 10px;
          }
          .content{
            flex: 1;
            .name{
              margin: 2px 0 8px 0;
              height: 14px;
              line-height: 14px;
              font-size: 14px;
              color: rgb(7, 17, 27);
            }
            .desc, .extra{
              line-height: 10px;
              font-size: 10px;
              color: rgb(147, 153, 159);
            }
            .desc{
              line-height: 12px;
              margin-bottom: 8px;
            }
            .extra{
              .count{
                margin-right: 12px;
              }
            }
            .price{
              font-weight: 700;
              line-height: 24px;
              .now{
                margin-right: 8px;
                font-size: 14px;
                color: rgb(240, 20, 20);
              }
              .old{
                text-decoration: line-through;
                font-size: 10px;
                color: rgb(147, 153, 159);
              }
            }
            .cartcontrol-wrapper{
              position: absolute;
              right: 0;
              bottom: 12px;
            }
          }
        }
      }
    }
  }
</style>
