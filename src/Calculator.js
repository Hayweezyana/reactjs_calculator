import React, { useState, useEffect } from "react";
import * as math from "mathjs";
import "./Calculator.css"; // You can create a new CSS file for styling

function Calculator() {
  const [buffer, setBuffer] = useState("");
  const [result, setResult] = useState("");
  const [recentCalculations, setRecentCalculations] = useState([]);

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        const calculatedResult = math.evaluate(buffer);
        setResult(calculatedResult);
        // Add the recent calculation to the list
        setRecentCalculations((prevCalculations) => [
          { expression: buffer, result: calculatedResult },
          ...prevCalculations,
        ]);
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

  useEffect(() => {
  }, [recentCalculations]);

  return (
    <div className="calculator">
      <div className="display">
        <div className="buffer">{buffer}</div>
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        {[1, 2, 3, "+", 4, 5, 6, "-", 7, 8, 9, "*", 0, "/", "=", "C", "CE", "sqrt", "pow"].map((value) => (
          <button key={value} onClick={() => handleButtonClick(value)}>
            {value}
          </button>
        ))}
      </div>
      <div className="recent-calculations">
        <h2>Recent Calculations</h2>
        <ul>
          {recentCalculations.map((calculation, index) => (
            <li key={index}>{`${calculation.expression} = ${calculation.result}`}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Calculator;
