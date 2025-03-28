import React, { useState, useEffect } from "react";
import { useTheme } from "../contexts/ThemeContext";


function Radio() {
  const { theme, toggleTheme } = useTheme();
  const [isActive, setIsActive] = useState(theme === "dark");

useEffect(()=> {
    setIsActive(theme === "dark");
    }, [theme]);

  const handleRadioClick = () => {
    toggleTheme();
  };

  return (
    <div className="radio-btn" onClick={handleRadioClick}>
      <div className={isActive ? "radio-inner active" : "radio-inner"}></div>
    </div>
  );
}

export default Radio;
