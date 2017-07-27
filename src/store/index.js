/**
 * Created by satuk on 20.07.17.
 */
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
// import apiMiddleware from "./apiMiddleware";

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  // applyMiddleware(thunk, apiMiddleware)
  applyMiddleware(thunk)
);

export default store;
