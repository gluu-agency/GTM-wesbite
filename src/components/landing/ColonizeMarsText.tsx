import underlineComponent from "../../assets/landing/underline.png";
const ColonizeMarsMainText = () => {
  return (
    <div className=" absolute inset-0 text-white ml-[224px] mt-[160px] flex flex-col gap-3 ">
      <h2 className=" uppercase text-white font-d-din-bold text-[75px] ml-8">
        COLONIZE MARS
      </h2>
      <div>
        <h4 className="text-white font-d-din-regular text-[40px] ml-8">
          The ultimate, community-driven, meme coin!
        </h4>
        <img
          src={underlineComponent}
          alt=""
          className=" w-[480px] h-[55px] mt-[-40px]"
        />
      </div>
      <h3 className=" text-[40px] text-[#C2DAF2] font-d-din-italic ml-8 mt-2 ">
        Powered by          {""}
        <span className=" text-[40px] text-[#C2DAF2] font-d-din-bold">
          $MARS
        </span>
      </h3>
    </div>
  );
};

export const ColonizeMarsSubText = () => {
  return (
    <div className=" absolute text-white flex top-[700px] left-[250px] w-[1200px] justify-between ">
      <div className=" flex flex-col gap-1 justify-center items-center">
        <h2 className=" font-d-din-bold text-[56px] ">5,200</h2>
        <h4 className=" font-d-din-regular text-[32px] tracking-wide mx-auto">HOLDERS</h4>
      </div>
      <div className=" flex flex-col gap-1 justify-center items-center">
        <h2 className=" font-d-din-bold text-[56px] ">$2.5M</h2>
        <h4 className=" font-d-din-regular text-[32px] tracking-wide mx-auto">HOLDERS</h4>
      </div>
      <div className=" flex flex-col gap-1 justify-center items-center">
        <h2 className=" font-d-din-bold text-[56px] ">MARS</h2>
        <h4 className=" font-d-din-regular text-[32px] tracking-wide text-center mx-auto">DESTINATION</h4>
      </div>
    </div>
  );
};

export default ColonizeMarsMainText;
