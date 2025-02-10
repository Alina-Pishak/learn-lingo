/* eslint-disable react/prop-types */
import { Formik, Form as FormFormik } from "formik";

import { FormField, FormFieldBox, FormFieldError } from "./Form.styled";
import Button from "../Button/Button";

const Form = ({
  initialValues,
  validationSchema,
  handleSubmit,
  variant = "register",
  buttonText = "Sign Up",
}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <FormFormik>
          {variant === "register" && (
            <FormFieldBox>
              <FormField
                name="name"
                type="text"
                placeholder="Name"
                iserror={`${errors.name && touched.name}`}
              />
              {errors.name && touched.name ? (
                <FormFieldError>{errors.name}</FormFieldError>
              ) : null}
            </FormFieldBox>
          )}

          <FormFieldBox>
            <FormField
              name="email"
              type="email"
              placeholder="Email"
              iserror={`${errors.name && touched.name}`}
            />
            {errors.email && touched.email ? (
              <FormFieldError>{errors.email}</FormFieldError>
            ) : null}
          </FormFieldBox>
          <FormFieldBox>
            <FormField
              name="password"
              type="password"
              placeholder="Password"
              iserror={`${errors.name && touched.name}`}
            />
            {errors.password && touched.password ? (
              <FormFieldError>{errors.password}</FormFieldError>
            ) : null}
          </FormFieldBox>
          <Button type="submit">{buttonText}</Button>
        </FormFormik>
      )}
    </Formik>
  );
};

export default Form;
