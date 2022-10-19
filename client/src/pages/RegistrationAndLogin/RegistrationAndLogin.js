import { useLocation } from "react-router-dom";
import { Login } from "../../components/Login/Login";
import { RegisterForm } from "../../components/RegisterForm/RegisterForm";
import useSEO from "../../hooks/useSEO";
import "./RegistrationAndLogin.css";

export const RegistrationAndLogin = () => {
  const location = useLocation();
  useSEO({ title: "Registration and Login" });

  return (
    <div className="registration-container">
      <div className="register-img"></div>
      {location.pathname === "/registration" ? <RegisterForm /> : null}
      {location.pathname === "/login" ? <Login /> : null}
    </div>
  );
};
