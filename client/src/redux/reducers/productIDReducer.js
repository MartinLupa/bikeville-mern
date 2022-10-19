import { productIDTypes } from "../types/productIDTypes";
const initialState = null;

export const productIDReducer = (state = initialState, action) => {
  switch (action.type) {
    case productIDTypes.setProductID:
      return action.payload;

    default:
      return state;
  }
};
