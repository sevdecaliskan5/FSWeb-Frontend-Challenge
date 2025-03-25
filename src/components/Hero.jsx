import { useState } from "react";

import githubbeyaz from "../assets/social/githubbeyaz.png";
import githubsiyah from "../assets/social/githubsiyah.png";
import linkedinsiyah from "../assets/social/linkedinsiyah.png";
import linkedinbeyaz from "../assets/social/linkedinbeyaz.png";
import profilePic from "../assets/images/foto.jpg";
import vesPic from "../assets/images/image0.jpeg";
import emoji from "../assets/images/wavinghand.png";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";
import { content } from "../data/content";

export default function Hero() {
  const { theme } = useTheme();
  const { language } = useLanguage();

  return (
 
      <main className="text-left flex flex-col md:flex-row place-content-around items-center mt-8 px-6">
        <div className="flex flex-col items-start max-w-[600px]">
          <h1 className="text-5xl font-bold">{content[language].greeting}</h1>
          <p className="text-2xl mt-4 mb-8">{content[language].description}</p>

          <div className="flex gap-4">
            <a href="/">
              {theme ? (
                <img src={linkedinsiyah} alt="Icon" />
              ) : (
                <img src={linkedinbeyaz} alt="Icon" />
              )}
            </a>
            <a href="/">
              {theme ? (
                <img src={githubsiyah} alt="Icon" />
              ) : (
                <img src={githubbeyaz} alt="Icon" />
              )}
            </a>
          </div>

          <p className="mt-6 text-gray-600 dark:text-gray-400">
            {content[language].freelancingInfo}
          </p>
        </div>
        <div className="bg-white dark:bg-gray-700 rounded-2xl p-2 m-6 max-w-[361px] shadow-lg">
          <img src={vesPic} alt="Profile" className="rounded-3xl" />
        </div>
      </main>
   
  );
}
