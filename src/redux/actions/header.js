import {ADD_TODO} from '../constant'

// 創建「新增一個todo」的action動作對象
export const createAddTodoAction = todoObj => ({type: ADD_TODO, data: todoObj})