import React from "react";
import TreshMeeting from "../../assets/Images/TeamTresh_meeting.svg";
import Button from "@/components/Button/Button";
const Section1 = () => {
  return (
    <>
      <div className="flex py-12 items-center justify-between">
        <div className="flex-1">
          <h1 className="font-bold text-4xl">
            Custom Tech Solutions <br />
            Designed to Elevate Your Brand
          </h1>
          <p className="text-xl font-">
            From development to deployment, we turn ideas into high-performing
            solutions.
          </p>

          <div className="mt-10">
            <Button>Contact us</Button>
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
