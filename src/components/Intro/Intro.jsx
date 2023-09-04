import React, { useContext } from "react";
import "./Intro.css";
import Vector2 from "../../img/Vector2.gif";
import boy from "../../img/boy.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import whatsapp from "../../img/whatsapp.png";
import glassesimoji from "../../img/glasses.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // Context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro">
      {/* Left side name section */}
      <div className="i-left">
        {/* Name with conditional color based on darkMode */}
        <div className="i-name">
          <span style={{ color: darkMode ? "yellow" : "" }}>Hy! I Am</span>
          {/* but in Name Ashish Alok dark mode not applied */}
          <span>Ashish Alok</span>
          <span>
          Web developer with expertise in frontend and backend development.<br></br> With high level of experience in web designing
            and development,<br></br> producing the Quality work.
          </span>
        </div>

        {/* Link to the contact section */}
        <div id="cv">
          <Link to="contact" smooth={true} spy={true}>
            <button className="button i-button">Hire me</button>
          </Link>
        </div>

        {/* Social icons */}
        <div className="i-icons">
          <a href="https://github.com/alok2006030" target="_blank">
            <img src={Github} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/the-ashishalok/" target="_blank">
            <img src={LinkedIn} alt="" />
          </a>
          <a href="https://wa.me/7484995606" target="_blank">
            <img src={whatsapp} alt="" />
          </a>
        </div>
      </div>

      {/* Right side image section */}
      <div className="i-right">
        {/* Images */}
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        <img src={glassesimoji} alt="" />

  
        {/* FloatingDiv web div animation */}
        <motion.div
          initial={{ top: "-18%", left: "10%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Web" text2="Developer" />
        </motion.div>
    </div>
    </div>
  );
};

export default Intro;
