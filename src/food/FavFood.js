import React, { useState } from "react";

const FavFood = () => {
  const [search, setSearch] = useState("");

  const changeHandler = (e) => {
    setSearch(e.target.value);
    
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(search);
    setSearch('')
  };
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <form onSubmit={submitHandler}>
        <input type="text" value={search} onChange={changeHandler} />
        <input type="submit" value="search" />
      </form>
    </div>
  );
};

export default FavFood;
