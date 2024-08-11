import { Navbar } from "./Utility";
import main1 from "../assets/utility/alphagroup.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Footer from "../components/Footer";

const AlphaGroup = () => {
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
                className="w-full lg:h-[700px] lg:object-cover lg:object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black lg:bg-gradient-to-r md:to-black " />
              <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black lg:bg-gradient-to-b md:to-black " />
            </div>
            <div className=" flex flex-col gap-3">
              <h3 className=" font-d-din-bold text-white uppercase text-[24px] md:text-[30px] lg-text-[40px] text-center">
                alpha group
              </h3>
              <p className=" font-d-din-regular text-white text-[15px] text-center md:text-[20px] sm:text-[16px] lg:text-[25px] pl-2 pr-2">
                Staking represents a fundameWelcome to MARS Signals – Your
                Gateway to Exclusive Crypto Insights!
              </p>
              <div className=" flex flex-col gap-2">
                <a href="https://t.me/GatewayToMars_Portal" target="_blank">
                  <div className=" flex gap-3 items-center justify-center ">
                    <h3 className=" text-white font-d-din-regular uppercase text-[16px] md:text-[25px] lg-text-[30px]">
                      START WINNING
                    </h3>
                    <ArrowRightAltIcon className=" text-white" />
                  </div>
                </a>
                <div className=" bg-[#C2DAF2] w-[150px] lg:w-[200px] h-[2px] mx-auto" />
              </div>
            </div>
          </div>
          {/* ----------------------------------------------------------------- */}
          <div className=" flex flex-col gap-2 p-4 md:p-8 lg:p-24">
            <h3 className=" text-white uppercase font-d-din-bold text-[20px] md:text-[25px] lg-text-[40px] ">
              Overview
            </h3>
            <p className=" text-white font-d-din-regular text-[14px] md:text-[20px] sm:text-[16px] lg:text-[25px] text-left">
              Unlock the power of cutting-edge technology and expert analysis
              with MARS Signals. We're your premier destination for curated
              cryptocurrency signals backed by specialized Gem hunters, advanced
              AI aggregation, and Insider Risk analysis.
            </p>
          </div>
          <div className="w-full h-[1px] bg-gradient-to-r from-[#7A8A99] to-[#000000]" />
          {/* ------------------------------------------------------------------------------ */}
          <div className=" flex flex-col gap-2 p-4 md:p-8 lg:p-24">
            <h3 className=" text-white uppercase font-d-din-bold text-[20px] md:text-[25px] lg-text-[40px] ">
              Discover Featured Cryptocurrencies
            </h3>
            <p className=" text-white font-d-din-regular text-[14px] md:text-[20px] sm:text-[16px] lg:text-[25px] text-left">
              One of the primary attractions of staking $MARS is the opportunity
              to earn passive Annual Percentage Yield (APY).
            </p>
          </div>
          <div className="w-full h-[1px] bg-gradient-to-r from-[#7A8A99] to-[#000000]" />
          {/* ------------------------------------------------------------------------------------- */}
          <div className=" flex flex-col gap-2 p-4 md:p-8 lg:p-24">
            <h3 className=" text-white uppercase font-d-din-bold text-[20px] md:text-[25px] lg-text-[40px] ">
              Elevate Your Trading Strategy
            </h3>
            <p className=" text-white font-d-din-regular text-[14px] md:text-[20px] sm:text-[16px] lg:text-[25px] text-left">
              At MARS Signals, we go beyond surface-level analysis. Our platform
              utilizes alpha wallets and Kol wallets to provide a comprehensive
              risk score for each cryptocurrency. Empowering you with actionable
              insights to refine your trading strategy and minimize risk.
            </p>
          </div>
          <div className="w-full h-[1px] bg-gradient-to-r from-[#7A8A99] to-[#000000]" />
          {/* ------------------------------------------------------------------------------------------- */}
          <div className=" flex flex-col gap-2 p-4 md:p-8 lg:p-24">
            <h3 className=" text-white uppercase font-d-din-bold text-[20px] md:text-[25px] lg-text-[40px] ">
              Gain Access Today
            </h3>
            <p className=" text-white font-d-din-regular text-[14px] md:text-[20px] sm:text-[16px] lg:text-[25px] text-left">
              Joining our community is simple. Hold a minimum of $1000 worth of
              MARS tokens and utilize our Collab Bot to verify your holdings.
              Once verified, you'll receive an exclusive invite link granting
              you access to our premium signals channel.
            </p>
            <div className=" mt-10 flex flex-col gap-3">
              <h3 className="text-[#3CFF4F] uppercase font-d-din-bold text-[20px] md:text-[25px] lg-text-[40px]">
                Why wait, ANON?
              </h3>
              <a href="https://t.me/GatewayToMars_Portal" target="_blank">
                <div className=" flex gap-3 items-center">
                  <h3 className=" text-white font-d-din-regular uppercase text-[20px] md:text-[25px] lg-text-[40px]">
                    START WINNING
                  </h3>
                  <ArrowRightAltIcon className=" text-white" />
                </div>
              </a>
              <div className=" bg-[#C2DAF2] w-[180px] h-[2px]" />
            </div>
          </div>

          {/* ------------------------------------------------------------------------------------------------------------------------ */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AlphaGroup;
