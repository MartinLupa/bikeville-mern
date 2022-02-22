import { filterCatalogTypes } from "../types/filterCatalogTypes";

export const setFilteredCatalog = (data) => ({
  type: filterCatalogTypes.setFilteredCatalog,
  payload: data,
});
