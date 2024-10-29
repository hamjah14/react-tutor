import ActionType from "../action/globalActionType"

const initialState = {
    popup : false,
    isLogin: false, 
}
  
// reducer
const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case ActionType.CHANGE_POPUP:
            return {
                ...state, 
                popup: action.value
            }
        case ActionType.CHANGE_ISLOGIN:
            return {
                ...state, 
                isLogin: action.value
            }
        default:
            return state;
    }
}

export default rootReducer;