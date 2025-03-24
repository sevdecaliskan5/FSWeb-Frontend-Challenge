import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";
import { content } from "../data/content";

export default function Footer() {
  const { darkMode } = useTheme();
  const { language } = useLanguage();

  const footerContent = content[language].footer; //content dosyasindaki footer kismini cekiyoruz

  return (
    <footer className="px-10 py-10 md:px-40 md:py-20 grid md:grid-cols-3 gap-10 items-center">
      <p className="col-span-2 text-3xl md:text-4xl tracking-wide leading-normal font-medium text-right md:pl-20 pr-10">
        {footerContent.text}
      </p>

      <div className="flex text-start md:justify-start md:flex-col gap-4 font-medium">
        {footerContent.links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            className={`${link.color}`}
          >
            {link.name}
          </a>
        ))}
      </div>
    </footer>
  );
}
