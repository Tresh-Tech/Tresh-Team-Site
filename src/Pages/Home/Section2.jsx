import React from "react";
import ChainLink from "../../assets/Images/Group 47.svg";
import Manwithphone from "../../assets/Images/Man with phone creating ideas.png";
import SuccessfulMarketing from "../../assets/Images/Successful marketing team joins forces.png";
import TreshLogo from "../../assets/Images/Group.svg";
import Button from "@/components/Button/Button";
const Section2 = () => {
  return (
    <>
      <div className="py-6 px-2 md:py-12 md:px-6 max-md:flex flex-col gap-12 relative">
        
        {/* dotted line demacation */}
        <div className="absolute hidden md:flex justify-center left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
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
            <h1 className="font-semibold text-2xl md:text-3xl">Welcome to Tresh Tech</h1>
            <p className="text-base md:text-2xl text-text-fade">
              We're a passionate collective of web developers, UI/UX designers,
              and copywriters dedicated to crafting exceptional digital
              experiences,We're a passionate collective of web developers, UI/UX
              designers, and copywriters dedicated to crafting exceptional
              digital experiences.
            </p>
            <div className="mt-2">
              <Button className="shadow-md border border-[##4D4D4D1A] bg-transparent text-black py-2.5 text-sm leading-[19px] font-normal px-5 rounded-[30px]">
                See more
              </Button>
            </div>
          </div>
        </div>
        {/* second section */}
        <div className="flex flex-col max-md:flex-col-reverse md:flex-row-reverse items-center gap-12 md:gap-36 justify-between">
          <div className="max-w-[400px] w-full">
            <img
              src={Manwithphone}
              width="400"
              height="auto"
              alt="Tresh Team Having A Meeting"
            />
          </div>
          <div className="flex-1">
            <h1 className="font-semibold text-2xl md:text-3xl">
              Transforming Ideas to Reality
            </h1>
            <p className="text-base md:text-2xl text-text-fade">
              We're a passionate collective of web developers, UI/UX designers,
              and copywriters dedicated to crafting exceptional digital
              experiences,We're a passionate collective of web developers, UI/UX
              designers, and copywriters dedicated to crafting exceptional
              digital experiences
            </p>
            <div className="mt-2">
              <Button className="shadow-md border border-[##4D4D4D1A] bg-transparent text-black py-2.5 text-sm leading-[19px] font-normal px-5 rounded-[30px]">See more</Button>
            </div>
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
          <div className="flex-1">
            <h1 className="font-semibold text-2xl md:text-3xl">
              Your success is our priority
            </h1>
            <p className="text-base md:text-2xl text-text-fade">
              We're a passionate collective of web developers, UI/UX designers,
              and copywriters dedicated to crafting exceptional digital
              experiences,We're a passionate collective of web developers, UI/UX
              designers, and copywriters dedicated to crafting exceptional
              digital experiences,
            </p>
            <div className="mt-2">
              <Button className="shadow-md border border-[##4D4D4D1A] bg-transparent text-black py-2.5 text-sm leading-[19px] font-normal px-5 rounded-[30px]">See more</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section2;
