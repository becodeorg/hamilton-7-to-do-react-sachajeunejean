import React from "react";

const Todo = ({ index, todo, todos, setTodos }) => {
  const handleDelete = () => {
    setTodos(todos.filter((t) => t != todo));

    const keys = Object.keys(localStorage);
    for (let key of keys) {
      const item = localStorage.getItem(key);
      if (item == todo) {
        console.log(item);
        localStorage.removeItem(key);
      }
    }
  };

  return (
    <li className="todo-app__list-container__list__todo">
      <p>{todo}</p>
      <span id="todo-check" className="material-symbols-outlined">
        check
      </span>
      <span
        onClick={handleDelete}
        id="todo-delete"
        className="material-symbols-outlined"
      >
        close
      </span>
    </li>
  );
};

export default Todo;
