import "./App.css";
import Profile from "./components/Profile";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
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
        <div className="w-[1064px] h-[792px] relative dark:bg-acikkahve dark:text-white">
          <Projects />
        </div>
        <footer className="relative dark:bg-acikkahve dark:text-white">
          <Footer />
        </footer>
      </main>
    </>
  );
}

export default App;
