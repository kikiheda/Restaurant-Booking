import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="homePage">
      <div className="hero">
        {/* Hero Image */}
        {/* <img
          src="path_to_your_image.jpg"
          alt="Delicious Restaurant"
          className="hero__image"
        /> */}

        {/* Textbox over the Image */}
        <div className="hero__textbox">
          <h1>Welcome to Delicious</h1>
          <p>
            Experience the finest French cuisine at our restaurant. Whether it's
            breakfast, lunch, or dinner, we promise to delight your taste buds.
          </p>
          <button className="hero__button">
            <Link to="/menu" >
              View Our Menu
            </Link>
          </button>

        </div>
      </div>

      <div className="review">
        <h2>What Our Customers Say</h2>
        <div className="review__list">

          <div className="review__item">
            <p>
              "Amazing experience! The food was exceptional, and the service was
              top-notch."
            </p>
            <span>- John Doe</span>
          </div>

          <div className="review__item">
            <p>
              "The best French restaurant I've ever been to. A must-visit if
              you're in town!"
            </p>
            <span>- Jane Smith</span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HomePage;
