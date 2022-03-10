import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState("");
  const increment = () => {
    if (typeof count !== "NAN") {
      setCount(Number(count) + 1);
    } else setCount(1);
  };
  return (
    <div>
      <h1>COUNTER APP</h1>
      <h4> COUNTER:{count}</h4>
      <button onClick={increment}>Incre</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Resect</button>
    </div>
  );
};

export default Counter;
