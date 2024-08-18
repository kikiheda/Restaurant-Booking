import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
// import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import { getYear, getMonth } from "date-fns";
import "./ReservationForm.scss";

// Helper Function to pick date (from datepicker libary)
const PickDate = () => {
  const [startDate, setStartDate] = useState(new Date());
   const currentYear = getYear(new Date());
   const years = [];
   for (let i = 1990; i <= currentYear; i++) {
     years.push(i);
   }
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <DatePicker
      renderCustomHeader={({
        date,
        changeYear,
        changeMonth,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
      }) => (
        <div
          style={{
            margin: 10,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
            {"<"}
          </button>
          <select
            value={getYear(date)}
            onChange={({ target: { value } }) => changeYear(value)}
          >
            {years.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <select
            value={months[getMonth(date)]}
            onChange={({ target: { value } }) =>
              changeMonth(months.indexOf(value))
            }
          >
            {months.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
            {">"}
          </button>
        </div>
      )}
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      customInput={
        <div style={{ position: "relative", display: "inline-block" }}>
          <input
            type="text"
            style={{ paddingLeft: "2em" }}
            value={startDate.toLocaleDateString()}
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


// Helper Function to pick time (from datepicker libary)
const PickTime = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={15}
        timeCaption="Time"
        dateFormat="h:mm aa"
      />
    );

}

//Helper Function to select party size
const PickPartySize = () => {
 const navigate = useNavigate();

 const handlePartySizeChange = (event) => {
   if (event.target.value === "more") {
     if (
       window.confirm(
         "For reservations of more than 6 people, please contact us directly. Would you like to visit our contact page?"
       )
     ) {
       navigate("/contact-us"); // Navigate to the Contact Us page
     }
     event.target.value = "0"; // Reset the selection to the default option
   }
 };
  return (
    <select
      id="party-size"
      className="reserve-form__select"
      onChange={handlePartySizeChange}
    >
      <option value="0" disabled selected>
        Select
      </option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="more">More</option>
    </select>
  );
};
  
// Helper Function to find a table
const FindTable = () => {


}

// Main Component 
const ReservationForm = () => {
  return (
    <div className="reserve-form">
      <form className="reserve-form__datetime">
        {/* select date field */}
        <div className="reserve-form__datetime-date">
          <label htmlFor="date" className="reserve-form__label">
            Select a Date
          </label>
          <PickDate />
        </div>

        {/* select time field */}
        <div className="reserve-form__datetime-time">
          <label htmlFor="time" className="reserve-form__label">
            Select a Time
          </label>
          <PickTime />
        </div>

        {/* select party size field */}
        <div className="reserve-form__party-size">
          <label htmlFor="party-size" className="reserve-form__label">
            Select Party Size
          </label>
          <PickPartySize />
        </div>

        {/* find a table button */}
        <button type="submit" className="reserve-form__button">
          Find a Table
        </button>
      </form>
    </div>
  );
};

export default ReservationForm;
