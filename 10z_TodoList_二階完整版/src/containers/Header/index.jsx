import React, { Component } from 'react'
import {createAddTodoAction} from '../../redux/actions/header'
import {connect} from 'react-redux'
import {nanoid} from 'nanoid'
// import PropTypes from 'prop-types'
import './index.css'

class Header extends Component {

	// 對接收的props進行：類型、必要性的限制
	// static propTypes = {
		// addTodo:PropTypes.func.isRequired
	// }

	submitTodo = (e) => {
		e.preventDefault()
		// 添加的todo內容不能為空
		if (this.txtNode.value.trim() === '') {
			alert('請輸入正確內容')
			return
		}
		const todoObj = {id: nanoid(), content: this.txtNode.value, finished: false, display: this.setDisplay()}
		this.props.addTodo(todoObj)
		// 清空輸入框
		this.txtNode.value = ''
	}

	setDisplay = () => {
		if (this.props.tabState === 'finished') return false
		else return true
	}

	render() {
		return (
			<form className="add-todo mx-auto d-flex align-items-center">
				<input id="add-txt" ref={c => this.txtNode = c} type="text" name="item" placeholder="新增待辦事項"/>
				<input id="add-btn" type="submit" onClick={this.submitTodo} value="+"/>
			</form>
		)
	}
}

export default connect(
	state => ({tabState: state.tabFlag}), // 映射狀態
	  {addTodo: createAddTodoAction} // 映射操作狀態的方法
)(Header)
