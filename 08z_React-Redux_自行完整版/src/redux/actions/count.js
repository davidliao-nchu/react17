/* 
	本文件專門為Count組件 生成action對象
*/
import {INCREMENT,DECREMENT} from '../constant'

// 同步action，就是指action的值為Object類型的一般對象
export const createIncrementAction = data => ({type: INCREMENT, data})
export const createDecrementAction = data => ({type: DECREMENT, data})
// 箭頭函數其實就等同於下面這寫法：
// function createIncrementAction(data) {
// 	return {type: INCREMENT, data};
// }

// 異步action，就是指action的值为函數。異步action中一般都會調用同步action；異步action不是必須要用的。
// export const createIncrementAsyncAction = (data, time) => {
// 	return (dispatch) => {
// 		setTimeout(() => {
// 			dispatch(createIncrementAction(data))
// 		}, time)
// 	}
// }

