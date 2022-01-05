import { ErrorMessage, Field } from "formik";
import React from "react";
import "./FormField.css";

export const FormField = ({
  fieldName,
  labelName,
  name,
  placeholder,
  type,
  className,
}) => {
  return (
    <div className="form-col">
      <label htmlFor={{ fieldName }}>{labelName}</label>
      <Field
        className={className}
        id={fieldName}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete="on"
      />
      <ErrorMessage component="div" className="error" name={fieldName} />
    </div>
  );
};
