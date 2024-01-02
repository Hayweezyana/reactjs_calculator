import React, { useState } from "react";
import * as math from "mathjs";
import "./Calculator.css"; //

function Calculator() {
  const [buffer, setBuffer] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        setResult(math.evaluate(buffer));
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "C") {
      setBuffer("");
      setResult("");
    } else if (value === "CE") {
      setBuffer((prevBuffer) => prevBuffer.slice(0, -1)); // Clear the last entry
    } else if (value === "sqrt") {
      setResult(math.sqrt(math.evaluate(buffer)));
    } else if (value === "pow") {
      setBuffer((prevBuffer) => prevBuffer + "^");
    } else {
      setBuffer((prevBuffer) => prevBuffer + value);
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <div className="buffer">{buffer}</div>
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        {[1, 2, 3, "+", 4, 5, 6, "-", 7, 8, 9, "*", 0, "/", "=", "C", "CE", "√", "^"].map((value) => (
          <button key={value} onClick={() => handleButtonClick(value)}>
            {value}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Calculator;
