/* 
	1. 本文件是用於創建一個專為Count組件服務的reducer。reducer的本質就是一個函數!!!
	2. reducer函數會接到两個參數，分别為：之前的狀態(preState)、動作對象(action)
	*** reducer不要更改input的值 *** reducer必須為「純函數」
*/
import {INCREMENT, DECREMENT} from '../constant'

const initState = 0 // 初始化狀態
export default function countReducer(preState = initState, action) {
	// console.log('countReducer@#@#@#');

	// 從action對象中獲取：type、data
	const {type, data} = action
	// 根據type決定如何加工數據
	switch (type) {
		case INCREMENT: // 如果是加
			return preState + data // 這是加工，不是賦值；並沒有去更改input
		case DECREMENT: // 如果是減
			return preState - data
		default:
			return preState // 用於初始化，以及其他狀況
	}
}