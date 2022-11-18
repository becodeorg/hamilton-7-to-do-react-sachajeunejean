import React from "react";

const Todo = ({ content }) => {
  return (
    <li className="todo-app__list-container__list__todo">
      <p>{content}</p>
      <span id="todo-check" className="material-symbols-outlined">
        check
      </span>
      <span id="todo-delete" className="material-symbols-outlined">
        close
      </span>
    </li>
  );
};

export default Todo;
