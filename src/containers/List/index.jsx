import React, { Component } from 'react'
import {createUpdateTabAction} from '../../redux/actions/list'
import {createUpdateDisplayAction, createDelFinishedAction} from '../../redux/actions/todo'
import {connect} from 'react-redux'
import Header from '../Header'
import Todo from '../Todo'

class List extends Component {

  clickTabHandler = (e) => {
    e.target.parentNode.childNodes.forEach(child => child.classList.remove('active'))
    e.target.classList.add('active')

    const newTab = e.target.dataset.tab
    let newTodos = this.props.yiduitodo
    newTodos.forEach(todo => {
      if (newTab === 'unfinished') 
        (todo.finished === true) ? todo.display = false : todo.display = true
      else if (newTab === 'finished')
        (todo.finished === true) ? todo.display = true : todo.display = false
      else todo.display = true
    })
    this.props.updateDisplay(newTodos)
    this.props.updateTab(newTab)

    // console.log(e.target.parentNode.parentNode.children[1].style.display);
    // e.target.parentNode.parentNode.children[1].style.setProperty('display', 'none')

    const items = e.target.parentNode.parentNode.children
    const footer = e.target.parentNode.parentNode.lastChild
    switch (newTab) {
      case 'unfinished':
        for (let i=1; i<items.length-1; i++) 
          (!items[i].classList.contains('word-through')) ? items[i].style.setProperty('display', 'block') : items[i].style.setProperty('display', 'none')
        footer.children[0].style.setProperty('display', 'block')
        footer.children[1].style.setProperty('display', 'none')
        break
      case 'finished':
        for (let i=1; i<items.length-1; i++)
          (items[i].classList.contains('word-through')) ? items[i].style.setProperty('display', 'block') : items[i].style.setProperty('display', 'none')
        footer.children[0].style.setProperty('display', 'none')
        footer.children[1].style.setProperty('display', 'block')
        break
      default:
        for (let i=1; i<items.length-1; i++) items[i].style.setProperty('display', 'block')
        footer.children[0].style.setProperty('display', 'block')
        footer.children[1].style.setProperty('display', 'none')
    }
  }

  count = () => {
    let i = 0
    const todos = this.props.yiduitodo
    const ans = todos.reduce((total, todo) => {
      (todo.finished) ? i = 0 : i = 1
      return total + i
    }, 0)
    return ans
  }

  clickClearHandler = () => {
    const newTodos = this.props.yiduitodo.filter(todo => (!todo.finished))
    this.props.delFinished(newTodos)
  }

	render() {
		return (
			<div className="container-fluid">
				<div className="my-4 d-flex justify-content-center"><span className="title">TODO LIST</span></div>
          <Header/>
        <div className="todos mx-auto d-flex flex-column align-items-center">
          <div className="todo-tabs row">
            <div className="todo-tab col-4 active" onClick={this.clickTabHandler} data-tab="all">全部</div>
            <div className="todo-tab col-4" onClick={this.clickTabHandler} data-tab="unfinished">待完成</div>
            <div className="todo-tab col-4" onClick={this.clickTabHandler} data-tab="finished">已完成</div>
          </div>
          {
            this.props.yiduitodo.map(todoObj => {
              return <Todo key={todoObj.id} {...todoObj}/>
            })
          }
          <div className="todo-footer d-flex align-items-center">
            <span className="count">{this.count()} 個待完成項目</span>
            <button type="button" className="btn btn-outline-secondary btn-clear-finished" onClick={this.clickClearHandler}>清除已完成項目</button>
          </div>
        </div>
			</div>
		)
	}
}

export default connect(
	state => ({yiduitodo: state.todos, tabState: state.tabFlag}), //映射狀態
	  {
      updateDisplay: createUpdateDisplayAction, 
      updateTab: createUpdateTabAction,
      delFinished: createDelFinishedAction,
    } //映射操作狀態的方法
)(List)
