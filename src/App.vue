<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide v-show="this.$route.meta.showFooter"/>
  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide';

  export default {
    // 已挂载
    mounted(){
      // 异步获取当前地址信息
      this.$store.dispatch('getAddress');
      // 异步获取用户信息
      this.$store.dispatch('getUser');
    },

    components: {
      FooterGuide
    }
  }
</script>

<style>
  #app{
    width: 100%;
    height: 100%;
    background: #f5f5f5;
  }
</style>
