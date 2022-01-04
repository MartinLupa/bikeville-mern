import { ErrorMessage, Field } from "formik";
import React from "react";

export const FormField = ({
  fieldName,
  labelName,
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
        name={fieldName}
        type={type}
        placeholder={placeholder}
        autoComplete="on"
      />
      <ErrorMessage name={fieldName} />
    </div>
  );
};
