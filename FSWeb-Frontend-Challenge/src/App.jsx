import { useState } from "react";
import "./App.css";
import Profile from "./components/Profile";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
