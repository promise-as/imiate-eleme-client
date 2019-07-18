/*
发送 ajax 请求的函数模块
函数的返回值是 promise 对象
*/
import axios from 'axios';

export default function ajax(url, data={}, type='GET') {
  // 返回一个自己创建的 promise 对象，为了能得到的不是 response，而是 response.data 的数据
  return new Promise (function (resolve, reject) {
    let promise;
    if(type === 'GET'){ // GET 请求
      // 将 data 中所有数据作为请求参数拼到 url 中
      // /register?username=tom&password=123
      let queryStr = '';
      // keys()得到对象自身的所有属性名组成的数组
      Object.keys(data).forEach(key => {
        const value = data[key];
        queryStr += key + '=' + value + '&'
      })
      // username=tom&password=123&-->username=tom&password=123
      if(queryStr){
        // 去除最后的&
        queryStr = queryStr.substring(0, queryStr.length - 1) // username=tom&password=123
        queryStr = '?' + queryStr // ?username=tom&password=123
      }
      promise = axios.get(url + queryStr)
    }else{ // POST请求
      promise = axios.post(url, data)
    }

    promise.then(response => {
      // 请求成功
      resolve(response.data)
    }).catch(error => {
      // 请求失败
      reject(error)
    })
  })
}
