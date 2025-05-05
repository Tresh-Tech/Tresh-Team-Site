import React from "react";
import Logo from "../assets/treshteam_logo.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "./Button/Button";
const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between  px-16 py-3">
      <ul>
        <li className="flex items-center Logo space-x-1">
          <img src={Logo} width={50} height={50} alt="" />
          <h1 className="text-xl font-semibold uppercase">Team Tresh</h1>
        </li>
      </ul>
      <ul className="flex items-center space-x-10 text-lg font-medium">
        <li className=" rounded-[30px] overflow-hidden p-1">
          <Link className="relative group" to="/">
            Home
            <div
              className={`${
                location.pathname === "/" ? "mama" : ""
              } absolute w-full h-0.5 transition-all duration-300`}
            ></div>
          </Link>
        </li>
        <li className=" rounded-[30px] overflow-hidden p-1">
          <Link className="relative group" to="/services">
            Services
            <div
              className={`${
                location.pathname === "/services" ? "mama" : ""
              } absolute w-full h-0.5 transition-all duration-300`}
            ></div>
          </Link>
        </li>
        <li className=" rounded-[30px] overflow-hidden p-1">
          <Link className="relative group" to="/projects">
            Projects
            <div
              className={`${
                location.pathname === "/projects" ? "mama" : ""
              } absolute w-full h-0.5 transition-all duration-300`}
            ></div>
          </Link>
        </li>
        <li className=" rounded-[30px] overflow-hidden p-1">
          <Link className="relative group" to="/about-us">
            About us
            <div
              className={`${
                location.pathname === "/about-us" ? "mama" : ""
              } absolute w-full h-0.5 transition-all duration-300`}
            ></div>
          </Link>
        </li>
      </ul>
      {/* <button className="bg-primary text-white rounded-3xl py-2.5 px-5">
        Contact Us
      </button> */}
      <Button
        className="shadow-md bg-[#1d4ed8] text-white py-2.5 px-5 rounded-[30px]"
        onClick={() => navigate('/contact-us')}>Contact Us</Button>
    </div>
  );
};

export default NavBar;
