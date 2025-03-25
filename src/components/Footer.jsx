import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";
import { content } from "../data/content";

export default function Footer() {
  const { theme } = useTheme();
  const { language } = useLanguage();
  
  const footerContent = content[language].footer;
  const links = footerContent.links || [];

  return (
    <footer className="px-10 py-10 md:px-40 md:py-20 grid md:grid-cols-3 gap-10 items-center">
      <p className="col-span-2 text-3xl md:text-4xl tracking-wide leading-normal font-medium text-right md:pl-20 pr-10">
        {footerContent.text}
      </p>

      <div className="flex text-start md:justify-start md:flex-col gap-4 font-medium">
        {links.length > 0 ? (
          links.map((link, index) => (
            <a key={index} href={link.url} className={`${link.color}`}>
              {link.name}
            </a>
          ))
        ) : (
          <p>No links available</p>
        )}
      </div>
    </footer>
  );
}
