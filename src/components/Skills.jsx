import jsLogo from "../assets/icons/jslogo.jpg";
import reactLogo from "../assets/icons/reactlogo.jpg";
import reduxLogo from "../assets/icons/reduxlogo.jpg";
import nodeLogo from "../assets/icons/nodelogo.jpg";
import vscodeLogo from "../assets/icons/vscodelogo.jpg";
import figmaLogo from "../assets/icons/figmalogo.jpg";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";
import { content } from "../data/content";

export default function Skills() {
  const { theme } = useTheme();
  const { language } = useLanguage();
  
  const skills = [
    { logo: jsLogo, name: "JavaScript" },
    { logo: reactLogo, name: "React" },
    { logo: reduxLogo, name: "Redux" },
    { logo: nodeLogo, name: "Node.js" },
    { logo: vscodeLogo, name: "VS Code" },
    { logo: figmaLogo, name: "Figma" },
  ];

  const skillsTitle = content[language].skillsTitle;

  if (!content) {
    return <div>Loading...</div>;
  }
  return (
    <main className="px-10 py-10 md:px-60 md:py-20 flex flex-col items-center">
      <h2 className="text-4xl tracking-wide font-medium">{skillsTitle}</h2>
      <div className="pt-10 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:flex gap-4 md:gap-10">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center">
            <img className="rounded-xl" src={skill.logo} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
