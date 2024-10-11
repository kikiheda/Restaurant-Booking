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
      <div className="reservation-page__intro">
        <h1 className="reservation-page__title">Reservations</h1>
        <span>
          <p className="reservation-page__intro-text">
            Welcome to our reservation page! We’re delighted to help you plan
            your dining experience. Please select your preferred date and time,
            and we'll ensure everything is ready for your visit.
          </p>
        </span>
        <span>
          <div className="reservation-page__policy">
            <h2 className="reservation-page__policy-title">Policies</h2>
            <ul className="reservation-page__rules-list">
              <li className="reservation-page__rule-item">
                We only accept reservations for the current month.
              </li>
              <li className="reservation-page__rule-item">
                For groups larger than 6, please contact us directly to make
                arrangements.
              </li>
              <li className="reservation-page__rule-item">
                Cancellations or modifications must be made at least 24 hours in
                advance.
              </li>
            </ul>
          </div>
        </span>
      </div>
      {view === "default" && (
        <div className="reservation-page__options">
          <button
            className="reservation-page__button"
            onClick={handleNewReservation}
          >
            Make New Reservation
          </button>
          <button
            className="reservation-page__button"
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
