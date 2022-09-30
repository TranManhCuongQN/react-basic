import React, { useState } from "react";
import "./ToggleStyles.css";
const Toggle = () => {
  const [on, setOn] = useState(false);
  const handleToggle = () => {
    // Ngược lại với giá trị trước đó
    setOn((on) => !on);
  };
  return (
    <div>
      <div className={`toggle ${on ? "active" : ""}`} onClick={handleToggle}>
        <div
          className={`spinner ${on ? "active" : ""}`}
          onClick={handleToggle}
        ></div>
      </div>
    </div>
  );
};

export default Toggle;
