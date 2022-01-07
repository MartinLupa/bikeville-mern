import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { FormField } from "../../FormField/FormField";
import GeneralButton from "../../GeneralButton/GeneralButton";
import "./AddProductsForm.css";

const initialValues = {
  model: "",
  trail_type: "",
  product_id: "",
  image: "",
  short_description: "",
  description: "",
  type: "",
  brake_type: "",
  groupset: "",
  sizes: [],
  net_price: "",
  vat: "",
  full_price: "",
  inStock: true,
};

const validationSchema = Yup.object({
  model: Yup.string().required("Required"),
  trail_type: Yup.string().required("Required"),
  product_id: Yup.string().required("Required"),
  image: Yup.string().required("Required"),
  short_description: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
  type: Yup.string().required("Required"),
  brake_type: Yup.string().required("Required"),
  groupset: Yup.string().required("Required"),
  sizes: Yup.array().of(Yup.string()),
  net_price: Yup.number().required("Required"),
  vat: Yup.number().required("Required"),
  full_price: Yup.number().required("Required"),
  inStock: true,
});

const onSubmit = (values, { resetForm }) => {
  console.log(values);
  // fetch("http://localhost:5000/api/auth/registration", {
  //   method: "POST",
  //   body: JSON.stringify({
  //     first_name: values.first_name,
  //     last_name: values.last_name,
  //     email: values.email,
  //     address: {
  //       street: values.address.street,
  //       street_number: values.address.street_number,
  //       postal_code: values.address.postal_code,
  //       city: values.address.city,
  //       country: values.address.country,
  //     },
  //     password: values.password,
  //     repeat_password: values.repeat_password,
  //   }),
  //   headers: { "Content-type": "application/json" },
  // }).then((req) => {
  //   req.json().then((data) => {
  //     console.log(data);
  //   });
  // });
  // resetForm();
};

export const AddProductsForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form id={"form"} className="products-form" method="POST">
        <h4>Add product</h4>

        <FormField
          fieldName={"model"}
          labelName={"Model"}
          name={"model"}
          placeholder={"Enter model name"}
          type={"text"}
        />
        <FormField
          fieldName={"trail_type"}
          labelName={"Trail type"}
          name={"trail_type"}
          placeholder={"Enter trail type"}
          type={"text"}
        />
        <FormField
          fieldName={"product_id"}
          labelName={"Product ID"}
          name={"product_id"}
          placeholder={"Product ID"}
          type={"text"}
        />
        <FormField
          fieldName={"image"}
          labelName={"Image URL"}
          name={"image"}
          placeholder={"Enter image URL"}
          type={"text"}
        />
        <FormField
          fieldName={"short_description"}
          labelName={"Short description"}
          name={"short_description"}
          placeholder={"Short description"}
          type={"text"}
        />
        <FormField
          fieldName={"description"}
          labelName={"Description"}
          name={"description"}
          placeholder={"Description"}
          type={"text"}
        />
        <FormField
          fieldName={"type"}
          name={"type"}
          labelName={"Type"}
          placeholder={"Complete bike, frameset, etc."}
          type={"text"}
        />

        <FormField
          fieldName={"brake_type"}
          labelName={"Brake type"}
          name={"brake_type"}
          placeholder={"Brake type"}
          type={"text"}
        />
        <FormField
          fieldName={"groupset"}
          labelName={"Groupset"}
          name={"groupset"}
          placeholder={"Groupset"}
          type={"text"}
        />
        <FormField
          fieldName={"sizes"}
          labelName={"Sizes"}
          name={"sizes"}
          placeholder={"Enter coma sepparated values. Ex: 48, 51, 54.."}
          type={"text"}
        />
        <div className="form-row">
          <FormField
            fieldName={"net_price"}
            labelName={"Net price"}
            name={"net_price"}
            placeholder={"Enter net price"}
            type={"number"}
          />
          <FormField
            fieldName={"vat"}
            labelName={"VAT"}
            name={"vat"}
            placeholder={"Enter VAT"}
            type={"number"}
          />
          <FormField
            fieldName={"full_price"}
            labelName={"Full price"}
            name={"full_price"}
            placeholder={"Enter full price"}
            type={"number"}
          />
        </div>

        <div className="form-btn">
          <GeneralButton type={"submit"} text={"ADD PRODUCT"} />
        </div>
      </Form>
    </Formik>
  );
};
