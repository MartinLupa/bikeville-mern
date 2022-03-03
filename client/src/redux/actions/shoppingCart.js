import { shoppingCartTypes } from "../types/shoppingCartTypes";

export const addProduct = (productID) => {
  return {
    type: shoppingCartTypes.addProduct,
    payload: { id: productID },
  };
};

export const removeProduct = (productID) => {
  return {
    type: shoppingCartTypes.removeProduct,
    payload: { id: productID },
  };
};

export const adjustQuantity = (productID, qtyCounter) => {
  return {
    type: shoppingCartTypes.adjustQuantity,
    payload: { id: productID, qty: qtyCounter },
  };
};

export const loadCurrentItem = (product) => {
  return {
    type: shoppingCartTypes.loadCurrentProduct,
    payload: product,
  };
};
