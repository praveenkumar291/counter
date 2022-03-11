import React, { useState } from "react";

const Counter = () => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(10);
  const [count, setCount] = useState(0);
  const increment = () => {
    if (count < max) {
      setCount(count + 1);
    } else setCount(min);
  };
  const decrement = () => {
    if (count > min) {
      setCount(count - 1);
    } else setCount(max);
  };

  const updateMin = (e) => {
    setMin(Number(e.target.value));
    setCount(Number(e.target.value));
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>
        Min:{" "}
        <input type="text" name="counter" onChange={updateMin} value={min} />
        Max:{" "}
        <input
          type="text"
          name="counter"
          onChange={(e) => setMax(e.target.value)}
          value={max}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <button onClick={increment}>+</button>
        <h4>{count}</h4>
        <button onClick={decrement}>-</button>
      </div>
    </div>
  );
};

export default Counter;
