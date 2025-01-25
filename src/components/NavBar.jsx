import React from "react";
import Logo from "../assets/treshteam_logo.svg";
import { Link } from "react-router";
import Button from "./Button/Button";
const NavBar = () => {
  return (
    <div className="flex items-center justify-between  px-16 py-3">
      <ul>
        <li className="flex items-center Logo space-x-1">
          <img src={Logo} width={50} height={50} alt="" />
          <h1 className="text-xl font-semibold uppercase">Team Tresh</h1>
        </li>
      </ul>
      <ul className="flex items-center space-x-10 text-lg font-medium">
        <li>
          <Link>Services</Link>
        </li>
        <li>
          <Link>Projects</Link>
        </li>
        <li>
          <Link>About us</Link>
        </li>
      </ul>
      {/* <button className="bg-primary text-white rounded-3xl py-2.5 px-5">
        Contact Us
      </button> */}
      <Button>Contact Us</Button>
    </div>
  );
};

export default NavBar;
