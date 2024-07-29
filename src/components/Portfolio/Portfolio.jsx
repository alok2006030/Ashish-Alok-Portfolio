import React, { useContext } from "react";
import "./Portfolio.css";
import Shopping from "../../img/shopping_web_app.png";
import Personal_Portfolio from "../../img/personal_portfolio.png";
import ToDo from "../../img/to_do_list.png";
import Landing_Page from "../../img/landing_page_sundarpichai.png";
import IRCTC from "../../img/IRCTC.png";
import Resume from "../../img/Resume.png";
import { themeContext } from "../../Context";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? 'white' : '' }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* grid */}
      <div className="portfolio-grid">
        <div className="portfolio-grid-item">
          <a href="https://example.com/shopping-web-app" target="_blank" rel="noopener noreferrer">
            <img src={Shopping} alt="Shopping Web App" />
          </a>
        </div>
        <div className="portfolio-grid-item">
          <a href="https://example.com/personal-portfolio" target="_blank" rel="noopener noreferrer">
            <img src={Personal_Portfolio} alt="Personal Portfolio" />
          </a>
        </div>
        <div className="portfolio-grid-item">
          <a href="https://example.com/landing-page-sundar-pichai" target="_blank" rel="noopener noreferrer">
            <img src={Landing_Page} alt="Landing Page Sundar Pichai" />
          </a>
        </div>
        <div className="portfolio-grid-item">
          <a href="https://example.com/to-do-list" target="_blank" rel="noopener noreferrer">
            <img src={ToDo} alt="To-Do List" />
          </a>
        </div>
        <div className="portfolio-grid-item">
          <a href="https://example.com/to-do-list" target="_blank" rel="noopener noreferrer">
            <img src={IRCTC} alt="To-Do List" />
          </a>
        </div>
        <div className="portfolio-grid-item">
          <a href="https://example.com/to-do-list" target="_blank" rel="noopener noreferrer">
            <img src={Resume} alt="About Me" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
