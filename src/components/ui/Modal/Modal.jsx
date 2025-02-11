/* eslint-disable react/prop-types */
import { useEffect } from "react";
import {
  CloseModalModal,
  ModalBackdrop,
  ModalModal,
  ModalText,
  ModalTitle,
} from "./Modal.styled";

const Modal = ({ onClose, children, title, text }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";

      window.removeEventListener("keydown", handleKeyDown);
    };
  });
  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      onClose();
    }
  };
  return (
    <ModalBackdrop onClick={onClose}>
      <ModalModal onClick={(e) => e.stopPropagation()}>
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
