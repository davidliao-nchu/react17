import {UPDATE_TAB} from '../constant'

// 創建「更新一個tabFlag」的action動作對象
export const createUpdateTabAction = flag => ({type: UPDATE_TAB, data: flag})