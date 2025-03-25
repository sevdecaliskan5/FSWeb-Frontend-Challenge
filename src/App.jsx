
import "./App.css";
import Profile from "./components/Profile";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { useTheme } from "./contexts/ThemeContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { useLanguage } from "./contexts/LanguageContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import Header from "./components/Header";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <header className="dark:bg-koyukahve dark:text-white bg-zinc-100 relative">
          <Header />
          <Hero />
        </header>
        <main>
          <div className="relative dark:bg-acikkahve dark:text-white">
            <Skills />
          </div>
          <div className="dark:bg-koyukahve dark:text-white bg-zinc-100">
            <Profile />
          </div>
          <div className="relative dark:bg-acikkahve dark:text-white">
            <Projects />
          </div>
          <footer className="relative dark:bg-acikkahve dark:text-white">
            <Footer />
          </footer>
        </main>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
