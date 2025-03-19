import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import html from "../public/html.png";
import css from "../public/css.jpg";
import java from "../public/java.png";
import javascript from "../public/javascript.png";
import mysql from "../public/mysql.png";
import nodeJs from "../public/nodeJs.png";
import springBoot from "../public/springBoot.jpg";
import reactjs from "../public/reactjs.png";
import express from "../public/express.png";
import mongoDB from "../public/mongodb.jpg";

function Experience() {
  const cardItem = [
    { id: 1, logo: html, name: "HTML", bgColor: "bg-red-200" },
    { id: 2, logo: css, name: "CSS", bgColor: "bg-blue-200" },
    { id: 3, logo: java, name: "Java", bgColor: "bg-yellow-200" },
    { id: 4, logo: javascript, name: "JavaScript", bgColor: "bg-yellow-300" },
    { id: 5, logo: mysql, name: "MySQL", bgColor: "bg-green-200" },
    { id: 6, logo: nodeJs, name: "Node.js", bgColor: "bg-green-300" },
    { id: 7, logo: springBoot, name: "Spring Boot", bgColor: "bg-green-400" },
    { id: 8, logo: reactjs, name: "ReactJS", bgColor: "bg-blue-300" },
    { id: 9, logo: express, name: "Express", bgColor: "bg-gray-200" },
    { id: 10, logo: mongoDB, name: "MongoDB", bgColor: "bg-green-500" },
  ];

  return (
    <div name="Experience" className="max-w-screen-2xl container mx-auto px-4 md:px-8 my-16">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">Technical Skills & Experiences</h1>
      <p className="text-center text-lg mb-10 text-gray-700">Over 1 year of experience with the following technologies:</p>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
        }}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        className="py-6"
      >
        {cardItem.map(({ id, logo, name, bgColor }) => (
          <SwiperSlide key={id}>
            <div
              className={`flex flex-col items-center justify-center border rounded-xl shadow-lg p-4 hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105 ${bgColor}`}
            >
              <img src={logo} alt={name} className="w-20 h-20 object-cover rounded-full mb-3" />
              <div className="text-xl font-semibold text-gray-800">{name}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Experience;