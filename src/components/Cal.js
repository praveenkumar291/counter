import React, { useState, useEffect } from "react";
import "./cal.css";

const Cal = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("value");
  const handler = (e) => {
    setInput(e.target.value);
    setResult(eval(e.target.value));
  };

  useEffect(() => {
    try {
      setResult(eval(input));
    } catch (e) {}
  }, [input]);

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <center>
          <input type="text" name="input" value={input} onChange={handler} />
          Answer: {result}
        </center>
      </div>
      <div>
        <center>
          <button onClick={() => setInput(input + 1)}>1</button>
          <button onClick={() => setInput(input + 2)}>2</button>
          <button onClick={() => setInput(input + 3)}>3</button>
          <button onClick={() => setInput(input + 4)}>4</button>
          <button onClick={() => setInput(input + 5)}>5</button>
          <button onClick={() => setInput(input + 6)}>6</button>
          <button onClick={() => setInput(input + 7)}>7</button>
          <button onClick={() => setInput(input + 8)}>8</button>
          <button onClick={() => setInput(input + 9)}>9</button>
          <button onClick={() => setInput(input + 0)}>0</button>
          <button onClick={() => setInput(input + "+")}>+</button>
          <button onClick={() => setInput(input + "-")}>-</button>
          <button onClick={() => setInput(input + "*")}>*</button>
          <button onClick={() => setInput(input + "/")}>/</button>

          <button onClick={() => setInput("")}>c</button>
        </center>
      </div>
    </div>
  );
};

export default Cal;
