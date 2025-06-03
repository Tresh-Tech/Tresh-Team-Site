import React from "react";
import TreshMeeting from "../../assets/Images/TeamTresh_meeting.svg";
import Button from "@/components/Button/Button";
const Section1 = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-10 md:gap-0 pt-16 md:pt-12 md:pb-12 px-3 md:px-6 items-center justify-between">
        <div className="flex-1">
          <div className="flex flex-col md:gap-0 gap-2">
          <h1 className="font-bold text-4xl text-center md:text-left">
            Revolutionizing Business Through Innovative Technology.
          </h1>
          <p className="text-xl text-center md:text-left font-">
            From development to deployment, we turn ideas into high-performing
            solutions.
          </p>
          </div>
          <div className="mt-10 flex md:block justify-center">
            <Button className="shadow-md bg-[#1d4ed8] text-white py-2.5 px-5 rounded-[30px]">Learn More</Button>
          </div>
        </div>
        <div className="w-full max-w-[650px]">
          <img
            src={TreshMeeting}
            width="100%"
            height="auto"
            alt="Tresh Team Having A Meeting"
          />
        </div>
      </div>
    </>
  );
};

export default Section1;
