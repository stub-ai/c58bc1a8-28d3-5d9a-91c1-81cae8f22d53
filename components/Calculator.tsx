import { useState } from 'react';

const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value: string) => {
    if (!operator) {
      setNum1(num1 + value);
    } else {
      setNum2(num2 + value);
    }
  };

  const handleOperator = (value: string) => {
    setOperator(value);
  };

  const calculate = () => {
    let res = 0;
    switch (operator) {
      case '+':
        res = Number(num1) + Number(num2);
        break;
      case '-':
        res = Number(num1) - Number(num2);
        break;
      case '*':
        res = Number(num1) * Number(num2);
        break;
      case '/':
        res = Number(num1) / Number(num2);
        break;
      default:
        break;
    }
    setResult(res.toString());
  };

  const clearInput = () => {
    setNum1("");
    setNum2("");
    setOperator("");
    setResult("");
  };

  return (
    <div className="p-5 bg-gray-200 rounded shadow-lg">
      <div className="mb-5">
        <input
          type="text"
          className="w-full p-2 text-right border rounded"
          value={num1 + operator + num2}
          readOnly
        />
        <div className="text-right">{result}</div>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {["7", "8", "9", "4", "5", "6", "1", "2", "3", "0", ".", "+", "-", "*", "/"].map((item, index) => (
          <button
            key={index}
            className={`p-2 font-bold bg-white rounded ${item === "=" ? "col-span-2" : ""}`}
            onClick={() => (["+", "-", "*", "/"].includes(item) ? handleOperator(item) : handleClick(item))}
          >
            {item}
          </button>
        ))}
        <button className="p-2 font-bold text-white bg-red-500 rounded" onClick={calculate}>
          =
        </button>
        <button className="p-2 font-bold text-white bg-red-500 rounded" onClick={clearInput}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default Calculator;