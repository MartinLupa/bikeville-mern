import { useLocation } from "react-router-dom";
import Login from "../../components/Login/Login";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

export default function RegistrationAndLogin() {
  const location = useLocation();
  return (
    <div className="registration-container">
      {location.pathname === "/registration" ? <RegisterForm /> : null}
      {location.pathname === "/login" ? <Login /> : null}
    </div>
  );
}
