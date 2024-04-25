import gluLogo from "../../assets/landing/partners/glu.png";
import solanaLogo from "../../assets/landing/partners/solana.png";
import ethereumLogo from "../../assets/landing/partners/ethereum.png";
import baseLogo from "../../assets/landing/partners/base.png";
import printfulLogo from "../../assets/landing/partners/printful.png";
import backdrop1 from "../../assets/landing/partners/backdrop1.png";
import backdrop2 from "../../assets/landing/partners/backdrop2.png";
import backdrop3 from "../../assets/landing/partners/backdrop3.png";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Partners: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className=" lg:h-[800px] bg-[#ffffff] mt-10 ">
      <div className=" flex flex-col gap-5 ">
        <div className=" flex justify-around mt-10">
          <h3 className=" font-d-din-bold text-[#8FA1B3] text-[28px] uppercase sm:text-[32px] md:text-[36px] lg:text-[50px] xl:text-[60px] 2xl:text-[65px] lg:ml-[50px]  ">
            Partners
          </h3>
          <img src={backdrop1} className=" w-1/4 max-w-[354px] h-auto" />
        </div>
        {/* ------------------------------- */}
        <div className="container mx-auto px-4">
          <Slider {...settings} className=" flex flex-col items-center">
            <div>
              <img src={gluLogo} className="w-1/7 h-auto object-cover" />
            </div>
            <div>
              <img src={ethereumLogo} className="w-1/5 object-cover" />
            </div>
            <div>
              <img src={solanaLogo} className="w-1/5 object-cover" />
            </div>
            <div>
              <img src={baseLogo} className="w-1/5 object-cover" />
            </div>
            <div>
              <img src={printfulLogo} className="w-1/5 object-cover" />
            </div>
          </Slider>
        </div>
        {/* ------------------ */}
        <div className=" flex justify-between items-center">
          <img src={backdrop2} className=" w-1/4 max-w-[354px] h-auto" />
          <img src={backdrop3} className=" w-1/5 max-w-[120px] h-auto " />
        </div>
      </div>
    </div>
  );
};

export default Partners;
