import  { useState } from "react";
import Logo from "../assets/treshteam_logo.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "./Button/Button";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const pages = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "About us", path: "/about-us" },
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="w-full px-6 md:px-16 py-3 bg-white shadow-md">
      <div className="flex items-center justify-between">
        {/* Logo + Toggle */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={Logo}
              className="w-[30px] h-[30px] lg:w-[50px] lg:h-[50px]"
              alt="Team Tresh Logo"
            />
            <h1 className="text-sm md:text-md lg:text-lg font-semibold uppercase">
              Tresh Tech
            </h1>
          </Link>

          {/* Hamburger icon (mobile only) */}
          <button
            onClick={toggleMenu}
            className="md:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center space-x-5 lg:space-x-8 text-lg font-medium">
          {pages.map((page) => (
            <li
              key={page.name}
              className="relative flex group rounded-[30px] overflow-hidden p-1 hover-mama"
            >
              <Link className="relative ho md:text-sm" to={page.path}>
                {page.name}
                <div
                  className={`${
                    location.pathname === page.path ? "mama w-full ho" : ""
                  } absolute w-full h-0.5 transition-all duration-300`}
                ></div>
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <Button
          className="hidden md:inline-block shadow-md bg-[#1d4ed8] text-white md:text-sm lg:text-md py-1.5 px-3 md:py-2 md:px-4 lg:py-2.5 lg:px-5 rounded-[30px]"
          onClick={() => navigate("/contact-us")}
        >
          Contact Us
        </Button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden mt-4 w-full bg-gray-50 border rounded-lg p-4 space-y-4 text-lg font-medium">
          {pages.map((page) => (
            <Link
              key={page.name}
              to={page.path}
              onClick={() => setMenuOpen(false)}
              className={`${
                location.pathname === page.path ? "mama" : ""
              } block py-2 px-3 rounded hover:bg-gray-100 transition`}
            >
              {page.name}
            </Link>
          ))}
          <Button
            className="w-full shadow-md bg-[#1d4ed8] text-white py-2.5 rounded"
            onClick={() => {
              setMenuOpen(false);
              navigate("/contact-us");
            }}
          >
            Contact Us
          </Button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;