import { productIDTypes } from "../types/productIDTypes";

export const setProductID = (data) => ({
  type: productIDTypes.setProductID,
  payload: data,
});
