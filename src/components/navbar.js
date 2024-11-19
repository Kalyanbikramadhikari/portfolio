import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  // State to manage active nav item
  const [activeNavItem, setActiveNavItem] = useState(null);

  return (
    <div className="shadow-md py-2 w-full sticky top-0 px-4 md:px-16 bg-white flex justify-between items-center z-50">
      {/* Logo Section */}
      <div className="flex items-center">
        <h5 className="text-[#1ea1f3] font-bold text-2xl md:text-3xl">Kalyan. </h5>
        <img src="/assets/images/blue-tick.png" className="h-6" alt="" />
      </div>



      <div className='hidden md:items-start md:justify-start md:flex-row md:gap-y-4 '>
        <div className="flex flex-col gap-x-16 font-medium md:flex md:flex-row">
        <Link
            to="aboutme"
            smooth={true}
            offset={-10}
            duration={500}
            onClick={() => setActiveNavItem("about me")}
            className={`cursor-pointer ${activeNavItem === "about me" ? "text-blue-500" : "text-gray-600"} `}
          >
            About Me
          </Link>
          <Link
            to="opensource"
            smooth={true}
            offset={-10}
            duration={500}
            onClick={() => setActiveNavItem("open source")}
            className={`cursor-pointer ${activeNavItem === "open source" ? "text-blue-500" : "text-gray-600"} `}
          >
            Open Source
          </Link>
          <Link
            to="project"
            smooth={true}
            offset={-10}
            duration={500}
            onClick={() => setActiveNavItem("project")}
            className={`cursor-pointer ${activeNavItem === "project" ? "text-blue-500" : "text-gray-600"} `}
          >
            Projects
          </Link>
          <Link
            to="skills"
            smooth={true}
            offset={-40}
            duration={0}
            onClick={() => setActiveNavItem("skills")}
            className={`cursor-pointer ${activeNavItem === "skills" ? "text-blue-500" : "text-gray-600"} `}
          >
            Skills
          </Link>
          <Link
            to="get-in-touch"
            smooth={true}
            offset={0}
            duration={500}
            onClick={() => setActiveNavItem("get-in-touch")}
            className={`cursor-pointer ${activeNavItem === "get-in-touch" ? "text-blue-500" : "text-gray-600"} `}
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
