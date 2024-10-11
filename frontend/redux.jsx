const { type } = require('@testing-library/user-event/dist/type');
const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    value: 0,
    age: 20
}

// Reducer
// Fungsi untuk update value pada store sehingga ketika kita memiliki reducer kita mudah track fungsi mana yang merubah value di store.
const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_AGE':
            return {
                ...state, 
                age: state.age + 1 
            }
        case 'CHANGE_VALUE':
            return {
                ...state, 
                value: state.value + action.newValue 
            }
        default:
        return state;
    }

    return state
}

// Store
const store = createStore(rootReducer);
console.log(store.getState());

// subscription 
// proses pemanggilan store yang kita perlukan
store.subscribe(() => {
    console.log('store change: ', store.getState())
})

// Dispatch
// Proses pemanggilan intruksi yang disediakan reducer
store.dispatch({type: 'ADD_AGE'})
store.dispatch({type: 'CHANGE_VALUE', newValue: 12})

console.log(store.getState())
