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
    } else if (value === "√") {
      setResult(math.sqrt(math.evaluate(buffer)));
    } else if (value === "^") {
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
<<<<<<< HEAD
        {[1, 2, 3, "+", 4, 5, 6, "-", 7, 8, 9, "*", 0, "/", "=", "C", "CE", "√", "^"].map((value) => (
=======
        {[1, 2, 3, "+", 4, 5, 6, "-", 7, 8, 9, "*", 0, "÷", "=", "C", "CE", "√", "^"].map((value) => (
>>>>>>> b1c90588d7c34c9b269902e643f43b51d907a249
          <button key={value} onClick={() => handleButtonClick(value)}>
            {value}
          </button>
        ))}
      </div>
      <div className="recent-calculations">
        <h2> MEMORY </h2>
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
