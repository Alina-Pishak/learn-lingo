import { Formik } from "formik";
import * as yup from "yup";
import {
  CloseRegistrationModal,
  Form,
  RegistrationBackdrop,
  RegistrationBtn,
  RegistrationField,
  RegistrationModal,
  RegistrationText,
  RegistrationTitle,
} from "./RegistrationForm.styled";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

// eslint-disable-next-line react/prop-types
const RegistrationForm = ({ onClose }) => {
  const handleRegisterUser = (values) => {
    console.log(values);
  };
  return (
    <RegistrationBackdrop>
      <RegistrationModal>
        <CloseRegistrationModal type="button" onClick={() => onClose()}>
          x
        </CloseRegistrationModal>
        <RegistrationTitle>Log In</RegistrationTitle>
        <RegistrationText>
          Welcome back! Please enter your credentials to access your account and
          continue your search for an teacher.
        </RegistrationText>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleRegisterUser}
        >
          {({ errors, touched }) => (
            <Form>
              <RegistrationField
                name="email"
                type="email"
                placeholder="Email"
              />
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
              <RegistrationField
                name="password"
                type="password"
                placeholder="Password"
              />
              {errors.password && touched.password ? (
                <div>{errors.password}</div>
              ) : null}
              <RegistrationBtn type="submit">Log In</RegistrationBtn>
            </Form>
          )}
        </Formik>
      </RegistrationModal>
    </RegistrationBackdrop>
  );
};

export default RegistrationForm;
