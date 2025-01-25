import React from "react";
import { Link } from "react-router";
import Logo from "../assets/Footer Logo.svg";
import { CiMail } from "react-icons/ci";
const Footer = () => {
  return (
    <>
      <div className="bg-black  px-16">
        <div className="flex justify-between items-end">
          <div className="flex flex-col gap-[43px] max-w-[600px] w-full">
            <div className="flex flex-col gap-[10px]">
              <div className="flex items-center Logo space-x-2">
                <img src={Logo} width={70} height={70} alt="" />
                <h1 className="text-[34px] text-white leading-[66px] font-bold uppercase">
                  Team Tresh
                </h1>
              </div>
              <p className="text-[20px] leading-[27px] text-white">
                Join a team of creatives that are ready to connect with other
                creatives and work
              </p>
            </div>
            <ul className="flex items-center gap-[70px] text-lg font-medium">
              <li className="text-lg font-normal leading-[120%] text-white">
                <Link>Services</Link>
              </li>
              <li className="text-lg font-normal leading-[120%] text-white">
                <Link>Projects</Link>
              </li>
              <li className="text-lg font-normal leading-[120%] text-white">
                <Link>About us</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-5 border">
            <h1 className="text-[20px] font-semibold leading-[30px] text-white">
              Subscribe to our newsletter
            </h1>
            <div className="flex items-center w-fit">
              <div className="flex items-center space-x-2 px-2 rounded-l-[22px] border border-r-0 h-full">
                <CiMail color="white" size={20} />
                <input
                  type="email"
                  name=""
                  id="email"
                  className="outline-none py-3 border-none bg-transparent text-[#DEE1E6]"
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
      </div>
    </>
  );
};

export default Footer;
