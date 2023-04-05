import React from "react";
import Modal from "react-modal";
import style from "./createPopup.module.css";

Modal.setAppElement("#root");

const CreatePopup = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={style.Modal}
    >
      <h2 className={style.h2}>¡Product Modified Successfully!</h2>
      <button onClick={onClose} className={style.button}>
        CLose ❤️
      </button>
    </Modal>
  );
};

export default CreatePopup;