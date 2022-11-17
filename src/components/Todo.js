import React from "react";

const Todo = ({ content }) => {
  return (
    <li className="todo-app__list-container__list__todo">
      <input type="checkbox" name="todo-checkbox" id="todo-checkbox" />
      <p>{content}</p>
    </li>
  );
};

export default Todo;
