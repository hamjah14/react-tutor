import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// import App from './App';
// import StateLessComponent from './component/StateLessComponent';
// import StateFullComponent from './container/StateFullComponent';
// import YouTubeComp from './component/YouTubeComp/YouTubeComp';
import Home from './container/Home/Home';
  
const initialState = {
  totalOrder : 0
}

// reducer
const rootReducer = (state = initialState, action) => {
  switch(action.type){
    case 'PLUS_ORDER':
        return {
            ...state, 
            totalOrder: state.totalOrder + 1 
        }
    case 'MINUS_ORDER':
        let totalOrder = 0
 
        if(state.totalOrder > 0 ){
          totalOrder = state.totalOrder - 1
        }

        return {
            ...state, 
            totalOrder: totalOrder
        } 
    default:
    return state;
  }
}

// store
const storeRedux = createStore(rootReducer);
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={storeRedux}>
      <Home />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
