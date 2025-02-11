/* eslint-disable react/prop-types */
import { Formik, Form as FormFormik } from "formik";

import { FormField, FormFieldBox, FormFieldError } from "./Form.styled";
import Button from "../Button/Button";

const Form = ({
  initialValues,
  validationSchema,
  handleSubmit,
  buttonText,
  specificTypeFields,
  fields,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <FormFormik>
          {specificTypeFields && specificTypeFields}
          {fields.map((field, index) => (
            <FormFieldBox key={index}>
              <FormField
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                iserror={`${errors.name && touched.name}`}
              />
              {errors[field.name] && touched[field.name] ? (
                <FormFieldError>{errors[field.name]}</FormFieldError>
              ) : null}
            </FormFieldBox>
          ))}

          <Button type="submit">{buttonText}</Button>
        </FormFormik>
      )}
    </Formik>
  );
};

export default Form;
