import React, { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "tr" : "en");
  };

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
};

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
