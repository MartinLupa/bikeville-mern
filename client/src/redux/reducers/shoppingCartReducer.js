import { shoppingCartTypes } from "../types/shoppingCartTypes";

const initialState = {
  products: [],
  total: 0,
};

export const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case shoppingCartTypes.addProduct:
      return action.payload;

    case shoppingCartTypes.removeProduct:
      return action.payload;

    case shoppingCartTypes.adjustQuantity:
      return action.paylad;

    default:
      return state;
  }
};
