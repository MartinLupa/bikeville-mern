import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { FormField } from "../../FormField/FormField";
import { GeneralButton } from "../../GeneralButton/GeneralButton";
import "./AddProductsForm.css";

const initialValues = {
  product_id: "",
};

const validationSchema = Yup.object({
  product_id: Yup.string().required("Required"),
});

const onSubmit = (values, { resetForm }) => {
  console.log(values);
  const headers = new Headers();
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZDgyNzk2YTNlNzY5NzcwOTE0ZjVhOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MTU1NjM5NiwiZXhwIjoxNzI3ODY5OTk2fQ.2It5EWX_Pvxh2Di3z5zJ9kbIoDcM7ejW96KX534wllg";
  headers.append("Content-Type", "application/json");
  headers.append("authorization", "Bearer" + token);
  fetch("http://localhost:5000/api/find/:id", {
    method: "GET",
  }).then((req) => {
    req.json().then((data) => {
      console.log(data);
    });
  });
  // resetForm();
};

export const AddProductsForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form className="products-form" method="POST">
        <h1>ADD PRODUCT</h1>
        <div className="form-row">
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
        </div>
        <div className="form-row">
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
        </div>
        <div className="form-row">
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
        </div>
        <div className="form-row">
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
        </div>
        <div className="form-row">
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
        </div>

        <div className="form-row">
          <FormField
            className={"short"}
            fieldName={"net_price"}
            labelName={"Net price"}
            name={"net_price"}
            placeholder={"Enter net price"}
            type={"number"}
          />
          <FormField
            className={"short"}
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
