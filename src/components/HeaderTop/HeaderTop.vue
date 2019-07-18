<template>
  <header class="header">
    <slot name="left"></slot>

    <a class="header-title">
      <span class="header-title-text ellipsis">{{title}}</span>
    </a>

    <slot name="right"></slot>
  </header>
</template>
<script>
  export default {
    props: {
      title: String
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss">
  .header {
    background-color: #02a774;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    height: 0.45rem;
    .header-search {
      position: absolute;
      left: 0.15rem;
      top: 50%;
      transform: translateY(-50%);
      width: 10%;
      height: 50%;
      .icon-sousuo {
        font-size: 0.25rem;
        color: #ffffff;
      }
    }
    .header-title {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 60%;
      color: #ffffff;
      font-size: 0.22rem;
      text-align: center;
      .header-title-text {
        font-size: 0.2rem;
        color: #ffffff;
        display: block;
      }
    }
    .header-login {
      font-size: 0.14rem;
      color: #ffffff;
      position: absolute;
      right: 0.15rem;
      top: 50%;
      transform: translateY(-50%);
      .header-login-text {
        color: #ffffff;
      }
    }
  }
</style>
