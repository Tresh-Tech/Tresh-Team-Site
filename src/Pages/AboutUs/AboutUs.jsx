import Button from "@/components/Button/Button";
import React from "react";
import { teamData } from "./TeamData";
import teamMeet from "../../assets/Images/team of four people discussing team project.png";
import quote from "../../assets/Images/quote.png";
import devLang from "../../assets/Images/Frontend development and programming languages.png";
import mobileApp from "../../assets/Images/Successful mobile app startup launch.png";
import { FaArrowRight } from "react-icons/fa6";

const AboutUs = () => {
  return (
    <div className="py-12 px-7 md:px-16 flex flex-col flex-1 gap-[30px] md:gap-[40px]">
      <div className="flex flex-col items-center justify-center gap-6 md:gap-[40px]">
        <h1 className="text-[30px] md:text-[40px] leading-[130%] font-semibold">About us</h1>
        <p className="text-base md:text-[24px] text-center leading-[33px] font-medium text-[#3A3A3A]">
          We're a passionate collective of web developers, UI/UX designers, and
          copywriters dedicated to crafting exceptional digital
          experiences,We're a passionate collective of web developers, UI/UX
          designers, and copywriters dedicated to crafting exceptional digital
          experiencesUI/UX designers, and copywriters dedicated to crafting
          exceptional digital experiences
        </p>
        <Button
          className="shadow-md bg-[#1d4ed8] text-white py-2.5 px-5 rounded-[30px]"
          onClick={() => navigate("/contact-us")}
        >
          Contact Us
        </Button>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-[20px]">
        <div className="flex flex-col gap-[10px] max-w-[398px] w-full p-5">
          <h1 className="text-[24px] text-center font-medium leading-[130%]">
            Our Mission
          </h1>
          <p className="text-[16px] text-center text-[#4D4D4D] font-normal leading-[26px]">
            To harness the power of technology to solve complex challenges,
            enhance efficiency, and create lasting value for our clients.
          </p>
        </div>
        <div className="flex flex-col gap-[10px] max-w-[398px] w-full p-5">
          <h1 className="text-[24px] text-center font-medium leading-[130%]">
            Our Vision
          </h1>
          <p className="text-[16px] text-center text-[#4D4D4D] font-normal leading-[26px]">
            To be the trusted technology partner for businesses seeking
            innovation, transformation, and scalable growth.
          </p>
        </div>
        <div className="flex flex-col gap-[10px] max-w-[398px] w-full p-5">
          <h1 className="text-[24px] text-center font-medium leading-[130%]">
            Value
          </h1>
          <p className="text-[16px] text-center text-[#4D4D4D] font-normal leading-[26px]">
            Constantly pushing the boundaries of what's possible, Upholding
            honesty and transparency in every interaction.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-[30px]">
        <div className="flex flex-col items-center gap-2.5">
          <h1 className="text-[30px] md:text-[40px] text-center leading-[130%] font-bold">
            Team Tresh
          </h1>
          <p className="text-base md:text-[24px] leading-[33px] font-medium text-[#3A3A3A] text-center">
            Meet the team leads of experts.
          </p>
        </div>
        <div className="flex flex-col items-center gap-[30px]">
          <div className="flex flex-wrap gap-5 items-center justify-center">
            {teamData.map((member, index) => (
              <div 
                key={index}
                className="relative flex-shrink-0 flex flex-col justify-end items-center isolate max-w-[380px] rounded-[20px] overflow-hidden border w-full h-[350px] md:h-[480px]"
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
          <Button
            className="shadow-md bg-[#1d4ed8] text-white py-2.5 px-5 rounded-[30px]"
            onClick={() => navigate("/contact-us")}
          >
            See More
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-[30px]">
        <div className="flex flex-wrap gap-[50px] justify-around items-center">

          <div className="max-w-[580px] bg-red-300 min-h-[170px] border border-black/20 shadow-md rounded-[10px] w-full flex justify-between items-center">
            <div className="flex flex-col gap-2 max-w-[200px] md:max-w-[400px] w-full py-2.5 px-5">
              <h1 className="font-medium text-[20px] leading-[24px] ">
                1. Client Meeting
              </h1>
              <p className="text-[#3A3A3A] text-[16px] leading-[24px] ">
                We are always on the lookout for a new cutting edge technology
                to quickly deploy for our customer to take competitive
                advantage in the market.
              </p>
            </div>
            <div className="flex justify-end items-end self-stretch width-[150px]">
              <img src={teamMeet} alt="Team-Meeting" className="w-full" />
            </div>
          </div>

          <div className="max-w-[580px] min-h-[170px] border border-black/20 shadow-md rounded-[10px] w-full flex justify-between items-center">
            <div className="flex flex-col gap-2 max-w-[200px] md:max-w-[400px] w-full py-2.5 px-5">
              <h1 className="font-medium text-[20px] leading-[24px] ">
                2. Quotation
              </h1>
              <p className="text-[#3A3A3A] text-[16px] leading-[24px] ">
                Software programs have become very useful these days. When
                looking for software programs to use for your business, you
                would want the best one that is within your price range.
              </p>
            </div>
            <div className="flex justify-end items-end self-stretch width-[150px]">
              <img src={quote} alt="Quote" className="w-full" />
            </div>
          </div>

        </div>
      </div>

      <div className="flex flex-col gap-[30px]">
        <div className="flex flex-wrap gap-[50px] justify-around items-center">

          <div className="max-w-[580px] min-h-[170px] border border-black/20 shadow-md rounded-[10px] w-full flex justify-between items-center">
            <div className="flex flex-col gap-2 max-w-[200px] md:max-w-[400px] w-full py-2.5 px-5">
              <h1 className="font-medium text-[20px] leading-[24px] ">
                3. Software Development
              </h1>
              <p className="text-[#3A3A3A] text-[16px] leading-[24px] ">
                Software programs have become very useful these days. When
                looking for software programs to use for your business, you
                would want the best one that is within your price range.
              </p>
            </div>
            <div className="flex justify-end items-end self-stretch width-[150px]">
              <img src={devLang} alt="Dev-Language" className="w-full" />
            </div>
          </div>

          <div className="max-w-[580px] min-h-[170px] border border-black/20 shadow-md rounded-[10px] w-full flex justify-between items-center">
            <div className="flex flex-col gap-2 max-w-[200px] md:max-w-[400px] w-full py-2.5 px-5">
              <h1 className="font-medium text-[20px] leading-[24px] ">
                4. Launch
              </h1>
              <p className="text-[#3A3A3A] text-[16px] leading-[24px] ">
                Software programs have become very useful these days. When
                looking for software programs to use for your business, you
                would want the best one that is within your price range.
              </p>
            </div>
            <div className="flex justify-end items-end self-stretch width-[150px]">
              <img src={mobileApp} alt="Mobile-App" className="w-full" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutUs;