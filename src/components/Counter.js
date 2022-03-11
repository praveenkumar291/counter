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
    setMax(Number(e.target.value) + 1);
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>
        Min:{" "}
        <input type="number" name="counter" placeholder="minvalue" onChange={updateMin} value={min} />
        Max:{" "}
        <input
          type="number"
          name="counter"
          placeholder="maxvalue"
          min={min + 1}
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
