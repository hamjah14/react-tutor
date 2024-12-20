import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';

import reducer from './reducer'

const StoreReducer = createStore(reducer, applyMiddleware(thunk))

export default StoreReducer;