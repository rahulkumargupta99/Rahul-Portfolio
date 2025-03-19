import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="text-5xl font-extrabold mb-10 text-center text-purple-700 tracking-wide"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h1>

      <motion.div
        className="flex flex-col md:flex-row items-center gap-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        {/* Enlarged Card Image */}
        <motion.div
          className="w-96 h-96 bg-white shadow-2xl rounded-3xl overflow-hidden border border-gray-300"
          whileHover={{ scale: 1.05 }}
        >
          <img
            src="Rahulportfolio.jpg"
            alt="Profile"
            className="w-full h-3/4 object-cover"
          />
          <div className="p-6 text-center">
            <h3 className="text-2xl font-semibold text-gray-700">
              Rahul Kumar Gupta
            </h3>
            <p className="text-lg text-gray-500">
              Software Developer & CSE 
            </p>
          </div>
        </motion.div>

        {/* About Text */}
        <motion.div className="max-w-2xl text-center md:text-left">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            As a Computer Science student at Centurion University and a web developer, I specialize in creating responsive and user-friendly websites. 💻 
            With strong knowledge of <span className="font-semibold text-purple-700">Java</span>, I develop efficient backend solutions, and my understanding of <span className="font-semibold text-green-600">IT networking</span> enhances system performance. ⚡ 
            Passionate about learning new technologies and solving real-world problems, I continuously improve my skills. 🚀
          </p>
          <p className="mt-4 text-lg md:text-xl text-gray-700">
            Feel free to explore my portfolio and connect with me for exciting opportunities! 👨‍💻
          </p>
        </motion.div>
      </motion.div>

      {/* Education & Achievements Table */}
      <motion.table
        className="w-full border-separate border-spacing-4 shadow-lg rounded-lg mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <tbody>
          {/* Education Section */}
          <tr>
            <td
              className="font-bold text-2xl text-white bg-green-600 py-3 px-5 rounded-t-lg"
              colSpan="2"
            >
              Education
            </td>
          </tr>
          <tr>
            <td className="font-medium text-blue-900 bg-blue-200 border border-blue-300 p-5 rounded-lg">
              B. Tech
            </td>
            <td className="text-gray-800 bg-blue-100 border border-blue-300 p-5 rounded-lg">
              Centurion University of Technology and Management | 2021-2025 -
              Bachelor Degree in Computer Science and Engineering with 8.6 CGPA
              (contd.)
            </td>
          </tr>
          <tr>
            <td className="font-medium text-orange-900 bg-orange-200 border border-orange-300 p-5 rounded-lg">
              Class XII (PCM)
            </td>
            <td className="text-gray-800 bg-orange-100 border border-orange-300 p-5 rounded-lg">
              +2 Mahendra High School, Siwan Bihar (BSEB) | 2021 - Passed Higher
              Secondary with 69.6%
            </td>
          </tr>
          <tr>
            <td className="font-medium text-red-900 bg-red-200 border border-red-300 p-5 rounded-lg">
              Class X
            </td>
            <td className="text-gray-800 bg-red-100 border border-red-300 p-5 rounded-lg">
              Mahendra High School, Siwan Bihar (BSEB) | 2019 - Passed
              Matriculation with 73%
            </td>
          </tr>

          {/* Achievements Section */}
          <tr>
            <td
              className="font-bold text-2xl text-white bg-purple-600 py-3 px-5 rounded-t-lg"
              colSpan="2"
            >
              Achievements
            </td>
          </tr>
          <tr>
            <td
              className="text-gray-900 bg-purple-200 border border-purple-300 p-5 rounded-lg"
              colSpan="2"
            >
              Solved 100+ Questions on GFG
            </td>
          </tr>
          <tr>
            <td
              className="text-gray-900 bg-purple-100 border border-purple-300 p-5 rounded-lg"
              colSpan="2"
            >
              Solved 80+ Questions on LeetCode
            </td>
          </tr>

          {/* Mission Statement Section */}
          <tr>
            <td
              className="font-bold text-2xl text-white bg-teal-600 py-3 px-5 rounded-t-lg"
              colSpan="2"
            >
              Mission Statement
            </td>
          </tr>
          <tr>
              <td className="bg-teal-200 border border-teal-300 p-4 rounded-lg" colSpan="2">
                My mission is to build innovative software solutions that enhance digital experiences. Dedicated to continuous learning, I aim to make a positive impact through technology.
              </td>
            </tr>
        </tbody>
      </motion.table>
    </motion.div>
  );
}

export default About;
