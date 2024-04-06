import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  // State to manage active nav item
  const [activeNavItem, setActiveNavItem] = useState(null);

  return (
    <div className="shadow-md py-2 w-full sticky top-0 px-16 bg-white flex justify-between z-50">
      <div className="flex gap-x-4 items-center">
        <h5 className="text-[#1ea1f3] font-bold text-3xl">Kalyan. </h5>
        <img src="/assets/images/blue-tick.png" className="h-6" alt="" />
      </div>

      <div className="flex justify-between gap-x-16 items-center text-xl font-semibold mr-10">
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
  );
};

export default Navbar;
