import computerImage from "../assets/images/computer.png";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";
import { content } from "../data/content";

export default function Projects() {
  const { theme } = useTheme();
  const { language } = useLanguage();
  
  const projectsContent = content[language].projects;

  return (
    <section className="text-start px-10 py-10 md:px-40 md:py-20 flex flex-col items-center">
      <h2 className="text-4xl tracking-wide font-medium pb-10">
        {projectsContent.title}
      </h2>
      {/* cards */}
      <div className="bg-blue-100 dark:bg-gray-800 rounded-2xl w-full max-w-3xl p-8 shadow-md">
        <h3 className="text-3xl font-medium pb-4">
          {projectsContent.projectTitle}
        </h3>
        <p className="text-gray-700 dark:text-gray-300">
          {projectsContent.projectDescription}
        </p>

        {/* tags */}
        <div className="flex flex-wrap gap-2 py-4">
          {["React", "Tailwind", "JavaScript", "Frontend", "Responsive"].map(
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

        {/* link */}
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
    </section>
  );
}
