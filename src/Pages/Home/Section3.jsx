import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import Male from "../../assets/Images/Male designer drawing on a graphics tablet.svg";
import MaleII from "../../assets/Images/code editing.svg";
import MaleIII from "../../assets/Images/code sign.svg";
import MaleIV from "../../assets/Images/digital design program interface.svg";
import Button from "@/components/Button/Button";
const Section3 = () => {
  return (
    <>
      <div className="py-6 px-2 md:py-12 md:px-6 flex flex-col gap-6 md:gap-[30px]">
        {/* Section Heading */}
        <div className="flex flex-col items-center gap-2.5">
          <h1 className="text-[30px] md:text-[40px] leading-[130%] font-semibold">
            Services
          </h1>
          <p className="text-base md:text-[24px] text-center leading-[33px] font-medium text-[#3A3A3A]">
            At <strong>Tresh</strong> we provide a wide range of technology
            services tailored to meet the unique needs of businesses of all
            sizes.
          </p>
        </div>

        {/* Cards */}
        <div className="flex relative flex-col items-center w-full p-0 gap-10">

          <div className="hidden md:block max-w-[calc(100%-900px)] w-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45">
            <div className="relative">
              <div className="borderMe w-full"></div>
              <div className="borderMe w-full rotate-90"></div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-[15px] p-2 bg-white border-primary rounded-full"></div>
            </div>
          </div>

          <div className="flex flex-col gap-10 md:flex-row w-full z-50 justify-between items-center">
            <div className="max-w-[500px] w-full h-[234px] rounded-lg overflow-hidden flex items-center bg-white flex-grow-0 border border-[#555555]/30 m-auto">
              <div className="flex-1 flex flex-col items-start">
                <h1 className="font-medium ml-2 md:ml-4 text-2xl md:text-3xl">
                  Graphic
                </h1>
                <p className="font-semibold ml-2 md:ml-3.5 text-base md:text-lg">
                  Design
                </p>
                <p className="flex items-center text-base ml-2 md:ml-4 gap-0.5 mt-6">
                  <FaAngleRight className="bg-black text-white rounded-full p-0.5" />
                  Learn More
                </p>
              </div>
              <img
                src={Male}
                className="w-[451px] max-w-full object-cover h-full"
                height="auto"
                alt=""
              />
            </div>

            <div className=" max-w-[500px] w-full h-[234px] rounded-lg overflow-hidden flex items-center bg-primary flex-grow-0 border border-[#555555]/30 m-auto">
              <div className="flex-1 flex flex-col items-start">
                <h1 className="font-medium ml-2 md:ml-4 text-2xl md:text-3xl text-white">
                  Front-End
                </h1>
                <p className="font-semibold ml-2 md:ml-3.5 text-base md:text-lg text-white">
                  Development
                </p>
                <p className="flex items-center ml-2 md:ml-4 text-base text-white gap-0.5 mt-6">
                  <FaAngleRight className="bg-white text-black rounded-full p-0.5" />
                  Learn More
                </p>
              </div>
              <img
                src={MaleII}
                className="w-[330px] max-w-full object-cover h-full"
                height="auto"
                alt=""
              />
            </div>
          </div>
          
          <div className="flex flex-col gap-10 md:flex-row w-full z-50 justify-between items-center">
            <div className=" max-w-[500px] w-full h-[234px] rounded-lg overflow-hidden flex items-center bg-primary flex-grow-0 border border-[#555555]/30 m-auto">
              <div className="flex-1 flex flex-col items-start">
                <h1 className="font-medium ml-2 md:ml-4 text-2xl md:text-3xl text-white">
                  Graphic
                </h1>
                <p className="font-semibold ml-2 md:ml-3.5 text-base md:text-lg text-white">
                  Design
                </p>
                <p className="flex items-center ml-2 md:ml-4 text-base text-white gap-0.5 mt-6">
                  <FaAngleRight className="bg-white text-black rounded-full p-0.5" />
                  Learn More
                </p>
              </div>

              <img
                src={MaleIII}
                className="w-[295px] max-w-full object-cover h-full"
                height="auto"
                alt=""
              />
            </div>
            <div className=" max-w-[500px] w-full h-[234px] rounded-lg overflow-hidden flex items-center bg-white flex-grow-0 border border-[#555555]/30 m-auto">
              <div className="flex-1 flex flex-col items-start">
                <h1 className="font-medium ml-2 md:ml-4 text-2xl md:text-3xl text-black">
                  Front-End
                </h1>
                <p className="font-semibold ml-2 md:ml-3.5 text-base md:text-lg text-black">
                  Development
                </p>
                <p className="flex items-center ml-2 md:ml-4 text-base text-black gap-0.5 mt-6">
                  <FaAngleRight className="bg-black text-white rounded-full p-0.5" />
                  Learn More
                </p>
              </div>
              <img
                src={MaleIV}
                className="object-cover w-[345px] max-w-full h-full"
                height="auto"
                alt=""
              />
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-center">
          <Button className="shadow-md border border-[##4D4D4D1A] bg-[#1d4ed8] text-white py-2.5 font-normal px-5 rounded-[30px]">
            See All
          </Button>
        </div>
      </div>
    </>
  );
};

export default Section3;
