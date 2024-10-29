import ActionType from './globalActionType'

export const actionChangeUser = () => (dispatch) =>{
    setTimeout(() => {
        return dispatch({type: ActionType.CHANGE_USER, value: 'Hasan Cantik'})
    }, 3000)
}