/* eslint-disable react/prop-types */

import Button from "../ui/Button/Button";
import Modal from "../ui/Modal/Modal";

const SuccessModal = ({ onClose }) => {
  return (
    <Modal
      onClose={onClose}
      title={"Application Submitted"}
      text={
        "Thank you! Your request for a trial lesson has been successfully submitted. The teacher will contact you shortly."
      }
    >
      <Button onClick={onClose}>Got it</Button>
    </Modal>
  );
};

export default SuccessModal;
