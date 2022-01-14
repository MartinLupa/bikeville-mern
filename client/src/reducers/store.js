import { createStore } from "redux";
import { authReducer } from "./authReducer";

// const reducers = combineReducers({
//   // cart: cartReducer,
//   auth: authReducer,
// });

export const store = createStore({
  authReducer,
});
