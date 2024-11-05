import ActionType from './globalActionType'

// config 
import firebaseApp, { database } from '../../../config/firebase';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { ref, set, push, onValue, remove } from "firebase/database";

export const actionRegisterAPI = (data) => (dispatch) => {
    return new Promise((resolve, reject) => {
        dispatch({ type: ActionType.CHANGE_LOADING, value: true })
        const auth = getAuth(firebaseApp);

        return (
            createUserWithEmailAndPassword(auth, data.email, data.password)
                .then((userCredential) => {
                    const user = userCredential.user;

                    dispatch({ type: ActionType.CHANGE_LOADING, value: false })
                    resolve(true);
                })
                .catch((error) => {
                    // const errorCode = error.code;
                    const errorMessage = error.message;
                    // ..
                    dispatch({ type: ActionType.CHANGE_LOADING, value: false })
                    console.log('erro ', errorMessage);
                    reject(false)
                })
        )
    })
}

export const actionLoginAPI = (data) => (dispatch) => {
    return new Promise((resolve, reject) => {
        dispatch({ type: ActionType.CHANGE_LOADING, value: true })
        const auth = getAuth(firebaseApp);

        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;
                const userData = {
                    email: user.email,
                    uid: user.uid,
                    emailVerified: user.emailVerified,
                    refreshToken: user.refreshToken,
                    expirationTime: user.expirationTime,
                }

                dispatch({ type: ActionType.CHANGE_LOADING, value: false })
                dispatch({ type: ActionType.CHANGE_ISLOGIN, value: true })
                dispatch({ type: ActionType.UPDATE_USER, value: userData })

                resolve(userData);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                dispatch({ type: ActionType.CHANGE_LOADING, value: false })
                dispatch({ type: ActionType.CHANGE_ISLOGIN, value: false })

                reject(false);
            })
    })
}

export const actionAddDataToAPI = (data) => (dispatch) => {
    return new Promise((resolve, reject) => {
        push(ref(database, 'note/' + data.userId), {
            title: data.title,
            content: data.content,
            date: data.date
        }).then((res) => {
            resolve(res)
        })
            .catch((error) => {
                reject(error)
            });
    })
}

export const actionUpdateDataToAPI = (data) => (dispatch) => {
    return new Promise((resolve, reject) => {
        set(ref(database, 'note/' + data.userId + '/' + data.id), {
            title: data.title,
            content: data.content,
            date: data.date
        })
            .then((res) => {
                resolve(res)
            })
            .catch((error) => {
                reject(error)
            });
    })
}

export const actionGetDataFromAPI = (userId) => (dispatch) => {
    const starCountRef = ref(database, 'note/' + userId);

    return new Promise((resolve) => {
        onValue(starCountRef, (snapshot) => {
            const data = []

            Object.keys(snapshot.val()).map(key => {
                data.push({
                    id: key,
                    data: snapshot.val()[key]
                })
            });

            dispatch({ type: ActionType.SET_NOTES, value: data })
            resolve(data)
        });
    })
}

export const actionDeleteDataToAPI = (data) => (dispatch) => {
    return new Promise((resolve, reject) => {
        // const url = ref(database, 'note/' + data.userId + '/' + data.id); 

        // return new Promise ((resolve) => {  
        //     url.remove()
        // }) 


        remove(ref(database, 'note/' + data.userId + '/' + data.id))
            .then((res) => {
                resolve(res)
            })
            .catch((error) => {
                reject(error)
            });
    })
}