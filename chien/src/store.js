import {createStore, applyMiddleware , combineReducers} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {ChienReducer } from "./reducer/reduce";
import {userAuthReducer}  from "./reducer/auth"
import {UserRegisterReducer} from "./reducer/userReducer"
const Reducers = combineReducers({

    chienstore : ChienReducer,
  data : userAuthReducer,
    user:UserRegisterReducer
    
  });
  
  const store = createStore(Reducers,applyMiddleware(thunk));
  export default store


