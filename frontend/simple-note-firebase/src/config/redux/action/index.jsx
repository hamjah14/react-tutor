import ActionType from './globalActionType'

// config 
import firebaseApp, { database } from  '../../../config/firebase'; 
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { ref, set, push } from "firebase/database";

export const actionRegisterAPI = (data) => (dispatch) => {  
    return new Promise ((resolve, reject) => { 
        dispatch({type: ActionType.CHANGE_LOADING, value: true })
        const auth = getAuth(firebaseApp);
 
        return (
            createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => { 
                const user = userCredential.user; 

                dispatch({type: ActionType.CHANGE_LOADING, value: false })
                resolve(true);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                dispatch({type: ActionType.CHANGE_LOADING, value: false })
                console.log('erro ', errorMessage);
                reject(false)
            })
        )
    })
}
 
export const actionLoginAPI = (data) => (dispatch) => {
    return new Promise ((resolve, reject) => { 
        dispatch({type: ActionType.CHANGE_LOADING, value: true })
        const auth = getAuth(firebaseApp); 
 
        signInWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => { 
            const user = userCredential.user;
            const userData = {
                email : user.email,
                uid : user.uid,
                emailVerified: user.emailVerified,
                refreshToken: user.refreshToken,
                expirationTime: user.expirationTime,
            }

            dispatch({type: ActionType.CHANGE_LOADING, value: false })
            dispatch({type: ActionType.CHANGE_ISLOGIN, value: true })
            dispatch({type: ActionType.CHANGE_USER, value: userData }) 

            resolve(true); 
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            dispatch({type: ActionType.CHANGE_LOADING, value: false })
            dispatch({type: ActionType.CHANGE_ISLOGIN, value: false })
            
            reject(false);
        }) 
    }) 
}

export const actionAddDataToAPI = (data) => (dispatch) => {
    // return new Promise ((resolve, reject) => { 
        // const db = getDatabase();
        push(ref(database, 'note/' + data.userId), {
            title: data.title,
            content: data.content,
            date : data.date
        });
    // }) 
}