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
      <div className="py-12 flex flex-col gap-[30px]">
        <div className="flex flex-col items-center gap-2.5">
          <h1 className=" text-[40px] leading-[130%] font-semibold">
            Services
          </h1>
          <p className="text-[24px] text-center leading-[33px] font-medium text-[#3A3A3A]">
            At <strong>Tresh</strong> we provide a wide range of technology
            services tailored to meet the unique needs of businesses of all
            sizes.
          </p>
        </div>
        <div className="flex relative flex-col items-center w-full p-0 gap-10">
          <div className="hidden md:block max-w-[calc(100%-900px)] w-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45">
            <div className="relative">
              <div className="borderMe w-full"></div>
              <div className="borderMe w-full rotate-90"></div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-[15px] p-2 bg-white border-primary rounded-full"></div>
            </div>
          </div>
          <div className="flex flex-col gap-10 md:flex-row w-full z-50 justify-between items-center">
            <div className=" max-w-[500px] w-full h-[234px] rounded-lg overflow-hidden flex items-center order-2 bg-white flex-grow-0 border border-[#555555]/30">
              <div className="flex-1 flex flex-col items-start gap-8">
                <div>
                  <h1 className="font-medium ml-4 text-3xl">Graphic</h1>
                  <p className="font-semibold ml-3.5 text-lg">Design</p>
                </div>
                <p className="flex items-center ml-4 gap-0.5 mt-6">
                  <FaAngleRight className="bg-black text-white rounded-full p-0.5" />
                  Learn More
                </p>
              </div>
              <img
                src={Male}
                className="w-[450px] h-full"
                height="auto"
                alt=""
              />
            </div>
            <div className=" max-w-[500px] w-full h-[234px] rounded-lg overflow-hidden flex items-center order-2 bg-primary flex-grow-0 border border-[#555555]/30">
              <div className="flex-1">
                <h1 className="font-medium ml-4 text-3xl text-white">
                  Front-End
                </h1>
                <p className="font-semibold ml-3.5 text-lg text-white">
                  Development
                </p>
                <p className="flex items-center ml-4 text-white gap-0.5 mt-6">
                  <FaAngleRight className="bg-white text-black rounded-full p-0.5" />
                  Learn More
                </p>
              </div>
              <div className="max-w-[350px] h-full w-full">
                <img src={MaleII} width="100%" height="auto" alt="" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-10 md:flex-row w-full z-50 justify-between items-center">
            <div className=" max-w-[500px] w-full h-[234px] rounded-lg overflow-hidden flex items-center order-2 bg-primary flex-grow-0 border border-[#555555]/30">
              <div className="flex-1">
                <h1 className="font-medium ml-4 text-3xl text-white">
                  Graphic
                </h1>
                <p className="font-semibold ml-3.5 text-lg text-white">
                  Design
                </p>
                <p className="flex items-center ml-4 gap-0.5 mt-6 text-white">
                  <FaAngleRight className="bg-white text-black rounded-full p-0.5" />
                  Learn More
                </p>
              </div>
              <div className="h-full relative w-full max-w-[350px]">
                <img
                  src={MaleIII}
                  className="absolute left-6 w-full h-full"
                  alt=""
                />
              </div>
            </div>
            <div className=" max-w-[500px] w-full h-[234px] rounded-lg overflow-hidden flex items-center order-2 bg-white flex-grow-0 border border-[#555555]/30">
              <div className="flex-1">
                <h1 className="font-medium ml-4 text-3xl">Front-End</h1>
                <p className="font-semibold ml-3.5 text-lg">Development</p>
                <p className="flex items-center ml-4 gap-0.5 mt-6">
                  <FaAngleRight className="bg-black text-white rounded-full p-0.5" />
                  Learn More
                </p>
              </div>
              <div className="h-full relative w-full max-w-[350px]">
                <img
                  src={MaleIV}
                  className="object-cover w-full h-full"
                  alt=""
                />
              </div>
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
