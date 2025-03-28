import amazon from "/images/amazon.png";
import education from "/images/education.png";
import notekeeper from "/images/note.png";
import emaartech from "/images/emaartech.png";
import jbl from "/images/jbl.png";
import movie from "/images/movie.png";
import netflix from "/images/netflix.png";
import starbucks from "/images/starbucks.png";
import pizza from "/images/pizza.png";
import showcase from "/images/show.png";
import academy from "/images/academy.png";

export const content = {
  en: {
    greeting: "Hi! 👋",
    description:
      "I’m Sevde, a front-end developer focused on user experience. I combine my design and technical skills to create impactful and scalable web experiences.",
    freelancingInfo:
      "I’m currently freelancing in UX/UI design and web development. How about collaborating on a new project? Reach out to me: ssevdecaliskan@gmail.com",
    socialMedia: {
      linkedin: "LinkedIn",
      github: "GitHub",
      lightMode: "LIGHT MODE",
      darkMode: "DARK MODE",
      switchToTurkish: "SWITCH TO TURKISH",
      switchToEnglish: "SWITCH TO ENGLISH",
    },
    toggleLanguage: "TR",
    skillsTitle: "Skills",
    profile: {
      profile: "Profile",
      basicInfo: "Basic Information",
      birthDate: "Birth Date",
      city: "City",
      education: "Education",
      educationDetails: "Pamukkale University, Civil Engineering, 2019",
      preferredRole: "Preferred Role",
      aboutMe: "About Me",
      aboutDescription:
        "I was born in 1996 in Izmir and have a degree in Civil Engineering. My passion for design and technology led me to Front-End development, where I focus on enhancing my skills. I continuously improve myself through both independent learning and various courses in software development. I build user-friendly designs using Front-End languages and technologies like React and TailwindCSS. Learning new technologies and applying them in my projects is something I enjoy.",
    },
    projects: {
      title: "Projects",
      list: [
        {
          projectTitle: "PizzaPal",
          projectDescription:
            "A React-based pizza ordering application where users can select pizzas, add ingredients, and automatically calculate the total price.",
          tags: ["JavaScript", "React", "CSS"],
          githubLink:
            "https://github.com/sevdecaliskan5/fsweb-s8-challenge-pizza",
          appLink: "https://fsweb-s8-challenge-pizza-omega.vercel.app/",
          img: pizza,
        },
        {
          projectTitle: "Showcase",
          projectDescription:
            "A modern and responsive portfolio site featuring an interactive terminal-style section and dark/light mode toggle.",
          tags: ["JavaScript", "React", "Tailwind"],
          githubLink: "https://github.com/sevdecaliskan5/my-portfolio",
          appLink: "https://my-portfolio-n5mk.vercel.app/",
          img: showcase,
        },
        {
          projectTitle: "CalcMaster",
          projectDescription:
            "A simple calculator app that allows users to perform basic mathematical operations such as addition, subtraction, multiplication, and division.",
          tags: ["JavaScript", "React", "CSS"],
          githubLink:
            "https://github.com/sevdecaliskan5/FSWeb-S10D1-HesapMakinesi",
          appLink: "#",
          img: "",
        },
        {
          projectTitle: "Note Keeper",
          projectDescription:
            "A simple to-do list application where users can add, edit, and delete tasks. Data is stored using LocalStorage to persist even after closing the browser.",
          tags: ["JavaScript", "CSS"],
          githubLink: "https://github.com/sevdecaliskan5/Note-Keeper",
          appLink: "https://note-keeper-silk-seven.vercel.app/",
          img: notekeeper,
        },
        {
          projectTitle: "Movie Finder",
          projectDescription:
            "A movie discovery site listing popular, top-rated, and newly released movies, including posters, descriptions, and genre details.",
          tags: ["JavaScript", "CSS"],
          githubLink: "https://github.com/sevdecaliskan5/Movie-WebSite",
          appLink: "https://movie-web-site-ten.vercel.app/",
          img: movie,
        },
        {
          projectTitle: "Netflix Clone",
          projectDescription:
            "A replica of Netflix's homepage built with HTML and CSS. The responsive design ensures compatibility with different screen sizes.",
          tags: ["HTML", "CSS"],
          githubLink: "https://github.com/sevdecaliskan5/Netflix-Clone",
          appLink: "https://netflix-clone-rho-coral-22.vercel.app/",
          img: netflix,
        },
        {
          projectTitle: "EmaarTech",
          projectDescription:
            "A user-friendly real estate listing site featuring properties for sale and rent, complete with photos, descriptions, prices, and location details.",
          tags: ["HTML", "Bootstrap"],
          githubLink: "https://github.com/sevdecaliskan5/RealEstate",
          appLink: "https://real-estate-chi-sepia.vercel.app/",
          img: emaartech,
        },
        {
          projectTitle: "Udemig Academy",
          projectDescription:
            "An educational platform that includes detailed information about the courses provided by the software training institution and student reviews.",
          tags: ["HTML", "CSS"],
          githubLink: "https://github.com/sevdecaliskan5/UdemigAcademy",
          appLink: "https://udemig-academy.vercel.app/",
          img: academy,
        },
        {
          projectTitle: "JBL",
          projectDescription:
            "A website built with HTML and SCSS showcasing different JBL headphone models, their features, and best-selling products with a responsive design.",
          tags: ["HTML", "SCSS"],
          githubLink: "https://github.com/sevdecaliskan5/JBL-Clone",
          appLink: "https://jbl-clone-eight.vercel.app/",
          img: jbl,
        },
        {
          projectTitle: "Udemig Education",
          projectDescription:
            "A clean and user-friendly educational platform featuring software courses with detailed information on course structures.",
          tags: ["HTML", "SCSS"],
          githubLink: "https://github.com/sevdecaliskan5/EducationWebSite",
          appLink: "https://education-web-site-one.vercel.app/",
          img: education,
        },
        {
          projectTitle: "Amazon Clone",
          projectDescription:
            "A project replicating Amazon's homepage design, including product categories and promotional banners for an authentic Amazon experience.",
          tags: ["HTML", "CSS"],
          githubLink: "https://github.com/sevdecaliskan5/Amazon-Clone",
          appLink: "https://amazon-clone-zeta-peach.vercel.app/",
          img: amazon,
        },
        {
          projectTitle: "Starbucks Clone",
          projectDescription:
            "A Starbucks-themed website that stays true to its color palette, typography, and design, offering an intuitive interface for exploring products and services.",
          tags: ["HTML", "CSS"],
          githubLink: "https://github.com/sevdecaliskan5/Starbucks-Clone",
          appLink: "https://starbucks-clone-six-pi.vercel.app/",
          img: starbucks,
        },
      ],
    },

    footer: {
      text: "Let’s work together on your next product.",
      links: [
        {
          name: "GitHub",
          url: "https://github.com/sevdecaliskan5",
          color: "text-sky-600",
        },
        { name: "Personal Blog", url: "#", color: "text-black" },
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/sevdecaliskan/",
          color: "text-cyan-800",
        },
        {
          name: "Email",
          url: "mailto:ssevdecaliskan@gmail.com",
          color: "text-pink-500",
        },
      ],
    },
  },
  tr: {
    greeting: "Merhaba! 👋",
    description:
      "Ben Sevde, kullanıcı deneyimi odaklı front-end geliştiricisiyim. Etkileyici ve ölçeklenebilir web deneyimleri oluşturmak için tasarım ve teknik bilgimi birleştiriyorum.",
    freelancingInfo:
      "Şu anda UX/UI tasarımı ve web geliştirme projelerinde serbest çalışıyorum. Yeni bir projede birlikte çalışmaya ne dersiniz? Bana ulaşın: ssevdecaliskan@gmail.com",
    socialMedia: {
      linkedin: "LinkedIn",
      github: "GitHub",
      lightMode: "GÜNDÜZ",
      darkMode: "GECE",
      switchToTurkish: "TÜRKÇE'YE GEÇ",
      switchToEnglish: "İNGİLİZCE'YE GEÇ",
    },
    toggleLanguage: "EN",
    skillsTitle: "Yeteneklerim",
    profile: {
      profile: "Profil",
      basicInfo: "Temel Bilgiler",
      birthDate: "Doğum Tarihi",
      city: "İkamet Şehri",
      education: "Eğitim Durumu",
      educationDetails: "Pamukkale Üniversitesi, İnşaat Mühendisliği, 2019",
      preferredRole: "Tercih Ettiği Rol",
      aboutMe: "Hakkımda",
      aboutDescription:
        "1996 yılında İzmir'de doğdum ve İnşaat Mühendisliği mezunuyum. Tasarım ve teknolojiye olan tutkum beni Front-End geliştirmeye yönlendirdi ve bu alanda becerilerimi geliştirmeye odaklandım. Hem bağımsız öğrenme hem de yazılım geliştirme kursları aracılığıyla kendimi sürekli olarak geliştiriyorum. React ve TailwindCSS gibi Front-End dilleri ve teknolojileri kullanarak kullanıcı dostu tasarımlar yapıyorum. Yeni teknolojiler öğrenmek ve bunları projelerimde uygulamak benim için keyifli bir süreç.",
    },
    projects: {
      title: "Projeler",
      list: [
        {
          projectTitle: "PizzaPal",
          projectDescription:
            "Kullanıcıların pizza seçip, malzemeler ekleyerek toplam fiyatı otomatik olarak hesaplayabileceği React tabanlı bir pizza sipariş uygulaması.",
          tags: ["JavaScript", "React", "CSS"],
          githubLink:
            "https://github.com/sevdecaliskan5/fsweb-s8-challenge-pizza",
          appLink: "https://fsweb-s8-challenge-pizza-omega.vercel.app/",
          img: pizza,
        },
        {
          projectTitle: "Showcase",
          projectDescription:
            "Etkileşimli bir terminal tarzı bölüm ve karanlık/aydınlık mod geçişi içeren modern ve duyarlı bir portföy sitesi.",
          tags: ["JavaScript", "React", "Tailwind"],
          githubLink: "https://github.com/sevdecaliskan5/my-portfolio",
          appLink: "https://my-portfolio-n5mk.vercel.app/",
          img: showcase,
        },
        {
          projectTitle: "CalcMaster",
          projectDescription:
            "Kullanıcıların toplama, çıkarma, çarpma ve bölme gibi temel matematiksel işlemleri yapmasına olanak tanıyan basit bir hesap makinesi uygulaması.",
          tags: ["JavaScript", "React", "CSS"],
          githubLink:
            "https://github.com/sevdecaliskan5/FSWeb-S10D1-HesapMakinesi",
          appLink: "#",
          img: "",
        },
        {
          projectTitle: "Note Keeper",
          projectDescription:
            "Kullanıcıların görevleri ekleyip düzenleyebileceği ve silebileceği basit bir yapılacaklar listesi uygulaması. Veriler, tarayıcı kapatıldığında bile saklanacak şekilde LocalStorage kullanılarak depolanır.",
          tags: ["JavaScript", "CSS"],
          githubLink: "https://github.com/sevdecaliskan5/Note-Keeper",
          appLink: "https://note-keeper-silk-seven.vercel.app/",
          img: notekeeper,
        },
        {
          projectTitle: "Movie Finder",
          projectDescription:
            "Popüler, yüksek puanlı ve yeni çıkan filmleri, posterleri, açıklamaları ve tür bilgilerini içeren bir film keşif sitesi.",
          tags: ["JavaScript", "CSS"],
          githubLink: "https://github.com/sevdecaliskan5/Movie-WebSite",
          appLink: "https://movie-web-site-ten.vercel.app/",
          img: movie,
        },
        {
          projectTitle: "Netflix Clone",
          projectDescription:
            "HTML ve CSS kullanarak Netflix'in anasayfasının bir kopyası. Farklı ekran boyutlarına uyum sağlayacak şekilde duyarlı bir tasarıma sahiptir.",
          tags: ["HTML", "CSS"],
          githubLink: "https://github.com/sevdecaliskan5/Netflix-Clone",
          appLink: "https://netflix-clone-rho-coral-22.vercel.app/",
          img: netflix,
        },
        {
          projectTitle: "EmaarTech",
          projectDescription:
            "Satılık ve kiralık gayrimenkulleri, fotoğraflar, açıklamalar, fiyatlar ve konum detaylarıyla birlikte sunan kullanıcı dostu bir emlak listeleme sitesi.",
          tags: ["HTML", "Bootstrap"],
          githubLink: "https://github.com/sevdecaliskan5/RealEstate",
          appLink: "https://real-estate-chi-sepia.vercel.app/",
          img: emaartech,
        },

        {
          projectTitle: "Udemig Academy",
          projectDescription:
            "Yazılım kursu veren kurumun verdiği kurslarla ilgili detaylı bilgi ve öğrenci yorumlarını içeren eğitim platformu.",
          tags: ["HTML", "CSS"],
          githubLink: "https://github.com/sevdecaliskan5/UdemigAcademy",
          appLink: "https://udemig-academy.vercel.app/",
          img: academy,
        },

        {
          projectTitle: "JBL",
          projectDescription:
            "HTML ve SCSS ile farklı JBL kulaklık modellerini, özelliklerini ve en çok satılan ürünleri sergileyen duyarlı bir web sitesi.",
          tags: ["HTML", "SCSS"],
          githubLink: "https://github.com/sevdecaliskan5/JBL-Clone",
          appLink: "https://jbl-clone-eight.vercel.app/",
          img: jbl,
        },
        {
          projectTitle: "Udemig Education",
          projectDescription:
            "Yazılım kurslarıyla ilgili detaylı bilgilere sahip, temiz ve kullanıcı dostu bir eğitim platformu.",
          tags: ["HTML", "SCSS"],
          githubLink: "https://github.com/sevdecaliskan5/EducationWebSite",
          appLink: "https://education-web-site-one.vercel.app/",
          img: education,
        },
        {
          projectTitle: "Amazon Clone",
          projectDescription:
            "Amazon'un anasayfa tasarımını kopyalayan, ürün kategorileri ve promosyonel banner'lar içeren bir proje.",
          tags: ["HTML", "CSS"],
          githubLink: "https://github.com/sevdecaliskan5/Amazon-Clone",
          appLink: "https://amazon-clone-zeta-peach.vercel.app/",
          img: amazon,
        },
        {
          projectTitle: "Starbucks Clone",
          projectDescription:
            "Starbucks'ın renk paleti, tipografi ve tasarımına sadık kalan, ürünleri ve hizmetleri keşfetmek için sezgisel bir arayüze sahip bir Starbucks temalı site.",
          tags: ["HTML", "CSS"],
          githubLink: "https://github.com/sevdecaliskan5/Starbucks-Clone",
          appLink: "https://starbucks-clone-six-pi.vercel.app/",
          img: starbucks,
        },
      ],
    },

    footer: {
      text: "Hadi birlikte bir sonraki ürününüzü geliştirelim.",
      links: [
        {
          name: "GitHub",
          url: "https://github.com/sevdecaliskan5",
          color: "text-sky-600",
        },
        { name: "Kişisel Blog", url: "#", color: "text-black" },
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/sevdecaliskan/",
          color: "text-cyan-800",
        },
        {
          name: "E-posta",
          url: "mailto:ssevdecaliskan@gmail.com",
          color: "text-pink-500",
        },
      ],
    },
  },
};
