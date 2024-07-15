import React from "react";
import ProfilePic from "../Assets/photo1687093477.jpeg";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
        It encourages the person to make a selection while emphasizing the quick delivery of their chosen food item, especially Ertb.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
          Founder of Foodie restaurant which makes ertb, katelo, chips, felafl, special ertb and combo food.
          With soft drinks.
          We are here to make you happy. 
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Henok Mehari</h2>
      </div>
    </div>
  );
};

export default Testimonial;