import { useState } from "react";
import TreshMeeting from "../../assets/Images/TeamTresh_meeting.svg";
import Button from "@/components/Button/Button";
import { useNavigate } from "react-router-dom";
const Section1 = () => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div className="flex max-md:flex-col md:flex-row py-6 px-2 md:py-12 md:px-6 items-center justify-between gap-12">
        <div className="flex-1 p-[10px]">
          <h1 className="font-bold text-[clamp(2rem,2.7vw,6rem)] leading-[1.2]">
            Revolutionizing Business Through Innovative Technology.
          </h1>
          <p className="text-[clamp(1rem,1.5vw,1.2rem)] leading-[1] tracking-[2px] mt-[5px]">
            From development to deployment, we turn ideas into high-performing
            solutions.
          </p>

          <div className="mt-[1.2em] flex gap-5">
            <Button
              className="shadow-md bg-[#1d4ed8] text-white py-2.5 px-5 rounded-[30px]"
              onClick={() => navigate("/contact-us")}
            >
              Contact Us
            </Button>
            <Button
              className="shadow-md text-[#1d4ed8] py-2.5 px-5 border border-[#1d4ed8] rounded-[30px]"
              onClick={() => navigate("/about-us")}
            >
              Learn More
            </Button>
          </div>
        </div>

        <div className="w-full max-w-[650px] h-[clamp(250px,50vw,550px)] relative flex items-center justify-center">
          {!imgLoaded && (
            <div className="absolute inset-0 w-full h-full bg-black/30 backdrop-blur-lg border border-white/40 shadow-lg animate-pulse rounded-[10px] flex items-center justify-center z-0" />
          )}
          <img
            src={TreshMeeting}
            width="100%"
            height="auto"
            alt="Tresh Team Having A Meeting"
            className={`z-10 ${imgLoaded ? "" : "invisible"}`}
            onLoad={() => setImgLoaded(true)}
          />
        </div>
      </div>
    </>
  );
};

export default Section1;
