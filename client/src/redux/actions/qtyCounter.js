import { qtyCounterTypes } from "../types/qtyCounterTypes";

export const setQtyCounter = (data) => ({
  type: qtyCounterTypes.setQtyCounter,
  payload: data,
});
