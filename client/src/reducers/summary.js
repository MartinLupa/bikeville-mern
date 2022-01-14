// -------------------------------------------------------
// CREATE STORE
const reducers = combineReducers({
  cart: cartReducer,
  auth: authReducer,
});

export const store = createStore({
  reducers,
});

// -------------------------------------------------------
// IN APP, DEFINE PROVIDER
<Provider store={store}>
  <App />,
</Provider>;

// -------------------------------------------------------
//CREATE REDUCERS
export const authReducer = (authState = {}, action) => {
  switch (action.type) {
    case authTypes.login:
      return { userInfo: { ...action.payload }, logged: true };

    case authTypes.logout:
      return { logged: false };

    default:
      return authState;
  }
};

export const cartReducer = (cartState = {}, action) => {
switch (action.type) {
  case cartTypes.add:
    return {
      cartState.products.push(action.payload.product);
      state.total += action.payload.price;
    };

    case cartTypes.remove:
      return {
        cartState.products.filter(
          (product) => product.product_id !== action.payload.product.product_id
        )
        cartState.total -= action.payload.price
      }

  default:
    return cartState;
}
};



// {
//   name: "cart",
//   initialState: {
//     products: [],
//     total: 0,
//   }