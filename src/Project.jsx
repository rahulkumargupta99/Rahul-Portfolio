import React from "react";
import Spotify from "../public/Spotify.png";
import Stopwatch from "../public/Stopwatch.png";
import Weather from "../public/Weather.png";
import Game from "../public/Game.png";
import Lending from "../public/Lending.png";
import Netflix from "../public/Netflix.png";

function Project() {
  const cardItem = [
    {
      id: 1,
      logo: Spotify,
      name: "Spotify Clone",
    },
    {
      id: 2,
      logo: Stopwatch,
      name: "Stopwatch",
    },
    {
      id: 3,
      logo: Weather,
      name: "Weather Website",
    },
    {
      id: 4,
      logo: Game,
      name: "Tic-tac-toe Game",
    },
    {
      id: 5,
      logo: Lending,
      name: "Lending Page",
    },
    {
      id: 6,
      logo: Netflix,
      name: "Netflix Clone",
    },
  ];

  return (
    <div
      name="Project"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Live Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 my-5">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className="md:w-[300px] md:h-[400px] border-2 rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300 flex flex-col justify-between"
              key={id}
            >
              <div className="flex flex-col items-center">
                <div className="w-full h-[300px] flex items-center justify-center overflow-hidden">
                  <img
                    src={logo}
                    className="object-cover w-full h-full"
                    alt={name}
                  />
                </div>
                <button className="px-2 font-bold text-xl mt-2 text-blue-500 hover:underline">
                  {name}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Project;
