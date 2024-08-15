import React from "react";
import ReservationForm from "../../components/ReservationForm/ReservationForm";
import "./ReservationPage.scss";

const ReservationPage = () => {
  return (
    <div className="ReservationPage">
      <h1>Reserve a Table</h1>
      <p>Book a table at our restaurant using the form below.</p>
      {/* Add reservation form here */}
      <span><p>Reservation Policies</p></span>
      <ReservationForm />
    </div>
  );
};

export default ReservationPage;
