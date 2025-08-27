import "react";
import { FaAngleRight } from "react-icons/fa6";
// import { ContentData } from "./ContentData";
import Male from "../../assets/Images/Male designer drawing on a graphics tablet.svg";
import MaleII from "../../assets/Images/code editing.svg";
import { Link, useNavigate } from "react-router-dom";
import Button from "@/components/Button/Button";
const Services = () => {
  const navigate = useNavigate();
  return (
    <div className="px-4 py-6 md:px-16 flex flex-col flex-1 gap-6 md:gap-[30px]">
      <div className="flex flex-col items-center gap-[10px] max-sm:gap-0">
        <h1 className="text-[30px] font-semibold">
          Services
        </h1>
        <p className="text-base md:text-[24px] text-center font-medium text-[#3A3A3A]">
          This is what we offer
        </p>
      </div>
      {/* <div className=" flex flex-col gap-[40px] border justify-center items-center"> */}
      <div className="w-full  flex flex-col gap-y-10">
        {/* flex 1 */}
        <div className="flex flex-col md:flex-row w-full gap-[40px] justify-center items-center flex-1">
          <Link to="/services/details/1" state={{ id: 1, src: Male }}>
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
          </Link>
          <Link to="/services/details/2" state={{ id: 2, src: MaleII }}>
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
          </Link>
        </div>
        {/* flex 2 */}
        <div className="flex flex-col md:flex-row-reverse w-full gap-[40px] justify-center items-center flex-1">
          <Link to="/services/details/3" state={{ id: 3, src: Male }}>
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
          </Link>
          <Link to="/services/details/4" state={{ id: 4, src: MaleII }}>
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
          </Link>
        </div>
        {/* flex 3 */}
        <div className="flex flex-col md:flex-row w-full gap-[40px] justify-center items-center flex-1">
          <Link to="/services/details/5" state={{ id: 5, src: Male }}>
            <div className=" max-w-[500px] w-full h-[234px] rounded-lg overflow-hidden flex items-center order-2 bg-white flex-grow-0 border border-[#555555]/30 shadow-sm gap-3">
              <div className="flex-1 flex flex-col items-start gap-8 pl-3">
                <div className="w-[155px]">
                  <h1 className="font-medium text-2xl">Social Media</h1>
                  <p className="font-[300] text-lg">Marketing</p>
                </div>
                <p className="flex gap-1 mt-6 w-full text-[13px]">
                  <FaAngleRight className="bg-black text-white p-[5px] rounded-full w-[20px] h-[20px] " />
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
            <div className=" max-w-[500px] w-full h-[234px] rounded-lg overflow-hidden flex items-center order-2 bg-primary flex-grow-0 border border-[#555555]/30 shadow-sm gap-3">
              <div className="flex-1  pl-3">
                <div className="w-[100px]">
                  <h1 className="font-medium text-2xl text-white">AI</h1>
                  <p className="font-[300] text-lg text-white">Automation</p>
                </div>
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
