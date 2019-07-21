/*
使用 mockjs 提供模拟数据接口
 */
import Mock from 'mockjs'
import data from './data' // data 表示 json 数据的最外层对象

// 提供 goods 数据接口
Mock.mock('/goods', {code: 0, data: data.goods})

// 提供 ratings 数据接口
Mock.mock('/ratings', {code: 0, data: data.ratings})

// 提供 info 数据接口
Mock.mock('/info', {code: 0, data: data.info})
