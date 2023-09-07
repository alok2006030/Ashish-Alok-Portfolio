// Import necessary modules and components
import React, { useContext } from "react";
import "./Portfolio.css"; 
import { Swiper, SwiperSlide } from "swiper/react"; // Importing Swiper components for the slider
import "swiper/css"; // Importing Swiper's CSS
import Sidebar from "../../img/sidebar.png"; // Importing images for the slider
import Sundar from "../../img/sundar.png";
import ToDo from "../../img/todo.png";
import MusicApp from "../../img/calculator.png";
import { themeContext } from "../../Context"; // Importing the themeContext from the context file

const Portfolio = () => {
  // Using React's useContext hook to access the themeContext
  const theme = useContext(themeContext); // Getting the theme from the context
  const darkMode = theme.state.darkMode; // Extracting the darkMode property from the theme

  return (
    <div className="portfolio" id="portfolio"> {/* Main container for the Portfolio component */}
      {/* heading */}
      <span style={{ color: darkMode ? "yellow" : "" }}>Recent Projects</span> {/* Conditional styling based on darkMode */}
      <span>Portfolio</span> {/* Displaying the "Portfolio" text */}

      {/* Slider */}
      <Swiper
        spaceBetween={70}
        slidesPerView={2}
        grabCursor={true}
        slidesOffsetBefore={2}
        slidesOffsetAfter={2}
        className="portfolio-slider" // Adding a class for custom styling the slider
      >
        {/* Slides */}
        <SwiperSlide>
          <a href="https://ashish-alok.vercel.app/" target="_blank" rel="noopener noreferrer">
            <img src={Sidebar} alt="Sidebar" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://sundar-pichai.vercel.app/" target="_blank" rel="noopener noreferrer">
            <img src={Sundar} alt="Sundar" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://alok2006030.github.io/OIBSIP/OIB_Task_1/" target="_blank" rel="noopener noreferrer">
            <img src={MusicApp} alt="MusicApp" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://alok2006030.github.io/OIBSIP/OIB_Task_3/" target="_blank" rel="noopener noreferrer">
            <img src={ToDo} alt="ToDo" />
          </a>
        </SwiperSlide>
      
      </Swiper>
    </div>
  );
};

export default Portfolio; // Exporting the Portfolio component to use it in other parts of the application
