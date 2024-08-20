import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MakeReservation from "../../components/MakeReservation/MakeReservation";
import ModifyReservation from "../../components/ModifyReservation/ModifyReservation";
import "./ReservationPage.scss";

const ReservationPage = ({ mode }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (mode === "new") {
      setView("make");
    } else if (mode === "modify") {
      setView("modify");
    } else {
      setView("default");
    }
  }, [mode]);

  const [view, setView] = useState("default");

  const handleNewReservation = () => {
    navigate("/new");
  };

  const handleModifyReservation = () => {
    navigate("/modify");
  };

  const handleBackToDefault = () => {
    setView("default");
    navigate("/reserve");
  };

  return (
    <div className="reservation-page">
      <h1>Reservations</h1>
      <span>
        <p>Intro</p>
      </span>
      <span>
        <h2>Policies</h2>
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
