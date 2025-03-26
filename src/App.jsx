import "./App.css";
import Profile from "./components/Profile";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Header from "./components/Header";

import greyDonut from "./assets/shapes/greydonut.png";
import pinkRec from "./assets/shapes/pinkrec.png";
import greyRec from "./assets/shapes/greyrec.png";
import pinkDonut from "./assets/shapes/pinkdonut.png";
import rectangleuc from "./assets/shapes/rectangleuc.png";
import greyCircle from "./assets/shapes/greycircle.png";
import rectangleiki from "./assets/shapes/rectangleiki.png";
import rectangledort from "./assets/shapes/rectangledort.png";
import rectanglebes from "./assets/shapes/rectanglebes.png";

function App() {
  return (
    <>
      <header className="dark:bg-koyukahve dark:text-white bg-zinc-100 relative">
        <img
          className="absolute -left-4 md:left-1/4 z-0 "
          src={greyCircle}
          alt=""
        />
        <img
          className="absolute right-0 top-2/4 md:top-3/4 "
          src={pinkRec}
          alt=""
        />
        <img
          className="absolute left-4 md:left-2/3 -bottom-16 z-10"
          src={greyDonut}
          alt=""
        />
        <img className="absolute left-8 md:bottom-2/4 z-0" src={rectangleiki} />
        {/* <img className="absolute w-[344px] h-[344px] z-0 top-[150px] left-[772px]" src={rectangleuc}/> */}
        <Header />
        <Hero />
      </header>
      <main>
        <div className="relative dark:bg-acikkahve dark:text-white">
          <img className="absolute top-full md:top-3/4" src={greyRec} alt="" />
          <img
            className="absolute right-0 z-10 -bottom-44 md:-bottom-24"
            src={pinkDonut}
            alt=""
          />
          <Skills />
        </div>
        <div className="dark:bg-koyukahve relative dark:text-white bg-zinc-100">
          <img className="absolute z-0 -left-4 md:left-2/4 top-44" src={rectanglebes}/>
          <Profile />
        </div>
        <div className="relative dark:bg-acikkahve dark:text-white">
          <Projects />
        </div>
        <footer className="relative dark:bg-acikkahve dark:text-white">
          <img className="absolute md:left-1/3 -top-[-140px] z-0" src={rectangledort} />
          <Footer />
        </footer>
      </main>
    </>
  );
}

export default App;
