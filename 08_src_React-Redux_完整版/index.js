/*
	本文件為入口文件，主要用於
	1. 調用render方法，將<App/>放到root中並渲染至頁面
	2. 引入store與Provider，好讓react-redux自動提供store給所有需要的容器組件
*/
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
//為了把store帶給container，又須符合react-redux的要求(不能在container中自行引入store)
//不對，這裡不是App.jsx !!!!???? 
//原本是放在 App.jsx裡，但若有很多個組件，則App.jsx裡就要寫很多行的 store={store}，
//在引入react-redux之後，我們引入Provider，並把傳入store的工作，交到App.jax的上層，
//即index.js這個入口文件，所以要import下列二行
import store from './redux/store'
//跟render有關?????錯，是跟store有關
//我們只需把store給Provider即可(如第15行)，它會傳給所有需要的容器組件
import {Provider} from 'react-redux'

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('root')
)

//在使用react-redux後，因為connect的關係
//react-redux自己會監測並調用render了!!!
//
// store.subscribe(()=>{
// 	ReactDOM.render(<App/>,document.getElementById('root'))
// })