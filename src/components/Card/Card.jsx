// Importing React library
import React from "react";

// Importing the CSS file for the Card component
import "./Card.css";

// Card component with props: emoji, heading, detail, color
const Card = ({ emoji, heading, detail, color }) => {
  return (
    // Card container with a border color set based on the 'color' prop
    <div className="card" style={{ borderColor: color }}>
      {/* Displaying the emoji */}
      <img src={emoji} alt="" />
      {/* Displaying the heading */}
      <span>{heading}</span>
      {/* Displaying the detail */}
      <span>{detail}</span>
      {/* Button with class 'c-button' */}
      <button className="c-button">LEARN MORE</button>
    </div>
  );
};

// Exporting the Card component to use in other files
export default Card;
