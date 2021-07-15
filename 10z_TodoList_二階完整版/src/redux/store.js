/* 
	本文件專門用於暴露一個store對象，且整個應用只有一個store對象
	本文件毫無react-redux的干係，只跟原生的redux有關而已
*/

// 1. 引入createStore，專門用於創建redux中最為核心的store對象
// import {createStore,applyMiddleware,combineReducers} from 'redux'
import {createStore, combineReducers} from 'redux'

// 2. 引入為各組件服務的reducer
// 引入為List組件服務的reducer
import listReducer from './reducers/list'
// 引入為Todo組件服務的reducer
import todoReducer from './reducers/todo'
// 引入redux-devtools-extension
// import {composeWithDevTools} from 'redux-devtools-extension'

// 3. 匯總所有的reducer變為一個總的reducer
const allReducer = combineReducers({
	todos: todoReducer, // todoReducer回傳的結果，store存在key為"todos"的物件當中
	tabFlag: listReducer, // tabReducer回傳的結果，store存在key為"tabFlag"的物件當中
})

// 4. 暴露store 
// export default createStore(allReducer,composeWithDevTools(applyMiddleware(thunk)))
export default createStore(allReducer)