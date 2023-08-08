// Import necessary modules and components
import React, { useContext } from "react";
import "./Toggle.css"; // Importing the CSS file for styling
import Moon from "@iconscout/react-unicons/icons/uil-moon"; // Importing the Moon icon from Unicons library
import Sun from "@iconscout/react-unicons/icons/uil-sun"; // Importing the Sun icon from Unicons library
import { themeContext } from "../../Context"; // Importing the themeContext from the context file

const Toggle = () => {
  // Using React's useContext hook to access the theme data from the context
  const theme = useContext(themeContext); // Getting the theme from the context
  const darkMode = theme.state.darkMode; // Extracting the darkMode property from the theme

  // Function to handle the click event when the toggle button is clicked
  const handleClick = () => {
    // Dispatching a "toggle" action to the theme context to switch between dark and light mode
    theme.dispatch({ type: "toggle" });
  };

  return (
    <div className="toggle" onClick={handleClick}> {/* Main container for the Toggle component */}
      {/* Display the Moon icon */}
      <Moon />
      {/* Display the Sun icon */}
      <Sun />

      {/* Button style to move on sun or moon */}
      {/* The position of the button is adjusted based on the darkMode */}
      <div
        className="t-button"
        style={darkMode ? { left: "2px" } : { right: "2px" }}
      ></div>
    </div>
  );
};

export default Toggle; // Exporting the Toggle component to use it in other parts of the application
