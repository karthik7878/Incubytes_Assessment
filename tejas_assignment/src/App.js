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

    const lines = numbers.split('\n');
    const allNumbers = lines.flatMap(line => line.split(','));

    const sumValue = allNumbers.reduce((acc, num) => {
      const trimmedNum = num.trim();
      const parsedNum = parseInt(trimmedNum, 10); // Trim whitespace and parse to integer
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
        <textarea 
          id="textbox" 
          value={inputString} 
          onChange={handleChange} 
          rows={4} 
          cols={50}
        />
        <button onClick={() => add(inputString)}>Compute</button>
        <span> Sum of the numbers is: {sum}</span>
      </div>
    </div>
  );
}

export default App;
