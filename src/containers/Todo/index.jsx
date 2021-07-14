import React, { Component } from 'react'
import {createDelTodoAction, createUpdateTodoAction} from '../../redux/actions/todo'
import {connect} from 'react-redux'

class Todo extends Component {

  delHandler = (e) => {
    e.preventDefault()
    if (window.confirm('確定要刪除此 TODO 項目嗎?')) {
      this.props.delTodo(this.props.id)
    }
  }

  checkHandler = (e) => {
    if (!e.target.matches('input')) return;
    this.props.updateTodo(this.props.id)
  }

	render() {
    if (this.props.finished === true) {
      return (
        <label className="todo word-through" onClick={this.checkHandler}>{this.props.content}
          <input type="checkbox" defaultChecked={this.props.finished}/>
          <span className="checkmark"></span>
          <img className="delmark" src="./img/cancel.jpg" alt="delmark" onClick={this.delHandler}/>
        </label>
    )} else {
      return (
        <label className="todo" onClick={this.checkHandler}>{this.props.content}
          <input type="checkbox" defaultChecked={this.props.finished}/>
          <span className="checkmark"></span>
          <img className="delmark" src="./img/cancel.jpg" alt="delmark" onClick={this.delHandler}/>
        </label>
    )}
	}
}

export default connect(
	state => ({yiduitodo: state.todos}), //映射狀態
	  {delTodo: createDelTodoAction, updateTodo: createUpdateTodoAction} //映射操作狀態的方法
)(Todo)
