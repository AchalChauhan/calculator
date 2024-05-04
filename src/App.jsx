import { useState } from "react";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("");
  const [displayOutput, setDisplayOutput] = useState(false); 
  const [ans, setAns] = useState("");

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleCalculate = () => {
    try {
      const result = eval(input);
      if(result === undefined){
        setAns("Error");
      }else{
        setAns(result);
      }
      console.log(result)
      setDisplayOutput(true);
    } catch (error) {
      setInput("Error");
    }
  };

  const handleClear = () => {
    setInput("");
    setDisplayOutput(false)
  };

  return (
    <div className="calculator">
      <div className="flex">
        <h1>React Calculator</h1>
        <br />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          readOnly
        />
        {displayOutput && <p>{ans}</p>}
      </div>
      <div className="buttons">
        <button onClick={() => handleButtonClick("7")}>7</button>
        <button onClick={() => handleButtonClick("8")}>8</button>
        <button onClick={() => handleButtonClick("9")}>9</button>
        <button onClick={() => handleButtonClick("+")}>+</button>
        <button onClick={() => handleButtonClick("4")}>4</button>
        <button onClick={() => handleButtonClick("5")}>5</button>
        <button onClick={() => handleButtonClick("6")}>6</button>
        <button onClick={() => handleButtonClick("-")}>-</button>
        <button onClick={() => handleButtonClick("1")}>1</button>
        <button onClick={() => handleButtonClick("2")}>2</button>
        <button onClick={() => handleButtonClick("3")}>3</button>
        <button onClick={() => handleButtonClick("*")}>*</button>
        <button onClick={handleClear}>C</button>
        <button onClick={() => handleButtonClick("0")}>0</button>
        {/* <button onClick={() => handleButtonClick('.')}>.</button> */}
        <button onClick={handleCalculate}> = </button>
        <button onClick={() => handleButtonClick("/")}>/</button>
      </div>
    </div>
  );
};

export default App;
