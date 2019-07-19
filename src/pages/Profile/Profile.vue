<template>
  <section class="profile">
    <HeaderTop title="我的"></HeaderTop>

    <router-link class="profile-number" tag="div" :to="user._id?'/user': '/login'">
      <a href="javascript:void (0)" class="profile-link">
        <div class="profile-image">
          <i class="iconfont icon-person"></i>
        </div>
        <div class="user-info">
          <p class="user-info-top" v-show="!user.phone">{{user.name?user.name:'登录/注册'}}</p>
          <p>
            <span class="user-icon">
              <i class="iconfont icon-shouji icon-mobile"></i>
            </span>
            <span class="icon-mobile-number">{{user.phone?user.phone: '暂无绑定手机号'}}</span>
          </p>
        </div>
        <span class="arrow">
              <i class="iconfont icon-jiantou1"></i>
            </span>
      </a>
    </router-link>

    <section class="profile-info-data border-1px">
      <ul class="info-data-list">
        <a href="javascript:void (0)" class="info-data-link">
          <span class="info-data-top"><span>0.00</span>元</span>
          <span class="info-data-bottom">我的余额</span>
        </a>
        <a href="javascript:void (0)" class="info-data-link">
          <span class="info-data-top"><span>0</span>个</span>
          <span class="info-data-bottom">我的优惠</span>
        </a>
        <a href="javascript:void (0)" class="info-data-link">
          <span class="info-data-top"><span>0</span>分</span>
          <span class="info-data-bottom">我的积分</span>
        </a>
      </ul>
    </section>
    <section class="profile-my-order border-1px">
      <!-- 我的订单 -->
      <a href="javascript:void (0)" class="my-order">
            <span>
              <i class="iconfont icon-order-s"></i>
            </span>
        <div class="my-order-div">
          <span>我的订单</span>
          <span class="my-order-icon">
                <i class="iconfont icon-jiantou1"></i>
              </span>
        </div>
      </a>
      <!-- 积分商城 -->
      <a href="javascript:void (0)" class="my-order">
            <span>
              <i class="iconfont icon-jifen"></i>
            </span>
        <div class="my-order-div">
          <span>积分商城</span>
          <span class="my-order-icon">
                <i class="iconfont icon-jiantou1"></i>
              </span>
        </div>
      </a>
      <!-- 饿了么外卖会员卡 -->
      <a href="javascript:void (0)" class="my-order">
            <span>
              <i class="iconfont icon-vip"></i>
            </span>
        <div class="my-order-div">
          <span>饿了么外卖会员卡</span>
          <span class="my-order-icon">
                <i class="iconfont icon-jiantou1"></i>
              </span>
        </div>
      </a>
    </section>
    <section class="profile-my-order border-1px">
      <!-- 服务中心 -->
      <a href="javascript:void (0)" class="my-order">
            <span>
              <i class="iconfont icon-fuwu"></i>
            </span>
        <div class="my-order-div">
          <span>服务中心</span>
          <span class="my-order-icon">
                <i class="iconfont icon-jiantou1"></i>
              </span>
        </div>
      </a>
    </section>
    <section class="profile-my-order border-1px" v-show="user._id">
      <!-- 退出登录 -->
      <mt-button style="width: 100%" type="danger" @click="logout">退出登录</mt-button>
    </section>
  </section>
