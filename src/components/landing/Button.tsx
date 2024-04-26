import buttonOutline from "../../assets/landing/Button outline.png";
const Button = () => {
  return (
   <div className=" absolute inset-0  flex flex-col items-center justify-end mb-10  sm:mb-[60px] md:mb-[80px]">
     <button className="">
      <div className="relative ">
        <img
          src={buttonOutline}
          className=" w-[90px] h-[30px] xl:w-[221px] xl:h-[71px] sm:w-[100px] sm:h-[30px] md:w-[120px] md:h-[50px] lg:h-[60px] lg:w-[150px]"
          alt=""
        ></img>
        <div className=" absolute inset-0 flex items-center justify-center">
          <p className=" text-white uppercase font-d-din-bold xl:text-[32px] text-[12px] sm:text-[18px] md:text-[20px] lg:text-[24px]">
            Buy $GTM
          </p>
        </div>
      </div>
    </button>
   </div>
  );
};

export default Button;
