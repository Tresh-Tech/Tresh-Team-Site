import React from "react";
import ChainLink from "../../assets/Images/ChainLink.png";
import Manwithphone from "../../assets/Images/Man with phone creating ideas.png";
import SuccessfulMarketing from "../../assets/Images/Successful marketing team joins forces.png";
import TreshLogo from "../../assets/treshteam_logo.svg";
import Button from "@/components/Button/Button";
const Section2 = () => {
  return (
    <>
      <div className="px-6 border relative">
        <div className="absolute flex justify-center left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
          <img width="100%" height="auto" src={ChainLink} alt="" />
        </div>
        <div className="flex items-center gap-36 justify-between">
          <div className="max-w-[400px] border w-full">
            <img
              src={TreshLogo}
              width="300"
              height="auto"
              alt="Tresh Team Having A Meeting"
            />
          </div>
          <div className="flex-1">
            <h1 className="font-semibold text-3xl">
              Be part of something Big Team Tresh awaits
            </h1>
            <p className="text-2xl text-text-fade">
              We're a passionate collective of web developers, UI/UX designers,
              and copywriters dedicated to crafting exceptional digital
              experiences,We're a passionate collective of web developers, UI/UX
              designers, and copywriters dedicated to crafting exceptional
              digital experiences,
            </p>
            <div className="mt-2">
              <Button variant="plain">See more</Button>
            </div>
          </div>
        </div>
        <div className="flex flex-row-reverse items-center gap-36 justify-between">
          <div className="max-w-[400px] w-full">
            <img
              src={Manwithphone}
              width="300"
              height="auto"
              alt="Tresh Team Having A Meeting"
            />
          </div>
          <div className="flex-1">
            <h1 className="font-semibold text-3xl">
              Be part of something Big Team Tresh awaits
            </h1>
            <p className="text-2xl text-text-fade">
              We're a passionate collective of web developers, UI/UX designers,
              and copywriters dedicated to crafting exceptional digital
              experiences,We're a passionate collective of web developers, UI/UX
              designers, and copywriters dedicated to crafting exceptional
              digital experiences,
            </p>
          </div>
        </div>
        <div className="flex items-center gap-36 justify-between">
          <div className="w-full max-w-[400px]">
            <img
              src={SuccessfulMarketing}
              width="100%"
              height="auto"
              alt="Tresh Team Having A Meeting"
            />
          </div>
          <div className="flex-1">
            <h1 className="font-semibold text-3xl">
              Be part of something Big Team Tresh awaits
            </h1>
            <p className="text-2xl text-text-fade">
              We're a passionate collective of web developers, UI/UX designers,
              and copywriters dedicated to crafting exceptional digital
              experiences,We're a passionate collective of web developers, UI/UX
              designers, and copywriters dedicated to crafting exceptional
              digital experiences,
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section2;
