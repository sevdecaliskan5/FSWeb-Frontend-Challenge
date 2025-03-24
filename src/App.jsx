import { useState } from "react";
import "./App.css";
import Profile from "./components/Profile";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { useTheme } from './contexts/ThemeContext'; 
import { ThemeProvider } from './contexts/ThemeContext';
import { useLanguage } from './contexts/LanguageContext'; 
import { LanguageProvider } from './contexts/LanguageContext';
import Header from "./components/Header";

function App() {

  const { toggleTheme } = useTheme();
  const { toggleLanguage } = useLanguage();
  return (
    <ThemeProvider>
      <LanguageProvider>
        <header>
          <Header />
          <Hero />
        </header>
        <main>
          <Skills />
          <Profile />
          <Projects />
        </main>
        <footer>
          <Footer />
        </footer>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
