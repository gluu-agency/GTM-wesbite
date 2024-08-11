import testimonial1 from "../../assets/landing/testimonial1.png";
import testimonial2 from "../../assets/landing/testimonial2.png";
import testimonial3 from "../../assets/landing/testimonial3.png";

const WhyGTM = () => {
  return (
    <div>
      <div className="flex flex-col items-center gap-8 lg:items-start xl:gap-16 2xl:gap-20">
        <h3 className=" font-d-din-bold text-white text-[28px] uppercase sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[50px] lg:ml-[50px] xl:ml-[100px] 2xl:ml-[150px] ">
          WHY $MARS?
        </h3>
        <div className=" flex flex-col gap-6 lg:flex-row lg:justify-around w-full ">
          <div className=" flex flex-col items-center gap-2">
            <img
              src={testimonial1}
              className="w-[100px] h-[100px] sm:w-[130px] sm:h-[130px] lg:w-[150px] lg:h-[150px] xl:w-[180px] xl:h-[180px] 2xl:w-[200px] 2xl:h-[200px] border border-[#7A8A99] rounded-full shadow-sm shadow-white"
            />
            <h3 className=" uppercase text-white text-[16px]  font-d-din-bold sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] ">
              MEMETICS
            </h3>
            <p className=" text-white text-[12px] font-d-din-regular text-center pr-4 pl-4 lg:pr-0 lg:pl-0 sm:text-[18px] md:text-[22px] lg:w-[300px] xl:w-[400px] ">
              Seamlessly integrates into gaming, AI betting, and shopping
              - creating a comprehensive $MARS ecosystem.
            </p>
          </div>
          <div className=" flex flex-col items-center gap-2">
            <img
              src={testimonial2}
              className="w-[100px] h-[100px] sm:w-[130px] sm:h-[130px] lg:w-[150px] lg:h-[150px] xl:w-[180px] xl:h-[180px] 2xl:w-[200px] 2xl:h-[200px] border border-[#7A8A99] rounded-full shadow-sm shadow-white"
            />
            <h3 className=" uppercase text-white text-[16px]  font-d-din-bold sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] ">
              DOXXED DEV
            </h3>
            <p className=" text-white text-[12px] font-d-din-regular text-center pr-4 pl-4 lg:pr-0 lg:pl-0 sm:text-[18px] md:text-[22px] lg:w-[300px] xl:w-[400px]">
              Led by a fully disclosed developer and backed by reputable
              blockchain agencies, $MARS prioritizes transparency and community
              engagement.
            </p>
          </div>
          <div className=" flex flex-col items-center gap-2">
            <img
              src={testimonial3}
              className="w-[100px] h-[100px] sm:w-[130px] sm:h-[130px] lg:w-[150px] lg:h-[150px] xl:w-[180px] xl:h-[180px] 2xl:w-[200px] 2xl:h-[200px] border border-[#7A8A99] rounded-full shadow-sm shadow-white"
            />
            <h3 className=" uppercase text-white text-[16px]  font-d-din-bold sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] ">
              LORE
            </h3>
            <p className=" text-white text-[12px] font-d-din-regular text-center pr-4 pl-4 lg:pr-0 lg:pl-0 sm:text-[18px] md:text-[22px] lg:w-[300px] xl:w-[400px]">
              Embodies ELONS quest to explore Mars for survival and advancement,
              Elon's grand vision.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyGTM;
