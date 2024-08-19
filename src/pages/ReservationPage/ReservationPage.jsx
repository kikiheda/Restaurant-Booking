import React, { useState } from "react";
import MakeReservation from "../../components/MakeReservation/MakeReservation";
import ModifyReservation from "../../components/ModifyReservation/ModifyReservation";
// import "./ReservationPage.scss";


const ReservationPage = () => {
  const [view, setView] = useState("default");

  const handleNewReservation = () => {
    setView("make");
  };

  const handleModifyReservation = () => {
    setView("modify");
  };

  const handleBackToDefault = () => {
    setView("default");
  };

  return (
    <div className="reservation-page">
      <h1>Reservations</h1>
      <span>
        <p>Intro</p>
      </span>
      <span>
        <h2>Poliies</h2>
        <p>Placeholder</p>
      </span>
      {view === "default" && (
        <div className="reservation-page__options">
          <button
            className="reservation-page__button reservation-page__button--make"
            onClick={handleNewReservation}
          >
            Make New Reservation
          </button>
          <button
            className="reservation-page__button reservation-page__button--modify"
            onClick={handleModifyReservation}
          >
            Modify Existing Reservation
          </button>
        </div>
      )}

      {view === "make" && (
        <MakeReservation onReservationComplete={handleBackToDefault} />
      )}

      {view === "modify" && (
        <ModifyReservation onReservationComplete={handleBackToDefault} />
      )}
    </div>
  );
};

export default ReservationPage;
