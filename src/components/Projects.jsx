import React, { useState, useRef } from "react";
import computerImage from "../assets/images/computer.png";
import ecommerce from "/images/e-ticaret.png";
import film from "/images/film.png";
import note from "/images/note.png";
import pizza from "/images/pizza.png";
import quiz from "/images/quiz.png";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";
import { content } from "../data/content";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Projects() {
  const { theme } = useTheme();
  const { language } = useLanguage();

  const projectsContent = content[language].projects;
  const cardContainerRef = useRef(null);
  const cardWidth = 500;
  const cardGap = 32;
  const containerWidth = cardWidth * 2 + cardGap + 24 * 2;

  const images = [ecommerce, pizza, film, quiz, note];

  const scrollRight = () => {
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollBy({
        left: cardWidth + cardGap,
        behavior: "smooth",
      });
    }
  };

  const scrollLeft = () => {
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollBy({
        left: -(cardWidth + cardGap),
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="text-start px-10 py-10 md:px-40 md:py-20 flex flex-col items-center">
      <h2 className="text-4xl tracking-wide font-medium pb-10">
        {projectsContent.title}
      </h2>
      {/* container */}
      <div className="relative w-full max-w-4xl cards">
        {/* sol */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 dark:bg-gray-700 p-2 rounded-full shadow-md hover:bg-gray-300"
        >
          <ChevronLeft size={24} />
        </button>
        {/* kartlar */}

        <div
          ref={cardContainerRef}
          className="flex gap-6 overflow-x-hidden scrollbar-hide px-10"
        >
          {projectsContent.list.map((project, index) => (
            <div
              key={index}
              className={`bg-blue-100 rounded-2xl min-w-[415px] p-8 shadow-md ${
                index % 2 === 0
                  ? "dark:bg-koyuyesil bg-bluecard"
                  : "dark:bg-solukyesil bg-greencard"
              }`}
            >
              <h3 className="text-2xl font-medium pb-4">
                {project.projectTitle}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {project.projectDescription}
              </p>

              {/* Etiketler */}
              <div className="flex flex-wrap gap-2 py-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-white dark:bg-[#525252] text-gray-900 dark:text-white rounded-3xl py-2 px-3 text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {/* Linkler */}
              <div className="flex justify-between text-lg font-medium py-4">
                <a
                  href={project.githubLink}
                  className="text-blue-600 dark:text-white"
                >
                  {projectsContent.githubLink}
                </a>
                <a
                  href={project.appLink}
                  className="text-blue-600 dark:text-white"
                >
                  {projectsContent.appLink}
                </a>
              </div>

              {/* proje foto */}
              <div className="flex justify-center py-8">
                <img
                  className=" relative rounded-lg shadow-lg max-w-full h-auto"
                  src={computerImage}
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>

        {/* sag */}
        <button
          onClick={scrollRight}
          className="absolute right-0 z-10 top-1/2 transform -translate-y-1/2 bg-gray-200 dark:bg-gray-700 p-2 rounded-full shadow-md hover:bg-gray-300"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}
