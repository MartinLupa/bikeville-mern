import { authTypes } from "../types/authTypes";
const initialState = {
  logged: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authTypes.login:
      return { userInfo: { ...action.payload }, logged: true };

    case authTypes.logout:
      return { logged: false };

    default:
      return state;
  }
};
