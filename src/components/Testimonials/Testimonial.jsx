import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "The website's design is superb, with a clean layout, intutive navigation, and fast load times. It offers engaging visuals, consistent branding, and accessibility, setting a high standard for web design.",
    },
    {
      img: profilePic2,
      review:
        "The website's design is excellent, combining elegance and functionality. It features a sleek layout, easy navigation, and quick load times. Visually appealing, consistently branded, and accessible, it sets a benchmark for web design.",
    },
    {
      img: profilePic3,
      review:
      "The website impresses with its seamless blend of style and usability. Highlights include a modern layout, user-friendly navigation, and fast performance. Engaging visuals, consistent branding, and accessibility set it apart.",
    },
    {
      img: profilePic4,
      review:
      "The website's design is impressive, combining style and usability. Highlights include a modern layout, easy navigation, and fast performance. Engaging visuals and strong accessibility make it stand out.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
