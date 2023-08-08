import React from "react";
import "./Footer.css"; // Import the CSS file for Footer styling
import Wave from "../../img/wave.png"; // Import the wave image
import Insta from "@iconscout/react-unicons/icons/uil-whatsapp"; // Import the WhatsApp icon from Unicons library
import Facebook from "@iconscout/react-unicons/icons/uil-twitter"; // Import the Twitter icon from Unicons library
import Github from "@iconscout/react-unicons/icons/uil-github"; // Import the GitHub icon from Unicons library

const Footer = () => {
  return (
    <div className="footer"> {/* Footer container */}
      <img src={Wave} alt="" style={{ width: "100%" }} /> {/* Wave image with 100% width */}
      <div className="f-content"> {/* Footer content */}
        <span>ashishalok01@gmail.com</span> {/* Email address */}
        <div className="f-icons"> {/* Social media icons container */}
          {/* WhatsApp icon with link */}
          <a href="https://wa.me/7484995606" target="_blank">
            <Insta color="white" size={"3rem"} /> {/* Set color and size for the icon */}
          </a>
          {/* Twitter icon with link */}
          <a href="https://twitter.com/AshishAlok01" target="_blank">
            <Facebook color="white" size={"3rem"} /> {/* Set color and size for the icon */}
          </a>
          {/* GitHub icon with link */}
          <a href="https://github.com/alok2006030" target="_blank">
            <Github color="white" size={"3rem"} /> {/* Set color and size for the icon */}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
