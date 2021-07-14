/*
	1. 本文件是用於創建一個專為Todo組件服務的reducer。reducer的本質就是一個函數!!!
	2. reducer函數會接到两個參數，分别為：之前的狀態(preState)、動作對象(action)
	*** reducer不要更改input的值 *** reducer必須為「純函數」
*/
import {ADD_TODO, DEL_TODO, UPDATE_DISPLAY, UPDATE_TODO, CLEAR_FINISHED} from '../constant'

const initState = [
	{id: '001', content: '把冰箱發霉的檸檬拿去丟', finished: true, display: true},
	{id: '002', content: '整理電腦資料夾', finished: false, display: true},
	{id: '003', content: '繳電費、水費、瓦斯費', finished: true, display: true},
	{id: '004', content: '約ada星期四吃晚餐、吃宵夜、看電影、閒聊天、還有其他', finished: false, display: true},
	{id: '005', content: '蝦皮回應', finished: true, display: true},
	{id: '006', content: '手錶、疏困、匿名下載', finished: false, display: true},
	{id: '007', content: '03的筆試', finished: false, display: true},
	{id: '008', content: '約linda星期五吃雞', finished: false, display: true},
] // 初始化Todo的列表

export default function todoReducer(preState = initState, action) {
	// console.log('todoReducer @#@#@#');
	const {type, data} = action
	switch (type) {
		case ADD_TODO: // 若是增加一個todo
			// preState.unshift(data) // 此處不可以這樣寫，因為會導致preState被改寫，則todoReducer就不是純函數了!!!
			// 或簡單一點記：所有的reducer都不要去更動input的值，全都複製成另一個不同的東西…?!!!
			return [data, ...preState]
		case DEL_TODO: // 若是刪除一個todo
			// preState.shift(data) // 此處不可以這樣寫，因為會導致preState被改寫，則todoReducer就不是純函數了!!!
			// 或簡單一點記：所有的reducer都不要去更動input的值，全都複製成另一個不同的東西…?!!!
			const newTodos_D = preState.filter((todo) => (todo.id !== data))
			return newTodos_D
		case UPDATE_TODO:
    	const newTodos_U = preState.map((todo) => {
      	if (todo.id === data) return {...todo, finished: !todo.finished} 
      	else return todo
      })
			return newTodos_U
		case UPDATE_DISPLAY:
			return data
		case CLEAR_FINISHED:
			return data
		default:
			return preState
	}
}
