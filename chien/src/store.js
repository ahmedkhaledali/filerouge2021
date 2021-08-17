import {createStore, applyMiddleware , combineReducers} from "redux";
import thunk from "redux-thunk";
import {ChienReducer } from "./reducer/reduce";

const Reducers = combineReducers({

    chienstore : ChienReducer 
  });
  
  const store = createStore(Reducers,applyMiddleware(thunk));
  export default store


