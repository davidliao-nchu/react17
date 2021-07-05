/*
	1.本文件是用于创建一个專为Person组件服务的reducer，reducer的本质就是一个函数
	2.reducer函数会接到两个参数，分别为：之前的状态(preState)，动作对象(action)
	*** reducer不要更改input的值 ***
*/
import {ADD_PERSON} from '../constant'

//初始化人的列表
const initState = [{id:'001',name:'tom',age:18}]

export default function personReducer(preState=initState, action){
	// console.log('personReducer@#@#@#');
	const {type,data} = action
	switch (type) {
		case ADD_PERSON: //若是添加一个人
			//preState.unshift(data) //此处不可以这样写，这样会导致preState被改写了，personReducer就不是纯函数了。
			//或簡單一點記：所有的reducer都不要去更動input的值，全都複製成另一個不同的東西…?!!!
			return [data,...preState]
		default:
			return preState
	}
}
