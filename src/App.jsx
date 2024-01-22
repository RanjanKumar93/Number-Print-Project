import { useState } from "react";

export default function App() {
  const [inputNumber, setInputNumber] = useState(0);
  const [answer, setAnswer] = useState([]);
  const [pyramid, setPyramid] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newArray = [];
    const pyramidArray = [];
    for (let i = 0; i < inputNumber; i++) {
      const rowArray = [];
      for (let j = 0; j < i + 1; j++) {
        rowArray.push(j + 1);
      }
      newArray.push(rowArray);
    }
    setAnswer(newArray);

    for (let i = 0; i < inputNumber; i++) {
      const rowArray = [];
      for (let j = 0; j < i + 1; j++) {}
    }
  };

  const handleChangeInput = (e) => {
    setInputNumber(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChangeInput} />
        <br />
        <button type="submit">Submit</button>
      </form>
      <div>
        {answer.map((col, colIndex) => (
          <h1 style={{ marginBottom: "-15px" }} key={colIndex}>
            {col.map((row, rowIndex) => (
              <span style={{ margin: "5px" }} key={rowIndex}>
                {row}
              </span>
            ))}
          </h1>
        ))}
      </div>
      <div></div>
    </>
  );
}
