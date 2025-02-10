import { Field, Form as RegistrationForm } from "formik";
import styled from "styled-components";

export const Form = styled(RegistrationForm)``;

export const FormField = styled(Field)`
  border: ${({ iserror }) =>
    iserror === "true"
      ? "1px solid rgb(255 42 42)"
      : "1px solid rgba(18, 20, 23, 0.1)"};
  /* border: 1px solid rgba(18, 20, 23, 0.1); */
  border-radius: 12px;
  padding: 16px 18px;
  width: 100%;
  height: 54px;
  /* margin-bottom: 18px; */
  margin-bottom: 25px;
`;

export const FormFieldError = styled.span`
  font-size: 12px;
  line-height: 1.37;
  color: rgb(255 42 42);
  position: absolute;
  top: 40px;
  left: 5px;
`;
export const FormFieldBox = styled.span`
  position: relative;
`;
