/*
包含 n 个接口请求函数的模块
每个函数的返回值都是 promise
*/
import ajax from './ajax';

const BASE_URL = '/api' // 开发环境运行
// const BASE_URL = '' // 生产环境打包

// 1. 根据经纬度获取位置详情
export const reqAddress = (geohash) => ajax(BASE_URL + '/position/' + geohash);

// 2. 获取食品分类列表
export const reqCategorys = () => ajax(BASE_URL + './index_category');

// 3. 根据经纬度获取商铺列表
export const reqShops = (latitude, longitude) => ajax(BASE_URL + '/shops', {latitude, longitude})

// 4. 根据经纬度和关键字搜索商铺列表

// 6. 用户名密码登录
export const reqPwdLogin = ({name, pwd, captcha}) => ajax(BASE_URL + '/login_pwd', {name, pwd, captcha}, 'POST')

// 7. 发送短信验证码
export const reqSendCode = (phone) => ajax(BASE_URL + '/sendcode', {phone})

// 8. 手机号验证码登录
export const reqSmsLogin = (phone, code) => ajax(BASE_URL, '/login_sms', {phone, code}, 'POST')

// 9. 根据会话获取用户信息
export const reqUser = () => ajax(BASE_URL + '/userinfo')

// 10. 用户登录
export const logout = () => ajax(BASE_URL + '/logout')

export const reqGoods = () => ajax('/goods')
export const reqRatings = () => ajax('/ratings')
export const reqInfo = () => ajax('/info')
