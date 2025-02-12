import { Field } from "formik";
import styled from "styled-components";

export const BookingFormTeacher = styled.div`
  display: flex;
  gap: 14px;
  margin-bottom: 40px;
`;
export const BookingFormTeacherImg = styled.img`
  width: 44;
  height: 44;
  border-radius: 50%;
`;
export const BookingFormTeacherText = styled.span`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.3;
  color: #8a8a89;
`;
export const BookingFormTeacherName = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.3;
  color: #121417;
  margin-top: 4px;
`;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  margin-bottom: 16px;
  font-size: 16px;
  line-height: 1.3;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const RadioGroupWrapper = styled.div`
  margin-bottom: 40px;
`;

export const RadioTitle = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 1.3;
  margin-bottom: 20px;
`;

export const HiddenRadio = styled(Field)`
  display: none;
`;

export const CustomRadio = styled.span`
  width: 20px;
  height: 20px;
  border: 2px solid #1214171a;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;

  ${HiddenRadio}:checked + & {
    border-color: #9fbaae; /* Змінює колір обводки */
  }

  &:after {
    content: "";
    width: 10px;
    height: 10px;
    background-color: #9fbaae;
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
  }

  ${HiddenRadio}:checked + &::after {
    opacity: 1;
  }
`;
