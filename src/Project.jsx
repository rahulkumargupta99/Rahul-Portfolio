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
      description: "This is a clone of the Spotify application, demonstrating music streaming functionalities.",
    },
    {
      id: 2,
      logo: Stopwatch,
      name: "Stopwatch",
      link: "https://stopwatch-three-murex-57.vercel.app/",
      description: "A simple stopwatch application built using HTML, CSS, JS.",
    },
    {
      id: 3,
      logo: Weather,
      name: "Weather website",
      link: "https://weatherwebsite-rahul-kumar-gupta-s-projects.vercel.app/",
      description: "A weather forecasting website that provides real-time weather updates.",
    },
    {
      id: 4,
      logo: Game,
      name: "Tic-tac-toe Game",
      link: "https://tictactoegame-rahul-kumar-gupta-s-projects.vercel.app/",
      description: "A classic Tic-tac-toe game developed using HTML, CSS, JS.",
    },
    {
      id: 5,
      logo: Lending,
      name: "e-learning Lending page",
      link: "https://lendingpage-rahul-kumar-gupta-s-projects.vercel.app/",
      description: "A landing page for an e-learning platform.",
    },
    {
      id: 6,
      logo: Netflix,
      name: "Netflix Clone",
      link: "https://netflixclone-4ajia0mt4-rahul-kumar-gupta-s-projects.vercel.app/",
      description: "A clone of the Netflix application, showcasing video streaming functionalities.",
    },
    {
      id: 7,
      logo: Nike,
      name: "Nike Lending Page",
      link: "https://project-1-omega-nine.vercel.app/",
      description: "A landing page for Nike's products.",
    },
  ];

  return (
    <div
      name="Project"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-800">Live Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardItem.map(({ id, logo, name, link, description }) => (
            <div
              className="border-2 rounded-lg shadow-lg p-4 cursor-pointer hover:scale-105 duration-300 flex flex-col justify-between"
              key={id}
            >
              <div className="flex flex-col items-center">
                <div className="w-full h-[200px] flex items-center justify-center overflow-hidden mb-4 rounded-t-lg">
                  <img
                    src={logo}
                    className="object-cover w-full h-full rounded-lg"
                    alt={name}
                  />
                </div>
                <a
                  href={link}
                  className="px-4 py-2 bg-indigo-600 text-white text-xl font-semibold rounded-full hover:bg-indigo-700 transition duration-300"
                >
                  {name}
                </a>
                <button
                  onClick={() => toggleExpand(id)}
                  className="mt-4 px-4 py-2 bg-gray-700 text-white text-md font-medium rounded-full hover:bg-gray-800 transition duration-300"
                >
                  {expanded[id] ? "Show Less" : "Show More"}
                </button>
                {expanded[id] && (
                  <p className="mt-4 text-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg shadow-inner">
                    {description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
