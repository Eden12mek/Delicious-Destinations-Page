import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
            Good food is the foundation of genuine happiness.
        </h1>
        <p className="primary-text">
          Ertb is unique come and enjoy by eating our food.
          Join us. 
        </p>
        <p className="primary-text">
          You can order ertb, katelo, chips, felafl, special ertb and combo food.
          With soft drinks.
          We are here to make you happy. 
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Come to us
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;