import { Navbar } from "./Utility";
import main1 from "../assets/utility/stake 2.png";
import main2 from "../assets/utility/stake3.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import backdrop from "../assets/utility/staking-backdrop.svg";
import Footer from "../components/Footer";
const Staking = () => {
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
                Staking
              </h3>
              <p className=" font-d-din-regular text-white text-[15px] text-center md:text-[20px] sm:text-[16px] lg:text-[25px] pl-2 pr-2">
                Staking represents a fundamental component of the ColonizeMars
                ecosystem.
              </p>
              {/* <UnderlineButton /> */}
              <div className=" flex flex-col gap-2">
                <div className=" flex gap-3 items-center justify-center ">
                  <a
                    href="https://www.team.finance/view-coin/0xE8B1e79D937c648Ce1fE96e6739ddb2714058a18?name=ColonizeMars&symbol=GTM&chainid=0x1"
                    target="blank"
                  >
                    <h3 className=" text-white font-d-din-regular uppercase text-[16px] md:text-[25px] lg-text-[30px]">
                      Start Staking
                    </h3>
                  </a>
                  <ArrowRightAltIcon className=" text-white" />
                </div>
                <div className=" bg-[#C2DAF2] w-[150px] lg:w-[200px] h-[2px] mx-auto" />
              </div>
            </div>
          </div>
          {/* ----------------------------------------------------------------- */}
          <div className=" flex flex-col gap-2 p-4 md:p-8 lg:p-24">
            <h3 className=" text-white uppercase font-d-din-bold text-[20px] md:text-[25px] lg-text-[30px] ">
              Overview
            </h3>
            <p className=" text-white font-d-din-regular text-[14px] md:text-[20px] sm:text-[16px] lg:text-[25px] text-left">
              $MARS holder will be allowed to claim & stake their $MARS tokens
              with the official $MARS staking pool. The APY earned from staking
              $MARS will fluctuate based on the amount of stakers in the pool.
              This is what we refer to as "Dynamic MARS Staking".
            </p>
          </div>
          <div className="w-full h-[1px] bg-gradient-to-r from-[#7A8A99] to-[#000000]" />
          {/* ------------------------------------------------------------------------------ */}
          <div className=" flex flex-col gap-2 p-4 md:p-8 lg:p-24">
            <h3 className=" text-white uppercase font-d-din-bold text-[20px] md:text-[25px] lg-text-[30px] ">
              Earning Passive APY
            </h3>
            <p className=" text-white font-d-din-regular text-[14px] md:text-[20px] sm:text-[16px] lg:text-[25px] text-left">
              One of the primary attractions of staking $MARS is the opportunity
              to earn passive Annual Percentage Yield (APY).
            </p>
          </div>
          {/* <div className="w-full h-[1px] bg-gradient-to-r from-[#7A8A99] to-[#000000] xl:hidden" /> */}
          {/* ------------------------------------------------------------------------------------- */}
          <div>
            <div className=" relative ">
              <div className=" w-full hidden xl:block">
                <img
                  src={backdrop}
                  className=" w-auto h-[450px]   object-cover object-center"
                />
              </div>
              <div className=" xl:absolute xl:inset-0 xl:top-[100px]">
                {/* -------------------------------------------- */}
                <div className=" bg-[#C2DAF2] w-full h-[3px] xl:hidden" />
                {/* -------------------------------- */}
                <div className=" flex flex-col xl:flex-row xl:justify-center xl:gap-[50px] 2xl:gap-[100px] 2xl:justify-around">
                  <div className=" flex flex-col gap-2 p-4 md:p-8 lg:p-24 xl:p-0 items-center xl:items-start">
                    <h3 className=" text-white uppercase font-d-din-bold text-[20px] md:text-[25px] lg-text-[25px] 2xl:text-[25px] ">
                      Interest Algorithms
                    </h3>
                    <p className=" text-white font-d-din-regular text-[12px] md:text-[16px] sm:text-[14px] lg:text-[18px] 2xl:text-[22px] xl:text-left  xl:w-[300px] 2xl:w-[420px] w-[250px] text-center ">
                      The implementation of staking algorithms allows for the
                      compounding of interest on $MARS tokens held over a
                      duration, creating an incentive structure for sustained
                      ecosystem investment.
                    </p>
                  </div>
                  <div className="w-full h-[1px] bg-gradient-to-r from-[#7A8A99] to-[#000000] xl:hidden" />
                  {/* ------------------------------------------------------------------------------------------- */}
                  <div className=" flex flex-col gap-2 p-4 md:p-8 lg:p-24 xl:p-0 items-center xl:items-start">
                    <h3 className=" text-white uppercase font-d-din-bold text-[20px] md:text-[25px] lg-text-[25px] 2xl:text-[25px] ">
                      Market Stabilization Function
                    </h3>
                    <p className=" text-white font-d-din-regular text-[12px] md:text-[16px] sm:text-[14px] lg:text-[18px] 2xl:text-[22px] xl:text-left  xl:w-[350px] 2xl:w-[420px] w-[250px] text-center ">
                      The act of staking $MARS inherently contributes to the
                      reduction of circulating supply, thereby mitigating market
                      volatility and enhancing the overall economic stability of
                      the Meme Kombat ecosystem.
                    </p>
                  </div>
                  <div className="w-full h-[1px] bg-gradient-to-r from-[#7A8A99] to-[#000000] xl:hidden" />
                  {/* ------------------------------------------------------------------------------------------------------------------------ */}
                  <div>
                    <div className=" flex flex-col gap-2 p-4 md:p-8 lg:p-24 xl:p-0 items-center xl:items-start">
                      <h3 className=" text-white uppercase font-d-din-bold text-[20px] md:text-[25px] lg-text-[25px] 2xl:text-[25px] text-center ">
                        Incentivization of User Involvement
                      </h3>

                      <p className=" text-white font-d-din-regular text-[12px] md:text-[16px] sm:text-[14px] lg:text-[18px] 2xl:text-[22px] xl:text-left  xl:w-[400px] 2xl:w-[420px] w-[250px] text-center ">
                        Through APY earnings, users are financially motivated to
                        maintain a continuous, vested interest in the platform,
                        thereby amplifying community engagement and retention,
                        particularly crucial during non-active periods on MARS.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ----------------------------------------------------------------------------------------------------------------------------- */}
          <div className=" relative xl:mt-20">
            <div className=" relative">
              <img
                src={main2}
                className=" w-full h-[470px] lg:h-[700px] object-cover object-center opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black lg:bg-gradient-to-r md:to-black " />
            </div>
            <div className=" absolute inset-0 flex flex-col gap-8 p-10 lg:p-20">
              <h3 className=" text-white uppercase font-d-din-bold text-[24px] lg:text-[30px]">
                staking highlights
              </h3>
              <div className=" flex flex-col gap-5">
                <div className=" flex justify-between lg:justify-normal lg:gap-[515px]">
                  <p className=" font-d-din-regular text-white text-[16px] lg:text-[20px]">
                    TOKEN
                  </p>
                  <p className=" font-d-din-bold text-[#C2DAF2] text-[16px] lg:text-[20px]">
                    $MARS
                  </p>
                </div>
                <div className=" bg-[#7A8A99] h-[1px] w-full lg:w-[640px]" />
                <div className=" flex justify-between lg:justify-normal lg:gap-[425px]">
                  <p className=" font-d-din-regular text-white text-[16px] lg:text-[20px]">
                    LOCKING PERIOD
                  </p>
                  <p className=" font-d-din-bold text-[#C2DAF2] text-[16px] lg:text-[20px]">
                    10 DAYS
                  </p>
                </div>
                <div className=" bg-[#7A8A99] h-[1px] w-full lg:w-[640px]" />{" "}
                <div className=" flex justify-between lg:justify-normal lg:gap-[375px]">
                  <p className=" font-d-din-regular text-white text-[16px] lg:text-[20px]">
                    AUTOMATIC RESTAKING
                  </p>
                  <p className=" font-d-din-bold text-[#C2DAF2] text-[16px] lg:text-[20px]">
                    YES
                  </p>
                </div>
                <div className=" bg-[#7A8A99] h-[1px] w-full lg:w-[640px]" />{" "}
                <div className=" flex justify-between  lg:justify-normal lg:gap-[350px]">
                  <p className=" font-d-din-regular text-white text-[16px] lg:text-[20px]">
                    COMPOUNDING REWARDS
                  </p>
                  <p className=" font-d-din-bold text-[#C2DAF2] text-[16px] lg:text-[20px]">
                    YES
                  </p>
                </div>
                <div className=" bg-[#7A8A99] h-[1px] w-full lg:w-[640px]" />
                <div>
                  <div className=" flex gap-3 items-center mt-5">
                    <a
                      href="https://www.team.finance/view-coin/0xE8B1e79D937c648Ce1fE96e6739ddb2714058a18?name=ColonizeMars&symbol=GTM&chainid=0x1"
                      target="blank"
                    >
                      <h3 className=" text-white font-d-din-regular uppercase text-[20px] md:text-[25px] lg-text-[30px]">
                        Start Staking
                      </h3>
                    </a>
                    <ArrowRightAltIcon className=" text-white" />
                  </div>
                  <div className=" bg-[#C2DAF2] w-[180px] h-[2px]" />
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

export default Staking;
