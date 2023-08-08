// Import necessary modules and components
import React, { useContext } from "react";
import "./Skills.css"; // Importing the CSS file for styling
import Card from "../Card/Card"; // Importing the Card component for displaying skills details
import HeartEmoji from "../../img/heartemoji.png"; // Importing the image for the first skill card
import Glasses from "../../img/glasses.png"; // Importing the image for the second skill card
import Humble from "../../img/humble.png"; // Importing the image for the third skill card
import { themeContext } from "../../Context"; // Importing the themeContext from the context file
import { motion } from "framer-motion"; // Importing the motion component from Framer Motion library
import AshishAlok_Resume from './AshishAlok_Resume.pdf'; // Importing the PDF resume file

const Skills = () => {
  // Using React's useContext hook to access the theme data from the context
  const theme = useContext(themeContext); // Getting the theme from the context
  const darkMode = theme.state.darkMode; // Extracting the darkMode property from the theme

  // Framer Motion transition configuration
  const transition = {
    duration: 1, // Transition duration in seconds
    type: "spring", // Transition type
  };

  return (
    <div className="Skills" id="Skills"> {/* Main container for the Skills component */}
      {/* Left side */}
      <div className="awesome">
        {/* Displaying the "My Awesome" text with conditional styling based on darkMode */}
        <span style={{ color: darkMode ? "yellow" : "" }}>My Awesome</span>
        <span style={{ color: darkMode ? "blue" : "" }}>Skills</span>
        {/* Displaying skill details */}
        <span style={{ color: darkMode ? "white" : "" }}>
          Problem-Solving and Critical Thinking, Programming Languages (C++), 
          <br />Object-Oriented Programming (OOP),
          <br />
          Data Structures and Algorithms, Database Management, Operating Systems
        </span>
        {/* Download link for the resume */}
        <a href={AshishAlok_Resume} download>
          {/* Download CV button */}
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* Right side */}
      <div className="cards">
        {/* First card with Framer Motion animation */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji} // HeartEmoji image for the card
            heading={"Problem Solving"} // Heading text for the card
            detail={"Data Structures: Array, Linked List etc, Algorithm: Sorting, Searching etc."} // Details for the card
          />
        </motion.div>
        {/* Second card with Framer Motion animation */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses} // Glasses image for the card
            heading={"Developer"} // Heading text for the card
            detail={"Html, CSS3, JavaScript, React, Email.js, Node.js, Express."} // Details for the card
          />
        </motion.div>
        {/* Third card with Framer Motion animation */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble} // Humble image for the card
            heading={"IOT Skills"} // Heading text for the card
            detail={"IoT Trainer Kit -RPi4 Version, Raspberry Pi IOT Kit, Arduino."} // Details for the card
            color="rgba(252, 166, 31, 0.45)" // Custom background color for the card
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--blue)" }}
        ></div>
      </div>
    </div>
  );
};

export default Skills; // Exporting the Skills component to use it in other parts of the application
