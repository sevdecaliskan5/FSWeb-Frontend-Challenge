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

export default function Hero() {
  const { darkMode, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();

  return (
    <div
      className={
        darkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"
      }
    >
      <header className="flex justify-between items-center p-4 border-b border-gray-300 dark:border-gray-700">
        <button
          onClick={toggleTheme}
          className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-800"
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
        <button
          onClick={toggleLanguage}
          className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-800"
        >
          {language === "en" ? "🇹🇷 TR" : "🇬🇧 EN"}
        </button>
      </header>
      <main className="text-left flex flex-col md:flex-row place-content-around items-center mt-8 px-6">
        <div className="flex flex-col items-start max-w-[600px]">
          <h1 className="text-5xl font-bold">Hi! 👋</h1>
          <p className="text-2xl mt-4 mb-8">
            I'm <span className="font-bold">Sevde</span>. I’m a front-end
            developer. I can craft solid and scalable frontend products. Let’s
            meet!
          </p>

          <div className="flex gap-4">
            <a href="/">
              {darkMode ? (
                <img src={linkedinbeyaz} alt="Icon" />
              ) : (
                <img src={linkedinsiyah} alt="Icon" />
              )}
            </a>
            <a href="/">
              {darkMode ? (
                <img src={githubeyaz} alt="Icon" />
              ) : (
                <img src={githubsiyah} alt="Icon" />
              )}
            </a>
          </div>

          <p className="mt-6 text-gray-600 dark:text-gray-400">
            Currently <span className="text-pink2">Freelancing</span> for{" "}
            <span className="text-pink2">UX, UI, & Web Design</span> Projects.
            Invite me to join your team -{" "}
            <span className="text-pink2">ssevdecaliskan@gmail.com</span>
          </p>
        </div>
        <div className="bg-white dark:bg-gray-700 rounded-2xl p-2 m-6 max-w-[361px] shadow-lg">
          <img src={vesPic} alt="Profile" className="rounded-3xl" />
        </div>
      </main>
    </div>
  );
}
