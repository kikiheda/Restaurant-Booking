import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getYear, getMonth, getHours, setMinutes, setHours } from "date-fns";
import axios from "axios";
// import reservationData from "../../data/reservations.json"; // for testing
import ReservationForm from "../ReservationForm/ReservationForm.jsx";
const VITE_API_URL = import.meta.env.VITE_API_URL;
import "./MakeReservation.scss";

const MakeReservation = ({
  reservationId,
  isUpdating = false
//   initialData = {},
}) => {
  const [startDate, setStartDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);
  const [partySize, setPartySize] = useState(null);
  const [timeSlots, setTimeSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [isFindingTable, setIsFindingTable] = useState(false);
  const navigate = useNavigate();

  // useEffect(() => {
  //   // Simulate fetching data from JSON
  //   setReservations(reservationData.reservations);
  // }, []);

  // Helper function to validate date format - current month only
  const validateDate = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const month = getMonth(date);

    if (date < today) {
      alert("You cannot select a date before today.");
      return new Date();
    } else if (month !== 9) {
      alert("Reservations can only be made for current month.");
      return new Date();
    } else {
      return date;
    }
  };

  // Helper function to handle party size - limit to 6
  const handlePartySizeChange = (event) => {
    if (event.target.value === "More") {
      if (
        window.confirm(
          "For reservations of more than 6 people, please contact us directly. Would you like to visit our contact page?"
        )
      ) {
        navigate("/contact");
      }
      event.target.value = "0";
      // Reset the party size value after the popup
      setPartySize(null);
    } else {
      setPartySize(event.target.value);
    }
  };

  // Helper function to generate time slots for display
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

  // Helper function to find table
  const handleFindTable = (event) => {
    event.preventDefault();
    setIsFindingTable(true);
    if (
      !startDate ||
      !selectedTime ||
      !partySize ||
      getMonth(startDate) !== 9
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

  // Reservation function without backend implementation
  // const handleReservation = () => {
  //   if (selectedSlot) {
  //     console.log(
  //       "Reservation made for:",
  //       selectedSlot,
  //       "Party size:",
  //       partySize
  //     );
  //     setStartDate(new Date());
  //     setSelectedTime(null);
  //     setPartySize(null);
  //     setTimeSlots([]);
  //     setSelectedSlot(null);
  //     alert("Reservation confirmed!");
  //     onReservationComplete();
  //   }
  // };

  // Reservation function
  const handleReservation = async () => {
    if (selectedSlot) {
      const reservationData = {
        user_id: 33, // default for testing
        //  reservationId: "123456",
        name: "John White",
        date: startDate.toISOString().split("T")[0],
        time: selectedSlot.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          //  second: "2-digit"
        }),
        party_size: partySize,
      };

      // Debugging: Log the data being sent
      console.log("Reservation Data being sent:", reservationData);

      try {
        const response = isUpdating
          ? await axios.put(
              `${VITE_API_URL}/reservations/${reservationId}`,
              reservationData
            )
          : await axios.post(
              `${VITE_API_URL}/reservations/create`,
              reservationData
            );

        if (response.status === isUpdating ? 200 : 201) {
          console.log("Reservation successful:", response.data);
          alert(
            isUpdating
              ? "Reservation updated successfully!"
              : "Reservation confirmed!"
          );
          setStartDate(new Date());
          setSelectedTime(null);
          setPartySize(null);
          setTimeSlots([]);
          setSelectedSlot(null);
          navigate("/reserve");
        }
      } catch (error) {
        console.error("Error making reservation", error);
        alert("There was an issue with your reservation. Please try again.");
      }
    }
  };

  const handleCancel = () => {
    setStartDate(new Date());
    setSelectedTime(null);
    setPartySize(null);
    setTimeSlots([]);
    setSelectedSlot(null);
    setIsFindingTable(false);
    navigate("/reserve");
  };

  return (
    <div className="make-reservation">
      <h2 className="make-reservation__tile">
        {isUpdating ? "Update Reservation" : "Make a New Reservation"}
      </h2>
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
                  selectedSlot === slot ? "selected" : ""
                } ${
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
              {isUpdating ? "Confirm Update" : "Confirm Reservation"}
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
