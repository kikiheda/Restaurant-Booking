import React, { useState } from "react";
import "./ContactUs.scss";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
const APIKEY = import.meta.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const mapContainerStyle = {
  width: "100%",
  height: "300px",
};

const center = {
  lat: 43.65107, // Latitude for Toronto, Ontario
  lng: -79.347015, // Longitude for Toronto, Ontario
};


const ContactUs = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = () => {
    alert("Your message has been sent!");
    resetForm();
  };

  const handleCancel = () => {
    resetForm();
  };

  const resetForm = () => {
    setName("");
    setPhone("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact-us">
      <div className="contact-us__form-group">
        <label htmlFor="name" className="contact-us__label">
          Name:
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="contact-us__input"
        />
      </div>
      <div className="contact-us__form-group">
        <label htmlFor="phone" className="contact-us__label">
          Phone Number:
        </label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="contact-us__input"
        />
      </div>
      <div className="contact-us__form-group">
        <label htmlFor="email" className="contact-us__label">
          Email:
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="contact-us__input"
        />
      </div>
      <div className="contact-us__form-group">
        <label htmlFor="message" className="contact-us__label">
          Message:
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="contact-us__textarea"
        />
      </div>
      <div className="contact-us__actions">
        <button onClick={handleSend} className="contact-us__button">
          Send
        </button>
        <button
          onClick={handleCancel}
          className="contact-us__button contact-us__button--cancel"
        >
          Cancel
        </button>
      </div>
      <div className="contact-us__map">
        <h2 className="contact-us__map-title">Our Location</h2>
        <LoadScript googleMapsApiKey={APIKEY}>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={12}
          >
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default ContactUs;
