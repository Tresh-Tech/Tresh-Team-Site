import "react";
import { FaAngleRight } from "react-icons/fa6";
import Male from "../../assets/Images/Male designer drawing on a graphics tablet.svg";
import MaleII from "../../assets/Images/code editing.svg";
// import MaleIII from "../../assets/Images/code sign.svg";
// import MaleIV from "../../assets/Images/digital design program interface.svg";
import Button from "@/components/Button/Button";
import { useNavigate } from "react-router-dom";
const Section3 = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="py-6 px-2 md:py-12 md:px-6 flex flex-col gap-6 md:gap-[30px]">
        {/* Section Heading */}
        <div className="flex flex-col items-center gap-2.5 max-sm:gap-0">
          <h1 className="text-[30px] md:text-[40px] leading-[130%] font-semibold">
            Services
          </h1>
          <p className="text-base md:text-[24px] text-center leading-[15px] font-medium text-[#3A3A3A]">
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
            <div className=" max-w-[500px] w-full h-[234px] rounded-lg overflow-hidden flex items-center order-2 bg-white flex-grow-0 border border-[#555555]/30 shadow-sm gap-3">
              <div className="flex flex-col gap-8 pl-3">
                <div className="">
                  <h1 className="font-medium text-2xl">Graphic</h1>
                  <p className="font-[300] text-lg">Design</p>
                </div>
                <p className="flex gap-1 mt-6 w-full text-[13px]">
                  <FaAngleRight className="bg-black text-white p-[5px] rounded-full w-[20px] h-[20px] " />
                  Learn More
                </p>
              </div>
              <img
                src={Male}
                className="w-[400px] h-full"
                height="auto"
                alt=""
              />
            </div>

            <div className=" max-w-[500px] w-full h-[234px] rounded-lg overflow-hidden flex items-center order-2 bg-primary flex-grow-0 border border-[#555555]/30 shadow-sm gap-3">
              <div className="flex-1 pl-3">
                <h1 className="font-medium  text-2xl text-white">Front-End</h1>
                <p className="font-[300] text-lg text-white">Development</p>
                <p className="flex gap-1 mt-6 w-full text-[13px] text-white">
                  <FaAngleRight className="bg-white text-black p-[5px] rounded-full w-[20px] h-[20px] " />
                  Learn More
                </p>
              </div>
              <img
                src={MaleII}
                className="w-[400px] h-full"
                height="auto"
                alt=""
              />
            </div>
          </div>

          <div className="flex flex-col gap-10 md:flex-row w-full z-50 justify-between items-center">
            <div className=" max-w-[500px] w-full h-[234px] rounded-lg overflow-hidden flex items-center bg-white flex-grow-0 border border-[#555555]/30 shadow-sm gap-3">
              <div className="flex-1 flex flex-col items-start gap-8 pl-3">
                <div className="w-[100px]">
                  <h1 className="font-medium text-2xl">UI/Ux</h1>
                  <p className="font-[300] text-lg">Design</p>
                </div>
                <p className="flex gap-1 mt-6 w-full text-[13px]">
                  <FaAngleRight className="bg-black text-white p-[5px] rounded-full w-[20px] h-[20px] " />
                  Learn More
                </p>
              </div>
              <img
                src={Male}
                className="w-[400px] h-full"
                height="auto"
                alt=""
              />
            </div>
            <div className=" max-w-[500px] w-full h-[234px] rounded-lg overflow-hidden flex items-center order-2 bg-primary flex-grow-0 border border-[#555555]/30 shadow-sm gap-3">
              <div className="flex-1 pl-3">
                <h1 className="font-medium  text-[clamp(1.3rem,5vw,1.34rem)] leading-[1] text-white">
                  Mobile App
                </h1>
                <p className="font-[300] text-lg text-white">Development</p>
                <p className="flex gap-1 mt-6 w-full text-[13px] text-white">
                  <FaAngleRight className="bg-white text-black p-[5px] rounded-full w-[20px] h-[20px] " />
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
          </div>
        </div>

        <div className="flex items-center justify-center">
          <Button
            className="shadow-md border border-[##4D4D4D1A] bg-[#1d4ed8] text-white py-2.5 font-normal px-5 rounded-[30px]"
            onClick={() => navigate("/services")}
          >
            See All
          </Button>
        </div>
      </div>
    </>
  );
};

export default Section3;
