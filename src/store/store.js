import { cart_reducer } from "./cart_reducer";
import { login_reducer } from "./login_reducer";

import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

const sagaMiddleware = createSagaMiddleware();
const allreducers = combineReducers({
  cart_reducer,
  login_reducer
});

const store = createStore(
  allreducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
// console.log("check the store ", store.getState()); // 42
export default store;
