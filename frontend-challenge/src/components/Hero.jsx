import { useState } from "react";

export default function Hero() {
  const [darkMode, setDarkMode] = useState([]);
  const [language, setLanguage] = useState([]);
  return (
    <>
      <header>darkmode/language</header>

      <main className="flex place-content-around mt-8">
        <div className="flex flex-col items-start max-w-[600px]">
          <h1>Hi! + el</h1>
          <p className="text-4xl mt-4 mb-8">
            I'm Sevde. I’m a front-end developer. I can craft solid and scalable
            frontend products. Let’s meet!
          </p>
          <a href="https://www.linkedin.com/in/sevdecaliskan/">linkedin</a>
          <a href="https://github.com/sevdecaliskan5">github</a>

          <p>
            Currently Freelancing for UX, UI, & Web Design Project . Invite me
            to join your team - ssevdecaliskan@gmail.com
          </p>
        </div>
        <div className="bg-white rounded-2xl p-2 m-6 max-w-[361px]">
          fotograf
        </div>
      </main>
    </>
  );
}
