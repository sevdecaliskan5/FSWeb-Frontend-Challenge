import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme !== null ? storedTheme : 'light';
  });


  useEffect(() => {
    localStorage.setItem('theme', theme);
    if(theme !== "dark"){
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }, [theme]);
  
  const element = document.documentElement;

  const toggleTheme = () => {
    setTheme((curr) => curr === 'light' ? 'dark' : 'light' );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