</template>
<script>
  import {mapState} from 'vuex'
  import {MessageBox} from 'mint-ui'

  import HeaderTop from '../../components/HeaderTop/HeaderTop'
  import MtButton from 'mint-ui/packages/button/src/button'

  export default {
    computed: {
      ...mapState(['user'])
    },
    methods: {
      logout() {
        MessageBox.confirm('你确认退出吗?')
          .then(
            action => { // 确认
              // 异步获取用户信息
              this.$store.dispatch('resetUser')
            },
            action => { // 取消
              console.log('点击了取消');
            }
          )
      }
    },

    components: {
      MtButton,
      HeaderTop
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss">
  @import "../../common/sass/mixins.scss";
  /* 我的 */
  &.profile{
    width: 100%;
    .profile-number{
      margin-top: 0.455rem;
      .profile-link{
        @extend %clearFix;
        position: relative;
        display: block;
        background: #02a774;
        padding: 0.2rem 0.1rem;
        .profile-image{
          float: left;
          width: 0.6rem;
          height: 0.6rem;
          border-radius: 50%;
          overflow: hidden;
          vertical-align: top;
          .icon-person{
            background: #e4e4e4;
            font-size: 0.62rem;
          }
        }
        .user-info{
          float: left;
          margin-top: 0.08rem;
          margin-left: 0.15rem;
          p{
            font-weight: 700;
            font-size: 0.18rem;
            color: #ffffff;
            &.user-info-top{
              padding-bottom: 0.08rem;
            }
            .user-icon{
              display: inline-block;
              margin-left: -0.15rem;
              margin-right: 0.05rem;
              width: 0.2rem;
              height: 0.2rem;
              .icon-mobile{
                font-size: 0.3rem;
                vertical-align: text-top;
              }
            }
            .icon-mobile-number{
              font-size: 0.14rem;
              color: #ffffff;
            }
          }
        }
        .arrow{
          width: 0.12rem;
          height: 0.12rem;
          position: absolute;
          right: 0.15rem;
          top: 40%;
          .icon-jiantou1{
            color: #ffffff;
            font-size: 0.05rem;
          }
        }
      }
    }
    .profile-info-data{
      @include bottom-border-1px(#e4e4e4);
      width: 100%;
      background: #ffffff;
      overflow: hidden;
      .info-data-list{
        @extend %clearFix;
        .info-data-link{
          float: left;
          width: 33%;
          text-align: center;
          border-right: 0.01rem solid #f1f1f1;
          .info-data-top{
            display: block;
            width: 100%;
            font-size: 0.14rem;
            color: #333333;
            padding: 0.15rem 0.05rem 0.1rem;
            span{
              display: inline-block;
              font-size: 0.3rem;
              color: #ff9900;
              font-weight: 700;
              line-height: 0.3rem;
            }
          }
          .info-data-bottom{
            display: inline-block;
            font-size: 0.14rem;
            color: #666666;
            font-weight: 400;
            padding-bottom: 0.1rem;
          }
          &:nth-of-type(2){
            .info-data-top{
              span{
                color: #ff5f3e;
              }
            }
          }
          &:nth-of-type(3){
            border: 0;
            .info-data-top{
              span{
                color: #6ac20b;
              }
            }
          }
        }
      }
    }
    .profile-my-order{
      @include top-border-1px(#e4e4e4);
      margin-top: 0.1rem;
      background: #ffffff;
      .my-order{
        display: flex;
        align-items: center;
        padding-left: 0.15rem;
        > span{
          display: flex;
          align-items: center;
          width: 0.2rem;
          height: 0.2rem;
          > .iconfont{
            margin-left: -0.1rem;
            font-size: 0.3rem;
            .icon-order-s{
              color: #02a774;
            }
            .icon-jifen{
              color: #ff5f3e;
            }
            .icon-vip{
              color: #ff9900;
            }
            .icon-fuwu{
              color: #02a774;
            }
          }
        }
        .my-order-div{
          width: 100%;
          border-bottom: 1px solid #f1f1f1;
          padding: 0.18rem 0.1rem 0.18rem 0;
          font-size: 0.16rem;
          color: #333333;
          display: flex;
          justify-content: space-between;
          span{
            display: block;
          }
          .my-order-icon{
            width: 0.1rem;
            height: 0.1rem;
            .icon-jiantou1{
              color: #bbbbbb;
              font-size: 0.1rem;
            }
          }
        }
      }
    }
  }
</style>
