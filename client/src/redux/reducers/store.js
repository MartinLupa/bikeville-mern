import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./authReducer";
import { catalogReducer } from "./catalogReducer";
import { popupReducer } from "./popupReducer";

const reducers = combineReducers({
  // cart: cartReducer,
  auth: authReducer,
  popup: popupReducer,
  catalog: catalogReducer,
});

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
