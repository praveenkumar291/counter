import React, { useState } from "react";
import TodoList from "./TodoList";

const Todo = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const changeHandler = (e) => {
    setTask(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const newTodos = [...todos, task];
    setTodos(newTodos);
    setTask('')
  };
  const deleteHandler = (i) => {
    const newTodos = todos.filter((todo,index)=> index !== i);
    setTodos(newTodos )
  }

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>TODO APP</h1>
      <form onSubmit={submitHandler}>
        <input
          style={{ padding: "5px", margin: "10px" }}
          type="text"
          value={task}
          onChange={changeHandler}
          name="task"
        />
        <input
          style={{ padding: "5px", margin: "10px" }}
          type="submit"
          name="Add"
          value="Add"
        />
      </form>
      <TodoList todolist={todos} deleteHandler={deleteHandler}/>
    </div>
  );
};

export default Todo;
