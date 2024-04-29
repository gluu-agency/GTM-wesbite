import main1 from "../../assets/landing/4.png";
import loader1 from "../../assets/landing/Icons/loader1.svg";
import loader2 from "../../assets/landing/Icons/loader2.svg";
const Ecosystem = () => {
  return (
    <div className=" relative">
      <div className=" relative">
        <img
          src={main1}
          className=" w-full h-[800px] lg:h-screen object-cover object-center opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent " />
      </div>
      <div className=" absolute inset-0 flex flex-col gap-8 p-10 lg:p-20">
        <h3 className=" text-white uppercase font-d-din-bold text-[24px] lg:text-[30px] xl:text-[40px]">
          ECOSYSTEM
        </h3>
        <div className=" flex flex-col gap-5">
          <div className=" flex justify-between lg:justify-normal lg:gap-[420px] xl:gap-[465px]">
            <a
              href="https://www.team.finance/view-coin/0xE8B1e79D937c648Ce1fE96e6739ddb2714058a18?name=ColonizeMars&symbol=GTM&chainid=0x1"
              target="_blank"
            >
              {" "}
              <p className=" font-d-din-regular text-white text-[16px] lg:text-[20px]  w-[240px] xl:text-[25px]">
                STAKING
              </p>
            </a>
            <img src={loader1} className=" w-[30px] h-[30px] " />
          </div>
          <div className=" bg-[#7A8A99] h-[1px] w-full lg:w-[690px] xl:w-[740px]" />
          <div className=" flex justify-between lg:justify-normal lg:gap-[420px] xl:gap-[465px]">
            <a
              href=""
              target="_blank"
            >
              {" "}
              <p className=" font-d-din-regular text-white text-[16px] lg:text-[20px]  w-[240px] xl:text-[25px]">
                MERCH
              </p>
            </a>
            <img src={loader1} className=" w-[30px] h-[30px]" />
          </div>
          <div className=" bg-[#7A8A99] h-[1px] w-full lg:w-[690px]  xl:w-[740px]" />{" "}
          <div className=" flex justify-between lg:justify-normal lg:gap-[420px] xl:gap-[465px]">
            <a href="https://arcade.colonizemars.space/" target="_blank">
              {" "}
              <p className=" font-d-din-regular text-white text-[16px] lg:text-[20px]  w-[240px] xl:text-[25px]">
                ARCADE BETTING
              </p>
            </a>
            <img src={loader1} className=" w-[30px] h-[30px] " />
          </div>
          <div className=" bg-[#7A8A99] h-[1px] w-full lg:w-[690px] xl:w-[740px]" />{" "}
          <div className=" flex justify-between  lg:justify-normal lg:gap-[420px] xl:gap-[465px]">
            <a href="https://t.me/GatewayToMars_Portal" target="_blank">
              <p className=" font-d-din-regular text-white text-[16px] lg:text-[20px]  w-[240px] xl:text-[25px]">
                ALPHA GROUP
              </p>
            </a>
            <img src={loader2} className=" w-[30px] h-[30px] " />
          </div>
          <div className=" bg-[#7A8A99] h-[1px] w-full lg:w-[690px] xl:w-[740px]" />
          <div className=" flex justify-between  lg:justify-normal lg:gap-[420px] xl:gap-[450px]">
            <a
              href="https://app.zerion.io/0x73b1cc873b920d0e85e2581b13f910c2f2f765cf/overview"
              target="_blank"
            >
              {" "}
              <p className=" font-d-din-regular text-white text-[16px] lg:text-[20px]  w-[240px] xl:text-[25px] xl:w-[260px]">
                TREASURY
              </p>
            </a>
            <img src={loader2} className=" w-[30px] h-[30px] " />
          </div>
          <div className=" bg-[#7A8A99] h-[1px] w-full lg:w-[690px] xl:w-[740px]" />
          <div className=" flex justify-between  lg:justify-normal lg:gap-[400px] xl:gap-[450px]">
            <p className="uppercase font-d-din-regular text-white text-[16px] lg:text-[20px]  w-[260px] xl:text-[25px]">
              CASINO (Coming Soon)
            </p>
            <img src={loader2} className=" w-[30px] h-[30px] " />
          </div>
          <div className=" bg-[#7A8A99] h-[1px] w-full lg:w-[690px] xl:w-[740px]" />
          <div className=" flex justify-between  lg:justify-normal lg:gap-[420px] xl:gap-[450px]">
            <p className=" uppercase font-d-din-regular text-white text-[16px] lg:text-[20px]  w-[240px] xl:w-[260px] xl:text-[25px]">
              COMMUNITY PORTAL (coming soon)
            </p>
            <img src={loader2} className=" w-[30px] h-[30px] " />
          </div>
          <div className=" bg-[#7A8A99] h-[1px] w-full lg:w-[690px] xl:w-[740px]" />
        </div>
      </div>
    </div>
  );
};

export default Ecosystem;
