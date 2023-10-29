import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

const handleButtonClick = (value) => {
  if (value === '=') {
    try {
      let resultValue = eval(input).toString();
      // Limit the result to 10 digits and round to 2 decimal places
      if (resultValue.length > 10) {
        resultValue = parseFloat(resultValue).toFixed(10);
      }
      setResult(resultValue);
    } catch (error) {
      setResult('Error');
    }
    } else if (value === 'Backspace') {
      setInput(input.slice(0, -1)); // Remove the last character from input
    } else if (value === 'Clear') {
      setInput(''); // Clear the input
      setResult(''); // Clear the output
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator-container">
      <div className="calculator">
        <div className="display">
          {/* Clear button */}
          <button className="clear-button" onClick={() => handleButtonClick('Clear')}>
            C
          </button>
          {/* Input text */}
          <input type="text" value={input} readOnly />
          <span className="result">{result}</span>
        </div>
        <div className="buttons">
          <div className="row">
            <button className="click" onClick={() => handleButtonClick("7")}>7</button>
            <button className="click" onClick={() => handleButtonClick("4")}>4</button>
            <button className="click" onClick={() => handleButtonClick("1")}>1</button>
            <button className="click" onClick={() => handleButtonClick("0")}>0</button>
          </div>
          <div className="row">
            <button className="click" onClick={() => handleButtonClick("8")}>8</button>
            <button className="click" onClick={() => handleButtonClick("5")}>5</button>
            <button className="click" onClick={() => handleButtonClick("2")}>2</button>
            <button className="click" onClick={() => handleButtonClick(".")}>.</button>
          </div>
          <div className="row">
            <button className="click" onClick={() => handleButtonClick("9")}>9</button>
            <button className="click" onClick={() => handleButtonClick("6")}>6</button>
            <button className="click" onClick={() => handleButtonClick("3")}>3</button>
            <button className="click" onClick={() => handleButtonClick("=")}>=</button>
          </div>
          <div className="row operators">
            <button className="click"  onClick={() => handleButtonClick("Backspace")}>
              <svg
                width="50px"
                height="50px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#475387"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke="#CCCCCC"
                  stroke-width="1.68"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M7.7 6.36L3.53 11.36C3.22 11.73 3.22 12.27 3.53 12.64L7.7 17.64C7.89 17.87 8.17 18 8.47 18H18C19.66 18 21 16.66 21 15V9C21 7.34 19.66 6 18 6H8.47C8.17 6 7.89 6.13 7.7 6.36Z"
                    stroke="#475387"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M15 10L13 12M13 12L11 14M13 12L11 10M13 12L15 14"
                    stroke="#475387"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
              </svg>
            </button>
            <button
              className=" click operators"
              onClick={() => handleButtonClick("/")}
            >
              ÷
            </button>
            <button
              className="click operators"
              onClick={() => handleButtonClick("*")}
            >
              ×
            </button>
            <button
              className="click operators"
              onClick={() => handleButtonClick("-")}
            >
              -
            </button>
            <button
              className="click operators"
              onClick={() => handleButtonClick("+")}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;