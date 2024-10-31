import ActionType from './globalActionType'

// config 
import firebaseApp from  '../../../config/firebase'; 
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const actionChangeUser = () => (dispatch) => {
    setTimeout(() => {
        return dispatch({type: ActionType.CHANGE_USER, value: 'Hasan Cantik'})
    }, 3000)
}

export const actionRegisterAPI = (data) => (dispatch) => {
    const auth = getAuth(firebaseApp);

    if(data.email !== '' && data.password !== '' && data.email !== undefined && data.password !== undefined){
        dispatch({type: ActionType.CHANGE_LOADING, value: true })

        return (
            createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                // ...

                dispatch({type: ActionType.CHANGE_LOADING, value: false })
                console.log('ok ', user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                dispatch({type: ActionType.CHANGE_LOADING, value: false })
                console.log('erro ', errorMessage);
            })
        )
    } else {
        console.log(' ga bisa ', data.email, ' ss ',  data.password)
    }
}