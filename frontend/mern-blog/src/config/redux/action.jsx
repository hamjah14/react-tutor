import ActionType from './actionType';
import { Create, Get, Update, Delete } from '../service/crud'


export const actionSetPage = (data) => {
    return {type: ActionType.CHANGE_PAGE, payload: data}
}

export const actionSetPost = (paging) => (dispatch) => { 
    const data = Get(`v1/blog/post${paging}`)
    dispatch({type: ActionType.SET_POST, payload: data})
    // dispatch({type: ActionType.CHANGE_PAGE, payload: 4}) 
}