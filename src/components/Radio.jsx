import React, { useState, useEffect } from "react";
import { useTheme } from "../contexts/ThemeContext";


function Radio() {
  const { toggleTheme } = useTheme();
  const [isActive, setIsActive] = useState(false);

  const handleRadioClick = () => {
    setIsActive(!isActive);
    toggleTheme();
  };

  return (
    <div className="radio-btn" onClick={handleRadioClick}>
      <div className={isActive ? "radio-inner active" : "radio-inner"}></div>
    </div>
  );
}

export default Radio;
