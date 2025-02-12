/* eslint-disable react/prop-types */
import * as yup from "yup";

import Modal from "../ui/Modal/Modal";
import Form from "../ui/Form/Form";

import {
  BookingFormTeacher,
  BookingFormTeacherImg,
  BookingFormTeacherName,
  BookingFormTeacherText,
  CustomRadio,
  HiddenRadio,
  RadioGroupWrapper,
  RadioLabel,
  RadioTitle,
} from "./BookingForm.styled";

const validationSchemaBooking = yup.object({
  name: yup
    .string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Name is required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  phone: yup
    .string("Enter your password")
    .matches(/^\+?\d{10,15}$/, "Invalid phone number")
    .required("Password is required"),
});

const BookingForm = ({ onClose, setIsOpenSuccessMessage, teacher }) => {
  const handleBooking = () => {
    onClose();
    setIsOpenSuccessMessage(true);
  };

  return (
    <Modal
      onClose={onClose}
      title={"Book trial lesson"}
      text={
        "Our experienced tutor will assess your current language level, discuss your learning goals, and tailor the lesson to your specific needs."
      }
    >
      <BookingFormTeacher>
        <BookingFormTeacherImg
          src={teacher.avatar_url}
          alt={teacher.name}
          width={44}
          height={44}
        />
        <div>
          <BookingFormTeacherText>Your teacher</BookingFormTeacherText>
          <BookingFormTeacherName>
            {teacher.name} {teacher.surname}
          </BookingFormTeacherName>
        </div>
      </BookingFormTeacher>
      <Form
        handleSubmit={handleBooking}
        initialValues={{
          goal: "",
          name: "",
          email: "",
          phone: "",
        }}
        validationSchema={validationSchemaBooking}
        buttonText="Book"
        specificTypeFields={
          <RadioGroupWrapper role="group" aria-labelledby="my-radio-group">
            <RadioTitle>
              What is your main reason for learning English?
            </RadioTitle>
            <RadioLabel>
              <HiddenRadio
                type="radio"
                name="goal"
                value="Career and business"
                checked={true}
              />
              <CustomRadio />
              Career and business
            </RadioLabel>
            <RadioLabel>
              <HiddenRadio type="radio" name="goal" value="Lesson for kids" />
              <CustomRadio />
              Lesson for kids
            </RadioLabel>
            <RadioLabel>
              <HiddenRadio type="radio" name="goal" value="Living abroad" />
              <CustomRadio />
              Living abroad
            </RadioLabel>
            <RadioLabel>
              <HiddenRadio
                type="radio"
                name="goal"
                value="Exams and coursework"
              />
              <CustomRadio />
              Exams and coursework
            </RadioLabel>
            <RadioLabel>
              <HiddenRadio
                type="radio"
                name="goal"
                value="Culture, travel or hobby"
              />
              <CustomRadio />
              Culture, travel or hobby
            </RadioLabel>
          </RadioGroupWrapper>
        }
        fields={[
          { name: "name", type: "text", placeholder: "Name" },
          { name: "email", type: "email", placeholder: "Email" },
          { name: "phone", type: "phone", placeholder: "Phone number" },
        ]}
      />
    </Modal>
  );
};

export default BookingForm;
