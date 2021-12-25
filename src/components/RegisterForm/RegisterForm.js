import "./RegisterForm.css";

export default function RegisterForm() {
  return (
    <div className="register-container">
      <div className="register-img"></div>
      <form className="register-form" action="">
        <h3>Create account</h3>

        <div className="form-row">
          <div className="form-col">
            <label htmlFor="">First name</label>
            <input type="text" placeholder="Enter first name" />
          </div>
          <div className="form-col">
            <label htmlFor="">Last name</label>
            <input type="text" placeholder="Enter first name" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-col">
            <label htmlFor="">Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="form-col">
            <label htmlFor=""></label>
            <input type="email" placeholder="Repeat your email" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-col">
            <label htmlFor="">Address</label>
            <input type="text" placeholder="Street name" />
          </div>
          <div className="form-row">
            <input className="short" type="number" placeholder="Number" />
            <input className="short" type="number" placeholder="Postal Code" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-col">
            <input type="text" placeholder="City" />
          </div>
          <div className="form-col">
            <input type="text" placeholder="Country" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-col">
            <label htmlFor="">Password</label>
            <input type="password" placeholder="Enter your password" />
          </div>
          <div className="form-col">
            <input type="password" placeholder="Repeat your password" />
          </div>
        </div>
        <button className="register-btn">Register</button>
      </form>
    </div>
  );
}
