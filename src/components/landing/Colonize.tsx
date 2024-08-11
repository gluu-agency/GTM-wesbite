import main1 from "../../assets/landing/2.png";
import underline from "../../assets/landing/underline.png";
import main2 from "../../assets/landing/2(1).png";
import ellipse from "../../assets/landing/ellipse.svg";
import axios from "axios";
import { useEffect, useState } from "react";
const Colonize = () => {
  const [marketCap, setMarketCap] = useState(0);
  const [numberOfHolders, setNumberOfHolders] = useState(0);

  const fetchMarketCap = async () => {
    try {
      const response = await axios.get(
        `https://data.messari.io/api/v1/assets/ColonizeMars/metrics?x-messari-api-key=${import.meta.env.VITE_API_MESSARI
        }`
      );
      const mcap = await response.data.data.marketcap.current_marketcap_usd;
      const roundedNumber = (mcap / 1000000).toFixed(1);
      setMarketCap(Number(roundedNumber));
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const fetchTokenHoldersAmount = async () => {
    try {
      const response = await axios.get(
        `https://api.unmarshal.com/v1/ethereum/token-address/0xe8b1e79d937c648ce1fe96e6739ddb2714058a18/holders-count?auth_key=${import.meta.env.VITE_API_UNMARSHAL
        }`
      );
      const holdersCount = await response.data.token_holders_count;
      setNumberOfHolders(holdersCount);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };
  useEffect(() => {
    fetchMarketCap();
    fetchTokenHoldersAmount();
  }, []);
  return (
    <div className="relative lg:h-[800px]">
      <img
        src={ellipse}
        className=" absolute inset-0 hidden lg:block w-[700px] left-[-200px] top-[-150px] h-auto "
      />
      <div className=" flex flex-col gap-0 p-5 items-center lg:hidden">
        <h2 className=" font-d-din-bold text-white text-[27px] uppercase lg:text-[68px] ">
          colonize mars
        </h2>
        <div className=" relative">
          <p className=" text-white font-d-din-regular text-[13px] lg:text-[25px] ">
            The ultimate, community-driven, meme coin!
          </p>
          <img
            src={underline}
            className=" w-[200px] lg:w-[450px] absolute inset-0 top-2 left-[-10px] "
          />
        </div>

        <p className=" text-[13px] font-d-din-italic text-[#C2DAF2] lg:text-[25px]  mt-[10px]">
          Powered by{" "}
          <span className=" font-d-din-bold text-[13px] text-[#C2DAF2] lg:text-[25px] ">
            $MARS
          </span>
        </p>
      </div>

      {/* -------------------- */}
      <div className=" relative lg:hidden">
        <img src={main1} className=" w-full " />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent lg:bg-gradient-to-r lg:from-black lg:via-transparent lg:to-transparent" />
      </div>
      {/* ------------------ */}
      <div className="hidden lg:block absolute top-0  right-0  ">
        <img src={main2} className=" h-[700px] xl:h-screen" />
      </div>
      {/* ------------------ */}
      <div className=" hidden lg:block absolute inset-0 p-10 xl:p-32 xl:ml-[100px] xl:mt-10">
        <div className=" flex flex-col">
          <h2 className=" uppercase text-white font-d-din-bold text-[68px] ">
            colonize mars
          </h2>

          <div>
            <p className=" font-d-din-regular text-white text-[25px]">
              The ultimate, community-driven, meme coin!
            </p>
            <img
              src={underline}
              className=" w-[200px] lg:w-[450px] relative top-[-15px] left-[-20px] "
            />
          </div>
          <p className=" text-[#C2DAF2] font-d-din-italic text-[25px] ">
            Powered by{" "}
            <span className=" font-d-din-bold text-[#C2DAF2] text-[25px]">
              $MARS
            </span>
          </p>
        </div>
      </div>
      {/* ----------------- */}
      <div className="hidden lg:block absolute inset-0  top-[500px] p-10 xl:p-32 2xl:p-48">
        <div className=" flex  gap-20 xl:gap-60 2xl:gap-80 2xl:ml-10">
          <div className=" flex flex-col items-center">
            <h3 className=" uppercase text-white font-d-din-bold text-[45px]">
              {numberOfHolders ? numberOfHolders : "750"}
            </h3>
            <p className=" text-white uppercase font-d-din-regular text-[25px]">
              HOLDERS
            </p>
          </div>
          <div className=" flex flex-col items-center">
            <h3 className=" uppercase text-white font-d-din-bold text-[45px]">
              ${marketCap}M
            </h3>
            <p className=" text-white uppercase font-d-din-regular text-[25px]">
              MCAP
            </p>
          </div>
          <div className=" flex flex-col items-center">
            <h3 className=" uppercase text-white font-d-din-bold text-[45px]">
              MARS
            </h3>
            <p className=" text-white uppercase font-d-din-regular text-[25px]">
              DESTINATION
            </p>
          </div>
        </div>
      </div>
      {/* ------------------------- */}
      <div className=" flex flex-col items-center gap-4 lg:flex-row p-5 lg:items-end lg:hidden">
        <div className=" flex flex-col items-center">
          <h3 className=" uppercase text-white font-d-din-bold text-[27px]">
            {numberOfHolders ? numberOfHolders : "750"}
          </h3>
          <p className=" text-white uppercase font-d-din-regular text-[17px]">
            HOLDERS
          </p>
        </div>
        <div className=" flex flex-col items-center">
          <h3 className=" uppercase text-white font-d-din-bold text-[27px]">
            ${marketCap}M
          </h3>
          <p className=" text-white uppercase font-d-din-regular text-[17px]">
            MCAP
          </p>
        </div>
        <div className=" flex flex-col items-center">
          <h3 className=" uppercase text-white font-d-din-bold text-[27px]">
            MARS
          </h3>
          <p className=" text-white uppercase font-d-din-regular text-[17px]">
            DESTINATION
          </p>
        </div>
      </div>
    </div>
  );
};

export default Colonize;
