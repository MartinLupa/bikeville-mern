import { loginStart, loginSuccess } from "./userRedux";

export const login = async (dispatch, userInfo) {
  dispatch(loginStart());
  try {
const res = await fetch("http://localhost:5000/api/auth/login", {method: "POST"})
.then(dispatch(loginSuccess(res.data)))
  } catch(err) {
dispatch(loginFailure())
  }
}