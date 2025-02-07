import {
  CloseRegistrationModal,
  RegistrationBackdrop,
  RegistrationModal,
  RegistrationText,
  RegistrationTitle,
} from "../RegistationForm/RegistrationForm.styled";

const Modal = ({ onClose }) => {
  return (
    <RegistrationBackdrop>
      <RegistrationModal>
        <CloseRegistrationModal type="button" onClick={onClose}>
          x
        </CloseRegistrationModal>
        <RegistrationTitle>Add to favorites</RegistrationTitle>
        <RegistrationText>
          To add it you need to register or login
        </RegistrationText>
      </RegistrationModal>
    </RegistrationBackdrop>
  );
};

export default Modal;
