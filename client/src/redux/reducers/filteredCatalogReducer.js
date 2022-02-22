import { filterCatalogTypes } from "../types/filterCatalogTypes";

export const filteredCatalogReducer = (data) => ({
  type: filterCatalogTypes.setFilteredCatalog,
  payload: data,
});
