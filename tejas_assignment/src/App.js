import { useState } from 'react';
import './App.css';

function App() {
  const [inputString, setInputString] = useState("");
  const [sum, setSum] = useState(0);
  const [exception, setException] = useState("");
  const [negativeNumbers, setNegativeNumbers] = useState([]);

  const add = (numbers) => {
    if (numbers.trim() === "") {
      setSum(0);
      setException("");
      return;
    }

    const negativeNums = [];
    let sumValue = 0;

    const lines = numbers.split('\n');
    lines.forEach(line => {
      line.split(',').forEach(num => {
        const trimmedNum = num.trim();
        const parsedNum = parseInt(trimmedNum, 10);

        if (parsedNum < 0) {
          negativeNums.push(parsedNum);
        }

        if (!isNaN(parsedNum)) {
          sumValue += parsedNum;
        }
      });
    });

    if (negativeNums.length > 0) {
      setNegativeNumbers(negativeNums);
      setException("Negative numbers not allowed: " + negativeNums.join(', '));
      setSum(0);
    } else {
      setException("");
      setSum(sumValue);
    }
  }

  const handleChange = (e) => {
    setInputString(e.target.value);
  }

  return (
    <div className="App d-flex justify-content-center align-items-center" style={{height: '100vh'}}>
      <div className="border p-4 bg-lightgoldenrodyellow" style={{ width: '400px', display: 'grid' }}>
        <h5 className="text-center fs-4">Sum of Numbers in String</h5>
        <div className="mb-3">
          <label htmlFor="textbox" className="form-label">Input String</label>
          <textarea 
            id="textbox" 
            className="form-control" 
            value={inputString} 
            onChange={handleChange} 
            rows={4}
          />
        </div>
        <button 
          className="btn btn-primary" 
          onClick={() => add(inputString)}
        >
          Compute
        </button>
        {exception ? 
          <div className="alert alert-danger mt-3">{exception}</div> : 
          <div className="mt-3">Sum of the numbers is: <strong>{sum}</strong></div>
        }
      </div>
    </div>
  );
}

export default App;
