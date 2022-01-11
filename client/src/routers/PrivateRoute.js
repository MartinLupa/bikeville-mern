import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { GlobalContext } from "../App";

export const PrivateRoute = ({ children }) => {
  const { user } = useContext(GlobalContext);

  return user.logged ? children : <Navigate to="/login" />;
};
