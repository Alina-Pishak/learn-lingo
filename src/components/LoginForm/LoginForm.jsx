import { useDispatch } from "react-redux";
import * as yup from "yup";

import { loginUserThunk } from "../../redux/auth/thunks";

import Modal from "../ui/Modal/Modal";
import Form from "../ui/Form/Form";

const validationSchemaLogin = yup.object({
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
const LoginForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const handleLoginUser = (values) => {
    dispatch(loginUserThunk(values)).then((data) => {
      if (data.payload) {
        onClose();
      }
    });
  };

  return (
    <Modal
      onClose={onClose}
      title={"Log In"}
      text={
        "Welcome back! Please enter your credentials to access your account and continue your search for an teacher."
      }
    >
      <Form
        handleSubmit={handleLoginUser}
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={validationSchemaLogin}
        variant="login"
        buttonText="Log In"
      />
    </Modal>
  );
};

export default LoginForm;
