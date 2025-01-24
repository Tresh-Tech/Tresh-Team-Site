import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import dotFrame from "../../assets/Images/Frame 1618869143.svg";
import Male from "../../assets/Images/Male designer drawing on a graphics tablet.svg";
import MaleII from "../../assets/Images/code editing.svg";
import MaleIII from "../../assets/Images/code sign.svg";
import MaleIV from "../../assets/Images/digital design program interface.svg";
const Section3 = () => {
  return (
    <>
      <div className="py-12">
        <h1 className="flex flex-col items-center mb-6 text-[40px] leading-[130%] font-semibold">
          Services
        </h1>
        <p className="flex flex-col items-center mb-6 text-[24px] leading-[33px] font-medium text-[#3A3A3A]">
          Join a team of creatives that are ready to connect with other
          creatives and work
        </p>
        {/* <div className=" flex border justify-center relative w-full items-center"> */}
        <div className="flex border relative flex-col items-center w-full p-0 gap-10">
          <div className="max-w-[calc(100%-900px)] w-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45">
            <div className="relative">
              <div className="border w-full border-[rgba(77,77,77, 0.4)] border-dashed"></div>
              <div className="dotted w-full  rotate-90"></div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-[15px] p-2 bg-white border-primary rounded-full"></div>
            </div>
          </div>
          <div className="flex w-full z-50 justify-between items-center">
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
                <h1 className="font-medium ml-4 text-3xl">Front-End</h1>
                <p className="font-semibold ml-3.5 text-lg">Development</p>
                <p className="flex items-center ml-4 gap-0.5 mt-6">
                  <FaAngleRight className="bg-black text-white rounded-full p-0.5" />
                  Learn More
                </p>
              </div>
              <div className="max-w-[350px] h-full w-full">
                <img src={MaleII} width="100%" height="auto" alt="" />
              </div>
            </div>
          </div>
          <div className="flex w-full z-50 justify-between items-start">
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
              <div className="max-w-[350px] h-full w-full">
                <img src={MaleIII} width="100%" height="auto" alt="" />
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
              <div className="max-w-[350px] h-full w-full">
                <img src={MaleIV} width="100%" height="auto" alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default Section3;
