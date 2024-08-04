import React from "react";
import pic from "../public/1.jpg";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span>Welcome In My Portfolio</span>
            <div className="flex space-x-2 text-2xl md:text-4xl">
              <h1>Hello, I'm a </h1>
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Programmer", "Coder", "Youtuber"]}
                typeSpeed={60}
                backSpeed={70}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              Hello! I'm Rahul Kumar Gupta, a passionate and dedicated web developer specializing in React. With a strong foundation in HTML, CSS, JavaScript, and modern JavaScript libraries and frameworks, I bring innovative ideas to life on the web.
            </p>
            <br />
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="space-y-2">
                <h1 className="font-bold text-center">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a href="https://www.instagram.com/_rah_ul_21/" target="_blank">
                      <GrInstagram className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/rahul-kumar-gupta-93a9b3283/">
                      <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/@Rahulkumar70618">
                      <IoLogoYoutube className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/rahulkumargupta99">
                      <FaGithub className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h1 className="font-bold">Currently Working on</h1>
                <div className="flex space-x-5">
                  <SiMongodb className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <SiExpress className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaNodeJs className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1 flex flex-col items-center">
            <img src={pic} className="rounded-full md:w-[450px] md:h-[450px]" alt="profile" />
            <a
              href="/path/to/your/CV.pdf" // Update this to the actual path of your CV
              download
              className="mt-6 px-6 py-3 bg-blue-500 text-white text-lg font-bold rounded-full hover:bg-blue-600 transition duration-300"
            >
              <a href="https://drive.google.com/file/d/1DdaHpdsEJZUvbOT_oTyhbik9PW5fSH3G/view?usp=sharing">Downlod Cv</a>
            </a>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Home;
