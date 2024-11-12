import { combineReducers } from "redux";
import ActionType from "./actionType";

const initialState = {
    postId: '-',
    postData: {},
    date: '',
}

const initialStateHome = {
    totalData: 0, 
    page: 1,
    limit: 4, 
}
 
const rootReducer = (state = initialState, action) => {
    switch (action.type) {  
        case ActionType.CHANGE_POSTID:
            return {
                ...state,
                postId: action.payload
            }  

        case ActionType.CHANGE_DATE:
            return {
                ...state,
                date: action.payload
            }  

        case ActionType.SET_POST_DATA:
            return {
                ...state,
                postData: action.payload
            }  

        default:
            return state;
    }
}

const homeReducer = (state = initialStateHome, action) => {  
    switch (action.type) {

        case ActionType.CHANGE_PAGE:
            return {
                ...state,
                page: action.payload
            } 

        default:
            return state;
    }
}

const Reducer = combineReducers({ rootReducer, homeReducer })
export default Reducer;