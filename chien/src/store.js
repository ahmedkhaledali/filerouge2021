import {createStore, applyMiddleware , combineReducers} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {ChienReducer } from "./reducer/reduce";
import {reducerClient}  from "./reducer/auth"
import {userAuthReducer}  from "./reducer/userlog"
import {UserRegisterReducer} from "./reducer/userReducer"
import {CoachReducer} from "./reducer/coachReducer"
import {ContactReducer} from "./reducer/contactReducer"

const Reducers = combineReducers({

    chienstore : ChienReducer,
  data : reducerClient,
  userlog :userAuthReducer,
    user:UserRegisterReducer,
    coach:CoachReducer,
    contact:ContactReducer
  });
  
  const store = createStore(Reducers,applyMiddleware(thunk));
  export default store


