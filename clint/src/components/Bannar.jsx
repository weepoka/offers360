import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SamplePrevArrow from "./SamplePrevArrow";
import SampleNextArrow from "./SampleNextArrow";
const Bannar = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="container mx-auto mx-0">
      <Slider {...settings}>
        <div>
          <img src="./assets/bannar.jpg" alt="" />
        </div>
        <div>
          <img src="./assets/bannar.jpg" alt="" />
        </div>
        <div>
          <img src="./assets/bannar.jpg" alt="" />
        </div>
        <div>
          <img src="./assets/bannar.jpg" alt="" />
        </div>
        <div>
          <img src="./assets/bannar.jpg" alt="" />
        </div>
        <div>
          <img src="./assets/bannar.jpg" alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default Bannar;
