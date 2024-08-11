import Button from "../components/landing/Button";
// import main1 from "../assets/landing/1.png";
import bgVideo from "../assets/landing/Mars intro.mp4"
import Navbar from "../components/landing/Navbar";
import twitteIcon from "../assets/landing/Icons/akar-icons_twitter-fill.png";
import telegramIcon from "../assets/landing/Icons/teenyicons_telegram-solid.png";
import { useState } from "react";
import Colonize from "../components/landing/Colonize";
import WhatIsIt from "../components/landing/WhatIsIt";
import WhyGTM from "../components/landing/WhyGTM";
import Partners from "../components/landing/Partners";
import Ecosystem from "../components/landing/Ecosystem";
import BuyGTM from "../components/landing/BuyGTM";
import Overview from "../components/landing/Overview";
import HowItWorks from "../components/landing/HowItWorks";
import Footer from "../components/Footer";
import ElonSays from "../components/landing/ElonSays";

// import ElonAlien from "../assets/landing/ElonAlien.svg";
const Landing = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const icons = [
    {
      key: 1,
      logo: twitteIcon,
      url: "https://twitter.com/ColonizeMars_",
    },
    {
      key: 2,
      logo: telegramIcon,
      url: "https://t.me/MARS_PORTAL_SOL",
    },
  ];
  return (
    <div className=" bg-black">
      <div className=" relative bg-[#000000] min-h-screen">
        <div className=" relative lg:z-10">
          {/*           <img src={main1} className={`w-full lg:h-screen lg:object-cover`} /> */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={bgVideo} type="video/mp4" />
            {/* Add additional source tags for other video formats if needed */}
          </video>
          {/* <video className=" w-full lg:h-screen lg:object-cover "   loop>
              <source src={bgVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video> */}
          {/* <video src={bgVideo} className=""/> */}
          <Navbar toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
          {/* <div className=" absolute inset-0  flex flex-col  justify-end mb-1 left-10 sm:mb-[60px] md:mb-[80px] ">
            <img src={ElonAlien} className=" opacity-20 w-[30px] h-auto " />
          </div> */}
          {/* ------------------------------------------------------------------------------ */}
          <div className="  xl:hidden  ">
            <div className=" flex sm:gap-3 gap-2  absolute inset-0 justify-center items-end sm:mb-3 mb-1  z-10">
              {icons.map((icon) => (
                <a href={icon.url} target="_blank">
                  <div className=" border rounded-full h-[24px] w-[24px] sm:h-[35px] sm:w-[35px] flex items-center justify-center ">
                    <img
                      src={icon.logo}
                      className=" sm:w-[23px] sm:h-[23px] w-[13px] h-[13px] m-auto"
                      key={icon.key}
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
          {/* --------------------------------------------------------------------------- */}
          <Button />
          {/* ---------------------------------------------------------------------------------------------- */}
        </div>
        <div className=" flex flex-col ">
          <Colonize />
          <WhatIsIt />
          <WhyGTM />
          <Partners />
          <Ecosystem />
          <div className=" flex flex-col gap-10 xl:gap-40">
            <BuyGTM />
            <div className="w-full h-[1px] bg-gradient-to-r from-[#7A8A99] to-[#000000] lg:hidden" />

            <Overview />
            <div className="w-full h-[1px] bg-gradient-to-r from-[#7A8A99] to-[#000000] lg:hidden" />

            <HowItWorks />
            <ElonSays />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
