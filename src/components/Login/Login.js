import GeneralButton from "../GeneralButton/GeneralButton";
import "./Login.css";

export default function Login() {
  return (
    <form className="login-form">
      <div className="form-col">
        <label htmlFor="">Email</label>
        <input type="text" placeholder="Enter your email" />
        <label htmlFor="">Password</label>
        <input type="password" placeholder="Enter your password" />
      </div>
      <div className="form-btn">
        <GeneralButton text={"LOGIN"} />
      </div>
    </form>
  );
}
