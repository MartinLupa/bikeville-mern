import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { show } from "../redux/actions/popup";

export const PrivateRoute = ({ children }) => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth);

  const redirect = () => {
    dispatch(show("You need to be logged in."));
    return <Navigate to="/login" />;
  };

  return user.logged ? children : redirect();
};
