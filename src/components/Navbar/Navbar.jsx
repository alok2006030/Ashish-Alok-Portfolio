import React from "react";
import Toggle from "../Toggle/Toggle";
// import to enable css in this page
import "./Navbar.css";
// Import to enable smooth scrolling
import { Link } from "react-scroll";
//create function
const navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      {/* Left side of the navbar */}
      <div className="n-left">
        <div className="n-name">Ashish</div>
        <Toggle />
      </div>


      {/* Right side of the navbar */}
      <div className="n-right">
        {/* List of navigation items */}
        <div className="n-list">
          {/* Remove bullet points from the list */}
          <ul style={{ listStyleType: "none" }}>
            {/* Link to the "Home" section with smooth scrolling */}
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            {/* Link to the "Skills" section with smooth scrolling */}
            <li>
              <Link to="Skills" spy={true} smooth={true}>
                Skills
              </Link>
            </li>
            {/* Link to the "Projects" section with smooth scrolling */}
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
                Projects
              </Link>
            </li>
          </ul>
        </div>
        
        {/* Button to scroll to the "Contact" section with smooth scrolling */}
        <Link to="contact" spy={true} smooth={true}>
          <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default navbar;
