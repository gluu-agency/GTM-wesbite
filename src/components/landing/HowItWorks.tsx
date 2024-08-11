import hiw1 from "../../assets/landing/staking hiw 1.png";
// import hiw2 from "../../assets/landing/Group 754.png";
// import hiw3 from "../../assets/landing/Group 757.png";
import hiw4 from "../../assets/landing/money 1.png";
import hiw5 from "../../assets/landing/pp 1.png";
const HowItWorks = () => {
  return (
    <div className=" xl:ml-[100px] 2xl:ml-[150px]  flex flex-col gap-5 xl:gap-7 mb-10">
      <h3 className=" text-white uppercase font-d-din-bold text-[20px] md:text-[25px] lg-text-[40px] xl:text-[50px] 2xl:text-[55px] text-center xl:text-left ">
        How it Works
      </h3>
      <div className=" flex flex-col gap-4">
        {/* -------------------- */}
        <div className="  flex flex-col items-center xl:items-start ">
          <div className=" h-[100px] w-[355px] sm:h-[200px] sm:w-[600px] md:h-[200px] md:w-[750px] lg:w-[1000px] xl:w-[1150px] lg:h- bg-gradient-to-br from-[#C2DAF2] to-black p-[1px] 2xl:w-[1400px]">
            <div className=" h-full w-full bg-black">
              <div className=" flex  items-center  h-full w-full gap-5">
                <img
                  src={hiw4}
                  className=" w-[60px] h-[60px] ml-5 sm:w-[150px] sm:h-[150px] "
                ></img>
                <div className=" flex flex-col justify-center">
                  <h3 className=" font-d-din-bold text-[#C2DAF2] text-[12px] uppercase sm:text-[30px]">
                    marketing Initiatives
                  </h3>
                  <p className=" font-d-din-regular text-white text-[10px] sm:text-[20px]">
                    Fuel our outreach efforts and amplify our brand presence
                    through strategic marketing campaigns that drive awareness
                    and engagement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* --------------------------------- */}
        <div className="  flex flex-col items-center xl:items-start ">
          <div className=" h-[100px] w-[355px] sm:h-[200px] sm:w-[600px] md:h-[200px] md:w-[750px] lg:w-[1000px] xl:w-[1150px] lg:h- bg-gradient-to-br from-[#C2DAF2] to-black p-[1px] 2xl:w-[1400px]">
            <div className=" h-full w-full bg-black">
              <div className=" flex  items-center  h-full w-full gap-5">
                <img
                  src={hiw5}
                  className=" w-[60px] h-[60px] ml-5 sm:w-[150px] sm:h-[150px] "
                ></img>
                <div className=" flex flex-col justify-center">
                  <h3 className=" font-d-din-bold text-[#C2DAF2] text-[12px] uppercase sm:text-[30px]">
                    Community Incentives
                  </h3>
                  <p className=" font-d-din-regular text-white text-[10px] sm:text-[20px]">
                    Reward our loyal community members for their contributions,
                    participation, and support, fostering a vibrant and
                    inclusive ecosystem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* -------------------------------- */}
        <div className="  flex flex-col items-center xl:items-start ">
          <div className=" h-[100px] w-[355px] sm:h-[200px] sm:w-[600px] md:h-[200px] md:w-[750px] lg:w-[1000px] xl:w-[1150px] lg:h- bg-gradient-to-br from-[#C2DAF2] to-black p-[1px] 2xl:w-[1400px]">
            <div className=" h-full w-full bg-black">
              <div className=" flex  items-center  h-full w-full gap-5">
                <img
                  src={hiw4}
                  className=" w-[60px] h-[60px] ml-5 sm:w-[150px] sm:h-[150px]"
                ></img>
                <div className=" flex flex-col justify-center">
                  <h3 className=" font-d-din-bold text-[#C2DAF2] text-[12px] uppercase sm:text-[30px]">
                    Profit Allocation
                  </h3>
                  <p className=" font-d-din-regular text-white text-[10px] sm:text-[20px]">
                    The $MARS Treasury serves as the central repository for
                    profits generated from our various revenue streams,
                    including merchandise sales, signal bots, and betting profits.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* -------------------------------- */}
        <div className="  flex flex-col items-center xl:items-start ">
          <div className=" h-[100px] w-[355px] sm:h-[200px] sm:w-[600px] md:h-[200px] md:w-[750px] lg:w-[1000px] xl:w-[1150px] lg:h- bg-gradient-to-br from-[#C2DAF2] to-black p-[1px] 2xl:w-[1400px] ">
            <div className=" h-full w-full bg-black">
              <div className=" flex  items-center  h-full w-full gap-5">
                <img
                  src={hiw5}
                  className=" w-[60px] h-[60px] ml-5 sm:w-[150px] sm:h-[150px]"
                ></img>
                <div className=" flex flex-col justify-center">
                  <h3 className=" font-d-din-bold text-[#C2DAF2] text-[12px] uppercase sm:text-[30px]">
                    Strategic Investments
                  </h3>
                  <p className=" font-d-din-regular text-white text-[10px] sm:text-[20px]">
                    Utilize funds from the treasury to purchase additional $MARS
                    tokens, initiate buybacks, contribute to liquidity pools,
                    and facilitate token burns, enhancing liquidity and value
                    for our stakeholders.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;


