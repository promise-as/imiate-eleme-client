<template>
  <section class="loginContainer">
    <div class="loginInner">
      <div class="login-header">
        <h2 class="login-logo">饿了么外卖</h2>
        <div class="login-header-title">
          <a href="javascript:void (0)" :class="{on: loginWay}" @click="loginWay = true">短信登录</a>
          <a href="javascript:void (0)" :class="{on: !loginWay}" @click="loginWay = false">密码登录</a>
        </div>
      </div>
      <div class="login-content">
        <form>
          <div :class="{on: loginWay}">
            <section class="login-message">
              <input type="tel" maxlength="11" placeholder="手机号" v-model="phone">
              <button :disabled="!isRightPhone" class="get-verification" :class="{right_phone: isRightPhone}"
                      @click.prevent="sendCode"
              >{{computeTime>0?`已发送(${computeTime}s)`:'获取验证码'}}</button>
            </section>
            <section class="login-verification">
              <input type="tel" maxlength="8" placeholder="验证码" v-model="code">
            </section>
            <section class="login-hint">
              温馨提示：未注册饿了么外卖帐号的手机号，登录时将自动注册，且代表已同意
              <a href="javascript:void (0);">《用户服务协议》</a>
            </section>
          </div>
          <div :class="{on: !loginWay}">
            <section>
              <section class="login-message">
                <input type="tel" maxlength="11" placeholder="手机/邮箱/用户名">
              </section>
              <section class="login-verification">
                <input type="tel" maxlength="8" placeholder="密码" v-model="pwd">
                <div class="switch-button off" :class="{on: isShowPwd}" @click="isShowPwd = !isShowPwd">
                  <div class="switch-circle" :class="{right: isShowPwd}"></div>
                  <span class="switch-text">abc</span>
                </div>
              </section>
              <section class="login-message">
                <input type="text" maxlength="11" placeholder="验证码" v-model="captcha">
                <img src="http://localhost:4000/captcha" ref="captcha"
                     class="get-verification" alt="captcha" @click="updateCaptacha">
              </section>
            </section>
          </div>
          <button class="login-submit" @click.prevent="login">登录</button>
        </form>
        <a href="javascript:void (0)" class="about-us">关于我们</a>
      </div>
      <a href="javascript:void (0)" class="go-back" @click="$router.back()"> <!-- 回退 -->
        <i class="iconfont icon-jiantou2"></i>
      </a>
    </div>
  </section>
