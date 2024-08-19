import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import MakeReservation from "../../components/MakeReservation/MakeReservation";
import ModifyReservation from "../../components/ModifyReservation/ModifyReservation";
// import "./ReservationPage.scss";

const ReservationPage = ({ mode }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showButtons, setShowButtons] = useState(true);

  useEffect(() => {
    // Show buttons only when on the main /reserve route
    if (location.pathname === "/reserve") {
      setShowButtons(true);
    } else {
      setShowButtons(false);
    }
  }, [location.pathname]);

  const handleNewReservation = () => {
    navigate("/reserve/new");
  };

  const handleModifyReservation = () => {
    navigate("/reserve/modify");
  };

  return (
    <div className="reservation-page">
      <h2>Welcome to the Reservation Page</h2>
      <p>Please review our reservation policy before proceeding.</p>
      <ul>
        <li>Policy Item 1</li>
        <li>Policy Item 2</li>
        <li>Policy Item 3</li>
      </ul>
      {showButtons && (
        <div className="reservation-page__buttons">
          <button onClick={handleNewReservation}>New Reservation</button>
          <button onClick={handleModifyReservation}>Modify Reservation</button>
        </div>
      )}

      <div className="reservation-page__content">
        {mode === "new" && <MakeReservation />}
        {mode === "modify" && <ModifyReservation />}
      </div>
    </div>
  );
};

export default ReservationPage;
