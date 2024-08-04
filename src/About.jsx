import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <h1 className="text-4xl font-bold mb-10 text-center text-purple-600">About Me</h1>
      
      <div className="mb-12 text-center">
        <p className="text-lg text-gray-800 mb-6">
          As a Computer Science student at Centurion University and a web developer, I specialize in creating responsive and user-friendly websites. With a passion for learning new technologies and working on exciting projects, I continuously strive to improve my skills. Feel free to explore my portfolio and get in touch if you'd like to connect!
        </p>
      </div>

      <table className="w-full border-separate border-spacing-4">
        <tbody>
          {/* Education & Training */}
          <tr>
            <td className="font-semibold text-xl text-white bg-green-500 py-2 px-4 rounded-t-lg" colSpan="2">Education & Training</td>
          </tr>
          <tr>
            <td className="font-medium text-blue-800 bg-blue-100 border border-blue-200 p-4 rounded-lg">
              B. Tech
            </td>
            <td className="text-gray-700 bg-blue-50 border border-blue-200 p-4 rounded-lg">
              Centurion University of Technology and Management | 2021-2025 - Bachelor Degree in Computer Science and Engineering with 8.6 CGPA (contd.)
            </td>
          </tr>
          <tr>
            <td className="font-medium text-orange-800 bg-orange-100 border border-orange-200 p-4 rounded-lg">
              Class XII (PCM)
            </td>
            <td className="text-gray-700 bg-orange-50 border border-orange-200 p-4 rounded-lg">
              +2 Mahendra High School, Siwan Bihar (BSEB) | 2021 - Passed Higher Secondary with 69.6%
            </td>
          </tr>
          <tr>
            <td className="font-medium text-red-800 bg-red-100 border border-red-200 p-4 rounded-lg">
              Class X
            </td>
            <td className="text-gray-700 bg-red-50 border border-red-200 p-4 rounded-lg">
              Mahendra High School, Siwan Bihar (BSEB) | 2019 - Passed Matriculation with 73%
            </td>
          </tr>

          {/* Achievements */}
          <tr>
            <td className="font-semibold text-xl text-white bg-purple-500 py-2 px-4 rounded-t-lg" colSpan="2">Achievements</td>
          </tr>
          <tr>
            <td className="text-gray-800 bg-purple-100 border border-purple-200 p-4 rounded-lg" colSpan="2">
              Solved 50+ Questions on GFG
            </td>
          </tr>
          <tr>
            <td className="text-gray-800 bg-purple-50 border border-purple-200 p-4 rounded-lg" colSpan="2">
              Solved 70+ Questions on LeetCode
            </td>
          </tr>

          {/* Mission Statement */}
          <tr>
            <td className="font-semibold text-xl text-white bg-teal-500 py-2 px-4 rounded-t-lg" colSpan="2">Mission Statement</td>
          </tr>
          <tr>
            <td className="text-gray-800 bg-teal-100 border border-teal-200 p-4 rounded-lg" colSpan="2">
              My mission is to leverage my skills and creativity to deliver innovative web development solutions that exceed client expectations and make a positive impact on the digital landscape. I am dedicated to continuous learning and growth, always seeking new challenges and opportunities to expand my expertise.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default About;
