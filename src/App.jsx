import { useState } from "react";
import "./App.css";
import Profile from "./components/Profile";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
// import { useTheme } from './contexts/ThemeContext';
import { ThemeProvider } from "./contexts/ThemeContext";
// import { useLanguage } from './contexts/LanguageContext';
// import { LanguageProvider } from './contexts/LanguageContext';
import Header from "./components/Header";
import { LangChangeProvider } from "./contexts/LangChangeContext";


function App() {
  // const { toggleTheme } = useTheme();
  // const { toggleLanguage } = useLanguage();
  return (
    <ThemeProvider>
      <LangChangeProvider>
        <header>
          <Header />
        </header>
        <main>
          <Hero />
          <Skills />
          <Profile />
          <Projects />
        </main>
        <footer>
          <Footer />
        </footer>
      </LangChangeProvider>
    </ThemeProvider>
  );
}

export default App;
