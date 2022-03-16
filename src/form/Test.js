import React, { useState } from "react";

const Test = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: [e.target.value] });
  };
  const sumitHandler = (e) => {
    e.preventDefault();
    setData("");
    if (data.password.length <= 8.) {
      alert("password must be eight characters");
    }else if(data.password){
        console.log(data)
    }
  };
  return (
    <div>
      <center>
        <form onSubmit={sumitHandler}>
          <label>Email</label>
          <br />
          <input type="text" name="email" onChange={changeHandler} />
          <br />
          <label>Password</label>
          <br />
          <input type="text" name="password" onChange={changeHandler} />
          <br />
          <input type="submit" value="login" />
        </form>
      </center>
    </div>
  );
};

export default Test;
