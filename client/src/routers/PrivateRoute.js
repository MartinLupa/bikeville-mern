import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const user = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   user.logged
  //     ? dispatch(
  //         show("You need to be logged in to enter the Shopping Cart area.")
  //       )
  //     : null;
  // }, [user]);
  return user.logged ? children : <Navigate to="/login" />;
};
