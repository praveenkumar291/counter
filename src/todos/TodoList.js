import React from "react";

const TodoList = ({ todolist, deleteHandler }) => {
  return (
    <div>
      {todolist.map((todo, i) => (
        <div style={{textAlign:"center",alignItems:'center'}}>
          <h4 key={i}>
          <li style={{listStyle:'none', alignItems:'center'}}> {todo} <button onClick={ () =>deleteHandler(i)}>Del</button></li>
          </h4>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
