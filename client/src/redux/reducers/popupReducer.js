import { createSlice } from "@reduxjs/toolkit";

const popupSlice = createSlice({
  name: "popup",
  initialState: { trigger: false },
  reducers: {
    changeTrigger: (state, action) => {
      state.trigger = !action.payload;
    },
  },
});

export const { changeTrigger } = popupSlice.actions;
export default popupSlice.reducer;
