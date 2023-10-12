import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "./Axios";
import api from "./ServerLink";
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
  const [bannar, setBannar] = useState([]);
  const fatchData = async () => {
    try {
      let data = await axios.get("/api/banner/allbannar");
      setBannar(data.data.reverse());
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fatchData();
  });
  return (
    <div className="container mx-auto">
      <Slider {...settings}>
        {bannar.map((item) => (
          <div className="md:h-[500px] h-[300px]">
            <a href={item.link} target="_blank">
              <img
                className="w-full h-full"
                src={`${api}${item.img}`}
                alt={item.img}
              />
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Bannar;
