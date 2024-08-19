import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getMonth } from "date-fns";
import MakeReservation from "../MakeReservation/MakeReservation.jsx"; 
import "./ModifyReservation.scss";


const ModifyReservation = ({ onReservationComplete }) => {
  const [reservationId, setReservationId] = useState("");
  const [email, setEmail] = useState("");
  const [reservation, setReservation] = useState(null);
  const [isModifying, setIsModifying] = useState(false);

  const mockReservationData = {
    id: "12345",
    email: "user@example.com",
    date: new Date("2024-08-19T19:00:00Z"),
    time: "20:00",
    partySize: 4,
  };

  const handleSearch = () => {
    if (
      reservationId === mockReservationData.id ||
      email === mockReservationData.email
    ) {
      setReservation(mockReservationData);
    } else {
      alert(
        "Reservation not found. Please check your ID or email and try again."
      );
    }
  };

  const handleModifyClick = () => {
    setIsModifying(true);
  };

  const handleCancelReservation = () => {
    console.log("Reservation cancelled:", reservation.id);
    alert("Reservation cancelled successfully!");
    setReservation(null);
  };

  const handleBackClick = () => {
    setIsModifying(false);
  };

  return (
    <div className="modify-reservation">
      {!isModifying ? (
        !reservation ? (
          <div className="modify-reservation__search">
            <h2 className="modify-reservation__title">
              Modify Existing Reservation
            </h2>
            <div className="modify-reservation__form-group">
              <label
                htmlFor="reservationId"
                className="modify-reservation__label"
              >
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
            <div className="modify-reservation__form-group">
              <label htmlFor="email" className="modify-reservation__label">
                Email:
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="modify-reservation__input"
              />
            </div>
            <button
              onClick={handleSearch}
              className="modify-reservation__button"
            >
              Search Reservation
            </button>
            <button
              onClick={onReservationComplete}
              className="modify-reservation__button modify-reservation__button--cancel"
            >
              Cancel
            </button>
          </div>
        ) : (
          <div className="modify-reservation__details">
            <h2 className="modify-reservation__title">
              Modify Your Reservation
            </h2>
            <div className="modify-reservation__info">
              <p>
                <strong>Current Date:</strong>{" "}
                {reservation.date.toLocaleDateString()}
              </p>
              <p>
                <strong>Current Time:</strong> {reservation.time}
              </p>
              <p>
                <strong>Current Party Size:</strong> {reservation.partySize}
              </p>
            </div>
            <div className="modify-reservation__actions">
              <button
                onClick={handleModifyClick}
                className="modify-reservation__button"
              >
                Modify Reservation
              </button>
              <button
                onClick={handleCancelReservation}
                className="modify-reservation__button modify-reservation__button--cancel"
              >
                Cancel Reservation
              </button>
              <button
                onClick={onReservationComplete}
                className="modify-reservation__button modify-reservation__button--cancel"
              >
                Back
              </button>
            </div>
          </div>
        )
      ) : (
        <div>
          <MakeReservation reservation={reservation} />
          <button
            onClick={handleBackClick}
            className="modify-reservation__button modify-reservation__button--cancel"
          >
            Back
          </button>
        </div>
      )}
    </div>
  );
};

export default ModifyReservation;
