import ActionType from "./globalActionType"

const initialState = {
    totalOrder: 0
}

// reducer
const rootReducer = (state = initialState, action) => {
    let total = 0

    switch (action.type) {
        case ActionType.PLUS_ORDER:
            return {
                ...state,
                totalOrder: state.totalOrder + 1
            }
        case ActionType.MINUS_ORDER:
            if (state.totalOrder > 0) {
                total = state.totalOrder - 1
            }

            return {
                ...state,
                totalOrder: total
            }
        default:
            return state;
    }
}

export default rootReducer;