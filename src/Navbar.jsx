import React, { useState, useEffect } from "react";
import { MdMenu, MdClose, MdWbSunny, MdNightsStay } from "react-icons/md";
import { Link, animateScroll as scroll } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Project" },
    { id: 4, text: "Experience" },
    { id: 5, text: "Certificate" },
    { id: 6, text: "Contact" },
  ];

  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme) {
      setDarkMode(savedTheme === "true");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-8 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-gray-100 dark:bg-gray-800 transition duration-300">
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
            <h1 className="font-semibold text-xl cursor-pointer text-gray-800 dark:text-gray-100">
              Rahu<span className="text-blue-600 text-2xl">l</span>
              <p className="text-sm text-gray-600 dark:text-gray-400">Software Developer</p>
            </h1>
          </a>
        </div>
        {/* Desktop Navbar */}
        <div className="flex items-center">
          <ul className="hidden md:flex space-x-8 text-gray-800 dark:text-gray-100">
            {navItems.map(({ id, text }) => (
              <li
                className="hover:scale-105 duration-200 cursor-pointer hover:text-blue-500 dark:hover:text-blue-400"
                key={id}
              >
                <Link
                  to={text}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="text-blue-600 font-bold"
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
          <div
            onClick={() => setDarkMode(!darkMode)}
            className="cursor-pointer ml-4 text-gray-800 dark:text-gray-100"
          >
            {darkMode ? <MdWbSunny size={24} /> : <MdNightsStay size={24} />}
          </div>
          <div
            onClick={() => setMenu(!menu)}
            className="md:hidden cursor-pointer ml-4 text-gray-800 dark:text-gray-100"
          >
            {menu ? <MdClose size={24} /> : <MdMenu size={24} />}
          </div>
        </div>
      </div>
      {/* Mobile Navbar */}
      {menu && (
        <div className="bg-gray-100 dark:bg-gray-800 transition duration-300">
          <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl text-gray-800 dark:text-gray-100">
            {navItems.map(({ id, text }) => (
              <li
                className="hover:scale-105 duration-200 font-semibold cursor-pointer hover:text-blue-500 dark:hover:text-blue-400"
                key={id}
              >
                <Link
                  onClick={() => setMenu(!menu)}
                  to={text}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="text-blue-600 font-bold"
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
