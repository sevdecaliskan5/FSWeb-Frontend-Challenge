import React, { useState, useRef } from "react";
import computerImage from "../assets/images/computer.png";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";
import { content } from "../data/content";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Projects() {
  const { theme } = useTheme();
  const { language } = useLanguage();

  const projectsContent = content[language].projects;

  const cardContainerRef = useRef(null);

  const scrollRight = () => {
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollBy({ left: 500, behavior: "smooth" });
    }
  };

  const scrollLeft = () => {
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollBy({ left: -500, behavior: "smooth" });
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
          {[1, 2, 3, 4].map((index) => (
            <div
              key={index}
              className="bg-blue-100 dark:bg-gray-800 rounded-2xl min-w-[350px] p-8 shadow-md"
            >
              <h3 className="text-2xl font-medium pb-4">
                {projectsContent.projectTitle}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {projectsContent.projectDescription}
              </p>

              {/* etiketler */}
              <div className="flex flex-wrap gap-2 py-4">
                {["React", "Tailwind", "JavaScript", "Frontend"].map(
                  (tag, index) => (
                    <span
                      key={index}
                      className="bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-3xl py-2 px-3 text-sm font-medium"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>

              {/* linkler */}
              <div className="flex justify-between text-lg font-medium py-4">
                <a
                  href="https://github.com/sevdecaliskan5"
                  className="text-blue-600 dark:text-blue-400"
                >
                  {projectsContent.githubLink}
                </a>
                <a href="#" className="text-blue-600 dark:text-blue-400">
                  {projectsContent.appLink}
                </a>
              </div>

              {/* proje foto */}
              <div className="flex justify-center py-8">
                <img
                  className="rounded-lg shadow-lg max-w-full h-auto"
                  src={computerImage}
                  alt="Project Screenshot"
                />
              </div>
            </div>
          ))}
        </div>

        {/* sag */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 dark:bg-gray-700 p-2 rounded-full shadow-md hover:bg-gray-300"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}
