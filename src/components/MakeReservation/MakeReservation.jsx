import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getYear, getMonth, getHours, setMinutes, setHours } from "date-fns";
import ReservationForm from "../ReservationForm/ReservationForm.jsx";
import "./MakeReservation.scss";

const MakeReservation = ({ onReservationComplete }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);
  const [partySize, setPartySize] = useState(null);
  const [timeSlots, setTimeSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [isFindingTable, setIsFindingTable] = useState(false);
  const navigate = useNavigate();

  const validateDate = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const month = getMonth(date);

    if (date < today) {
      alert("You cannot select a date before today.");
      return new Date();
    } else if (month !== 7) {
      alert("Reservations can only be made for August.");
      return new Date();
    } else {
      return date;
    }
  };

  const handlePartySizeChange = (event) => {
    if (event.target.value === "more") {
      if (
        window.confirm(
          "For reservations of more than 6 people, please contact us directly. Would you like to visit our contact page?"
        )
      ) {
        navigate("/contact");
      }
      event.target.value = "0";
    } else {
      setPartySize(event.target.value);
    }
  };

  const generateTimeSlots = (time) => {
    const slots = [];
    const hour = getHours(time);

    if (hour === 17) {
      slots.push(setMinutes(setHours(new Date(time), 17), 0));
      slots.push(setMinutes(setHours(new Date(time), 17), 15));
      slots.push(setMinutes(setHours(new Date(time), 17), 30));
      slots.push(setMinutes(setHours(new Date(time), 17), 45));
      slots.push(setMinutes(setHours(new Date(time), 18), 0));
    } else if (hour === 22) {
      slots.push(setMinutes(setHours(new Date(time), 21), 0));
      slots.push(setMinutes(setHours(new Date(time), 21), 15));
      slots.push(setMinutes(setHours(new Date(time), 21), 30));
      slots.push(setMinutes(setHours(new Date(time), 21), 45));
      slots.push(setMinutes(setHours(new Date(time), 22), 0));
    } else {
      for (let i = -2; i <= 2; i++) {
        const slot = new Date(time);
        slot.setMinutes(time.getMinutes() + i * 15);
        const slotHour = getHours(slot);

        if (slotHour >= 17 && slotHour < 22) {
          slots.push(slot);
        }
      }
    }

    return slots;
  };

  const handleFindTable = (event) => {
    event.preventDefault();
    setIsFindingTable(true);
    if (
      !startDate ||
      !selectedTime ||
      !partySize ||
      getMonth(startDate) !== 7
    ) {
      alert("Please fill out all fields correctly.");
      return;
    }
    const slots = generateTimeSlots(selectedTime);
    setTimeSlots(slots);
    setSelectedSlot(null);
  };

  const handleSlotSelection = (slot) => {
    setSelectedSlot(slot);
  };

  const handleReservation = () => {
    if (selectedSlot) {
      console.log(
        "Reservation made for:",
        selectedSlot,
        "Party size:",
        partySize
      );
      setStartDate(new Date());
      setSelectedTime(null);
      setPartySize(null);
      setTimeSlots([]);
      setSelectedSlot(null);
      alert("Reservation confirmed!");
      onReservationComplete();
    }
  };

  const handleCancel = () => {
    setStartDate(new Date());
    setSelectedTime(null);
    setPartySize(null);
    setTimeSlots([]);
    setSelectedSlot(null);
    setIsFindingTable(false);
    onReservationComplete();
  };

  return (
    <div className="make-reservation">
      <ReservationForm
        startDate={startDate}
        setStartDate={setStartDate}
        selectedTime={selectedTime}
        setSelectedTime={setSelectedTime}
        partySize={partySize}
        setPartySize={setPartySize}
        handlePartySizeChange={handlePartySizeChange}
        validateDate={validateDate}
        handleFindTable={handleFindTable}
        isFindingTable={isFindingTable}
        handleCancel={handleCancel}
      />

      {timeSlots.length > 0 && (
        <div className="make-reservation__slots">
          <h4>Select a Time Slot:</h4>
          <div className="make-reservation__slots-grid">
            {timeSlots.map((slot, index) => (
              <button
                key={index}
                className={`make-reservation__slot ${
                  slot.getMinutes() % 15 === 0 ? "available" : "unavailable"
                }`}
                onClick={() => handleSlotSelection(slot)}
                disabled={slot.getMinutes() % 15 !== 0}
              >
                {slot.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </button>
            ))}
          </div>
          <div className="make-reservation__actions">
            <button
              onClick={handleReservation}
              className="make-reservation__button"
            >
              Confirm Reservation
            </button>
            <button
              onClick={handleCancel}
              className="cancel-reservation__button"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MakeReservation;
