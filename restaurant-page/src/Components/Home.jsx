import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import Ertb2 from "../Assets/image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Your Favourite Food Delivered Hot & Fresh
          </h1>
          <p className="primary-text">
            Healthy switcher chefs do all the fast food work, like ertb,
            katelo,
            felafel,
            & combo, so you can get a fresh food.
        </p>
          <button className="secondary-button">
            Order Now <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={Ertb2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;