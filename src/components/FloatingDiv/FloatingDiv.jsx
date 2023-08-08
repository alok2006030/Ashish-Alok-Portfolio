// Import React and the CSS file for styling
import React from "react";
import './FloatingDiv.css'

// Define the FloatingDiv component, taking props for image, text1, and text2
const FloatingDiv = ({img, text1, text2}) => {
  return (
    // The floating div container with the specified class "floatingDiv"
    <div className="floatingDiv">
      {/* The image displayed within the floating div */}
      <img src={img} alt="" />
      {/* The text displayed below the image */}
      <span>
        {text1} {/* First line of text */}
        <br/> {/* Line break */}
        {text2} {/* Second line of text */}
      </span>
    </div>
  );
};

// Export the FloatingDiv component to use in other parts of the application
export default FloatingDiv;
