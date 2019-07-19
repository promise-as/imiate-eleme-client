<template>
  <section class="order">
    <HeaderTop tilte="订单列表"></HeaderTop>

    <section class="order-no-login">
      <img src="images/person.png">
      <h3>登录后查看外卖订单</h3>
      <button>立即登录</button>
    </section>
  </section>
</template>
<script>
  import HeaderTop from '../../components/HeaderTop/HeaderTop'

  export default {
    components: {
      HeaderTop
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss">
  /* 订单 */
  &.order{
    width: 100%;
    .order-no-login{
      padding-top: 1.4rem;
      width: 60%;
      margin: 0 auto;
      text-align: center;
      > img{
        display: block;
        width: 100%;
        height: 30%;
      }
      > h3{
        padding: 0.1rem 0;
        font-size: 0.17rem;
        color: #6a6a6a;
      }
      > button{
        display: inline-block;
        background: #02a774;
        font-size: 0.14rem;
        color: #ffffff;
        border: 0;
        outline: none;
        border-radius: 0.05rem;
        padding: 0.1rem 0.2rem;
      }
    }
  }
</style>
