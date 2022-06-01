/* 
	该文件专门为Count组件生成action对象
*/
import {INCREMENT,DECREMENT} from './constant'

export const createIncrementAction = data => ({type:INCREMENT,data})// 表示返回一個對象
export const createDecrementAction = data => ({type:DECREMENT,data})
