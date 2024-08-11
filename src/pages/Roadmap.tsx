import { Navbar } from "./Utility";
import main1 from "../assets/roadmap/1.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import loader1 from "../assets/landing/Icons/loader1.svg";
import rocket2 from "../assets/roadmap/3.png";
import rocket1 from "../assets/roadmap/2.png";
import Footer from "../components/Footer";
const Roadmap = () => {
  return (
    <div>
      <div className=" min-h-screen bg-black max-w-full">
        <Navbar />
        {/* ---------------------- */}
        <div className=" flex flex-col gap-4">
          <div>
            <div className=" relative">
              <img
                src={main1}
                className=" w-full lg:h-[700px] lg:object-cover lg:object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black " />
            </div>
            <div className=" flex flex-col gap-3">
              <h3 className=" font-d-din-bold text-white uppercase text-[24px] md:text-[30px] lg-text-[40px] text-center">
                roadmap
              </h3>
              <p className=" font-d-din-regular text-white text-[15px] text-center md:text-[20px] sm:text-[16px] lg:text-[25px] pl-2 pr-2">
                Colonize Mars isn't just a meme coin – it's a movement fueled by
                the power of community.
              </p>
              <div className=" flex flex-col gap-2">
                <a href="" target="_blank">
                  <div className=" flex gap-3 items-center mt-5 justify-center ">
                    <h3 className=" text-white font-d-din-regular uppercase text-[20px] md:text-[25px] lg-text-[30px]">
                      BUY $MARS
                    </h3>
                    <ArrowRightAltIcon className=" text-white" />
                  </div>
                </a>
                <div className=" bg-[#C2DAF2] w-[180px] h-[2px] mx-auto" />
              </div>
            </div>
          </div>
          {/* ----------------------------------------------------------------- */}
          <div className=" flex flex-col gap-2 p-4 md:p-8 lg:p-24">
            <h3 className=" text-white uppercase font-d-din-bold text-[20px] md:text-[25px] lg-text-[30px] ">
              Overview
            </h3>
            <p className=" text-white font-d-din-regular text-[14px] md:text-[20px] sm:text-[16px] lg:text-[25px] text-left">
              Colonize Mars recognizes the vital role of marketing and community
              engagement in the project's success. By fostering an active and
              interconnected community, Colonize Mars aims to create a supportive
              ecosystem where users feel valued, engaged, and informed.
            </p>
          </div>
          <div className="w-full h-[1px] bg-gradient-to-r from-[#7A8A99] to-[#000000] sm:hidden " />
          {/* --------------------------------------------------------------------------------- */}
          <div className=" relative  md:h-screen">
            <div className=" absolute inset-0 ">
              <img
                src={rocket2}
                className=" object-cover w-full h-[602px] sm:hidden object-top  "
              />
            </div>

            <div className=" absolute inset-0 ">
              <img
                src={rocket1}
                className=" object-cover w-full h-[602px] hidden sm:block object-top opacity-30 md:h-[690px] lg:h-screen xl:h-screen"
              />
            </div>

            <div className=" flex flex-col items-start p-2 sm:p-5 md:p-10 lg:p-20 min-h-[602px] ">
              {/* ------------------------------------------ */}
              <div className=" relative">
                {/* -------------------------------- */}
                <div className=" absolute inset-0 left-[11px] top-[7px]">
                  <div className=" h-full w-[2px] bg-gradient-to-b from-[#7A8A99] to-[#000000]" />
                </div>

                {/* -------------------------- */}
                <div className=" flex flex-col gap-3 sm:gap-5  ">
                  <div className=" flex gap-4  ">
                    <div>
                      <img
                        src={loader1}
                        className=" w-[25px] h-auto relative top-1 "
                      />
                    </div>
                    <div>
                      <h3 className=" font-d-din-bold text-[#C2DAF2] text-[20px] md:text-[24px] lg:text-[28px]  ">
                        PHASE 1
                      </h3>
                      <div className=" flex flex-col gap-2">
                        <p className=" font-d-din-regular text-white text-[16px] md:text-[20px] lg:text-[24px] xl:text-[28px]:w-[500px] md:w-[600px] lg:w-[700px] xl:w-[800px] 2xl:w-[850px]">
                          Merch store I Betting I Partnerships I Marketing.
                        </p>
                        <div className=" bg-gradient-to-r from-[#7A8A99] via-black  to-[#000000] w-full h-[1px]" />
                      </div>
                    </div>
                  </div>

                  <div className=" flex gap-4 ">
                    <div>
                      <img
                        src={loader1}
                        className=" w-[25px] h-auto relative top-1"
                      />
                    </div>
                    <div>
                      <h3 className=" font-d-din-bold text-[#C2DAF2] text-[20px] md:text-[24px] lg:text-[28px]  ">
                        PHASE 2
                      </h3>
                      <div className=" flex flex-col gap-2">
                        <p className=" font-d-din-regular text-white text-[16px] md:text-[20px] lg:text-[24px]  w-[300px] sm:w-[500px] md:w-[600px] lg:w-[700px] xl:w-[800px] 2xl:w-[850px]">
                          Rev share I Partnerships I Marketing 2.0 I
                          New Elon video I Tournaments/competitions I CEX listing.
                        </p>
                        <div className=" bg-gradient-to-r from-[#7A8A99] via-black  to-[#000000] w-full h-[1px]" />
                      </div>
                    </div>
                  </div>

                  <div className=" flex gap-4 ">
                    <div>
                      <img
                        src={loader1}
                        className=" w-[25px] h-auto relative top-1"
                      />
                    </div>
                    <div>
                      <h3 className=" font-d-din-bold text-[#C2DAF2] text-[20px] md:text-[24px] lg:text-[28px]  ">
                        PHASE 3
                      </h3>
                      <div className=" flex flex-col gap-2">
                        <p className=" font-d-din-regular text-white text-[16px] md:text-[20px] lg:text-[24px]  w-[300px] sm:w-[500px] md:w-[600px] lg:w-[700px] xl:w-[800px] 2xl:w-[850px]">
                          AI #Alpha Signals I Buybacks & Burns I Partnerships I
                          Viral Marketing I CEX listing I Colonize Mars Memewar.
                        </p>
                        <div className=" bg-gradient-to-r from-[#7A8A99] via-black  to-[#000000] w-full h-[1px]" />
                      </div>
                    </div>
                  </div>

                  <div className=" flex gap-4 ">
                    <div>
                      <img
                        src={loader1}
                        className=" w-[25px] h-auto relative top-1"
                      />
                    </div>
                    <div>
                      <h3 className=" font-d-din-bold text-[#C2DAF2] text-[20px] md:text-[24px] lg:text-[28px]  ">
                        PHASE 4
                      </h3>
                      <div className=" flex flex-col gap-2">
                        <p className=" font-d-din-regular text-white text-[16px] md:text-[20px] lg:text-[24px]  w-[300px] sm:w-[500px] md:w-[600px] lg:w-[700px] xl:w-[800px] 2xl:w-[850px]">
                          Buybacks & Burns I NFT Release I Real World Marketing I
                          Burn Liquidity I Elon vs. Alien, Game Release I T1 Cex
                          listing.
                        </p>
                        <div className=" bg-gradient-to-r from-[#7A8A99] via-black  to-[#000000] w-full h-[1px]" />
                      </div>
                    </div>
                  </div>

                  <div className=" flex gap-4 ">
                    <div>
                      <img
                        src={loader1}
                        className=" w-[25px] h-auto relative top-1"
                      />
                    </div>
                    <div>
                      <h3 className=" font-d-din-bold text-[#C2DAF2] text-[20px] md:text-[24px] lg:text-[28px]  ">
                        PHASE 5
                      </h3>
                      <div className=" flex flex-col gap-2">
                        <p className=" font-d-din-regular text-white text-[16px] md:text-[20px] lg:text-[24px]  w-[300px] sm:w-[500px] md:w-[600px] lg:w-[700px] xl:w-[800px] 2xl:w-[850px]">
                          Buybacks & Burns I HUGE giveaway I Partnerships I
                          Guerilla marketing.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Roadmap;
