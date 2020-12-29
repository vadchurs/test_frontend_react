import {applyMiddleware, combineReducers, createStore} from "redux";
import usersReducer from "./userReducer";
import thunkMiddleware from 'redux-thunk';


let reducers = combineReducers({
    usersPage: usersReducer,
})

let store = createStore(reducers,applyMiddleware(thunkMiddleware));

export default store;