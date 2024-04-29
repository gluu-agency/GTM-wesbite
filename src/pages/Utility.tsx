import logo2 from "../assets/vision/gateway to MARS.png";
import main1 from "../assets/utility/1.png";
import logo1 from "../assets/utility/Logo 2.png";
import logo3 from "../assets/utility/logo3.svg";
import closeIcon from "../assets/utility/Shape.png";
import navArrow from "../assets/utility/navArrow.png";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo4 from "../assets/vision/gateway to MARS.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import currentNavIcon from "../assets/utility/current_nav.png";
import main2 from "../assets/utility/2.png";
import main3 from "../assets/utility/3(1).png";
import main4 from "../assets/utility/alphagroup.png";
import main5 from "../assets/utility/moonfund.png";
import Footer from "../components/Footer";
// import frame2 from "../assets/utility/frame2.png";

// import main3 from "../assets/utility/3(1).png";
const Utility = () => {
  return (
    <div>
      <div className=" bg-[#000000] min-h-screen max-w-full flex flex-col gap-20 ">
        <Navbar />
        <div className=" flex flex-col gap-12 sm:gap-20 lg:gap-40">
          <div className=" flex flex-col lg:flex-row-reverse lg:items-center xl:gap-[100px] lg:gap-[50px]">
            <div className="relative">
              <img
                src={main1}
                className=" w-full xl:w-[950px] xl:h-[600px] lg:w-[600px] lg:h-[400px]"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black lg:bg-gradient-to-r lg:from-black lg:via-transparent lg:to-transparent" />
            </div>
            <div className=" xl:w-1/2 xl:pl-20 lg:p-8 lg:w-1/2 flex flex-col xl:gap-3 ">
              <h3 className=" text-white font-d-din-bold text-[24px] md:text-[30px] lg:text-[40px] uppercase text-center lg:text-left">
                staking
              </h3>
              <p className=" text-white font-d-din-regular text-[15px] text-center md:text-[20px] sm:text-[16px] lg:text-[25px] pl-2 pr-2 lg:text-left lg:pr-0 lg:pl-0">
                Each $GTM holder will be allowed to claim & stake their $GTM
                tokens with the official $GTM staking pool. The APY earned from
                staking $GTM will fluctuate based on the amount of stakers in
                the pool. This is what we refer to as "Dynamic MARS Staking".
              </p>
              <div className=" flex flex-col gap-2">
                <div className=" flex gap-3 items-center mt-5 justify-center  lg:justify-normal">
                  <Link to="/utility/staking">
                    <h3 className=" text-white font-d-din-regular uppercase text-[20px] md:text-[25px] lg-text-[30px]">
                      KNOW MORE
                    </h3>
                  </Link>
                  <ArrowRightAltIcon className=" text-white" />
                </div>
                <div className=" bg-[#C2DAF2] w-[180px] h-[2px] mx-auto lg:mx-0" />
              </div>
            </div>
          </div>
          {/* ------------------------------------------------------- */}
          <div className=" flex flex-col lg:flex-row lg:items-center xl:gap-[100px] lg:gap-[50px]">
            <div className="relative">
              <img
                src={main2}
                className=" w-full xl:w-[850px] xl:h-auto lg:w-[600px] lg:h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black lg:bg-gradient-to-l lg:from-black lg:via-transparent lg:to-transparent lg:hidden" />
            </div>
            <div className=" xl:w-1/2 xl:pl-20 lg:p-8 lg:w-1/2 flex flex-col xl:gap-3 ">
              <h3 className=" text-white font-d-din-bold text-[24px] md:text-[30px] lg:text-[40px] uppercase text-center lg:text-left">
                arcade betting
              </h3>
              <p className=" text-white font-d-din-regular text-[15px] text-center md:text-[20px] sm:text-[16px] lg:text-[25px] pl-2 pr-2 lg:text-left lg:pr-0 lg:pl-0">
                Our games are designed for everyone to enjoy, focusing on simple
                and pure fun rather than complex skill-based mechanics. Join a
                lobby of your choice and face off against other players. The
                winner takes home a whopping 90% of the stakes.
              </p>
              <div className=" flex flex-col gap-2">
                <div className=" flex gap-3 items-center mt-5 justify-center  lg:justify-normal">
                  <Link to="/utility/arcade">
                    <h3 className=" text-white font-d-din-regular uppercase text-[20px] md:text-[25px] lg-text-[30px]">
                      KNOW MORE
                    </h3>
                  </Link>
                  <ArrowRightAltIcon className=" text-white" />
                </div>
                <div className=" bg-[#C2DAF2] w-[180px] h-[2px] mx-auto lg:mx-0" />
              </div>
            </div>
          </div>
          {/* ------------------------------------------------------------------------------- */}
          <div className=" flex flex-col lg:flex-row-reverse lg:items-center xl:gap-[100px] lg:gap-[50px]">
            <div className="relative xl:mr-20 lg:mr-10">
              <img
                src={main3}
                className=" w-full xl:w-[700px] xl:h-auto lg:w-[600px] lg:h-auto lg:rounded-full "
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black lg:bg-gradient-to-r lg:from-black lg:via-transparent lg:to-black" />
            </div>
            <div className=" xl:w-1/2 xl:pl-20 lg:p-8 lg:w-1/2 flex flex-col xl:gap-3 ">
              <h3 className=" text-white font-d-din-bold text-[24px] md:text-[30px] lg:text-[40px] uppercase text-center lg:text-left">
                MERCH STORE
              </h3>
              <p className=" text-white font-d-din-regular text-[15px] text-center md:text-[20px] sm:text-[16px] lg:text-[25px] pl-2 pr-2 lg:text-left lg:pr-0 lg:pl-0">
                Merchandise stores are often mentioned but rarely delivered in
                the crypto world. Colonize Mars not only shares profits from its
                own Merch Store with holders but extends this to other partnered
                Merch Stores.
              </p>
            </div>
          </div>
          {/* ----------------------------------------------------------------------------------------- */}
          <div className=" flex flex-col lg:flex-row lg:items-center xl:gap-[100px] lg:gap-[50px]">
            <div className="relative">
              <img
                src={main4}
                className=" w-full xl:w-[950px] xl:h-[600px] lg:w-[600px] lg:h-[400px]"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black lg:bg-gradient-to-l lg:from-black lg:via-transparent lg:to-transparent" />
            </div>
            <div className=" xl:w-1/2 xl:pl-20 lg:p-8 lg:w-1/2 flex flex-col xl:gap-3 ">
              <h3 className=" text-white font-d-din-bold text-[24px] md:text-[30px] lg:text-[40px] uppercase text-center lg:text-left">
                alpha group
              </h3>
              <p className=" text-white font-d-din-regular text-[15px] text-center md:text-[20px] sm:text-[16px] lg:text-[25px] pl-2 pr-2 lg:text-left lg:pr-0 lg:pl-0">
                GTM Signals isn't your average trading bot – it's a powerful
                tool infused with the expertise of real gem hunters. Our
                platform scours the markets for the best alpha signals,
                providing you with the insights you need to make informed
                trading decisions.
              </p>
              <div className=" flex flex-col gap-2">
                <div className=" flex gap-3 items-center mt-5 justify-center  lg:justify-normal">
                  <Link to="/utility/alphagroup">
                    <h3 className=" text-white font-d-din-regular uppercase text-[20px] md:text-[25px] lg-text-[30px]">
                      KNOW MORE
                    </h3>
                  </Link>
                  <ArrowRightAltIcon className=" text-white" />
                </div>
                <div className=" bg-[#C2DAF2] w-[180px] h-[2px] mx-auto lg:mx-0" />
              </div>
            </div>
          </div>
          {/* ---------------------------------------------------- */}
          <div className=" flex flex-col lg:flex-row-reverse lg:items-center xl:gap-[100px] lg:gap-[50px]">
            <div className="relative">
              <img
                src={main5}
                className=" w-full xl:w-[950px] xl:h-[600px] lg:w-[600px] lg:h-[400px]"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black lg:bg-gradient-to-r lg:from-black lg:via-transparent lg:to-transparent" />
            </div>
            <div className=" xl:w-1/2 xl:pl-20 lg:p-8 lg:w-1/2 flex flex-col xl:gap-3 ">
              <h3 className=" text-white font-d-din-bold text-[24px] md:text-[30px] lg:text-[40px] uppercase text-center lg:text-left">
                moon fund
              </h3>
              <p className=" text-white font-d-din-regular text-[15px] text-center md:text-[20px] sm:text-[16px] lg:text-[25px] pl-2 pr-2 lg:text-left lg:pr-0 lg:pl-0">
                Within every buy and sell, 2% is allocated to MoonFund,
                strategically dedicated to fostering partnerships and elevating
                our cosmic presence through marketing endeavors. Every
                contribution to MoonFund serves the interests of its holders,
                enhancing the lunar experience.
              </p>
              <div className=" flex flex-col gap-2 mb-10 ">
                <a href="" target="_blank">
                  <div className=" flex gap-3 items-center mt-5 justify-center  lg:justify-normal ">
                    <h3 className=" text-white font-d-din-regular uppercase text-[20px] md:text-[25px] lg-text-[30px]">
                      KNOW MORE
                    </h3>
                    <ArrowRightAltIcon className=" text-white" />
                  </div>
                </a>
                <div className=" bg-[#C2DAF2] w-[180px] h-[2px] mx-auto lg:mx-0" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Utility;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  return (
    <div>
      {isOpen ? (
        <div className=" p-5 pr-5 flex flex-col gap-5 xl:hidden">
          <div className=" flex items-center justify-between ">
            <img src={logo3} className=" p-3" />
            <button className="" onClick={() => setIsOpen(false)}>
              <img src={closeIcon} className=" h-[20px] w-[20px]" />
            </button>
          </div>
          <div className=" flex flex-col gap-4">
            <div className=" flex flex-col gap-2">
              <div className=" flex flex-col">
                {isActive("/") ? (
                  <img
                    src={navArrow}
                    className=" w-[70px] h-[10px] relative top-3"
                  />
                ) : (
                  <></>
                )}
                <Link to="/">
                  <h3
                    className={
                      isActive("/")
                        ? " text-[#FFFFFF] font-d-din-bold text-[20px] text-right"
                        : " text-[#8FA1B3] font-d-din-bold text-[20px] text-right"
                    }
                  >
                    HOME
                  </h3>
                </Link>
              </div>
              <div className=" bg-[#7A8A99] w-full mx-auto h-[1px]" />
            </div>
            <div className=" flex flex-col gap-2">
              <div className=" flex flex-col">
                {isActive("/vision") ? (
                  <img
                    src={navArrow}
                    className=" w-[70px] h-[10px] relative top-3"
                  />
                ) : (
                  <></>
                )}
                <Link to="/vision">
                  <h3
                    className={
                      isActive("/vision")
                        ? " text-[#FFFFFF] font-d-din-bold text-[20px] text-right"
                        : " text-[#8FA1B3] font-d-din-bold text-[20px] text-right"
                    }
                  >
                    VISION
                  </h3>
                </Link>
              </div>
              <div className=" bg-[#7A8A99] w-full mx-auto h-[1px]" />
            </div>
            <div className=" flex flex-col gap-2">
              <div className=" flex flex-col">
                {isActive("/utility") ? (
                  <img
                    src={navArrow}
                    className=" w-[70px] h-[10px] relative top-3"
                  />
                ) : (
                  <></>
                )}
                <Link to="/utility">
                  <h3
                    className={
                      isActive("/utility")
                        ? " text-[#FFFFFF] font-d-din-bold text-[20px] text-right"
                        : " text-[#8FA1B3] font-d-din-bold text-[20px] text-right"
                    }
                  >
                    UTILITY
                  </h3>
                </Link>
              </div>
              <div className=" bg-[#7A8A99] w-full mx-auto h-[1px]" />
            </div>
            <div className=" flex flex-col gap-2">
              <div className=" flex flex-col">
                {isActive("/roadmap") ? (
                  <img
                    src={navArrow}
                    className=" w-[70px] h-[10px] relative top-3"
                  />
                ) : (
                  <></>
                )}
                <Link to="/roadmap">
                  <h3
                    className={
                      isActive("/roadmap")
                        ? " text-[#FFFFFF] font-d-din-bold text-[20px] text-right"
                        : " text-[#8FA1B3] font-d-din-bold text-[20px] text-right"
                    }
                  >
                    ROADMAP
                  </h3>
                </Link>
              </div>
              <div className=" bg-[#7A8A99] w-full mx-auto h-[1px]" />
            </div>
            <div className=" flex flex-col gap-2">
              <div className=" flex flex-col">
                {isActive("/passengers") ? (
                  <img
                    src={navArrow}
                    className=" w-[70px] h-[10px] relative top-3"
                  />
                ) : (
                  <></>
                )}
                <Link to="/passengers">
                  <h3
                    className={
                      isActive("/passengers")
                        ? " text-[#FFFFFF] font-d-din-bold text-[20px] text-right"
                        : " text-[#8FA1B3] font-d-din-bold text-[20px] text-right"
                    }
                  >
                    PASSENGERS
                  </h3>
                </Link>
              </div>
              <div className=" bg-[#7A8A99] w-full mx-auto h-[1px]" />
            </div>
          </div>
        </div>
      ) : (
        <div className=" flex items-center justify-between p-5 pt-8 xl:hidden">
          <Link to="/">
            <div className=" flex items-center gap-3 ">
              <img
                src={logo1}
                className=" h-[25px] w-[20px] md:h-[40px] md:w-[35px]"
              />
              <img src={logo2} className=" h-[15px]  md:h-[25px] w-[250px]" />
            </div></Link>
          <button onClick={() => setIsOpen(true)}>
            <div className=" flex flex-col gap-[7px]">
              <div className=" bg-[#C2DAF2] h-[3px] w-[30px] rounded-md" />
              <div className=" bg-[#C2DAF2] h-[3px] w-[30px] rounded-md" />
            </div>
          </button>
        </div>
      )}
      <div className=" hidden xl:block">
        <div className=" flex items-center pt-16">
          <div className=" mx-auto flex items-center gap-[100px] pr-8 pl-8 lg:gap-[100px] md:gap-[100px]">
            <div className=" flex flex-col items-center relative w-[150px] ">
              <Link to="/vision">
                <h3 className=" uppercase font-d-din-bold text-[25px] xl:text-[30px] text-white">
                  vision
                </h3>
              </Link>

              {isActive("/vision") && (
                <img
                  src={currentNavIcon}
                  className=" absolute top-6 w-[130px] z-10"
                />
              )}
            </div>

            <div className=" flex flex-col items-center relative w-[150px] ">
              <Link to="/utility">
                <h3 className=" uppercase font-d-din-bold text-[25px] xl:text-[30px] text-white">
                  utility
                </h3>
              </Link>

              {isActive("/utility") && (
                <img
                  src={currentNavIcon}
                  className=" absolute top-6 w-[130px] z-10"
                />
              )}
            </div>
            <Link to="/">
              <div>
                <img src={logo4} />
              </div>
            </Link>

            <div className=" flex flex-col items-center relative w-[180px]  ">
              <Link to="/roadmap">
                <h3 className=" uppercase font-d-din-bold text-[25px] xl:text-[30px] text-white">
                  roadmap
                </h3>
              </Link>

              {isActive("/roadmap") && (
                <img
                  src={currentNavIcon}
                  className=" absolute top-3 w-[180px] z-10"
                />
              )}
            </div>
            <div className=" flex flex-col items-center relative w-[200px] ">
              <Link to="/passengers">
                <h3 className=" uppercase font-d-din-bold text-[25px] xl:text-[30px] text-white">
                  passengers
                </h3>
              </Link>
              {isActive("/passengers") && (
                <img
                  src={currentNavIcon}
                  className=" absolute top-3 w-[180px] z-10 right-5"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export { Navbar };
