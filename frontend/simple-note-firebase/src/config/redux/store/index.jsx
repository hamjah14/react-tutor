import { createStore } from "redux";
import rootReducer  from '../reducer'

// store
export const storeRedux = createStore(rootReducer); 