</template>
<script>
  import {Toast, MessageBox} from 'mint-ui'
  import {reqSendCode, reqSmsLogin, reqPwdLogin} from '../../api'

  export default {
    data(){
      return{
        loginWay: false, // true代表短信登陆, false代表密码登陆
        phone: '',  // 手机号
        code: '', // 短信验证码
        name: '', // 用户名
        pwd: '',    // 密码
        captcha: '',  // 图形验证码
        computeTime: 0, // 倒计时剩余的时间
        isShowPwd: true // 是否显示密码
      }
    },

    computed: {
      isRightPhone(){
        return /^1\d{10}$/.test(this.phone) // 匹配以1开头的11位数字
      }
    },

    methods: {
      // 现实提示消息
      showAlert(msg){
        MessageBox.alert(msg, '提示');
      },

      // 登录请求
      async login(){
        const {phone, code, name, pwd, captcha} = this
        let reslut
        // 1. 前台表单验证
        if(this.loginWay){ // 短信登录
          if(!this.isRightPhone){
            // MessageBox.alert('请输入正确手机号', '提示');
            this.showAlert('请输入正确手机号')
            return
          }else if(!/^\d{6}$/.test(code)){
            // MessageBox.alert('验证码错误', '提示');
            this.showAlert('验证码错误')
            return
          }
          // 2. 发登录请求(短信)
          reslut = await reqSmsLogin(phone, code)
        }else { //密码登录
          if(!name){
            // MessageBox.alert('请输入用户名', '提示');
            this.showAlert('请输入用户名')
            return
          }else if(!pwd){
            // MessageBox.alert('请输入密码', '提示');
            this.showAlert('请输入密码')
            return
          }else if(!captcha){
            // MessageBox.alert('请输入验证码', '提示');
            this.showAlert('请输入验证码')
            return
          }
          // 2. 发登录请求(密码)
          reslut = await reqPwdLogin({name, pwd, captcha})
        }

        // 3. 根据结果做不同响应
        if(reslut.code === 0){ // 成功
          const user = reslut.data;

          // 将user保存到state中
          this.$store.dispatch('saveUser', user)
          // 跳转路由到/profile
          this.$router.replace('/profile')
        }else{ // 失败
          this.showAlert(reslut.msg)

          // 停止计时
          this.computeTime = 0;

          // 更新图形验证码(必须是密码登录)
          !this.loginWay && this.updateCaptacha()
        }
      },

      // 发送验证
      async sendCode(event){
        if(this.isRightPhone){
          //  1. 倒计时
          //  指定总时间
          event.target.className = 'get-verification'
          this.computeTime = 10
          // 启动循环定时器，每隔1s减少1
          const interId = setInterval(() => {
            this.computeTime--
            // 当计时时间为0时清除定时器
            if(this.computeTime <= 0){
              this.computeTime = 0;
              clearInterval(interId)
              event.target.className = 'get-verification right-phone'
            }
          }, 1000)

          //2. 向后台发ajax请求--> 发送获取验证码的请求
          const result = await reqSendCode(this.phone)

          if(result.code === 0){
            // 显示一个自自动消失的文本小提示
            Toast('短信已发送')
          }else{
            // 停止计时
            this.computeTime = 0 // 前面判断的条件必须是<=
            // 显示一个警告框
            MessageBox.alert(result.msg, '提示');
          }
        }
      },

      // 获取更新显示新的图形验证码
      updateCaptacha(){
        // event.target.src = 'http://localhost:4000/captcha'
        // 如果指定的新的src与原本的src一样, 不会重新请求
        // 参数本身后台不需要, 但有了这个变化的值, 浏览器就会自动发请求
        this.$refs.captcha.src = 'http://localhost:4000/captcha?time=' + Date.now()
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss">
  .loginContainer{
    width: 100%;
    height: 100%;
    background: #ffffff;
    .loginInner{
      padding-top: 0.6rem;
      width: 80%;
      margin: 0 auto;
      .login-header{
        .login-logo{
          font-size: 0.4rem;
          font-weight: bold;
          color: #02a774;
          text-align: center;
        }
        .login-header-title{
          padding-top: 0.4rem;
          text-align: center;
          > a{
            color: #333333;
            font-size: 0.14rem;
            padding-bottom: 0.04rem;
            &:first-child{
              margin-right: 0.4rem;
            }
            &.on{
              color: #02a774;
              font-weight: 7rem; // 700
              border-bottom: 0.02rem solid #02a774;
            }
          }
        }
      }
      .login-content{
        > form{
          > div{
            display: none;
            &.on{
              display: block;
            }
            input{
              width: 100%;
              height: 100%;
              padding-left: 0.1rem;
              box-sizing: border-box;
              border: 0.01rem solid #dddddd;
              border-radius: 0.04rem;
              outline: 0;
              font: 4rem 0.14rem Arial;
              &:focus{
                border: 0.01rem solid #02a774;
              }
            }
            .login-message{
              position: relative;
              margin-top: 0.16rem;
              height: 0.48rem;
              font-size: 0.14rem;
              background: #ffffff;
              .get-verification{
                position: absolute;
                top: 50%;
                right: 0.1rem;
                transform: translateY(-50%);
                border: 0;
                color: #cccccc;
                font-size: 0.14rem;
                background: transparent;
              }
            }
            .login-verification{
              position: relative;
              margin-top: 0.16rem;
              height: 0.48rem;
              font-size: 0.14rem;
              background: #ffffff;
              .switch-button{
                font-size: 0.12rem;
                border: 0.01rem solid #dddddd;
                border-radius: 0.08rem;
                transition: background-color 0.3, border-color 0.3s;
                padding: 0 0.06rem;
                width: 0.3rem;
                height: 0.16rem;
                line-height: 0.16rem;
                color: #ffffff;
                position: absolute;
                top: 50%;
                right: 0.1rem;
                transform: translateY(-50%);
                &.off{
                  background: #ffffff;
                  .switch-text{
                    float: right;
                    color: #dddddd;
                  }
                }
                &.on{
                  background: #02a774;
                }
                > .switch-circle{
                  //transform: translateX(27px);
                  position: absolute;
                  top: -0.01rem;
                  left: -0.01rem;
                  width: 0.16rem;
                  height: 0.16rem;
                  border: 0.01rem solid #dddddd;
                  border-radius: 50%;
                  background: #ffffff;
                  box-shadow: 0 0.02rem 0.04rem 0 rgba(0, 0, 0, 0.1);
                  transition: transform 0.3s;
                }
              }
            }
            .login-hint{
              margin-top: 0.12rem;
              color: #999999;
              font-size: 0.14rem;
              line-height: 0.2rem;
              > a{
                color: #02a774;
              }
            }
          }
          .login-submit{
            display: block;
            width: 100%;
            height: 0.42rem;
            margin-top: 0.3rem;
            border-radius: 0.04rem;
            background: #4cd96f;
            color: #ffffff;
            text-align: center;
            font-size: 0.16rem;
            line-height: 0.42rem;
            border: 0;
          }
        }
        .about-us{
          display: block;
          font-size: 0.12rem;
          margin-top: 0.2rem;
          text-align: center;
          color: #999999;
        }
      }
      .go-back{
        position: absolute;
        top: 0.05rem;
        left: 0.05rem;
        width: 0.3rem;
        height: 0.3rem;
        > .iconfont{
          font-size: 0.2rem;
          color: #999999;
        }
      }
    }
  }
</style>
