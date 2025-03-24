import { useState } from "react";
import "./App.css";
import Profile from "./components/Profile";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <header>
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
