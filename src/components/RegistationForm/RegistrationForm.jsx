import * as yup from "yup";
import { Formik } from "formik";
import { useDispatch } from "react-redux";

import { createUserThunk } from "../../redux/auth/thunks";

import {
  CloseRegistrationModal,
  Form,
  RegistrationBackdrop,
  RegistrationBtn,
  RegistrationField,
  RegistrationFieldBox,
  RegistrationFieldError,
  RegistrationModal,
  RegistrationText,
  RegistrationTitle,
} from "./RegistrationForm.styled";

const validationSchema = yup.object({
  name: yup
    .string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Name is required"),
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
  const dispatch = useDispatch();
  const handleRegisterUser = (values) => {
    console.log(values);
    dispatch(createUserThunk(values)).then((data) => {
      console.log(data);
      if (data.payload) {
        onClose();
      }
    });
  };
  return (
    <RegistrationBackdrop>
      <RegistrationModal>
        <CloseRegistrationModal type="button" onClick={onClose}>
          x
        </CloseRegistrationModal>
        <RegistrationTitle>Registration</RegistrationTitle>
        <RegistrationText>
          Thank you for your interest in our platform! In order to register, we
          need some information. Please provide us with the following
          information
        </RegistrationText>
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleRegisterUser}
        >
          {({ errors, touched }) => (
            <Form>
              <RegistrationFieldBox>
                <RegistrationField
                  name="name"
                  type="text"
                  placeholder="Name"
                  iserror={`${errors.name && touched.name}`}
                />
                {errors.name && touched.name ? (
                  <RegistrationFieldError>{errors.name}</RegistrationFieldError>
                ) : null}
              </RegistrationFieldBox>
              <RegistrationFieldBox>
                <RegistrationField
                  name="email"
                  type="email"
                  placeholder="Email"
                  iserror={`${errors.name && touched.name}`}
                />
                {errors.email && touched.email ? (
                  <RegistrationFieldError>
                    {errors.email}
                  </RegistrationFieldError>
                ) : null}
              </RegistrationFieldBox>
              <RegistrationFieldBox>
                <RegistrationField
                  name="password"
                  type="password"
                  placeholder="Password"
                  iserror={`${errors.name && touched.name}`}
                />
                {errors.password && touched.password ? (
                  <RegistrationFieldError>
                    {errors.password}
                  </RegistrationFieldError>
                ) : null}
              </RegistrationFieldBox>
              <RegistrationBtn type="submit">Sign Up</RegistrationBtn>
            </Form>
          )}
        </Formik>
      </RegistrationModal>
    </RegistrationBackdrop>
  );
};

export default RegistrationForm;
// const formik = useFormik({
//   initialValues: {
//     name: "",
//     email: "",
//     password: "",
//   },
//   onSubmit: (values) => {
//     alert(JSON.stringify(values, null, 2));
//   },
// });
// <form onSubmit={formik.handleSubmit}>
{
  /* <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          // onChange={formik.handleChange}
          // value={formik.values.email}
        />
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          // onChange={formik.handleChange}
          // value={formik.values.email}
        />
        <label htmlFor="password">Email Address</label>
        <input
          id="password"
          name="password"
          type="password"
          // onChange={formik.handleChange}
          // value={formik.values.email}
        />
      </form> */
}
