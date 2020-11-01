import React from "react";
import SiteBar from "./SiteBar";
import TodoList from "./TodoList/TodoList";

const Content = () => {
  return (
    <div className="content">
      <SiteBar />
      <TodoList />
    </div>
  );
};

export default Content;
