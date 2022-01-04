import { Form, Formik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import GeneralButton from "../GeneralButton/GeneralButton";
import { FormField } from "./FormField";
import "./RegisterForm.css";

const initialValues = {
  first_name: "",
  last_name: "",
  email: "",
  repeat_email: "",
  address: {
    street: "",
    street_number: "",
    postal_code: "",
    city: "",
    country: "",
  },
  password: "",
  repeat_password: "",
};

const onSubmit = (values) => {
  console.log(values);
};

const validationSchema = Yup.object({
  first_name: Yup.string().required("Required"),
  last_name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  street: Yup.string().required("Required"),
  street_number: Yup.number().required("Required"),
  postal_code: Yup.number().required("Required"),
  city: Yup.string().required("Required"),
  country: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
});

export default function RegisterForm() {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form className="register-form" action="" method="POST">
        <h4>Create account</h4>
        <div className="form-row">
          <FormField
            fieldName={"first_name"}
            labelName={"First name"}
            placeholder={"Enter first name"}
            type={"text"}
          />
          <FormField
            fieldName={"last_name"}
            labelName={"Last name"}
            placeholder={"Enter last name"}
            type={"text"}
          />
        </div>

        <div className="form-row">
          <FormField
            fieldName={"email"}
            labelName={"Email"}
            placeholder={"Enter your email"}
            type={"email"}
          />
          <FormField
            fieldName={"repeat_email"}
            labelName={"Repeat email"}
            placeholder={"Repeat your email"}
            type={"email"}
          />
        </div>
        <h4>Address</h4>
        <div className="form-row">
          <FormField
            fieldName={"street"}
            labelName={"Street name"}
            placeholder={"Street name"}
            type={"text"}
          />
          <FormField
            className="short"
            fieldName={"street_number"}
            labelName={"Number"}
            placeholder={"Number"}
            type={"number"}
          />
          <FormField
            className="short"
            fieldName={"postal_code"}
            labelName={"CP"}
            placeholder={"CP"}
            type={"number"}
          />
        </div>

        <div className="form-row">
          <FormField
            fieldName={"city"}
            labelName={"City"}
            placeholder={"City"}
            type={"text"}
          />
          <FormField
            fieldName={"country"}
            labelName={"Country"}
            placeholder={"Country"}
            type={"text"}
          />
        </div>

        <div className="form-row">
          <FormField
            fieldName={"password"}
            labelName={"Password"}
            placeholder={"Enter your password"}
            type={"password"}
          />
          <FormField
            fieldName={"repeat_password"}
            labelName={"Repeat Password"}
            placeholder={"Repeat your password"}
            type={"password"}
          />
        </div>
        <Link to="/login">Already have an account?</Link>
        <div className="form-btn">
          <GeneralButton type={"submit"} text={"REGISTER"} />
        </div>
      </Form>
    </Formik>
  );
}
