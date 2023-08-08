// Import necessary modules and components
import React, { useContext } from "react";
import "./Portfolio.css"; // Importing the CSS file for styling
import { Swiper, SwiperSlide } from "swiper/react"; // Importing Swiper components for the slider
import "swiper/css"; // Importing Swiper's CSS
import Sidebar from "../../img/sidebar.png"; // Importing images for the slider
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
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
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider" // Adding a class for custom styling the slider
      >
        {/* Slides */}
        <SwiperSlide>
          <img src={Sidebar} alt="" /> {/* Slide 1 - Displaying the Sidebar image */}
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" /> {/* Slide 2 - Displaying the Ecommerce image */}
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" /> {/* Slide 3 - Displaying the MusicApp image */}
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC} alt="" /> {/* Slide 4 - Displaying the HOC image */}
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio; // Exporting the Portfolio component to use it in other parts of the application
