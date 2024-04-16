import { Field, Form as RegistrationForm } from "formik";
import styled from "styled-components";

export const RegistrationBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(46, 47, 66, 0.4);
  transition: opacity var(--transition-dur-and-func),
    visiblity var(--transition-dur-and-func);
  overflow: hidden;
`;

export const RegistrationModal = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  top: 20%;
  left: 20%;
  position: absolute;
  width: 566px;
  height: 600px;
  padding: 64px;
  border-radius: 30px;
  background-color: #fff;
`;

export const CloseRegistrationModal = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
`;

export const RegistrationTitle = styled.h2`
  font-weight: 500;
  font-size: 40px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: #121417;
  margin-bottom: 20px;
`;

export const RegistrationText = styled.p`
  font-size: 16px;
  line-height: 1.37;
  color: rgba(18, 20, 23, 0.8);
  margin-bottom: 40px;
`;

export const Form = styled(RegistrationForm)``;

export const RegistrationField = styled(Field)`
  border: 1px solid rgba(18, 20, 23, 0.1);
  border-radius: 12px;
  padding: 16px 18px;
  width: 438px;
  height: 54px;
  margin-bottom: 18px;
`;

export const RegistrationBtn = styled.button`
  border-radius: 12px;
  width: 438px;
  height: 60px;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.56;
  color: #121417;
  background: #f4c550;
  margin-top: 22px;
`;
