<template>
  <div class="shop-container">
    <ul class="shop-list">
      <li class="shop-li border-1px">
        <a>
          <div class="shop-left">
            <img src="images/shop_1.jpg" alt="" class="shop-img">
          </div>
          <div class="shop-right">
            <section class="shop-detail-header">
              <h4 class="shop-title ellipsis">
                锄禾日当午，汗滴禾下土
              </h4>
              <ul class="shop-detail-ul">
                <li class="supports">保</li>
                <li class="supports">准</li>
                <li class="supports">票</li>
              </ul>
            </section>
            <section class="shop-rating-order">
              <section class="shop-rating-order-left">
                <div class="star star-24">
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                  <span class="star-item half"></span>
                  <span class="star-item off"></span>
                </div>
                <div class="rating-section">
                  3.6
                </div>
                <div class="order-section">
                  月售106单
                </div>
              </section>
              <section class="shop-rating-order-right">
                <span class="delivery-style delivery-left">饿了么专送</span>
                <span class="delivery-style delivery-right">准时送</span>
              </section>
            </section>
            <section class="shop-distance">
              <p class="shop-delivery-msg">
                <span>¥20起送</span>
                <span class="segmentation">/</span>
                <span>配送费约¥5</span>
              </p>
            </section>
          </div>
        </a>
      </li>
      <li class="shop-li border-1px">
        <a>
          <div class="shop-left">
            <img src="images/shop_2.jpg" alt="" class="shop-img">
          </div>
          <div class="shop-right">
            <section class="shop-detail-header">
              <h4 class="shop-title ellipsis">
                锄禾日当午，汗滴禾下土
              </h4>
              <ul class="shop-detail-ul">
                <li class="supports">保</li>
                <li class="supports">准</li>
                <li class="supports">票</li>
              </ul>
            </section>
            <section class="shop-rating-order">
              <section class="shop-rating-order-left">
                <div class="star star-24">
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                  <span class="star-item half"></span>
                  <span class="star-item off"></span>
                </div>
                <div class="rating-section">
                  3.6
                </div>
                <div class="order-section">
                  月售106单
                </div>
              </section>
              <section class="shop-rating-order-right">
                <span class="delivery-style delivery-left">饿了么专送</span>
                <span class="delivery-style delivery-right">准时送</span>
              </section>
            </section>

            <section class="shop-distance">
              <p class="shop-delivery-msg">
                <span>¥20起送</span>
                <span class="segmentation">/</span>
                <span>配送费约¥5</span>
              </p>
            </section>
          </div>
        </a>
      </li>
      <li class="shop-li border-1px">
        <a>
          <div class="shop-left">
            <img src="images/shop_3.jpg" alt="" class="shop-img">
          </div>
          <div class="shop-right">
            <section class="shop-detail-header">
              <h4 class="shop-title ellipsis">
                锄禾日当午，汗滴禾下土
              </h4>
              <ul class="shop-detail-ul">
                <li class="supports">保</li>
                <li class="supports">准</li>
                <li class="supports">票</li>
              </ul>
            </section>
            <section class="shop-rating-order">
              <section class="shop-rating-order-left">
                <div class="star star-24">
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                  <span class="star-item half"></span>
                  <span class="star-item off"></span>
                </div>
                <div class="rating-section">
                  3.6
                </div>
                <div class="order-section">
                  月售106单
                </div>
              </section>
              <section class="shop-rating-order-right">
                <span class="delivery-style delivery-left">饿了么专送</span>
                <span class="delivery-style delivery-right">准时送</span>
              </section>
            </section>

            <section class="shop-distance">
              <p class="shop-delivery-msg">
                <span>¥20起送</span>
                <span class="segmentation">/</span>
                <span>配送费约¥5</span>
              </p>
            </section>
          </div>
        </a>
      </li>
      <li class="shop-li border-1px">
        <a>
          <div class="shop-left">
            <img src="images/shop_4.jpg" alt="" class="shop-img">
          </div>
          <div class="shop-right">
            <section class="shop-detail-header">
              <h4 class="shop-title ellipsis">
                锄禾日当午，汗滴禾下土
              </h4>
              <ul class="shop-detail-ul">
                <li class="supports">保</li>
                <li class="supports">准</li>
                <li class="supports">票</li>
              </ul>
            </section>
            <section class="shop-rating-order">
              <section class="shop-rating-order-left">
                <div class="star star-24">
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                  <span class="star-item half"></span>
                  <span class="star-item off"></span>
                </div>
                <div class="rating-section">
                  3.6
                </div>
                <div class="order-section">
                  月售106单
                </div>
              </section>
              <section class="shop-rating-order-right">
                <span class="delivery-style delivery-left">饿了么专送</span>
                <span class="delivery-style delivery-right">准时送</span>
              </section>
            </section>

            <section class="shop-distance">
              <p class="shop-delivery-msg">
                <span>¥20起送</span>
                <span class="segmentation">/</span>
                <span>配送费约¥5</span>
              </p>
            </section>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
  import { mapState } from 'vuex'
  import Star from '../Star/Star'

  export default {
    data(){
      return{
        baseImgPath: 'https://fuss10.elemecdn.com'
      }
    },

    computed: {
      ...mapState(['shops'])
    },

    components: {
      Star
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss">
  @import "../../common/sass/mixins.scss";
  .shop-container{
    margin-bottom: 0.5rem;
    .shop-list{
      .shop-li{
        @include bottom-border-1px(#f1f1f1);
        width: 100%;
        > a{
          @extend %clearFix;
          display: block;
          box-sizing: border-box;
          padding: 0.15rem 0.08rem;
          width: 100%;
          .shop-left{
            float: left;
            box-sizing: border-box;
            width: 23%;
            height: 0.75rem;
            padding-right: 0.1rem;
            .shop-img{
              display: block;
              width: 100%;
              height: 100%;
            }
          }
          .shop-right{
            float: right;
            width: 77%;
            .shop-detail-header{
              @extend %clearFix;
              width: 100%;
              .shop-title{
                float: left;
                width: 1.4rem;
                color: #333333;
                font-size: 0.16rem;
                line-height: 0.16rem;
                font-weight: 7rem; // 700
                &::before{
                  content: '品牌';
                  display: inline-block;
                  font-size: 0.11rem;
                  line-height: 0.11rem;
                  color: #333333;
                  background-color: #ffd930;
                  padding: 0.02rem;
                  border-radius: 0.02rem;
                  margin-right: 0.05rem;
                }
              }
              .shop-detail-ul{
                float: right;
                margin-top: 0.03rem;
                .supports{
                  float: left;
                  font-size: 0.1rem;
                  color: #999999;
                  border: 0.01rem solid #f1f1f1;
                  padding: 0 0.02rem;
                  border-radius: 0.02rem;
                }
              }
            }
            .shop-rating-order{
              @extend %clearFix;
              width: 100%;
              margin-top: 0.18rem;
              margin-bottom: 0.08rem;
              .shop-rating-order-left{
                float: left;
                color: #ff9a0d;

                .rating-section{
                  float: left;
                  font-size: 0.1rem;
                  color: #ff6000;
                  margin-right: 0.04rem;
                }
                .order-section{
                  float: left;
                  font-size: 0.1rem;
                  color: #666666;
                  transform: scale(0.8);
                }
              }
              .shop-rating-order-right{
                float: right;
                font-size: 0;
                .delivery-style{
                  transform-origin: 0.35rem 0;
                  transform: scale(0.7);
                  display: inline-block;
                  font-size: 0.12rem;
                  padding: 0.01rem;
                  border-radius: 0.02rem;
                }
                .delivery-left{
                  color: #ffffff;
                  margin-right: -0.1rem;
                  background-color: #02a774;
                  border: 1px solid #02a774;
                }
                .delivery-right{
                  color: #02a774;
                  border: 1px solid #02a774;
                }
              }
            }
            .shop-distance{
              @extend %clearFix;
              width: 100%;
              font-size: 0.12rem;
              .shop-delivery-msg{
                float: left;
                transform-origin: 0;
                transform: scale(0.9);
                color: #666666;
                .segmentation{
                  color: #cccccc;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
