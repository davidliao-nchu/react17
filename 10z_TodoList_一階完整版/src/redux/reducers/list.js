/*
	1. 本文件是用於創建一個專為List組件服務的reducer。reducer的本質就是一個函數!!!
	2. reducer函數會接到两個參數，分别為：之前的狀態(preState)、動作對象(action)
	*** reducer不要更改input的值 *** reducer必須為「純函數」
*/
import {UPDATE_TAB} from '../constant'

const initState = 'all' // 初始化tabFlag的值

export default function listReducer(preState = initState, action) {
	// console.log('listReducer @#@#@#');
	const {type, data} = action
	switch (type) {
		case UPDATE_TAB: // 若是更新tab狀態 
			// tabReducer必須是純函數
			// 或簡單一點記：所有的reducer都不要去更動input的值，全都複製成另一個不同的東西…?!!!
			return data
		default:
			return preState
	}
}
