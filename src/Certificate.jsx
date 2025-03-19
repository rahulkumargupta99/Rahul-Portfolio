import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import codetantra from "../public/image.png";
import hackerrank from "../public/java basic.jpg";
import javaScript1 from "../public/javaScript.jpg";
import HTML from "../public/HTML.jpg";
import SQL from "../public/sql.jpg";
import Internship from "../public/internship.jpg";
import Frontent from "../public/frontend devlopment.jpg";
import Discover from "../public/Discover yourself.jpg";
import CUTM from "../public/student cordinator.jpg";
import ISRO from "../public/isro.jpg";

function Certifications() {
  const certifications = [
    { id: 1, logo: codetantra, name: "Java Course For Placement", link: "https://drive.google.com/file/d/1Ri2eZrLfyVSzjUBA5hB3NBYOg6GDtjaq/view?usp=sharing" },
    { id: 2, logo: hackerrank, name: "Java", link: "https://drive.google.com/file/d/1tL0_yD2REdw5BlmCu3Sf-KPls03HzVw-/view?usp=sharing" },
    { id: 3, logo: javaScript1, name: "JavaScript", link: "https://drive.google.com/file/d/1E6z0aXiTSuPpjHmCQWWqHbg13pTJLpBL/view?usp=sharing" },
    { id: 4, logo: HTML, name: "HTML/CSS", link: "https://drive.google.com/file/d/1dM4-j1Rjc6PwAIy-eOCRj4ZjFSw79LWw/view?usp=sharing" },
    { id: 5, logo: SQL, name: "MySQL", link: "https://drive.google.com/file/d/1asGajYh9SEhgvPy1v3nHhDjkF7eJp5mP/view?usp=sharing" },
    { id: 6, logo: Internship, name: "Bharat Intern Certificate", link: "https://drive.google.com/file/d/1oTVM3turfG7wB1zP-RgUbuQiKJOW39bA/view?usp=sharing" },
    { id: 7, logo: Frontent, name: "Frontend Dev React", link: "https://drive.google.com/file/d/16P1TjIc-ygFX2s1_KN99B-FUFDUlGWct/view?usp=sharing" },
    { id: 8, logo: Discover, name: "Discover Yourself", link: "https://drive.google.com/file/d/1q_qW42ZHMvC1b3qVTjEu9OhXEpJivyOB/view?usp=sharing" },
    { id: 9, logo: CUTM, name: "Student Coordinator CUTM", link: "https://drive.google.com/file/d/1xYXWGqrEyGtFlteGW2n5t1O-hcfmNyQU/view?usp=drive_link" },
    { id: 10, logo: ISRO, name: "Isro Geo-data", link: "https://drive.google.com/file/d/1N4fTpdEBAN9-P35hHQ6Ht4C4VgV3fTbv/view?usp=sharing" },
  ];

  return (
    <div id="certifications" className="max-w-screen-2xl container mx-auto px-4 md:px-8 my-16">
      <a href="#certifications" className="block text-center">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 cursor-pointer hover:text-blue-500 transition duration-300">
          Certifications
        </h1>
      </a>
      <p className="text-center text-lg mb-10 text-gray-700">
        Recognized certifications showcasing expertise in various technologies:
      </p>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        className="py-6"
      >
        {certifications.map(({ id, logo, name, link }) => (
          <SwiperSlide key={id}>
            <a href={link} target="_blank" rel="noopener noreferrer">
              <div className="flex flex-col items-center justify-center border rounded-lg bg-white shadow-lg p-4 hover:shadow-2xl transition-transform duration-300 hover:scale-105">
                <img
                  src={logo}
                  alt={name}
                  className="w-40 h-40 md:w-52 md:h-52 object-cover mb-4"
                />
                <div className="text-xl font-semibold text-gray-800 text-center">{name}</div>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Certifications;
