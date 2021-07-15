import React, { Component } from 'react'
import {createUpdateTabAction} from '../../redux/actions/list'
import {createUpdateDisplayAction, createDelFinishedAction} from '../../redux/actions/todo'
import {connect} from 'react-redux'
import Header from '../Header'
import Todo from '../Todo'
import './index.css'

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

  clickClearHandler = (e) => {
    if (e.altKey) {
      e.preventDefault()
      if (window.confirm('確定要清除 所有資料 與 LocalStorage 嗎?')) {
        this.props.delFinished([])
        localStorage.clear('todos')
      }
    } else {
    const newTodos = this.props.yiduitodo.filter(todo => (!todo.finished))
    this.props.delFinished(newTodos)
    }
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
        <div class="cnotes my-4 mx-auto">
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                  FAQ #1：使用方法
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  您可以用此程式來管理您的待辦事項，在第一次使用時會有一些範例事項展示。<strong>本程式不會回傳任何資料到任何電腦或伺服器</strong>，預設使用您瀏覽器的 LocalStorage 空間進行待辦資料的存取。
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  FAQ #2：如何完整移除所有待辦事項
                </button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  您可以經由「已完成」標籤中的【清除已完成項目】按鈕來清除您已完成的項目，而若您同時按住鍵盤上的 Alt 鍵並點選此按鈕時，可以<strong>完整清除您所有的待辦事項以及本程式儲存在 LocalStorage 的所有內容</strong>，之後您直接關閉視窗即可。
                </div>
              </div>
            </div>
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
