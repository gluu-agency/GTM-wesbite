import { Navbar } from "./Utility";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import main1 from "../assets/vision/1.png";
import Footer from "../components/Footer";
const Vision = () => {
  return (
    <div>
      <div className=" min-h-screen bg-black max-w-full">
        <Navbar />
        {/* ---------------------- */}
        <div className=" flex flex-col gap-4">
          <div>
            <div className=" relative">
              <img
                src={main1}
                className=" w-full lg:h-[700px] lg:object-cover lg:object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black " />
              <div className=" absolute inset-0  items-end flex justify-center">
                <iframe
                  className="   2xl:h-[450px] 2xl:w-[950px] xl:h-[420px] xl:w-[705px] mb-10 xl:mb-10  h-[230px] w-[170px] md:h-[360px] md:w-[400px] sm:h-[360px] sm:w-[250px] lg:h-[450px] lg:w-[550px]"
                  src="https://www.youtube.com/embed/GgZJ166o5xg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Embedded youtube"
                />
              </div>
            </div>
            <div className=" flex flex-col gap-3">
              <h3 className=" font-d-din-bold text-white uppercase text-[24px] md:text-[30px] lg-text-[40px] text-center">
                vision
              </h3>
              <p className=" font-d-din-regular text-white text-[15px] text-center md:text-[20px] sm:text-[16px] lg:text-[25px] pl-2 pr-2">
                Colonize Mars isn't just a meme coin – it's a movement fuelled
                by the power of community.
              </p>
              <div className=" flex flex-col gap-2">
                <a
                  href=""
                  target="_blank"
                >
                  <div className=" flex gap-3 items-center mt-5 justify-center ">
                    <h3 className=" text-white font-d-din-regular uppercase text-[20px] md:text-[25px] lg-text-[30px]">
                      BUY $MARS
                    </h3>
                    <ArrowRightAltIcon className=" text-white" />
                  </div>
                </a>
                <div className=" bg-[#C2DAF2] w-[180px] h-[2px] mx-auto" />
              </div>
            </div>
          </div>
          {/* ----------------------------------------------------------------- */}
          <div className=" flex flex-col gap-2 p-4 md:p-8 lg:p-24">
            <h3 className=" text-white uppercase font-d-din-bold text-[20px] md:text-[25px] lg-text-[40px] ">
              Overview
            </h3>
            <p className=" text-white font-d-din-regular text-[14px] md:text-[20px] sm:text-[16px] lg:text-[25px] text-left">
              We're here to redefine what it means to be a part of something
              extraordinary. Our holder-first mindset puts you at the forefront
              of every decision we make. We're not just building a coin; we're
              building an interstellar family, united by our shared passion for
              the cosmos.
            </p>
          </div>
          <div className="w-full h-[1px] bg-gradient-to-r from-[#7A8A99] to-[#000000]" />
          {/* ------------------------------------------------------------------------------ */}
          <div className=" flex flex-col gap-2 p-4 md:p-8 lg:p-24">
            <h3 className=" text-white uppercase font-d-din-bold text-[20px] md:text-[25px] lg-text-[40px] ">
              What makes us different?
            </h3>
            <p className=" text-white font-d-din-regular text-[14px] md:text-[20px] sm:text-[16px] lg:text-[25px] text-left">
              Tired of the relentless cycle of disappointment in the crypto
              space? Weary of navigating through countless new launches, only to
              be met with fake promises, tax farms, and disappearing Telegram
              groups within 48 hours?
              <br />
              <br />
              How many times have you invested in something, thinking, "This is
              the one!" only to face letdowns from incompetent developers,
              scammers, tax farms, and pump-and-dump schemes? Colonize Mars
              breaks that cycle. It's more than just another coin; it's a
              celestial journey backed by a solid foundation, a fully doxxed
              team, and a mission to redefine the crypto experience.
              <br />
              <br />
              Enter Colonize Mars – the antidote to the chaos. The frustration
              ends here. It's not just a name; it's a promise, and it's
              reflected in our unwavering commitment to transparency and
              community trust. Colonize Mars is not a fleeting venture; we are
              here for the long haul.
              <br />
              <br />
              Say goodbye to disappointments; Colonize Mars is the one you've
              been searching for – a community-driven, innovative, and
              trustworthy cosmic adventure.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Vision;
