import { popupTypes } from "../types/popupTypes";

export const show = () => ({
  type: popupTypes.show,
});

export const hidden = () => ({
  type: popupTypes.hidden,
});
