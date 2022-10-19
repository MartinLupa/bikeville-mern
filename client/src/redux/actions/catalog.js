import { catalogTypes } from "../types/catalogTypes";

export const setCatalog = (data) => ({
  type: catalogTypes.setCatalog,
  payload: data,
});
