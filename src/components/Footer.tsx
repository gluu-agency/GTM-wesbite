import footerArrow from "../assets/landing/NavArrow.svg";
import youtubeLogo from "../assets/Footer/youtube.svg";
import twitterLogo from "../assets/Footer/twitter.svg";
import telegramLogo from "../assets/Footer/telegram.svg";
import dextoolsLogo from "../assets/Footer/dextools.svg";
import instaLogo from "../assets/Footer/instagram.svg";
import etherscanLogo from "../assets/Footer/etherscan.svg";
import tiktokLogo from "../assets/Footer/tiktok.svg";
const Footer = (props: any) => {
  const footerIcons = [
    {
      key: 3,
      icon: twitterLogo,
      link: "https://twitter.com/ColonizeMars_",
    },
    {
      key: 6,
      icon: telegramLogo,
      link: "https://t.me/GatewayToMars_Portal",
    },
  ];
  return (
    <div className="  mt:[30px] ">
      <div
        className={`h-[50px] xl:h-[80px] ${props.passengers == true ? "bg:[#D9D9D9]" : " bg-white"
          } bg-white  mx auto flex justify-between`}
      >
        <div className=" w-full p-5 lg:mr-10 lg:ml-10 xl:ml-20 xl:mr-20 mx-auto flex items-center justify-between">
          <div className=" flex items-center gap-2">
            <a
              href=""
              target="_blank"
            >
              <div>
                <p className=" text-[15px] xl:text-[20px]  text-black font-d-din-bold">
                  BUY $MARS
                </p>
                <div className=" h-[2px] w-full bg-black" />
              </div>
            </a>
            <div>
              <img src={footerArrow} className=" w-1/2 xl:w-full h-auto" />
            </div>
          </div>
          <div className=" flex gap-2  xl:gap-4 items-center ">
            {footerIcons.map((icon) => (
              <div key={icon.key} className="">
                <a href={icon.link} target="_blank">
                  <img src={icon.icon} className=" w-[20px] h-auto xl:w-full" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
