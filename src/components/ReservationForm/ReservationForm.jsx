import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './ReservationForm.scss';

const ReservationForm = ({
  startDate,
  setStartDate,
  selectedTime,
  setSelectedTime,
  partySize,
  setPartySize,
  validateDate,
  handleFindTable,
  isFindingTable,
  handleCancel,
}) => {
  const handlePartySizeChange = (event) => {
    setPartySize(event.target.value);
  };

  const PickDate = ({ selectedDate, handleDateChange }) => {
    return (
      <DatePicker
        selected={selectedDate}
        onChange={(date) => handleDateChange(validateDate(date))}
        customInput={
          <div style={{ position: "relative", display: "inline-block" }}>
            <input
              type="text"
              style={{ paddingLeft: "2em" }}
              value={selectedDate}
              readOnly
            />
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "0.5em",
                transform: "translateY(-50%)",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 48 48"
              >
                <mask id="ipSApplication0">
                  <g
                    fill="none"
                    stroke="#fff"
                    strokeLinejoin="round"
                    strokeWidth="4"
                  >
                    <path strokeLinecap="round" d="M40.04 22v20h-32V22"></path>
                    <path
                      fill="#fff"
                      d="M5.842 13.777C4.312 17.737 7.263 22 11.51 22c3.314 0 6.019-2.686 6.019-6a6 6 0 0 0 6 6h1.018a6 6 0 0 0 6-6c0 3.314 2.706 6 6.02 6c4.248 0 7.201-4.265 5.67-8.228L39.234 6H8.845l-3.003 7.777Z"
                    ></path>
                  </g>
                </mask>
                <path
                  fill="currentColor"
                  d="M0 0h48v48H0z"
                  mask="url(#ipSApplication0)"
                ></path>
              </svg>
            </div>
          </div>
        }
      />
    );
  };

  const PickTime = ({ selectedTime, handleTimeChange }) => {
    const filterTime = (time) => {
      const hour = time.getHours();
      return hour >= 17 && hour <= 22; // Only allow times between 5 PM (17) and 10 PM (22)
    };

    return (
      <DatePicker
        selected={selectedTime}
        onChange={handleTimeChange}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={60}
        timeCaption="Time"
        dateFormat="h:mm aa"
        filterTime={filterTime}
      />
    );
  };

  return (
    <form className="reservation-form" onSubmit={handleFindTable}>
      <div className="reservation-form__group">
        <label htmlFor="date">Select a Date:</label>
        <PickDate selectedDate={startDate} handleDateChange={setStartDate} />
      </div>

      <div className="reservation-form__group">
        <label htmlFor="time">Select a Time:</label>
        <PickTime
          selectedTime={selectedTime}
          handleTimeChange={setSelectedTime}
        />
      </div>

      <div className="reservation-form__group">
        <label htmlFor="partySize">Party Size:</label>
        <select
          id="partySize"
          value={partySize || "0"}
          onChange={handlePartySizeChange}
        >
          <option value="0" disabled>
            Select
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="More">More</option>
        </select>
      </div>

      <div className="reservation-form__actions">
        <button type="submit" className="reservation-form__button">
          Find a Table
        </button>
        {!isFindingTable && (
          <button
            type="button"
            className="reservation-form__button reservation-form__button--cancel"
            onClick={handleCancel}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default ReservationForm;
