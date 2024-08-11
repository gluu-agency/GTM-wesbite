import buy1frame from "../../assets/landing/buy1.png";
import buy2frame from "../../assets/landing/buy2.png";
import "@uniswap/widgets/fonts.css";
const BuyGTM = () => {
  "0xe8b1e79d937c648ce1fe96e6739ddb2714058a18";

  const address = "0xe8b1e79d937c648ce1fe96e6739ddb2714058a18";
  return (
    <div className=" bg-black">
      <div className=" mt-10">
        <h3 className=" font-d-din-bold text-white text-[28px] uppercase sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[50px] lg:ml-[50px] xl:ml-[100px] 2xl:ml-[150px] text-center lg:text-left  ">
          buy $MARS
        </h3>
        <div className=" flex flex-col lg:flex-row  lg:ml-[50px] xl:ml-[100px] 2xl:ml-[150px] lg:gap-8">
          <div className=" flex  justify-between items-center p-5 lg:justify-normal lg:gap-2 lg:p-0">
            <p className=" text-white text-[18px] font-d-din-bold text-center pr-4 pl-4 lg:pr-0 lg:pl-0 sm:text-[24px] md:text-[26px]  ">
              Contract address:
            </p>
            <p className=" text-white text-[18px] font-d-din-bold text-center pr-4 pl-4 lg:pr-0 lg:pl-0 sm:text-[24px] md:text-[26px]  ">

            </p>
          </div>
          <div className="w-full h-[1px] bg-gradient-to-r from-[#7A8A99] to-[#000000] lg:hidden" />
          <div className=" hidden lg:block w-[2px] h-[60px] text-[#7A8A99] bg-[#7A8A99]" />
          <div className=" flex  justify-between items-center p-5 lg:gap-2">
            <p className=" text-white text-[18px] font-d-din-bold text-center pr-4 pl-4 lg:pr-0 lg:pl-0 sm:text-[24px] md:text-[26px]  ">
              Tax:
            </p>
            <p className=" text-white text-[18px] font-d-din-bold text-center pr-4 pl-4 lg:pr-0 lg:pl-0 sm:text-[24px] md:text-[26px]  ">
              5%
            </p>
          </div>
          <div className="w-full h-[1px] bg-gradient-to-r from-[#7A8A99] to-[#000000] lg:hidden" />
          <div className="hidden lg:block w-[2px] h-[60px] text-[#7A8A99] bg-[#7A8A99]" />

          <div className=" flex  justify-between items-center p-5 lg:gap-2">
            <p className=" text-white text-[18px] font-d-din-bold text-center pr-4 pl-4 lg:pr-0 lg:pl-0 sm:text-[24px] md:text-[26px]  ">
              Network:
            </p>
            <p className=" text-white text-[18px] font-d-din-bold text-center pr-4 pl-4 lg:pr-0 lg:pl-0 sm:text-[24px] md:text-[26px]  ">
              SOLANA
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyGTM;
