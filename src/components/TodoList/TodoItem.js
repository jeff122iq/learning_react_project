import React from "react";

const TodoItem = (props) => {
  const newTodoItem = props.TodoItem.map((item) => (
    <li>
      {item.id}
      {item.title}
    </li>
  ));
  return <ul>{newTodoItem}</ul>;
};

export default TodoItem;
