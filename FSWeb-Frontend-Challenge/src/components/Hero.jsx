import { useState } from "react";

export default function Hero() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("tr");

  return (
    <>
      <header>gece gunduz/dil</header>
      <main className="flex flex-col md:flex-row place-content-around items-center mt-8 px-6">
        <div className="flex flex-col items-start max-w-[600px]">
          <h1 className="text-5xl font-bold">Hi! 👋</h1>
          <p className="text-2xl mt-4 mb-8">
            I'm <span className="font-bold">Sevde</span>. I’m a front-end
            developer. I can craft solid and scalable frontend products. Let’s
            meet!
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/sevdecaliskan/"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/sevdecaliskan5"
              className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900"
            >
              GitHub
            </a>
          </div>
          <p className="mt-6 text-gray-600 dark:text-gray-400">
            Currently Freelancing for UX, UI, & Web Design Projects. Invite me
            to join your team -{" "}
            <span className="font-semibold">ssevdecaliskan@gmail.com</span>
          </p>
        </div>
        <div className="bg-white dark:bg-gray-700 rounded-2xl p-2 m-6 max-w-[361px] shadow-lg">
          📷 Fotoğraf
        </div>
      </main>
    </>
  );
}
