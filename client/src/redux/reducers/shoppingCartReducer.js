import { createSlice } from "@reduxjs/toolkit";
// import { shoppingCartTypes } from "../types/shoppingCartTypes";

// const initialState = {
//   products: [],
//   quantity: 0,
//   total: 0,
// };

// export const shoppingCartReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case shoppingCartTypes.addProduct:
//       return action.payload;

//     case shoppingCartTypes.removeProduct:
//       return action.payload;

//     case shoppingCartTypes.adjustQuantity:
//       return action.paylad;

//     default:
//       return state;
//   }
// };

const cartSlice = createSlice({
  name: "shoppingCart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.full_price;
    },
    removeProduct: (state, action) => {
      state.quantity -= 1;
      const remainingItems = state.products.filter(
        (prod) => prod.product_id !== action.payload.product_id
      );
      state.products = remainingItems;
      state.total -= action.payload.full_price;
    },
    addQuantity: (state, action) => {
      const itemToUpdate = state.products.filter(
        (prod) => prod.product_id === action.payload.product.product_id
      );
      if (itemToUpdate) {
        state.products = state.products.map((prod) =>
          prod.product_id === action.payload.product.product_id
            ? { ...prod, quantity: prod.quantity + action.payload.qtyCounter }
            : prod
        );
      }
      state.total += action.payload.product.full_price;
    },
    subtractQuantity: (state, action) => {
      const itemToUpdate = state.products.filter(
        (prod) => prod.product_id === action.payload.product.product_id
      );
      if (itemToUpdate) {
        state.products = state.products.map((prod) =>
          prod.product_id === action.payload.product.product_id
            ? { ...prod, quantity: prod.quantity - action.payload.qtyCounter }
            : prod
        );
      }
      state.total -= action.payload.product.full_price;
    },
  },
});

export const { addProduct, removeProduct, addQuantity, subtractQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
