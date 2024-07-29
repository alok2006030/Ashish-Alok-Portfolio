import React from "react";
import "./Footer.css";
import footer_image from "../../img/footer_image.png";
import Fiverr from "../../img/fiverr.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faUpwork, faTwitter } from '@fortawesome/free-brands-svg-icons'; // Import faTwitter correctly

const Footer = () => {
  return (
    <div className="footer">
      <img src={footer_image} alt="" style={{ width: "100%", height: "180px" }} />
      <div className="f-content">
        <div>
          <span style={{ textDecoration: 'none' }}>
          </span>
          <div className="f-icons">
            <a href="https://www.instagram.com/ashishalok01/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} color="black" size="2x" />
            </a>
            <a href="https://www.facebook.com/ashishalok01" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} color="black" size="2x" />
            </a>
            <a href="https://www.fiverr.com/aalokdeveloper?up_rollout=true" target="_blank" rel="noopener noreferrer">
              <img src={Fiverr} alt="Fiverr" style={{ width: "2.5rem", height: "2.5rem" }} /> {/* Fiverr image */}
            </a>
            <a href="https://www.upwork.com/freelancers/~0189d8ce1ff86560ce" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faUpwork} color="black" size="2x" />
            </a>
            <a href="https://x.com/AshishAlok01" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} color="black" size="2x" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
