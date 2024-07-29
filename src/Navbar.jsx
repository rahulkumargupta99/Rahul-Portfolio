import React, { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { Link } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Project" },
    { id: 5, text: "Experience" },
    { id: 6, text: "Contact" },
  ];

  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-8 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-gray-100">
      <div className="flex justify-between items-center h-16">
        <div className="flex space-x-2 items-center">
          <a href="https://www.linkedin.com/in/rahul-kumar-gupta-93a9b3283/">
            <img
              src="/photo.avif"
              className="h-12 w-12 rounded-full border border-gray-300"
              alt="Profile"
            />
          </a>
          <a href="https://www.linkedin.com/in/rahul-kumar-gupta-93a9b3283/">
            <h1 className="font-semibold text-xl cursor-pointer text-gray-800">
              Rahu<span className="text-blue-600 text-2xl">l</span>
              <p className="text-sm text-gray-600">Web Developer</p>
            </h1>
          </a>
        </div>
        {/* desktop navbar */}
        <div>
          <ul className="hidden md:flex space-x-8 text-gray-800">
            {navItems.map(({ id, text }) => (
              <li
                className="hover:scale-105 duration-200 cursor-pointer"
                key={id}
              >
                <Link
                  to={text}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active"
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
          <div
            onClick={() => setMenu(!menu)}
            className="md:hidden cursor-pointer text-gray-800"
          >
            {menu ? <MdClose size={24} /> : <MdMenu size={24} />}
          </div>
        </div>
      </div>
      {/* mobile navbar */}
      {menu && (
        <div className="bg-gray-100">
          <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl text-gray-800">
            {navItems.map(({ id, text }) => (
              <li
                className="hover:scale-105 duration-200 font-semibold cursor-pointer"
                key={id}
              >
                <Link
                  onClick={() => setMenu(!menu)}
                  to={text}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active"
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
export default Navbar;
