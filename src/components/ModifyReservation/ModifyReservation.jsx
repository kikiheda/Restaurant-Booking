import React, { useState } from "react";
import DatePicker from "react-datepicker";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import { useParams, useNavigate } from 'react-router-dom';
import { getMonth } from "date-fns";
import MakeReservation from "../MakeReservation/MakeReservation.jsx";
const VITE_API_URL = import.meta.env.VITE_API_URL;

import "./ModifyReservation.scss";

const ModifyReservation = () => {
  // const { id } = useParams();
  const [reservationId, setReservationId] = useState("");
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
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
  const handleCancel = async() => {
    navigate("/reserve")
  };

  // Update the reservation
  const UpdateReservation = () => {
     const { id } = useParams(); // Get the reservation ID from the URL
      const navigate = useNavigate();
     
      

    }
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
          className="modify-reservation__button-search"
          disabled={loading}
        >
          {loading ? "Searching..." : "Search Reservation"}
        </button>
        <button 
          className="modify-reservation__button-cancel"
          onClick={handleCancel}>
          Cancel
        </button>
      </div>

      {/* {error && <p className="modify-reservation__error">{error}</p>} */}

      {results && results.length > 0 && (
        <div className="modify-reservation__results">
          <h3>Reservation Details:</h3>
          {/* <p><strong>Reservation ID:</strong> {results.id}</p> */}
          <p>
            <strong>Name:</strong> {results[0].name}
          </p>

          <p>
            <strong>Date:</strong>{" "}
            {new Date(results[0].date).toLocaleDateString()}
          </p>

          <p>
            <strong>Time:</strong> {results[0].time}
          </p>
          <p>
            <strong>Party Size:</strong> {results[0].party_size}
          </p>
          {/* Add more fields as necessary */}
        </div>
      )}
    </div>
  );
};
export default ModifyReservation;
