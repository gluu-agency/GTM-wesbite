import whatIsItImage from "../../assets/landing/3.png";
const WhatIsIt = () => {
  return (
    <div className=" flex flex-col xl:flex-row lg:h-[800px] items-center justify-between">
      <div>
        <img src={whatIsItImage} />
      </div>
      <div className=" p-6 sm:p-16 md:p-20" >
        <h3 className=" text-white font-d-din-bold text-[16px] text-right sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[40px]">
          WHAT IS IT?
        </h3>
        <p className=" text-white text-[12px] text-right font-d-din-regular sm:text-[20px] md:text-[25px] lg:text-[30px] xl:text-[35px]">
          $MARS -
        </p>
        <p className=" text-white text-[12px] text-right font-d-din-regular sm:text-[20px] md:text-[25px] lg:text-[30px] xl:text-[35px]">
          a TOKEN/NFT project, rooted in Elon Musk's mission to Colonize Mars
          and safeguard humanity.
        </p>
      </div>
    </div>
  );
};

export default WhatIsIt;
