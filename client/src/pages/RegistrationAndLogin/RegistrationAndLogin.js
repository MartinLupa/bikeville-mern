import { useLocation } from "react-router-dom";
import Login from "../../components/Login/Login";
import OldRegisterForm from "../../components/RegisterForm/OldRegisterForm";
import "./RegistrationAndLogin.css";

export default function RegistrationAndLogin() {
  const location = useLocation();
  return (
    <div className="registration-container">
      <div className="register-img"></div>
      {location.pathname === "/registration" ? <OldRegisterForm /> : null}
      {location.pathname === "/login" ? <Login /> : null}
    </div>
  );
}
