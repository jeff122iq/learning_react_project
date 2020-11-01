import React from "react";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
  const TodoItem = [{ id: 1, title: "Take a photo" }];

  return (
    <form className="todoList">
      <input type="text"></input>
      <button>Add</button>
      <TodoItem TodoItem={TodoItem} />
    </form>
  );
};

export default TodoList;
