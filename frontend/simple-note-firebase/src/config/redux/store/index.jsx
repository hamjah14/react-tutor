// library
import { createStore, applyMiddleware } from "redux";
import { thunk } from 'redux-thunk'

import rootReducer  from '../reducer'

// store
export const storeRedux = createStore(rootReducer, applyMiddleware(thunk)); 