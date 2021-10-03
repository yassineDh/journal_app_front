import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import cartReducer from "./ReducerGlob";

const initialstate = {};

const middleware = [thunk];

const store = createStore(
  cartReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
