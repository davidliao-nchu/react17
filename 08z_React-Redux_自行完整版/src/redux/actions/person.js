import {ADD_PERSON} from '../constant'

// 創建「增加一個人」的action動作對象
export const createAddPersonAction = personObj => ({type: ADD_PERSON, data: personObj})