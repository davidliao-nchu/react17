import React from 'react'
import store from '../../redux/store' //引入store，用於獲取redux中保存的狀態

export default class Count extends React.Component {

	state = {carName:'奔馳c63'}; //只是說明除了交給redux的狀態外，自己也可有不分享的其他狀態

	//檢測redux中狀態的變化，只要變化，就調用render
	/* componentDidMount() {
		store.subscribe(() => {
			this.setState({});
		})
	} */

	//加法
	increment = () => {
		const {value} = this.selectNumber;
		store.dispatch({type: 'increment', data: value*1});
	}
	//減法
	decrement = () => {
		const {value} = this.selectNumber;
		store.dispatch({type: 'decrement', data:value*1});
	}
	//若先前的和為奇數，才執行的加法
	incrementIfOdd = () => {
		const {value} = this.selectNumber;
		const count = store.getState(); //從store獲取狀態
		if(count % 2 !== 0) {
			store.dispatch({type: 'increment', data: value*1});
		}
	}
	//有時間延遲的非同步加法
	incrementAsync = () => {
		const {value} = this.selectNumber;
		setTimeout(() => {
			store.dispatch({type: 'increment', data: value*1});
		}, 500);
	}

	render() {
		return (
			<div>
				<h1>當前總和為：{store.getState()}</h1>
				<select ref={c => this.selectNumber = c}>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
				</select>&nbsp;
				<button onClick={this.increment}>+</button>&nbsp;
				<button onClick={this.decrement}>-</button>&nbsp;
				<button onClick={this.incrementIfOdd}>當前總和若為奇数時才加</button>&nbsp;
				<button onClick={this.incrementAsync}>非同步的延遲加</button>&nbsp;
			</div>
		)
	}
}
