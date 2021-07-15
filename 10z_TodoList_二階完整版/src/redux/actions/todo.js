import {DEL_TODO, UPDATE_TODO, UPDATE_DISPLAY, CLEAR_FINISHED} from '../constant'

// 創建「刪除一個todo」的action動作對象
export const createDelTodoAction = id => ({type: DEL_TODO, data: id})
// 創建「更新一個todo/todoList」的action動作對象
export const createUpdateTodoAction = id => ({type: UPDATE_TODO, data: id})
// 創建「更新一個display」的action動作對象
export const createUpdateDisplayAction = todos => ({type: UPDATE_DISPLAY, data: todos})
// 創建「刪除所有finished todos」的action動作對象
export const createDelFinishedAction = todos => ({type: CLEAR_FINISHED, data: todos})