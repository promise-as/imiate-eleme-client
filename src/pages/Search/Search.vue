<template>
  <section class="search">
    <headerTop title="搜索"></headerTop>

    <form action="#" class="search">
      <input type="text" name="search" placeholder="请输入商家或美食名称" class="search-input">
      <input type="submit" name="submit" class="search-submit">
    </form>
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
  @import "../../common/sass/mixins.scss";

  /* 搜索 */
  .search{
    width: 100%;
    .search-form{
      @extend %clearFix;
      margin-top: 0.45rem;
      background-color: #ffffff;
      padding: 0.12rem 0.08rem;
      input{
        height: 0.35rem;
        padding: 0 0.04rem;
        border-radius: 0.02rem;
        font-weight: bold;
        outline: none;
        &.search-input{
          float: left;
          width: 79%;
          border: 0.04rem solid #f2f2f2;
          font-size: 0.14rem;
          color: #333333;
          background-color: #f2f2f2;
        }
        &.search-submit{
          float: right;
          width: 18%;
          border: 0.04rem solid #02a774;
        }
      }
    }
  }
</style>
