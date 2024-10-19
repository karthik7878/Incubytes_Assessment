import { useState } from 'react';
import './App.css';

function App() {
  const [inputString, setInputString] = useState("");
  const [sum, setSum] = useState(0);
  const [exception, setException] = useState("");
  const [negativeNumbers, setNegativeNumbers] = useState([]);

  const add = (numbers) => {
    // Check if the input is not empty
    if (numbers.trim() === "") {
      setSum(0); // Set sum to 0 if input is empty
      setException(""); // Clear any previous exception
      return;
    }

    // Split by comma and process each number
    const negativeNums = []; // Array to store negative numbers
    const sumValue = numbers.split(',').reduce((acc, num) => {
      const trimmedNum = num.trim();
      const parsedNum = parseInt(trimmedNum, 10); // Trim whitespace and parse to integer
      
      // Check for negative numbers
      if (parsedNum < 0) {
        negativeNums.push(parsedNum);
      }

      return isNaN(parsedNum) ? acc : acc + parsedNum; // Ignore NaN values
    }, 0);

    // Check if there are any negative numbers and set exception
    if (negativeNums.length > 0) {
      setNegativeNumbers(negativeNums);
      setException("Negative numbers not allowed: " + negativeNums.join(', '));
      setSum(0); // Reset sum if there's an exception
    } else {
      setException(""); // Clear exception if no negative numbers
      setSum(sumValue); // Set the sum if no negatives
    }
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
        { exception ? 
          <div style={{ color: 'red' }}>{exception}</div> : 
          <span> Sum of the numbers is: {sum}</span>
        }
      </div>
    </div>
  );
}

export default App;
