/* 
	此文件專門用於暴露一個store對象，整個應用只有一個store對象
*/
import {createStore} from 'redux' //引入createStore，專門用於創建redux中最为核心的store對象
import countReducer from './count_reducer' //引入專為Count組件服務的reducer

//暴露store
export default createStore(countReducer)