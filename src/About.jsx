import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p>
        As a Computer Science student at Centurion University and a web developer, I specialize in creating responsive and user-friendly websites. With a passion for learning new technologies and working on exciting projects, I continuously strive to improve my skills.Feel free to explore my portfolio and get in touch if you'd like to connect!
        </p>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Education & Training
        </h1>
        <span>
         <li>
         B. Tech| Centurion University of Technology and Management |
          2021-2025 Bachelor Degree in Computer Science and Engineering with
          8.6 CGPA (contd.)
         </li>
          <li>
          Class XII (PCM) | +2 Mahendra High School, Siwan
          Bihar (BSEB) | 2021 Passed Higher Secondary with 69.6%. 
          </li>
          <li>
          Class X
          Mahendra High School, Siwan Bihar (BSEB) | 2019 Passed Matriculation
          with 73%
          </li>
        </span>
        <br />
        <br />
        {/* <h1 className="text-green-600 font-semibold text-xl">
          Skills & Expertise
        </h1>
        <span>
          <li>java</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>JAVASCRIPT</li>
          <li>React.js</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MongoDB</li>
          <li>Springboot</li>
        </span>
        <br /> */}
        {/* <br /> */}
        {/* <h1 className="text-green-600 font-semibold text-xl">
          Professional Experience
        </h1>
        <span>
          [Job Title], [Company/Organization], [Dates] [Brief description of
          responsibilities and achievements] [Job Title],
          [Company/Organization], [Dates] [Brief description of responsibilities
          and achievements] [Freelance/Contract Work], [Client/Organization],
          [Dates] [Brief description of projects and contributions]
        </span> */}
        {/* <br /> */}
        <h1 className="text-green-600 font-semibold text-xl">
          Achievements 
        </h1>
        <span>
          <p>Solved 50+ Questions on GFG</p>
          <p>Solved 70+ Questions LeetCode</p>
        </span>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Mission Statement
        </h1>
        <p>
        My mission is to leverage my skills and creativity to deliver innovative web development solutions that exceed client expectations and make a positive impact on the digital landscape. I am dedicated to continuous learning and growth, always seeking new challenges and opportunities to expand my expertise.
        </p>
        <hr />
      </div>
    </div>
  );
}

export default About;
