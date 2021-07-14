import React, { Component } from 'react'

// 引入需要的actions
import {
	createIncrementAction,
	createDecrementAction,
	// createIncrementAsyncAction
} from '../../redux/actions/count'

// 引入connect用於連接UI組件和redux，並創建容器組件!!!
import {connect} from 'react-redux'

// 定義UI組件，但不暴露!
// UI裡不包含任何redux的東西!!!
class Count extends Component {

	state = {carName:'奔馳c63'}

	// 加法
	increment = () => {
		const {value} = this.selectNumber
		this.props.jia(value*1)
	}
	// 減法
	decrement = ()=>{
		const {value} = this.selectNumber
		this.props.jian(value*1)
	}
	// 奇數再加
	incrementIfOdd = ()=>{
		const {value} = this.selectNumber
		if(this.props.count % 2 !== 0){
			this.props.jia(value*1)
		}
	}
	// 異步加
	incrementAsync = ()=>{
		const {value} = this.selectNumber
		// this.props.jiaAsync(value*1,500)
		setTimeout(()=>{
			this.props.jia(value*1)
		}, 500)
	}

	render() {
		// console.log('UI組件接收到的props是', this.props);
		return (
			<div>
				<h2>我是Count組件，下方組件總人數為: {this.props.renshu}</h2>
				<h4>當前求和為：{this.props.count}</h4>
				<select ref={c => this.selectNumber = c}>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
				</select>&nbsp;
				<button type="button" className="btn btn-primary" onClick={this.increment}>+</button>&nbsp;
				<button type="button" className="btn btn-primary" onClick={this.decrement}>-</button>&nbsp;
				<button type="button" className="btn btn-warning" onClick={this.incrementIfOdd}>當前求和為奇數再加</button>&nbsp;
				<button type="button" className="btn btn-danger" onClick={this.incrementAsync}>異步加</button>&nbsp;
			</div>
		)
	}
}

// 使用connect()()創建並暴露一個Count的容器組件
export default connect(
	// mapStateToProps()
	state => ({
		count: state.he,
		renshu: state.rens.length
	}),
	// 下面mapDispatchToProps()是經由API層級與其他理由的優化結果：
	// 因為第二個function可寫成object的形式，
	// 並且實際上參數有傳入，(因為createIncrementAction是一個函數，且第19行UI有傳入參數)
	// 再加上我們只需給定action，react-redux會自動幫我們dispatch的特性(API層級優化)，
	// 所優化而成!!!
	{
		jia: createIncrementAction,
		jian: createDecrementAction,
		// jiaAsync:createIncrementAsyncAction,
	}
)(Count)

