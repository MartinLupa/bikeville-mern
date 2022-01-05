import { Form, Formik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { FormField } from "../FormField/FormField";
import GeneralButton from "../GeneralButton/GeneralButton";
import "./RegisterForm.css";

const initialValues = {
  first_name: "",
  last_name: "",
  email: "",
  repeat_email: "",
  address: {
    street: "",
    street_number: 0,
    postal_code: 0,
    city: "",
    country: "",
  },
  password: "",
  repeat_password: "",
};

// const onSubmit = (values, { resetForm }) => {
//   console.log(values);

//   resetForm();
// };

const handleSubmit = () => {
  window.document
    .querySelectorAll("#form input")
    .forEach((input) => console.log(input.value));
};

const validationSchema = Yup.object({
  first_name: Yup.string().required("Required"),
  last_name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  address: Yup.object({
    street: Yup.string().required("Required"),
    street_number: Yup.number().required("Required"),
    postal_code: Yup.number().required("Required"),
    city: Yup.string().required("Required"),
    country: Yup.string().required("Required"),
  }),
  password: Yup.string().required("Required"),
});

export default function RegisterForm() {
  return (
    <Formik
      initialValues={initialValues}
      // onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form
        id={"form"}
        className="register-form"
        // action="http://localhost:5000/registration"
        // method="POST"
      >
        <h4>Create account</h4>
        <div className="form-row">
          <FormField
            fieldName={"first_name"}
            labelName={"First name"}
            name={"first_name"}
            placeholder={"Enter first name"}
            type={"text"}
          />
          <FormField
            fieldName={"last_name"}
            labelName={"Last name"}
            name={"last_name"}
            placeholder={"Enter last name"}
            type={"text"}
          />
        </div>

        <div className="form-row">
          <FormField
            fieldName={"email"}
            labelName={"Email"}
            name={"email"}
            placeholder={"Enter your email"}
            type={"email"}
          />
          <FormField
            fieldName={"repeat_email"}
            labelName={"Repeat email"}
            name={"repeat_email"}
            placeholder={"Repeat your email"}
            type={"email"}
          />
        </div>
        <h4>Address</h4>
        <div className="form-row">
          <FormField
            fieldName={"street"}
            labelName={"Street name"}
            name={"address.street"}
            placeholder={"Street name"}
            type={"text"}
          />
          <FormField
            className="short"
            fieldName={"street_number"}
            labelName={"Number"}
            name={"address.street_number"}
            placeholder={"Number"}
            type={"number"}
          />
          <FormField
            className="short"
            fieldName={"postal_code"}
            name={"address.postal_code"}
            labelName={"CP"}
            placeholder={"CP"}
            type={"number"}
          />
        </div>

        <div className="form-row">
          <FormField
            fieldName={"city"}
            labelName={"City"}
            name={"address.city"}
            placeholder={"City"}
            type={"text"}
          />
          <FormField
            fieldName={"country"}
            labelName={"Country"}
            name={"address.country"}
            placeholder={"Country"}
            type={"text"}
          />
        </div>

        <div className="form-row">
          <FormField
            fieldName={"password"}
            labelName={"Password"}
            name={"password"}
            placeholder={"Enter your password"}
            type={"password"}
          />
          <FormField
            fieldName={"repeat_password"}
            labelName={"Repeat Password"}
            name={"password"}
            placeholder={"Repeat your password"}
            type={"password"}
          />
        </div>
        <Link to="/login">
          <p> Already have an account?</p>
        </Link>
        <div className="form-btn">
          <GeneralButton
            passedEvent={handleSubmit}
            type={"button"}
            text={"REGISTER"}
          />
        </div>
      </Form>
    </Formik>
  );
}
