import "react";
import { FaArrowRight } from "react-icons/fa6";
import Button from "@/components/Button/Button";
import { teamData } from "./TeamData";

const Section5 = () => {
  return (
    <div className="py-6 px-2 md:py-12 md:px-6 flex flex-col gap-6 md:gap-[30px]">
      <div className="flex flex-col items-center gap-2.5">
        <h1 className=" text-[30px] md:text-[40px] leading-[130%] font-semibold">
          Team Tresh
        </h1>
        <p className="text-base md:text-[24px] leading-[33px] font-medium text-[#3A3A3A] text-center">
          Meet the team leads of experts.
        </p>
      </div>

      <div className="flex gap-5 flex-row overflow-x-auto scroller scroll-smooth">
        {teamData.map((member, index) => (
          <div
            key={index}
            className=" relative flex-shrink-0 flex flex-col justify-end items-center isolate max-w-[280px] md:max-w-[380px] rounded-[20px] overflow-hidden border w-full h-[380px] md:h-[480px]"
          >
            <img
              className="w-full h-full object-cover object-center"
              src={member.image}
              alt={`${member.name} - ${member.position}`}
              loading="lazy"
            />
            <div className="absolute px-6 bottom-5 bg-transparent flex items-center justify-between w-full">
              <div>
                <h1 className="text-[24px] leading-[33px] font-semibold text-white">
                  {member.name}
                </h1>
                <p className="text-[16px] leading-[22px] font-normal text-white">
                  {member.position}
                </p>
              </div>
              <div className="border border-black/10 rounded-full flex items-center justify-center w-8 h-8 p-1 bg-[#D9D9D9]">
                <FaArrowRight className="-rotate-45" size={20} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center">
        <Button className="shadow-md border border-[##4D4D4D1A] bg-[#1d4ed8] text-white py-2.5 font-normal px-5 rounded-[30px]">
          See More
        </Button>
      </div>
    </div>
  );
};

export default Section5;
