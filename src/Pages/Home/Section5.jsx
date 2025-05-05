import React from "react";
import Treshmeme from "../../assets/Images/image 6.png";
import { FaArrowDown, FaArrowDown19, FaArrowRight } from "react-icons/fa6";
import Button from "@/components/Button/Button";

const Section5 = () => {
  return (
    <div className="py-12 flex flex-col gap-[30px]">
      <div className="flex flex-col items-center gap-2.5">
        <h1 className=" text-[40px] leading-[130%] font-semibold">
          Team Tresh
        </h1>
        <p className="text-[24px] leading-[33px] font-medium text-[#3A3A3A] text-center">
          Meet the team leads of experts.
        </p>
      </div>
      <div className="flex gap-5 flex-row overflow-x-auto scroller scroll-smooth">
        <div className=" relative flex-shrink-0 flex flex-col justify-end items-center isolate max-w-[380px] rounded-[20px] overflow-hidden border w-full h-[480px]">
          <img
            className="w-full h-full object-cover"
            src={Treshmeme}
            alt="Tresh Team Colleague pic"
          />
          <div className="absolute px-6 bottom-5 bg-transparent flex items-center justify-between w-full">
            <div>
              <h1 className="text-[24px] leading-[33px] font-semibold text-white">
                Tresh
              </h1>
              <p className="text-[16px] leading-[22px] font-normal text-white">
                CEO
              </p>
            </div>
            <div className="border border-black/10 rounded-full flex items-center justify-center w-8 h-8 p-1 bg-[#D9D9D9]">
              <FaArrowRight className="-rotate-45" size={20} />
            </div>
          </div>
        </div>
        <div className=" relative flex-shrink-0 flex flex-col justify-end items-center isolate max-w-[380px] rounded-[20px] overflow-hidden border w-full h-[480px]">
          <img
            className="w-full h-full object-cover"
            src={Treshmeme}
            alt="Tresh Team Colleague pic"
          />
          <div className="absolute px-6 bottom-5 bg-transparent flex items-center justify-between w-full">
            <div>
              <h1 className="text-[24px] leading-[33px] font-semibold text-white">
                Tresh
              </h1>
              <p className="text-[16px] leading-[22px] font-normal text-white">
                CEO
              </p>
            </div>
            <div className="border border-black/10 rounded-full flex items-center justify-center w-8 h-8 p-1 bg-[#D9D9D9]">
              <FaArrowRight className="-rotate-45" size={20} />
            </div>
          </div>
        </div>
        <div className=" relative flex-shrink-0 flex flex-col justify-end items-center isolate max-w-[380px] rounded-[20px] overflow-hidden border w-full h-[480px]">
          <img
            className="w-full h-full object-cover"
            src={Treshmeme}
            alt="Tresh Team Colleague pic"
          />
          <div className="absolute px-6 bottom-5 bg-transparent flex items-center justify-between w-full">
            <div>
              <h1 className="text-[24px] leading-[33px] font-semibold text-white">
                Tresh
              </h1>
              <p className="text-[16px] leading-[22px] font-normal text-white">
                CEO
              </p>
            </div>
            <div className="border border-black/10 rounded-full flex items-center justify-center w-8 h-8 p-1 bg-[#D9D9D9]">
              <FaArrowRight className="-rotate-45" size={20} />
            </div>
          </div>
        </div>
        <div className=" relative flex-shrink-0 flex flex-col justify-end items-center isolate max-w-[380px] rounded-[20px] overflow-hidden border w-full h-[480px]">
          <img
            className="w-full h-full object-cover"
            src={Treshmeme}
            alt="Tresh Team Colleague pic"
          />
          <div className="absolute px-6 bottom-5 bg-transparent flex items-center justify-between w-full">
            <div>
              <h1 className="text-[24px] leading-[33px] font-semibold text-white">
                Tresh
              </h1>
              <p className="text-[16px] leading-[22px] font-normal text-white">
                CEO
              </p>
            </div>
            <div className="border border-black/10 rounded-full flex items-center justify-center w-8 h-8 p-1 bg-[#D9D9D9]">
              <FaArrowRight className="-rotate-45" size={20} />
            </div>
          </div>
        </div>
        <div className=" relative flex-shrink-0 flex flex-col justify-end items-center isolate max-w-[380px] rounded-[20px] overflow-hidden border w-full h-[480px]">
          <img
            className="w-full h-full object-cover"
            src={Treshmeme}
            alt="Tresh Team Colleague pic"
          />
          <div className="absolute px-6 bottom-5 bg-transparent flex items-center justify-between w-full">
            <div>
              <h1 className="text-[24px] leading-[33px] font-semibold text-white">
                Tresh
              </h1>
              <p className="text-[16px] leading-[22px] font-normal text-white">
                CEO
              </p>
            </div>
            <div className="border border-black/10 rounded-full flex items-center justify-center w-8 h-8 p-1 bg-[#D9D9D9]">
              <FaArrowRight className="-rotate-45" size={20} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Button className="shadow-md border border-[##4D4D4D1A] bg-[#1d4ed8] text-white py-2.5 font-normal px-5 rounded-[30px]">See More</Button>
      </div>
    </div>
  );
};

export default Section5;
