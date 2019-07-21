<template>
  <footer class="footer-guide border-1px">
    <a href="javascript:void (0)" @click="goTo('/msite')" :class="{on: isCurrent('/msite')}">
      <span class="item-icon">
        <i class="iconfont icon-waimai"></i>
      </span>
      <span>外卖</span>
    </a>
    <a href="javascript:void (0)" @click="goTo('/search')" :class="{on: isCurrent('/search')}">
      <span class="item-icon">
        <i class="iconfont icon-sousuo"></i>
      </span>
      <span>搜索</span>
    </a>
    <a href="javascript:void (0)" @click="goTo('/order')" :class="{on: isCurent('/order')}">
      <span class="item-icon">
        <i class="iconfont icon-dingdan"></i>
      </span>
      <span>订单</span>
    </a>
    <a href="javascript:void (0)" @click="goTo('/profile')" :class="{on: isCurrent('/profile')}">
      <span class="item-icon">
        <i class="iconfont icon-geren"></i>
      </span>
      <span>我的</span>
    </a>
  </footer>
</template>

<script type="text/javascript">
  export default {
    methods: {
      goTo(path){
        return this.$router.replace(path)
      },
      isCurrent(path){
        return this.$route.path === path
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
  @import "../../common/sass/mixins.scss";
  .footer-guide{
    @include top-border-1px(#e4e4e4);
    position: fixed;
    z-index: 100;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ffffff;
    width: 100%;
    height: 0.5rem;
    display: flex;
    .guide-item{
      display: flex;
      flex: 1;
      text-align: center;
      flex-direction: column;
      align-items: center;
      margin: 0.05rem;
      color: #999999;
      &.on{
        color: #02a774;
      }
      span{
        font-size: 0.12rem;
        margin-top: 0.02rem;
        margin-bottom: 0.02rem;
        .iconfont{
          font-size: 0.22rem;
        }
      }
    }
  }
</style>
