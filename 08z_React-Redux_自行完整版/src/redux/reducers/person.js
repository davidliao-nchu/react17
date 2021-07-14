/*
	1. 本文件是用於創建一個專為Person組件服務的reducer。reducer的本質就是一個函數!!!
	2. reducer函數會接到两個參數，分别為：之前的狀態(preState)、動作對象(action)
	*** reducer不要更改input的值 *** reducer必須為「純函數」
*/
import {ADD_PERSON} from '../constant'

const initState = [{id: '001', name: 'tom', age: 18}] // 初始化人的列表

export default function personReducer(preState = initState, action) {
	// console.log('personReducer@#@#@#');
	const {type, data} = action
	switch (type) {
		case ADD_PERSON: // 若是添加一個人
			// preState.unshift(data) // 此處不可以這樣寫，因為會導致preState被改寫，則personReducer就不是純函數了!!!
			// 或簡單一點記：所有的reducer都不要去更動input的值，全都複製成另一個不同的東西…?!!!
			return [data, ...preState]
		default:
			return preState
	}
}
