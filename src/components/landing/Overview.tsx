import frame1 from "../../assets/landing/buy1.png";
import frame2 from "../../assets/landing/buy2.png";
import copyIcon from "../../assets/landing/Icons/copy_icon.png";
const Overview = () => {
  const address = "0x73b1cc873b920d0e85e2581b13f910c2f2f765cf";
  return (
    <div className=" flex flex-col gap-10 xl:mt-10">
      <div className=" flex flex-col gap-2 p-7 lg:ml-[50px] xl:ml-[100px] 2xl:ml-[150px]">
        <h3 className=" text-white uppercase font-d-din-bold text-[20px] md:text-[25px] lg-text-[40px] ">
          Overview
        </h3>
        <p className=" text-white font-d-din-regular text-[14px] md:text-[20px] sm:text-[16px] lg:text-[25px] text-left">
          At its core, the $MARS Treasury is a multifaceted entity designed to
          optimize resources and maximize value for our community.<br></br> The
          $MARS Treasury is the beating heart of our ecosystem, driving growth,
          sustainability, and prosperity for our community members. More than
          just a financial hub, it serves as a catalyst for innovation and
          empowerment, fueling our mission to revolutionize the world of trading
          and sports betting.
        </p>
      </div>
      {/* ------------------------------------- */}
      <div className=" flex gap-20 flex-col lg:flex-row items-center ">
        <div className="relative lg:ml-[50px] xl:ml-[100px] 2xl:ml-[150px] ">
          <img
            src={frame1}
            className=" xl:w-[750px] xl:h-[530px] 2xl:w-[800px] w-[340px] h-[340px] sm:w-[600px] sm:h-[430px]"
          />

          <div className=" absolute inset-0 top-[20px] left-[20px] sm:top-[px] sm:left-[34px] xl:left-[50px]">
            <iframe
              className=" w-[300px] h-[300px] sm:w-[530px] sm:h-[400px] xl:h-[480px] xl:w-[650px] 2xl:w-[700px]"
              id="dextools-widget"
              title="DEXTools Trading Chart"
              src="https://www.dextools.io/widget-chart/en/ether/pe-light/0x2f679f848622da6f39f9ad807c7786618d283c79?theme=dark&chartType=2&chartResolution=30&drawingToolbars=false"
            ></iframe>
          </div>
        </div>
        {/* ------------------------------------------------------------------ */}
        <div className=" relative ">
          <img
            src={frame2}
            className=" w-[200px] h-[300px] sm:w-[300px] sm:h-[400px] lg:h-[450px] lg:w-[300px] xl:h-[500px] xl:w-[320px] 2xl:w-[400px]"
          />
          <div className=" absolute inset-0  flex flex-col items-start gap-5 left-5 lg:gap-7 lg:left-10 justify-center">
            <div className=" ">
              <h4 className="uppercase text-[#C2DAF2] lg:text-[35px] text:[25px] font-d-din-bold">
                GTM Treasury
              </h4>
              <div className="w-[120px] sm:w-[230px] h-[2px] bg-gradient-to-r from-[#7A8A99] to-[#000000] mt-3 "></div>
            </div>
            <div className=" ">
              <h4 className="uppercase text-[#C2DAF2] lg:text-[25px] text:[15px] font-d-din-regular">
                ADDRESS
              </h4>
              <div className=" flex gap-2 items-center">
                <h2 className=" font-d-din-bold text-white lg:text-[35px] text-[20px] uppercase ">
                  {address.slice(0, 5) +
                    "..." +
                    address.slice(address.length - 4, address.length)}
                </h2>
                <button onClick={() => navigator.clipboard.writeText(address)}>
                  <img src={copyIcon} className="w-[15px] h-auto" />
                </button>
              </div>
            </div>
            <div className=" flex flex-col gap-2">
              <a
                href="https://app.zerion.io/0x73b1cc873b920d0e85e2581b13f910c2f2f765cf/overview"
                target="_blank"
              >
                <h4 className="uppercase text-[#C2DAF2] lg:text-[25px] text:[15px] font-d-din-regular mt-3">
                  View balance
                </h4>
              </a>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
