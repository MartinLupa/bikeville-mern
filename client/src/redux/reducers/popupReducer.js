import { popupTypes } from "../types/popupTypes";

const initialState = { trigger: true, message: "" };

export const popupReducer = (state = initialState, action) => {
  switch (action.type) {
    case popupTypes.show:
      return { trigger: true, message: action.payload };

    case popupTypes.hidden:
      return { trigger: false };

    default:
      return state;
  }
};
