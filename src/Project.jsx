import React, { useState } from "react";
import Spotify from "../public/Spotify.png";
import Stopwatch from "../public/Stopwatch.png";
import Weather from "../public/Weather.png";
import Game from "../public/Game.png";
import Lending from "../public/Lending.png";
import Netflix from "../public/Netflix.png";
import Nike from "../public/Nike.jpg";

function Project() {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (id) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const cardItem = [
    {
      id: 1,
      logo: Spotify,
      name: "Spotify Clone",
      link: "https://spotifyclone-rahul-kumar-gupta-s-projects.vercel.app/",
      description: "A Spotify clone built using HTML and CSS. It features a responsive design, easy navigation, and custom playback controls. This project highlights skills in building user-friendly and visually appealing web applications.",
    },
    {
      id: 2,
      logo: Stopwatch,
      name: "Stopwatch",
      link: "https://stopwatch-three-murex-57.vercel.app/",
      description: "A simple stopwatch built with HTML, CSS, and JavaScript. It includes start, stop, and reset functionality, and features a clean, user-friendly design. This project demonstrates skills in front-end development and JavaScript programming.",
    },
    {
      id: 3,
      logo: Weather,
      name: "Weather Website",
      link: "https://weatherwebsite-rahul-kumar-gupta-s-projects.vercel.app/",
      description: "A weather app built with HTML, CSS, and JavaScript. It provides current weather information based on the user's location and features a clean, responsive design. This project showcases skills in web development and API integration.",
    },
    {
      id: 4,
      logo: Game,
      name: "Tic-tac-toe Game",
      link: "https://tictactoegame-rahul-kumar-gupta-s-projects.vercel.app/",
      description: "A classic Tic-Tac-Toe game developed using HTML, CSS, and JavaScript. It features a simple, interactive interface where players can take turns marking Xs and Os. This project demonstrates skills in game logic implementation and user interface design.",
    },
    {
      id: 5,
      logo: Lending,
      name: "E-learning Landing Page",
      link: "https://lendingpage-rahul-kumar-gupta-s-projects.vercel.app/",
      description: "A landing page for an e-learning platform created with HTML and CSS. It features an attractive, user-friendly design with sections for course highlights, testimonials, and sign-up options. This project highlights skills in web design and layout development.",
    },
    {
      id: 6,
      logo: Netflix,
      name: "Netflix Clone",
      link: "https://netflixclone-4ajia0mt4-rahul-kumar-gupta-s-projects.vercel.app/",
      description: "A Netflix clone built using HTML and CSS. It features a visually appealing layout that mimics the Netflix interface, including sections for featured content, categories, and a responsive design. This project demonstrates skills in front-end development and UI/UX design.",
    },
    {
      id: 7,
      logo: Nike,
      name: "Nike Landing Page",
      link: "https://project-1-omega-nine.vercel.app/",
      description: "A landing page for Nike shoes created using React. It features a dynamic and interactive design with sections showcasing product highlights, images, and a user-friendly interface. This project highlights skills in React development and modern web design.",
    },
  ];

  return (
    <div
      name="Project"
      className="max-w-screen-2xl container mx-auto px-4 md:px-8 lg:px-16 my-12"
    >
      <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-800">
        Live Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {cardItem.map(({ id, logo, name, link, description }) => (
          <div
            key={id}
            className="border-2 border-gray-200 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300 overflow-hidden bg-white"
          >
            <a href={link} target="_blank" rel="noopener noreferrer">
              <div className="relative cursor-pointer">
                <img
                  src={logo}
                  className="w-full h-48 object-cover"
                  alt={name}
                />
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-gray-900 to-transparent text-white text-lg font-semibold text-center">
                  {name}
                </div>
              </div>
            </a>
            <div className="p-4">
              <button
                onClick={() => toggleExpand(id)}
                className="w-full px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition duration-300"
              >
                {expanded[id] ? "Show Less" : "Show More"}
              </button>
              {expanded[id] && (
                <p className="mt-4 text-gray-700 text-sm">
                  {description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
