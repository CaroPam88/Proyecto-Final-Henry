import React from "react";
import Modal from "react-modal";
import style from "./ModifyPopup.module.css";

Modal.setAppElement("#root");

const ModifyPopup = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={style.Modal}
    >
      <h2 className={style.h2}>¡New Product Added!</h2>
      <button onClick={onClose} className={style.button}>
        CLose ❤️
      </button>
    </Modal>
  );
};

export default ModifyPopup;


