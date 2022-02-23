import { qtyCounterTypes } from "../types/qtyCounterTypes";
const initialState = 1;

export const qtyCounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case qtyCounterTypes.setQtyCounter:
      return action.payload;

    default:
      return state;
  }
};
