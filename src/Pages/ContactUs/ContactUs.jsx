import React from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaLocationDot,
} from "react-icons/fa6";
import { MapPin } from "lucide-react";
import ContactUsForm from "./ContactUsForm";

const ContactUs = () => {
  return (
    <div className="py-12 px-16 flex flex-col flex-1 justify-between gap-[120px]">
      <div className="flex flex-col items-center gap-[100px]">
        <div className="flex flex-col items-center gap-2.5">
          <h1 className=" text-[40px] leading-[130%] font-semibold">Contact</h1>
          <p className="text-[24px] text-center leading-[33px] font-medium text-[#3A3A3A]">
            This is what we offer
          </p>
        </div>
        <div className="flex justify-between max-w-[calc(100%-200px)] w-full">
          <div className="flex flex-col items-center gap-2.5 m-auto">
            <h1 className=" text-[24px] leading-[130%] font-medium -tracking-[5%]">
              Email
            </h1>
            <p className="text-[16px] text-center leading-[26px] font-normal text-[#4D4D4D]">
              Tresh@team.com
            </p>
          </div>
          <div className="flex flex-col items-center gap-2.5 m-auto">
            <h1 className=" text-[24px] leading-[130%] font-medium -tracking-[5%]">
              Call
            </h1>
            <p className="text-[16px] text-center leading-[26px] font-normal text-[#4D4D4D]">
              01234567891
            </p>
          </div>
          <div className="flex flex-col items-center gap-2.5 m-auto">
            <h1 className=" text-[24px] leading-[130%] font-medium -tracking-[5%]">
              Reach out on
            </h1>
            <div className="flex items-center gap-[30px]">
              <FaLinkedin size={18} color="#5378D0" />
              <FaFacebook size={18} color="#4C8AFF" />
              <FaTwitter size={18} color="#4CD2FF" />
            </div>
          </div>
          <div className="flex flex-col items-center gap-2.5 m-auto">
            <h1 className=" text-[24px] leading-[130%] font-medium -tracking-[5%]">
              Location
            </h1>
            <div className="flex items-center gap-[10px]">
              <FaLocationDot size={18} />
              <h1>The world</h1>
            </div>
          </div>
        </div>
      </div>

      {/* form */}
      <ContactUsForm />
    </div>
  );
};

export default ContactUs;
