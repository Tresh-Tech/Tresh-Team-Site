import "react";
import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaLocationDot,
} from "react-icons/fa6";
// import { MapPin } from "lucide-react";
import ContactUsForm from "./ContactUsForm";

const ContactUs = () => {
  return (
    <div className="py-12 px-7 md:px-16 flex flex-col flex-1 gap-[30px] md:gap-[40px]">
      <div className="flex flex-col items-center gap-10 max-sm:gap-0 w-full">
        <div className="flex flex-col items-center gap-1.5 max-sm:gap-0 mb-2">
          <h1 className="text-[30px] font-semibold">Contact</h1>
          <p className="md:text-[24px] text-center font-medium text-[#3A3A3A]">
            This is what we offer
          </p>
        </div>
        <div className="flex flex-wrap md:flex-row gap-3 justify-between md:max-w-[calc(100%-200px)] w-full max-sm:gap-1">
          <div className="flex flex-col items-center gap-1.5 m-auto max-sm:gap-0">
            <h1 className=" text-[24px] max-sm:text-[20px] font-medium ">
              Email
            </h1>
            <p className="text-[16px] text-center leading-[26px] font-normal text-[#4D4D4D]">
              treshtechcohort@gmail.com
            </p>
          </div>
          <div className="flex flex-col items-center  gap-1.5 m-auto max-sm:gap-0">
            <h1 className=" text-[24px] leading-[130%] font-medium -tracking-[5%]">
              Call
            </h1>
            <p className="text-[16px] text-center leading-[26px] font-normal text-[#4D4D4D]">
              +2349138289542, +2348158180372
            </p>
          </div>
          <div className="flex flex-col items-center  gap-1.5 md:gap-2.5 m-auto max-sm:gap-1">
            <h1 className="w-full text-[24px] leading-[130%] font-medium -tracking-[5%]">
              Reach out on
            </h1>
            <div className="flex items-center gap-[30px] max-sm:gap-[15px]">
              <FaLinkedin
                className="md:text-[18px] cursor-pointer text-[24px]"
                color="#5378D0"
              />
              <FaFacebook
                className="md:text-[18px] cursor-pointer text-[24px]"
                color="#4C8AFF"
              />
              <FaTwitter
                className="md:text-[18px] cursor-pointer text-[24px]"
                color="#4CD2FF"
              />
            </div>
          </div>
          <div className="flex flex-col items-center  gap-1.5 md:gap-2.5 m-auto max-sm:gap-1">
            <h1 className=" text-[24px] leading-[130%] font-medium -tracking-[5%]">
              Location
            </h1>
            <div className="flex items-center gap-[10px] max-sm:gap-[5px]">
              <FaLocationDot size={18} color="#4D4D4D" />
              <p className="text-[16px] text-center leading-[26px] font-normal text-[#4D4D4D]">
                Remote
              </p>
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
