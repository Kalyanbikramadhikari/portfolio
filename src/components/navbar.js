import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  // State to manage active nav item
  const [activeNavItem, setActiveNavItem] = useState(null);
  // State to manage hamburger menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="shadow-md py-2 w-full sticky top-0 px-4 md:px-16 bg-white flex justify-between items-center z-50">
      {/* Logo Section */}
      <div className="flex items-center">
        <h5 className="text-[#1ea1f3] font-bold text-2xl md:text-3xl">Kalyan. </h5>
        <img src="/assets/images/blue-tick.png" className="h-6" alt="" />
      </div>

      {/* Hamburger Menu */}
      <div className="block md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg
            className="w-6 h-6 text-gray-600 hover:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Regular Menu */}
      <div className={`md:flex md:items-start md:justify-start md:flex-row md:gap-y-4 ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col gap-x-16 font-medium md:flex md:flex-row">
          <Link
            to="project"
            smooth={true}
            offset={-10}
            duration={500}
            onClick={() => setActiveNavItem("project")}
            className={activeNavItem === "project" ? "text-blue-500 cursor-pointer" : "cursor-pointer"}
          >
            Project
          </Link>
          <Link
            to="skills"
            smooth={true}
            offset={-40}
            duration={0}
            onClick={() => setActiveNavItem("skills")}
            className={activeNavItem === "skills" ? "text-blue-500 cursor-pointer" : "cursor-pointer"}
          >
            Skills
          </Link>
          <Link
            to="get-in-touch"
            smooth={true}
            offset={0}
            duration={500}
            onClick={() => setActiveNavItem("get-in-touch")}
            className={activeNavItem === "get-in-touch" ? "text-blue-500 cursor-pointer" : "cursor-pointer"}
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
