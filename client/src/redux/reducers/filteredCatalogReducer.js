import { filterCatalogTypes } from "../types/filterCatalogTypes";

const initialState = [];

export const filteredCatalogReducer = (state = initialState, action) => {
  switch (action.type) {
    case filterCatalogTypes.setFilteredCatalog:
      return action.payload;

    default:
      return state;
  }
};
