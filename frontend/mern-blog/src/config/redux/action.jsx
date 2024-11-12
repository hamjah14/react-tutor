import { GetById } from '../service/crud';
import ActionType from './actionType';
    
export const actionSetPage = (data) => {
    return {type: ActionType.CHANGE_PAGE, payload: data}
} 
 
export const actionSetPostData = (id) => async ( dispatch ) => {   
    const response = await GetById('v1/blog/post', id); 
    const data = response.data;
 
    dispatch({type: ActionType.SET_POST_DATA, payload: data}) 
     
    if(data.createdAt !== undefined){ 
        let date = actionSetDate(data.createdAt.slice(0,10))
        dispatch(date) 
    }     
};

 
export const actionSetDate = (date) => {
    let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let arr = date.split('-')

    let tanggal = arr[2]
    let bulan = month[arr[1] - 1]
    let tahun = arr[0]
    let data = tanggal + '-' + bulan + '-' + tahun
  
    return {type: ActionType.CHANGE_DATE, payload: data}
}  

  