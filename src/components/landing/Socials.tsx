import twitteIcon from "../../assets/landing/Icons/akar-icons_twitter-fill.png";
import telegramIcon from "../../assets/landing/Icons/teenyicons_telegram-solid.png";

const Socials = () => {
  const icons = [
    {
      key: 1,
      logo: twitteIcon,
      url: "https://twitter.com/ColonizeMars_",
    },
    {
      key: 2,
      logo: telegramIcon,
      url: "https://t.me/MARS_PORTAL_SOL",
    }
  ];
  return (
    <div>
      <div className=" flex  flex-col items-center gap-[15px] mr-[-40px] mt-7">
        <div className="relative border 2xl:h-[160px] xl:h-[120px]  w-[1px] bg-white  mb-[12px]"></div>
        {icons.map((icon) => (
          <a href={icon.url} target="_blank">
            <div className=" border rounded-full h-[35px] w-[35px] flex items-center justify-center text-[2px]">
              <img
                src={icon.logo}
                className=" w-[23px] h-[23px] m-auto"
                key={icon.key}
              />
            </div>
          </a>
        ))}
        <div className="relative border 2xl:h-[160px] xl:h-[120px] w-[1px] bg-white mt-[14px] "></div>
      </div>
    </div>
  );
};

export default Socials;
