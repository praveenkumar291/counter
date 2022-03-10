import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    if (count < 10) {
      setCount(Number(count) + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div>
      <h1>COUNTER APP</h1>
      <h4> COUNTER:{count}</h4>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={() => setCount(0)}>Resect</button>
    </div>
  );
};

export default Counter;
