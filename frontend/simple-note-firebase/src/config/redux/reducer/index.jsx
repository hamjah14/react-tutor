import ActionType from "../action/globalActionType"

const initialState = {
    popup : false,
    isLogin: false, 
    isLoading: false,
    user: {},
    note: [],
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
        case ActionType.CHANGE_LOADING:
            return {
                ...state, 
                isLoading: action.value
            }
        case ActionType.UPDATE_USER:
            return {
                ...state, 
                user: action.value
            }
        case ActionType.SET_NOTES:
            return {
                ...state, 
                note: action.value
            }
            
        default:
            return state;
    }
}

export default rootReducer;