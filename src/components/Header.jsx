import LangToggle from "./LangToggle";
import { useTheme } from "../contexts/ThemeContext";
import Radio from "./Radio";
import { useLanguage } from "../contexts/LanguageContext"; 
import { content } from "../data/content";

export default function Header (){
    const { theme } = useTheme();
    const { language } = useLanguage();

    return(
        <>
        <header className="flex justify-end items-center px-10 pb-8 pt-20 md:px-60" >
            <Radio/>
            <span className="min-w-18 md:min-w-20 ms-3 text-sm font-semibold text-gri2 dark:text-white">
                {theme === "dark" && language === "tr" ? "GÜNDÜZ" :
                theme === "dark" && language === "en" ? "LIGHT MODE" :
                theme !== "dark" && language === "tr" ? "GECE" :
                "DARK MODE"}
            </span>
            <p className="px-4"> | </p>
            <LangToggle/>
        </header>
        </>
    )
}
