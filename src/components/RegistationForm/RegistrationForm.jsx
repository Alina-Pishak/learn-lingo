import * as yup from "yup";
import { useDispatch } from "react-redux";

import { createUserThunk } from "../../redux/auth/thunks";

import Modal from "../ui/Modal/Modal";
import Form from "../ui/Form/Form";

const validationSchemaRegister = yup.object({
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
    dispatch(createUserThunk(values)).then((data) => {
      if (data.payload) {
        onClose();
      }
    });
  };
  return (
    <Modal
      onClose={onClose}
      title={"Registration"}
      text={
        "Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information"
      }
    >
      <Form
        handleSubmit={handleRegisterUser}
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        validationSchema={validationSchemaRegister}
      />
    </Modal>
  );
};

export default RegistrationForm;
