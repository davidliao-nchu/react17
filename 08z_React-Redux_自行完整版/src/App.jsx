/*
	本文件是應用的外殼組件，它的工作有：
	1. 引入react(但不用引入ReactDOM)以建立App類型組件並暴露它
	2. 引入所有的子組件並return(回傳)它們 如第15~19行所為
	Note: 不須包含任何react-redux的元素
*/

import React, { Component } from 'react'
import Count from './containers/Count'
import Person from './containers/Person'

export default class App extends Component {
	render() {
		return (
			<div>
				<Count/>
				<hr/>
				<Person/>
			</div>
		)
	}
}
