import { catalogTypes } from "../types/catalogTypes";
const initialState = [];

export const catalogReducer = (state = initialState, action) => {
  switch (action.type) {
    case catalogTypes.setCatalog:
      return action.payload;

    default:
      return state;
  }
};
