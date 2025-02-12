/* eslint-disable react/prop-types */

import Button from "../ui/Button/Button";
import Modal from "../ui/Modal/Modal";

import { AddToFavoriteMessageButtons } from "./AddToFavoriteMessage.styled";

const AddToFavoriteMessage = ({ onClose, setIsLoginOpen }) => {
  return (
    <Modal
      onClose={onClose}
      title={"Access Restricted"}
      text={
        "This feature is available only for authorized users. Please log in to continue."
      }
    >
      <AddToFavoriteMessageButtons>
        <Button
          onClick={() => {
            onClose();
            setIsLoginOpen(true);
          }}
        >
          Log In
        </Button>
        <Button onClick={onClose}>Cancel</Button>
      </AddToFavoriteMessageButtons>
    </Modal>
  );
};

export default AddToFavoriteMessage;
