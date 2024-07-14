import React from "react";
import "./Footer.css";
import footer_image from "../../img/footer_image.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">

      <img src={footer_image} alt="" style={{ width: "100%", height:"180px"}} />
      <div className="f-content">
      <div>
      <span style={{ textDecoration: 'none' }}>
  <a href="mailto:ashishalok01@gmail.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
    ashishalok01@gmail.com
  </a>
</span>

  <div className="f-icons">
    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
      <Insta color="purple" size={"2.5rem"} />
    </a>
    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
      <Facebook color="purple" size={"2.5rem"} />
    </a>
    <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
      <Gitub color="purple" size={"2.5rem"} />
    </a>
  </div>
</div>

      </div>
    </div>
  );
};

export default Footer;
