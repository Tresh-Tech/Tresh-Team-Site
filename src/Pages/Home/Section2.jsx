import "react";
import ChainLink from "../../assets/Images/Group 47.svg";
import Manwithphone from "../../assets/Images/Man with phone creating ideas.png";
import SuccessfulMarketing from "../../assets/Images/Successful marketing team joins forces.png";
import TreshLogo from "../../assets/Images/Group.svg";
const Section2 = () => {
  return (
    <>
      <div className="py-6 px-2 md:py-12 md:px-6 max-md:flex flex-col gap-12 relative">
        {/* dotted line demacation */}
        <div className="absolute hidden md:flex justify-center left-[45%] top-[43.2%] -translate-y-1/2 -translate-x-1/2">
          <img width="100%" height="auto" src={ChainLink} alt="" />
        </div>
        {/* first section */}  
        <div className="flex flex-col max-md:flex-col-reverse md:flex-row items-center gap-12 md:gap-36 justify-between">
          <div className="max-w-[400px] w-full">
            <img
              src={TreshLogo}
              width="400"
              height="auto"
              alt="Tresh Team Having A Meeting"
            />
          </div>
          <div className="flex-1">
            <h1 className="font-semibold text-2xl md:text-3xl">
              Welcome to Tresh Tech
            </h1>
            <p className="text-base md:text-2xl text-text-fade">
              We&apos;re a passionate collective of web developers, UI/UX
              designers, and copywriters dedicated to crafting exceptional
              digital experiences,We&apos;re a passionate collective of web
              developers, UI/UX designers, and copywriters dedicated to crafting
              exceptional digital experiences.
            </p>
          </div>
        </div>
        {/* second section */}
        <div className="flex flex-col max-md:flex-col-reverse md:flex-row-reverse items-center gap-12 md:gap-36 justify-between my-[20px]">
          <div className="max-w-[400px] w-full">
            <img
              src={Manwithphone}
              width="400"
              height="auto"
              alt="Tresh Team Having A Meeting"
            />
          </div>
          <div className="flex flex-col w-[clamp(300px,100%,750px)] mb-5 max-sm:mb-0">
            <h1 className="font-semibold text-2xl md:text-3xl">
              Transforming Ideas to Reality
            </h1>
            <p className="text-base md:text-2xl text-text-fade">
              At Tresh Tech, we believe every great project starts with a spark
              of creativity. Our mission is to turn your vision into reality
              through a collaborative process.
            </p>
          </div>
        </div>

        {/* third section */}
        <div className="flex flex-col max-md:flex-col-reverse md:flex-row items-center gap-12 md:gap-36 justify-between">
          <div className="w-full max-w-[400px]">
            <img
              src={SuccessfulMarketing}
              width="400"
              height="auto"
              alt="Tresh Team Having A Meeting"
            />
          </div>
          <div className="flex-1 mb-10 max-sm:mb-0">
            <h1 className="font-semibold text-2xl md:text-3xl">
              Your success is our priority
            </h1>
            <p className="text-base md:text-2xl text-text-fade">
              At Tresh Tech, your success is our priority. We believe in
              fostering innovation through collaboration and creativity. Whether
              you are a startup looking to make your mark or an established
              business aiming to enhance your digital presence, we are here to
              support you every step of the way.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section2;
