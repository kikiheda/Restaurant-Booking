import React, { useState } from "react";
import axios from "axios";
const VITE_API_URL = import.meta.env.VITE_API_URL;
import "./DeleteModal.scss";

const DeleteModal = ({onClose }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleDelete = async () => {
    setIsLoading(true);
    try {
      console.log("Reservation ID before fetch:", reservationId);

      if (!reservationId) {
        throw new Error("Reservation ID is undefined.");
      }

      const response = await axios.get(
        `${VITE_API_URL}/reservations/${reservationId}`
      );
      const results = response.data;
      const deleteID = results.reservationId;

      console.log("Delete ID:", deleteID);

      if (!deleteID) {
        throw new Error("Reservation ID not found in the fetched results.");
      }

      await axios.delete(`${VITE_API_URL}/reservations/${deleteID}`);
      onClose(); // Close the modal after successful deletion
    } catch (err) {
      console.error("Error deleting reservation:", err);
      setError("Failed to delete the reservation. Please try again.");
      setIsLoading(false);
    }
  };


  return (
    <div className="modal">
      <div className="modal__content">
        <h2 className="modal__title">Confirm Deletion</h2>
        <p>Are you sure you want to delete this reservation?</p>
        {error && <p className="modal__error">{error}</p>}
        <div className="modal__actions">
          <button
            className="modal__button modal__button--cancel"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="modal__button modal__button--confirm"
            onClick={handleDelete}
            disabled={isLoading}
          >
            {isLoading ? "Deleting..." : "Delete"}
          </button>
        </div>
      </div>
      <div className="modal__overlay" onClick={onClose}></div>
    </div>
  );
};

export default DeleteModal;
