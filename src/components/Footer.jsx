import "react";
import { Link } from "react-router";
import Logo from "../assets/Footer Logo.svg";
import { CiMail } from "react-icons/ci";
import {
  FaAngleRight,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
const Footer = () => {
  return (
    <>
      <div className="bg-black flex flex-col gap-[20px] py-12 px-7 md:px-16">
        <div className="block md:flex relative">
          <div className="flex flex-col gap-[43px] max-w-[600px] w-full">
            <div className="flex flex-col gap-[10px]">
              <div className="flex items-center Logo space-x-2">
                <img src={Logo} className="w-[40px] h-[40px]" alt="" />
                <h1 className="text-md md:text-xl text-white font-semibold uppercase">
                  Team Tresh
                </h1>
              </div>
              <p className="text-md md:text-[20px] leading-[27px] text-white">
                Join a team of creatives that are ready to connect with other
                creatives and work
              </p>
            </div>
            <ul className="flex flex-col md:flex-row items-start gap-4 md:gap-[70px] text-lg font-medium">
              <li className="text-lg underline font-normal leading-[120%] text-white">
                <Link to="/">Home</Link>
              </li>
              <li className="text-lg underline font-normal leading-[120%] text-white">
                <Link to="/services">Services</Link>
              </li>
              <li className="text-lg underline font-normal leading-[120%] text-white">
                <Link to="/projects">Projects</Link>
              </li>
              <li className="text-lg underline font-normal leading-[120%] text-white">
                <Link to="/about-us">About us</Link>
              </li>
            </ul>
          </div>
          <div className=" md:absolute right-0 bottom-0 max-md:mt-12 flex flex-col gap-5">
            <h1 className="text-[20px] text-center font-semibold leading-[30px] text-white">
              Subscribe to our newsletter
            </h1>
            <div className="flex items-center min-w-[150px] w-[250px] md:min-w-fit md:w-fit">
              <div className="flex items-center space-x-2 px-2 rounded-l-[22px] border border-r-0 h-full">
                <CiMail color="white" size={20} />
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="outline-none w-[150px] md:w-auto py-3 border-none bg-transparent text-[#DEE1E6]"
                  placeholder="Input your email"
                />
              </div>
              <button className="bg-white border-none outline-none p-3 rounded-r-[22px]">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="w-full p-0.5 rounded-xl bg-white">
          <div className=" border-dashed border border-black"></div>
        </div>
        <div className="flex gap-4 md:gap-0 flex-col md:flex-row md:justify-between md:items-center">
          <div className="flex items-center border w-fit rounded-[4px] gap-[41px] p-2">
            <h1 className="text-white">English</h1>
            <FaAngleRight color="white" size={20} />
          </div>
          <div className="flex items-center justify-center gap-[41px]">
            <FaTwitter size={25} color="#4CD2FF" />
            <FaFacebook size={25} color="#4C8AFF" />
            <FaLinkedin size={25} color="#5378D0" />
            <FaYoutube size={25} color="#FF4C4C" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
