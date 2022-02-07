import { combineReducers } from "redux";
import ListReducer from "./listReducer";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";

//dev tools
const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const rootReducer = combineReducers({
  List: ListReducer,
});

//store and combinereducer
export const store = createStore(
   rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

