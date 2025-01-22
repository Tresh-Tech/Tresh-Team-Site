import React from "react";
import TreshMeeting from "../../assets/Images/TeamTresh_meeting.png";
import Button from "@/components/Button/Button";
const Section1 = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <h1 className="font-semibold text-5xl">
            Be part of something Big Team Tresh awaits
          </h1>
          <p className="text-2xl">
            Join a team of creatives that are ready to connect with other
            creatives and work
          </p>

          <div className="mt-10">
            <Button>See members</Button>
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
