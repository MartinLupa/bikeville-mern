import { Form, Formik } from "formik";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { GlobalContext } from "../../App";
import { FormField } from "../FormField/FormField";
import { GeneralButton } from "../GeneralButton/GeneralButton";
import "./Login.css";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Required"),
  password: Yup.string().required("Required"),
});

export const Login = () => {
  const { user, setUser } = useContext(GlobalContext);
  const navigate = useNavigate();

  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      body: JSON.stringify({
        email: values.email,
        password: values.password,
      }),
      headers: { "Content-type": "application/json" },
    }).then((req) => {
      req.json().then((data) => {
        if (data === "Wrong credentials.") {
          alert("Invalid password or user email.");
          return;
        } else {
          setUser(data);
          localStorage.setItem("loggedUser", JSON.stringify(user));
          resetForm();
          navigate(-1);
        }
      });
    });
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form className="login-form" action="" method="POST">
        <FormField
          fieldName={"email"}
          labelName={"Email"}
          name={"email"}
          placeholder={"Enter a registered email"}
          type={"email"}
        />
        <FormField
          fieldName={"password"}
          labelName={"Password"}
          name={"password"}
          placeholder={"Enter your password"}
          type={"password"}
        />

        <div className="login-links">
          <Link to="/registration">Create an account</Link>
          <Link to="/password_recovery">
            <p> Forgot your password?</p>
          </Link>
        </div>
        <div className="form-btn">
          <GeneralButton type={"submit"} text={"LOGIN"} />
        </div>
      </Form>
    </Formik>
  );
};
