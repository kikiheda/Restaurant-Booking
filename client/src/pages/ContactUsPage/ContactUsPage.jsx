import React from "react";
import ContactUs from "../../components/ContactUs/ContactUs";
import "./ContactUsPage.scss";

const ContactUsPage = () => {
  return (
    <div className="ContactUsPage">
      <h1>Contact Us</h1>
      <p>
        We'd love to hear from you! Please fill out the form below to get in
        touch.
      </p>
      <ContactUs />
    </div>
  );
};

export default ContactUsPage;
