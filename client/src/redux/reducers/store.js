import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
// import { shoppingCartReducer } from "./shoppingCartReducer";
import shoppingCartReducer from "../reducers/shoppingCartReducer";
import { authReducer } from "./authReducer";
import { catalogReducer } from "./catalogReducer";
import { filteredCatalogReducer } from "./filteredCatalogReducer";
import orderSummaryReducer from "./orderSummaryReducer";
import { popupReducer } from "./popupReducer";
import { productIDReducer } from "./productIDReducer";
import { qtyCounterReducer } from "./qtyCounterReducer";

const reducers = combineReducers({
  shoppingCart: shoppingCartReducer,
  orderSummary: orderSummaryReducer,
  auth: authReducer,
  popup: popupReducer,
  catalog: catalogReducer,
  productID: productIDReducer,
  filteredCatalog: filteredCatalogReducer,
  qtyCounter: qtyCounterReducer,
});

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
