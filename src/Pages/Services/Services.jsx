import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { ContentData } from "./ContentData";
import Male from "../../assets/Images/Male designer drawing on a graphics tablet.svg";
import MaleII from "../../assets/Images/code editing.svg";
import { Link, useNavigate } from "react-router-dom";
import Button from "@/components/Button/Button";
const Services = () => {
  const navigate = useNavigate();
  return (
    <div className="px-4 py-6 md:px-16 flex flex-col flex-1 gap-6 md:gap-[30px]">
      <div className="flex flex-col items-center gap-4 md:gap-[30px]">
        <h1 className=" text-[30px] md:text-[40px] leading-[130%] font-semibold">
          Services
        </h1>
        <p className="text-base md:text-[24px] text-center leading-[33px] font-medium text-[#3A3A3A]">
          This is what we offer
        </p>
      </div>
      {/* <div className=" flex flex-col gap-[40px] border justify-center items-center"> */}
      <div className="w-full border flex flex-col gap-y-10">
        {/* flex 1 */}
        <div className="flex flex-col md:flex-row w-full gap-[40px] justify-center items-center flex-1">
          <Link to="/services/details/1" state={{ id: 1, src: Male }}>
            <div className=" max-w-[500px] w-full h-[234px] rounded-lg overflow-hidden flex items-center order-2 bg-white flex-grow-0 border border-[#555555]/30 shadow-sm">
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
          </Link>
          <Link to="/services/details/2" state={{ id: 2, src: MaleII }}>
            <div className=" max-w-[500px] w-full h-[234px] rounded-lg overflow-hidden flex items-center order-2 bg-primary flex-grow-0 border border-[#555555]/30 shadow-sm">
              <div className="flex-1">
                <h1 className="font-medium ml-4 text-3xl text-white">
                  Front-End
                </h1>
                <p className="font-semibold ml-3.5 text-lg text-white">
                  Development
                </p>
                <p className="flex items-center ml-4 gap-0.5 text-white mt-6">
                  <FaAngleRight className="bg-white text-black rounded-full p-0.5" />
                  Learn More
                </p>
              </div>
              <img
                src={MaleII}
                className="w-[450px] h-full"
                height="auto"
                alt=""
              />
            </div>
          </Link>
        </div>
        {/* flex 2 */}
        <div className="flex flex-col md:flex-row-reverse w-full gap-[40px] justify-center items-center flex-1">
          <Link to="/services/details/3" state={{ id: 3, src: Male }}>
            <div className=" max-w-[500px] w-full h-[234px] rounded-lg overflow-hidden flex items-center order-2 bg-white flex-grow-0 border border-[#555555]/30 shadow-sm">
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
          </Link>
          <Link to="/services/details/4" state={{ id: 4, src: MaleII }}>
            <div className=" max-w-[500px] w-full h-[234px] rounded-lg overflow-hidden flex items-center order-2 bg-primary flex-grow-0 border border-[#555555]/30 shadow-sm">
              <div className="flex-1">
                <h1 className="font-medium ml-4 text-3xl text-white">
                  Front-End
                </h1>
                <p className="font-semibold ml-3.5 text-lg text-white">
                  Development
                </p>
                <p className="flex items-center ml-4 gap-0.5 text-white mt-6">
                  <FaAngleRight className="bg-white text-black rounded-full p-0.5" />
                  Learn More
                </p>
              </div>
              <img
                src={MaleII}
                className="w-[450px] h-full"
                height="auto"
                alt=""
              />
            </div>
          </Link>
        </div>
        {/* flex 3 */}
        <div className="flex flex-col md:flex-row w-full gap-[40px] justify-center items-center flex-1">
          <Link to="/services/details/5" state={{ id: 5, src: Male }}>
            <div className=" max-w-[500px] w-full h-[234px] rounded-lg overflow-hidden flex items-center order-2 bg-white flex-grow-0 border border-[#555555]/30 shadow-sm">
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
          </Link>
          <Link to="/services/details/6" state={{ id: 6, src: MaleII }}>
            <div className=" max-w-[500px] w-full h-[234px] rounded-lg overflow-hidden flex items-center order-2 bg-primary flex-grow-0 border border-[#555555]/30 shadow-sm">
              <div className="flex-1">
                <h1 className="font-medium ml-4 text-3xl text-white">
                  Front-End
                </h1>
                <p className="font-semibold ml-3.5 text-lg text-white">
                  Development
                </p>
                <p className="flex items-center ml-4 gap-0.5 text-white mt-6">
                  <FaAngleRight className="bg-white text-black rounded-full p-0.5" />
                  Learn More
                </p>
              </div>
              <img
                src={MaleII}
                className="w-[450px] h-full"
                height="auto"
                alt=""
              />
            </div>
          </Link>
        </div>
        {/* flex 4 */}
        <div className="flex flex-col md:flex-row-reverse w-full gap-[40px] justify-center items-center flex-1">
          <Link to="/services/details/7" state={{ id: 7, src: Male }}>
            <div className=" max-w-[500px] w-full h-[234px] rounded-lg overflow-hidden flex items-center order-2 bg-white flex-grow-0 border border-[#555555]/30 shadow-sm">
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
          </Link>
          <Link to="/services/details/8" state={{ id: 8, src: MaleII }}>
            <div className=" max-w-[500px] w-full h-[234px] rounded-lg overflow-hidden flex items-center order-2 bg-primary flex-grow-0 border border-[#555555]/30 shadow-sm">
              <div className="flex-1">
                <h1 className="font-medium ml-4 text-3xl text-white">
                  Front-End
                </h1>
                <p className="font-semibold ml-3.5 text-lg text-white">
                  Development
                </p>
                <p className="flex items-center ml-4 gap-0.5 text-white mt-6">
                  <FaAngleRight className="bg-white text-black rounded-full p-0.5" />
                  Learn More
                </p>
              </div>
              <img
                src={MaleII}
                className="w-[450px] h-full"
                height="auto"
                alt=""
              />
            </div>
          </Link>
        </div>
        {/* flex 5 */}
        <div className="flex flex-col md:flex-row w-full gap-[40px] justify-center items-center flex-1">
          <Link to="/services/details/9" state={{ id: 9, src: Male }}>
            <div className=" max-w-[500px] w-full h-[234px] rounded-lg overflow-hidden flex items-center order-2 bg-white flex-grow-0 border border-[#555555]/30 shadow-sm">
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
          </Link>
          <Link to="/services/details/10" state={{ id: 10, src: MaleII }}>
            <div className=" max-w-[500px] w-full h-[234px] rounded-lg overflow-hidden flex items-center order-2 bg-primary flex-grow-0 border border-[#555555]/30 shadow-sm">
              <div className="flex-1">
                <h1 className="font-medium ml-4 text-3xl text-white">
                  Front-End
                </h1>
                <p className="font-semibold ml-3.5 text-lg text-white">
                  Development
                </p>
                <p className="flex items-center ml-4 gap-0.5 text-white mt-6">
                  <FaAngleRight className="bg-white text-black rounded-full p-0.5" />
                  Learn More
                </p>
              </div>
              <img
                src={MaleII}
                className="w-[450px] h-full"
                height="auto"
                alt=""
              />
            </div>
          </Link>
        </div>
      </div>
      {/* </div> */}
      <div className="flex justify-center items-center">
        <Button
          className="shadow-md bg-[#1d4ed8] text-white py-2.5 px-5 rounded-[30px]"
          onClick={() => navigate("/contact-us")}
        >
          Contact Us
        </Button>
      </div>
    </div>
  );
};

export default Services;
