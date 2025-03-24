import jsLogo from "../assets/icons/jslogo.jpg";
import reactLogo from "../assets/icons/reactlogo.jpg";
import reduxLogo from "../assets/icons/reduxlogo.jpg";
import nodeLogo from "../assets/icons/nodelogo.jpg";
import vscodeLogo from "../assets/icons/vscodelogo.jpg";
import figmaLogo from "../assets/icons/figmalogo.jpg";

const skills = [
  { logo: jsLogo, name: "JavaScript" },
  { logo: reactLogo, name: "React" },
  { logo: reduxLogo, name: "Redux" },
  { logo: nodeLogo, name: "Node.js" },
  { logo: vscodeLogo, name: "VS Code" },
  { logo: figmaLogo, name: "Figma" },
];

export default function Skills() {
  return (
    <section className="px-10 py-10 md:px-40 md:py-20 flex flex-col items-center">
      <h2 className="text-4xl font-medium tracking-wide">Skills</h2>
      <div className="pt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-gray-100 dark:bg-gray-800 p-4 rounded-xl shadow-md"
          >
            <img
              src={skill.logo}
              alt={skill.name}
              className="w-20 h-20 object-contain rounded-lg"
            />
            <p className="mt-2 text-lg font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
