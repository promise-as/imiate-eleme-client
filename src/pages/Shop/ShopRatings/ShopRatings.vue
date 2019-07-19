<template>
  <div class="ratings">
    <div class="ratings-content">
      <div class="overview">
        <div class="overview-left">
          <h1 class="score">{{info.ratingCount}}</h1>
          <div class="title">综合评分</div>
          <div class="rank">高于周边商家90%</div>
        </div>
        <div class="overview-right">
          <div class="score-wrapper">
            <span class="title">服务态度</span>
            <Star :score="info.serviceScore" :size="36"/>
            <span class="score">{{info.serviceScore}}</span>
          </div>
          <div class="score-wrapper">
            <span class="title">商品评分</span>
            <Star :score="info.foodScore" :size="36"/>
            <span class="score">{{info.foodScore}}</span>
          </div>
          <div class="delivery-wrapper">
            <span class="title">送达时间</span>
            <span class="delivery">{{info.deliveryTime}}分钟</span>
          </div>
        </div>
      </div>

      <Split/>

      <RatingFilter :selectRateType="selecRateType"
                    :onlyContent="onlyContent"
                    @setSelectRateType = 'setSelectRateType'
                    @switchOnlyContent = 'switchOnlyContent'
      />

      <div class="rating-wrapper">
        <ul>
          <li class="rating-item" v-for="(rating, index) in filterRatings" :key="index">
            <div class="avatar">
              <img width="28" height="28" :src="rating.avatar">
            </div>
            <div class="content">
              <h1 class="name">{{rating.username}}</h1>
              <div class="star-wrapper">
                <div>
                  <Star :score="rating.score" :size="24"/>
                </div>
                <span class="delivery">{{rating.deliveryTime}}</span>
              </div>
            </div>
            <p class="text">{{rating.text}}</p>
            <div class="recommend">
              <span class="iconfont" :class="rating.rateType===0?'icon-thumb-up':'icon-thumb-down'"></span>
              <span class="item" v-for="(item, index) in rating.recommend" :key="index">{{item}}</span>
            </div>
            <div class="time">{{rating.rateTime | date-format}}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'

  import Star from '../../../components/Star/Star'
  import RatingFilter from '../../../components/RatingFilter/RatingFilter'

  export default{
    data(){
      return{
        selectRateType: 2, // 0代表满意，1代表不满意，2代表全部
        onlyContent: true, // 是否只显示有text内容
      };
    },

    mounted(){
      this.$store.dispatch('getRatings', () => {
        this.$nextTick(() => { // 将回调延迟到下次 DOM 更新循环之后执行
          new BScroll('.ratings', {
            click: true
          })
        })
      })
    },

    methods: {
      // 设置selectRateType的新值
      setSelectRateType(selectRateType){
        return this.selectRateType = selectRateType
      },

      switchOnlyContent(){
        return this.onlyContent = !this.onlyContent
      }
    },

    computed: {
      ...mapState(['ratings', 'info']),

      // 过滤后的评论列表
      filterRatings(){
        // 取出相关数据
        const {ratings, selectRateType, onlyContent} = this
        // console.log(ratings);

        // 返回过滤后的数组
        return ratings.filter(rating => {
          const {rateType, text} = rating

          /*
          条件1：
          selectRateType 0/1/2
          rateType 0/1

          selectRateType === 2 --> 全部
          selectRateType === rateType
          selectRateType === 2 || selectRateType === rateType
           */

          /*
          条件2：
          onlyContent true/false
          text 有值/没值

          onlyContent === false --> 没有勾选只看有内容的评价
          text.length > 0
          !onlyContent || text.length > 0
           */

          return (selectRateType===2 || selectRateType === rateType) && (!onlyContent || text.lenght > 0)
        })
      }
    },

    components: {
      Star,
      RatingFilter
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss">
  @import "../../../common/sass/mixins.scss";
  .ratings{
    position: absolute;
    top: 2.5rem;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    background: #ffffff;
    .overview{
      display: flex;
      padding: 18px 0;
      .overview-left{
        flex: 0 0 137px;
        padding: 6px 0;
        width: 137px;
        border-right: 1px solid rgba(7, 17, 27, 0.1);
        text-align: center;
        @media only screen and (max-width: 320px) {
          flex: 0 0 120px;
          width: 120px;
          .score{
            margin-bottom: 6px;
            line-height: 28px;
            font-size: 24px;
            color: rgb(255, 153, 0);
          }
          .title{
            margin-bottom: 8px;
            line-height: 12px;
            font-size: 12px;
            color: rgb(7, 17, 27);
          }
          .rank{
            line-height: 10px;
            font-size: 10px;
            color: rgb(147, 153, 159);
          }
        }
      }
      .overview-right{
        flex: 1;
        padding: 6px 0 6px 24px;
        @media only screen and (max-width: 320px) {
          padding-left: 6px;
          .score-wrapper{
            margin-bottom: 8px;
            font-size: 0;
            .title{
              display: inline-block;
              line-height: 18px;
              vertical-align: top;
              font-size: 12px;
              color: rgb(7, 17, 27);
              float: left;
            }
            .star{
              display: inline-block;
              margin: 0 12px;
              vertical-align: top;
            }
            .score{
              display: inline-block;
              line-height: 18px;
              vertical-align: top;
              font-size: 12px;
              color: rgb(255, 153, 0);
            }
          }
          .delivery-wrapper{
            font-size: 0;
            .title{
              line-height: 18px;
              font-size: 12px;
              color: rgb(7, 17, 27);
            }
            .delivery{
              margin-left: 12px;
              font-size: 12px;
              color: rgb(147, 153, 159);
            }
          }
        }
      }
    }

    .rating-wrapper{
      padding: 0 18px;
      .rating-item{
        display: flex;
        padding: 18px 0;
        @include bottom-border-1px(rgba(7, 17, 27, 0.1))
        .avatar{
          flex: 0 0 28px;
          width: 28px;
          margin-right: 12px;
          img{
            border-radius: 50%;
          }
        }
        .content{
          position: relative;
          flex: 1;
          .name{
            margin-bottom: 4px;
            line-height: 12px;
            font-size: 10px;
            color: rgb(7, 17, 27);
          }
          .star-wrapper{
            margin-bottom: 6px;
            font-size: 0;
            .star{
              display: inline-block;
              margin-right: 6px;
              vertical-align: top;
            }
            .delivery{
              display: inline-block;
              vertical-align: top;
              line-height: 12px;
              font-size: 10px;
              color: rgb(147, 153, 159);
            }
          }
          .text{
            margin-bottom: 8px;
            line-height: 18px;
            color: rgb(7, 17, 27);
            font-size: 12px;
          }
          .recommend{
            line-height: 16px;
            font-size: 0;
            .icon-thumb-up, .icon-thumb-down, .item{
              display: inline-block;
              margin: 0 8px 4px 0;
              font-size: 9px;
            }
          }
        }
      }
    }
  }
</style>
