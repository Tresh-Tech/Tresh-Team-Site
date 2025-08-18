import "react";
import group from "../../assets/Images/group of young people discussing work issues.svg";
import Button from "@/components/Button/Button";
import { useNavigate } from "react-router-dom";
const Section7 = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="py-6 px-2 md:py-12 md:px-6 flex flex-col gap-6 md:gap-[30px]">
        <div className="flex flex-col items-center gap-2.5">
          <h1 className=" text-[30px] text-center md:text-[40px] font-semibold">
            Be part of the next big thing
          </h1>
          <p className="text-base md:text-[24px] font-medium text-[#3A3A3A] text-center">
            We are a team of tech enthusiasts passionate about creating custom
            solutions to help businesses thrive in the digital age.
          </p>
        </div>
        <div className=" h-full flex items-center justify-center">
          <img src={group} className="max-w-[708px] w-full h-auto" alt="" />
        </div>
        <div className="flex items-center justify-center">
          <Button
            className="shadow-md border border-[##4D4D4D1A] bg-[#1d4ed8] text-white py-2.5 font-normal px-5 rounded-[30px]"
            onClick={() => navigate("/contact-us")}
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </>
  );
};

export default Section7;
