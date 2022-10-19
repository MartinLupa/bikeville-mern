import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "orderSummary",
  initialState: {
    products: [],
    courier_company: {},
    total: 0,
  },
  reducers: {
    setOrder: (state, action) => {
      state.products = action.payload.products;
      state.courier_company = action.payload.courier_company;
      state.total += action.payload.total;
      console.log(state);
    },
  },
});

export const { setOrder } = orderSlice.actions;
export default orderSlice.reducer;
