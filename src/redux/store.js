/* 
	本文件專門用於暴露一個store對象，且整個應用只有一个store对象
	本文件毫無react-redux的干系，只跟原生的redux有關而已
*/

//1. 引入createStore，专门用于创建redux中最为核心的store对象
// import {createStore,applyMiddleware,combineReducers} from 'redux'
import {createStore,combineReducers} from 'redux'

//2. 引入為各組件服務的reducer
//引入为Count组件服务的reducer
import countReducer from './reducers/count'
//引入为Count组件服务的reducer
import personReducer from './reducers/person'
//引入redux-thunk，用于支持异步action
// import thunk from 'redux-thunk'
//引入redux-devtools-extension
// import {composeWithDevTools} from 'redux-devtools-extension'

//3. 汇总所有的reducer变为一个总的reducer
const allReducer = combineReducers({
	he:countReducer, //countReducer回傳的結果，store存在key為"he"的物件當中
	rens:personReducer //同理，personReducer回傳的結果，store將它存在key為"rens"的物件之中
})

//4. 暴露store 
// export default createStore(allReducer,composeWithDevTools(applyMiddleware(thunk)))
export default createStore(allReducer)