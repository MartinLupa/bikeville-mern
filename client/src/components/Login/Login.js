import { Form, Formik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { FormField } from "../FormField/FormField";
import GeneralButton from "../GeneralButton/GeneralButton";
import "./Login.css";

const initialValues = {
  email: "",
  password: "",
};

const onSubmit = (values, { resetForm }) => {
  console.log(values);

  resetForm();
};

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Required"),
  password: Yup.string().required("Required"),
});

export default function Login() {
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
          <Link to="/password_recovery">Forgot your password?</Link>
        </div>
        <div className="form-btn">
          <GeneralButton type={"submit"} text={"LOGIN"} />
        </div>
      </Form>
    </Formik>
  );
}
