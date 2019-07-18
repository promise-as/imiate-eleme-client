<template>
  <div class="star" :class="`star-${size}`">
    <span class="star-item"
          v-for="(c, index) in starClass" :key="index" :class="c"
    ></span>
  </div>
</template>
<script>
  const CLASS_ON = 'on';
  const CLASS_HALF = 'half';
  const CLASS_OFF = 'off';

  export default {
    props: {
      score: Number,
      size: Number
    },

    computed: {
      // 由 5 个类名组成的数组
      /*
      3.5: 3 + 1 + 1 // 3个全星+1个半星+1个灰星
      */

      starClasses(){
        const scs = []
        const {score} = this

        // 保存 n 个 CLASS_ON
        const starInteger = Math.floor(score)
        for(let i = 0; i < starInteger; i++){
          scs.push(CLASS_ON)
        }

        // 保存 1/0 个 CLASS_HALF
        if(score * 10 - starInteger * 10 >= 5){
          scs.push(CLASS_HALF)
        }

        // 保存 n 个 CLASS_OFF
        while (scs.length < 5){
          scs.push(CLASS_OFF)
        }
        return scs;
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss">
  @import "../../common/sass/mixins.scss";
  .star{ /* 2x图 3x图 */
    float: left;
    font-size: 0;
    .star-item{
      display: inline-block;
      background-repeat: no-repeat;
    }
    &.star-48{
      .star-item{
        width: 0.2rem;
        height: 0.2rem;
        margin-right: 0.22rem;
        background-size: 0.2rem 0.2rem;
        &:last-child{
          margin-right: 0;
        }
        &.on{
          @include bg-image('../images/star48_on')
        }
        &.half{
          @include bg-image('../images/star48_half')
        }
        &.off{
          @include bg-image('../images/star48_off')
        }
      }
    }
    &.star-36{
      .star-item{
        width: 0.15rem;
        height: 0.15rem;
        margin-right: 0.06rem;
        background-size: 0.15rem 0.15rem;
        &:last-child{
          margin-right: 0;
        }
        &.on{
          @include bg-image('../images/star36_on')
        }
        &.half{
          @include bg-image('../images/star36_half')
        }
        &.off{
          @include bg-image('../images/star36_off')
        }
      }
    }
    &.star-24{
      .star-item{
        width: 0.1rem;
        height: 0.1rem;
        margin-right: 0.03rem;
        background-size: 0.1rem 0.1rem;
        &:last-child{
          margin-right: 0;
        }
        &.on{
          @include bg-image('../images/star24_on')
        }
        &.half{
          @include bg-image('../images/star24_half')
        }
        &.off{
          @include bg-image('../images/star24_off')
        }
      }
    }
  }
</style>
