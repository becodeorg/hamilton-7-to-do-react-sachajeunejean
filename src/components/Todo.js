import React, { useEffect, useState } from "react";

const Todo = ({ index, todo, todos, setTodos, categoryState }) => {
  let [category, setCategory] = useState([]);

  useEffect(() => {
    setCategory("progress");
  }, []);

  const handleDelete = () => {
    setTodos(todos.filter((t) => t !== todo));

    const keys = Object.keys(localStorage);
    for (let key of keys) {
      const item = localStorage.getItem(key);
      if (item === todo) {
        localStorage.removeItem(key);
      }
    }
  };

  const handleTodoDone = (e) => {
    setCategory("done");
  };

  return (
    <li
      className={`${
        categoryState !== "all" && categoryState !== category ? "hide" : ""
      } todo-app__list-container__list__todo`}
    >
      <p>{todo}</p>
      <span
        id="todo-check"
        className={`${
          categoryState === "done" ? "hide" : ""
        } material-symbols-outlined`}
        onClick={handleTodoDone}
      >
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
