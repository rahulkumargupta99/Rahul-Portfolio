import React from "react";
import pic from "../public/R1.jpg";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { SiMongodb, SiExpress } from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa6";
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
      <div className="flex flex-col md:flex-row items-center">
        {/* Left Section */}
        <div className="md:w-1/2 mt-12 md:mt-24 space-y-4 text-center md:text-left order-2 md:order-1">
          <span className="text-lg font-semibold text-blue-600">Welcome To My Portfolio</span>
          <div className="flex justify-center md:justify-start space-x-2 text-2xl md:text-4xl font-bold">
            <h1 className="text-gray-800">Hello, I'm a </h1>
            <ReactTyped
              className="text-red-600"
              strings={["Developer", "Programmer", "Coder", "Youtuber"]}
              typeSpeed={60}
              backSpeed={70}
              loop
            />
          </div>
          <p className="text-sm md:text-md text-gray-700 text-justify leading-relaxed">
            Hello! I'm <span className="font-bold text-blue-600">Rahul Kumar Gupta</span>, a passionate web developer specializing in React. With expertise in modern JavaScript frameworks, I create innovative and efficient web applications. I also have strong Java skills and continuously explore new technologies to solve complex problems.
          </p>
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between space-y-6 md:space-y-0">
            {/* Social Media Links */}
            <div className="text-center md:text-left">
              <h1 className="font-bold text-xl text-gray-800">Connect With Me</h1>
              <ul className="flex justify-center md:justify-start space-x-5 mt-2">
                <li><a href="https://www.instagram.com/_rah_ul_21/" target="_blank" rel="noopener noreferrer"><GrInstagram className="text-3xl text-pink-500 hover:scale-110 transition" /></a></li>
                <li><a href="https://www.linkedin.com/in/rahul-kumar-gupta-93a9b3283/" target="_blank" rel="noopener noreferrer"><FaLinkedin className="text-3xl text-blue-600 hover:scale-110 transition" /></a></li>
                <li><a href="https://www.youtube.com/@Rahulkumar70618" target="_blank" rel="noopener noreferrer"><IoLogoYoutube className="text-3xl text-red-600 hover:scale-110 transition" /></a></li>
                <li><a href="https://github.com/rahulkumargupta99" target="_blank" rel="noopener noreferrer"><FaGithub className="text-3xl text-gray-800 hover:scale-110 transition" /></a></li>
              </ul>
            </div>
            {/* Tech Stack */}
            <div className="text-center md:text-left">
              <h1 className="font-bold text-xl text-gray-800">Currently Working on</h1>
              <div className="flex justify-center md:justify-start space-x-5 mt-2">
                <SiMongodb className="text-3xl text-green-500 hover:scale-110 transition" />
                <SiExpress className="text-3xl text-gray-700 hover:scale-110 transition" />
                <FaReact className="text-3xl text-blue-500 hover:scale-110 transition" />
                <FaNodeJs className="text-3xl text-green-700 hover:scale-110 transition" />
              </div>
            </div>
          </div>
        </div>
        {/* Right Section */}
        <div className="md:w-1/2 md:ml-12 md:mt-20 mt-8 order-1 flex flex-col items-center">
          <img src={pic} className="rounded-full md:w-[400px] md:h-[400px] shadow-lg" alt="profile" />
          <a
            href="https://drive.google.com/file/d/14G6YDf80nznkYy2Qf805_rMGH4_BnqJd/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-lg font-bold rounded-full hover:scale-105 transition"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
