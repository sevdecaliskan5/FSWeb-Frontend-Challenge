// import React, { createContext, useContext, useState, useEffect } from "react";
// import axios from "axios";
// import useLocalStorage from "../hooks/useLocalStorage";

// const LangChangeContext = createContext();

// export const LangChangeProvider = ({ children }) => {

//   const [language, setLanguage] = useState("tr")
//   const [content, setContent] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const fetchContent = async (lang) => {
//     setLoading(true);
//     try {
//       const response = await axios.get(`https://65f1e7c6034bdbecc763ff98.mockapi.io/api/v1/languages`); // JSONdan dil verisini cekiyoruz
//       setContent(response.data);
//     } catch (error) {
//       console.error("Dil içeriği yüklenirken hata oluştu:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchContent(language);
//   }, [language]);

//   const changeLanguage = (lang) => {
//     setLanguage(lang);
//     localStorage.setItem("language", lang); // locale kaydediyoruz
//     fetchContent(lang);
//   };

//   return (
//     <LangChangeContext.Provider value={{ language, changeLanguage, content, loading }}>
//       {children}
//     </LangChangeContext.Provider>
//   );
// };

// export const useLangChange = () => useContext(LangChangeContext);

