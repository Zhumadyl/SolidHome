import ReactModal from "react-modal";

const CustomModal = ({ isOpen, closeModal, content }) => {
  return (
    <ReactModal isOpen={isOpen} onRequestClose={closeModal}>
      {content}
    </ReactModal>
  );
};

export default CustomModal;
