import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import cartReducer from "./reducer/cartReducer";

//dev tools
const composeEnhancers = (typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const rootReducer = combineReducers({
    cart: cartReducer,
});

//store and combinereducer
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
