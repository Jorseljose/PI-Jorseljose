import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import reducer from "./Reducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(thunkMiddleware))
);

// const store = createStore(
//   reducer,
//   composeEnhancer(applyMiddleware(thunkMiddleware))
// );

// export default store;
