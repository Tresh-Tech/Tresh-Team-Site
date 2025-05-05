import React from "react";
import group from "../../assets/Images/group of young people discussing work issues.svg";
import Button from "@/components/Button/Button";
const Section7 = () => {
  return (
    <>
      <div className="py-12 flex flex-col gap-[30px]">
        <div className="flex flex-col items-center gap-2.5">
          <h1 className=" text-[40px] leading-[130%] font-semibold">
            Be part of the next big thing
          </h1>
          <p className="text-[24px] leading-[33px] font-medium text-[#3A3A3A] text-center">
            We are a team of tech enthusiasts passionate about creating custom
            solutions to help businesses thrive in the digital age.
          </p>
        </div>
        <div className=" h-full flex items-center justify-center">
          <img src={group} className="max-w-[708px] w-full h-auto" alt="" />
        </div>
        <div className="flex items-center justify-center">
          <Button className="shadow-md border border-[##4D4D4D1A] bg-[#1d4ed8] text-white py-2.5 font-normal px-5 rounded-[30px]">Get in Touch</Button>
        </div>
      </div>
    </>
  );
};

export default Section7;
