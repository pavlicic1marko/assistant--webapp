import {createStore, combineReducers, applyMiddleware, compose, vrootReducer } from 'redux';
import {thunk} from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import { todoListReducer } from './reducers/todoReducers';
import {userLoginReducer, userRegisterReducer} from './reducers/userReducers'

const reducer = combineReducers({
    todoList: todoListReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer

})

const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null

const initialState = {
    userLogin: {userInfo: userInfoFromStorage}

}

const middleware = [thunk]

const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      name: 'MyApp', actionsBlacklist: ['REDUX_STORAGE_SAVE']
    }) : compose;
const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
  // other store enhancers if any
);

const store = createStore(reducer ,enhancer);

export default store