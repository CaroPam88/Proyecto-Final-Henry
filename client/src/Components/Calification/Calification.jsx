import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import axios from "axios";
import style from "../Calification/Calification.module.css";

Modal.setAppElement("#root");

const SatisfactionPopup = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [rating, setRating] = useState(0);

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const handleRatingClick = (value) => {
    setRating(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(`User satisfaction rating: ${rating}`);

    try {
      const response = await axios.post(
        `/clothes/rating/${rating}`, 
        {
          rating,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        console.log("Rating submitted successfully");
      } else {
        console.error("Error submitting rating");
      }
      
      // window.alert("¡Gracias por su calificación!");
    } catch (error) {
      console.error(error);
      window.alert(
        "Hubo un error al enviar la calificación, por favor intente de nuevo más tarde."
      );
    }
  };

  useEffect(() => {
    handleOpenModal();
  }, []);

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={handleCloseModal}
      contentLabel="Satisfaction Popup"
      className={style.Modal}
    >
      <h2 className={style.h2}>
      How satisfied are you with your experience on this page?
      </h2>
      <div className={style.stars}>
        {[1, 2, 3, 4, 5].map((value) => (
          <i
            key={value}
            className={`fa${value <= rating ? "s" : "r"} fa-star`}
            onClick={() => handleRatingClick(value)}
          />
        ))}
      </div>
      <button onClick={handleSubmit} className={style.button}>
        Send ❤️
      </button>
    </Modal>
  );
}

export default SatisfactionPopup;
