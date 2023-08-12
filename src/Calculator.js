import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [buffer, setBuffer] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        setResult(eval(buffer));
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "C") {
      setBuffer("");
      setResult("");
    } else {
      setBuffer((prevBuffer) => prevBuffer + value);
    }
  };

  return (
    <div className="calculator">
      <div className="display">{buffer || result}</div>
      <div className="buttons">
        {[1, 2, 3, "+", 4, 5, 6, "-", 7, 8, 9, "*", "C", 0, "=", "/"].map((value) => (
          <button key={value} onClick={() => handleButtonClick(value)}>
            {value}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Calculator;
