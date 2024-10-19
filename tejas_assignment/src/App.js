import { useState } from 'react';
import './App.css';

function App() {
  const [inputString, setInputString] = useState("");
  const [sum, setSum] = useState(0);

  const add = (numbers) => {
    // Check if the input is not empty
    if (numbers.trim() === "") {
      setSum(0); // Set sum to 0 if input is empty
      return;
    }

    const sumValue = numbers.split(",")
      .reduce((acc, num) => {
        const parsedNum = parseInt(num, 10);
        return isNaN(parsedNum) ? acc : acc + parsedNum; // Ignore NaN values
      }, 0);

    setSum(sumValue);
  }

  const handleChange = (e) => {
    setInputString(e.target.value);
  }

  return (
    <div className="App">
      <div>
        <label>Input String</label>
        <input type="text" id="textbox" value={inputString} onChange={handleChange} />
        <button onClick={() => add(inputString)}>Compute</button>
        <span> Sum of the numbers is: {sum}</span>
      </div>
    </div>
  );
}

export default App;
