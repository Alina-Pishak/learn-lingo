/* eslint-disable react/prop-types */
import {
  CloseModalModal,
  ModalBackdrop,
  ModalModal,
  ModalText,
  ModalTitle,
} from "./Modal.styled";

const Modal = ({ onClose, children, title, text }) => {
  return (
    <ModalBackdrop>
      <ModalModal>
        <CloseModalModal type="button" onClick={onClose}>
          x
        </CloseModalModal>
        <ModalTitle>{title}</ModalTitle>
        <ModalText>{text}</ModalText>
        {children}
      </ModalModal>
    </ModalBackdrop>
  );
};

export default Modal;
