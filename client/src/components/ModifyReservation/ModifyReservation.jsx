import React, { useState, useEffect } from "react";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import { useParams, useNavigate } from "react-router-dom";
const VITE_API_URL = import.meta.env.VITE_API_URL;
import DeleteModal from "../DeleteModal/DeleteModal";
// import DatePicker from "react-datepicker";
// import { getMonth } from "date-fns";
import MakeReservation from "../MakeReservation/MakeReservation.jsx";
// import "./ModifyReservation.scss";

const ModifyReservation = () => {
  const [reservationId, setReservationId] = useState("");
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const navigate = useNavigate();

  // Find the reservation
  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `${VITE_API_URL}/reservations/${reservationId}`
      );
      console.log("API Response:", response.data);
      setResults(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching reservation:", error);
      setError("Reservation not found. Please check the ID and try again.");
      setLoading(false);
    }
  };

  // Cancel the operation
  const handleCancel = async () => {
    navigate("/reserve");
  };

  // Update the reservation
  
    


  const handleUpdate = ({ reservationId, initialData }) => {
    setIsUpdating(true);
    return (
      <MakeReservation
        reservationId={reservationId}
        isUpdating={true}
        initialData={initialData}
      />
    );
  };

  // Delete the reservation
  const handleOpenModal = (reservationId) => {
    setReservationId(reservationId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setReservationId(null);
  };

  // const handleDelete = async () => {
  //   try {
  //    const response = await axios.delete(
  //       `${VITE_API_URL}/reservations/${reservationId}`);
  //     console.log("Reservation deleted:", response.data);
  //     setResults(response.data);

  //   } catch (error) {
  //     console.error("Error deleting reservation:", error);
  //   }
  // };

  // Structure
  return (
    <div className="modify-reservation">
      <h2 className="modify-reservation__title">Modify a Reservation</h2>
      <div className="modify-reservation__search">
        {/* Search for a reservation */}
        <div className="modify-reservation__search-form">
          <label className="modify-reservation__label" id="reservation-ID">
            Reservation ID:
          </label>
          <input
            type="text"
            id="reservationId"
            value={reservationId}
            onChange={(e) => setReservationId(e.target.value)}
            className="modify-reservation__input"
          />
        </div>
        <button
          onClick={handleSearch}
          className="modify-reservation__button"
          disabled={loading}
        >
          {loading ? "Searching..." : "Search Reservation"}
        </button>

        <button
          className="modify-reservation__button-cancel"
          onClick={handleCancel}
        >
          Cancel
        </button>
      </div>

      {/* {error && <p className="modify-reservation__error">{error}</p>} */}

      {results && (
        <div className="modify-reservation__results-container">
          <div className="modify-reservation__results-text">
            <h3 className="modify-reservation__results-title">
              Reservation Details:
            </h3>
            <p className="modify-reservation__results-details">
              <strong>Name:</strong> {results.name}
            </p>

            <p className="modify-reservation__results-details">
              <strong>Date:</strong>{" "}
              {new Date(results.date).toLocaleDateString()}
            </p>

            <p className="modify-reservation__results-details">
              <strong>Time:</strong> {results.time}
            </p>
            <p className="modify-reservation__results-details">
              <strong>Party Size:</strong> {results.party_size}
            </p>
          </div>
          <div className="modify-reservation__actions">
            <button
              onClick={handleUpdate}
              className="modify-reservation__button"
            >
              Change
            </button>
            <button
              className="modify-reservation__button"
              onClick={() => handleOpenModal(results.reservationId)}
            >
              Delete
            </button>
            <button
              onClick={handleCancel}
              className="modify-reservation__button"
            >
              Cancel
            </button>
          </div>
          {isModalOpen && (
            <DeleteModal
              reservationId={reservationId}
              onClose={handleCloseModal}
            />
          )}
        </div>
      )}
      {isUpdating && (
        <MakeReservation
          reservationId={reservationId}
          isUpdating={true}
          // initialData={results}
        />
      )}
    </div>
  );
};
export default ModifyReservation;
