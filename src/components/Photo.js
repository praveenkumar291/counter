import React, { useState } from "react";

const data = [
  "https://images.pexels.com/photos/1198802/pexels-photo-1198802.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/1028707/pexels-photo-1028707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://tse4.mm.bing.net/th?id=OIP._kQrhP0_ghGgIj2BbqrPnwHaHv&pid=Api&P=0&w=152&h=158",
  "https://tse1.mm.bing.net/th?id=OIP.ZwKwI5RW6aTZxCFDLZ6j8gHaDt&pid=Api&P=0&w=347&h=173",
  "https://tse1.mm.bing.net/th?id=OIP.Jmzyzxo0jo8BJT_ISmV40QHaFz&pid=Api&P=0&w=218&h=171",
];

const Photo = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < data.length - 1) {
      setCount(count + 1);
    } else setCount(0);
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    } else setCount(data.length - 1);
  };
  return (
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <img src={data[count]} width="400" height="400" />
      <div>
        <button style={{ padding: "5px", margin: "10px" }} onClick={decrement}>
          Previous
        </button>
        <button style={{ padding: "5px", margin: "10px" }} onClick={increment}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Photo;
