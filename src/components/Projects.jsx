import React, { useState, useRef, useEffect } from "react";
import computerImage from "../assets/images/computer.png";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";
import { content } from "../data/content";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Projects() {
  const { theme } = useTheme();
  const { language } = useLanguage();

  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const cardContainerRef = useRef(null);

  const projectsContent = content[language].projects;

  const cardWidth = 500;
  const cardGap = 24;

  const handleScroll = () => {
    if (cardContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = cardContainerRef.current;
      setShowLeftArrow(scrollLeft > 0); // sol oka ihtiyac durumu
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10); // Eğer scrollLeft, maksimum kaydırma mesafesinden küçükse sağ oka ihtiyacımız var.
      // 10 piksellik bir tolerans eklenerek tam sınırda okun kaybolması önlenmiştir.
    }
  };

  useEffect(() => {
    const containerRef = cardContainerRef.current;
    if (containerRef) {
      // Scroll olayını dinleyerek her kaydırma olduğunda handleScroll fonksiyonunu çalıştır
      containerRef.addEventListener("scroll", handleScroll);
      // İlk yükleme sırasında ok durumunu ayarla
      handleScroll(); // Sayfa yüklendiğinde mevcut scroll durumunu kontrol et
      return () => containerRef.removeEventListener("scroll", handleScroll); // Component unmount olduğunda event listener'ı kaldırarak gereksiz bellek kullanımını önle
    }
  }, []);

  const scrollRight = () => {
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollBy({
        left: cardWidth + cardGap,
        behavior: "smooth",
      });
    }
  };

  const scrollLeft = () => {
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollBy({
        left: -(cardWidth + cardGap),
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="text-start px-6 py-10 md:px-10 lg:px-20 flex flex-col items-center">
      <h2 className="text-4xl tracking-wide font-medium pb-10">
        {projectsContent.title}
      </h2>
      {/* container */}
      <div className="relative w-full max-w-[1024px] cards">
        {/* left */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-700 p-2 rounded-full shadow-md hover:bg-gray-100 z-10 transition duration-300"
        >
          <ChevronLeft size={24} className="text-gray-700 dark:text-white" />
        </button>
        {/* cards */}

        <div
          ref={cardContainerRef}
          className="cursor-pointer relative flex gap-6 overflow-x-auto scrollbar-hide px-2 py-2 scroll-smooth snap-x"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {projectsContent.list.map((project, index) => (
            <div
              key={index}
              className={`relative rounded-2xl min-w-[500px] max-w-[500px] p-8 shadow-md snap-start ${
                index % 2 === 0
                  ? " bg-bluecard dark:bg-koyuyesil"
                  : " bg-greencard dark:bg-solukyesil"
              }transition-transform duration-300 hover:scale-[1.02] `}
            >
              <h3 className="text-2xl font-medium pb-4">
                {project.projectTitle}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 line-clamp-3">
                {project.projectDescription}
              </p>

              {/* tags */}
              <div className="flex flex-wrap gap-2 py-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-white dark:bg-[#525252] text-gray-900 dark:text-white rounded-3xl py-2 px-3 text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {/* links */}
              <div className="flex justify-between text-lg font-medium py-4">
                <a
                  href={project.githubLink}
                  className="text-black dark:text-white"
                  target="_blank"
                >
                  {projectsContent.githubLink}View on Github
                </a>
                <a
                  href={project.appLink}
                  className="text-black dark:text-white"
                >
                  {projectsContent.appLink}Go to App
                </a>
              </div>

              {/* project photo */}
              <div className="relative flex justify-center py-4">
                <img
                  className="rounded-lg w-full h-auto"
                  src={computerImage}
                  alt=""
                />
                {project.img ? (
                  <img
                    className="absolute top-[9%] left-[13%] w-[74%] h-[70%] rounded-md overflow-hidden object-cover"
                    src={`${project.img}`}
                  ></img>
                ) : (
                  <p></p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* sag ok sadece gerektiginde gozukuyor */}
        {showRightArrow && (
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-700 p-2 rounded-full shadow-md hover:bg-gray-100 z-10 transition duration-300"
            aria-label="Sonraki projeler"
          >
            <ChevronRight size={24} className="text-gray-700 dark:text-white" />
          </button>
        )}
      </div>
    </section>
  );
}
