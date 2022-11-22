import React, { useEffect, useState } from "react";

const Todo = ({ todo, todos, setTodos, categorySelected }) => {
  const [category, setCategory] = useState(todo.category);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setIsChecked(category === "done" ? true : false);
  }, [category]);

  const handleCheckboxState = (e) => {
    if (e.target.checked) {
      setCategory("done");
      setIsChecked(true);
      todo.category = "done";
    } else {
      setCategory("progress");
      setIsChecked(false);
      todo.category = "progress";
    }

    localStorage.removeItem(todo.index);
    localStorage.setItem(todo.index, JSON.stringify(todo));
  };

  const updateTextHandler = (e) => {
    todo.content = e.target.value;

    localStorage.removeItem(todo.index);
    localStorage.setItem(todo.index, JSON.stringify(todo));
  };

  const deleteHandler = () => {
    if (window.confirm("Do you really want to delete this todo ?")) {
      for (let i = 0; i < todos.length; i++) {
        if (todo.index === todos[i].index) {
          todos.splice(i, 1);
          localStorage.removeItem(todo.index);
        }
      }
      setTodos([...todos]);
    }
  };

  return (
    <li
      className="todo-app__list-container__list__todo"
      style={
        categorySelected !== category && categorySelected !== "all"
          ? { display: "none" }
          : { display: "flex" }
      }
    >
      <input
        type="checkbox"
        name="check"
        id="check"
        onChange={handleCheckboxState}
        defaultChecked={category === "done" ? true : false}
      />
      {/* <input
        type="text"
        id="txt"
        className={
          isChecked === true
            ? `${todo.index}-content crossed-out`
            : `${todo.index}-content`
        }
        defaultValue={todo.content}
        maxLength="20"
        onBlur={updateTextHandler}
      /> */}

      <p
        id="txt"
        className={
          isChecked === true
            ? `${todo.index}-content crossed-out`
            : `${todo.index}-content`
        }
      >
        {todo.content}
      </p>

      {/* <span className="settings material-symbols-outlined">settings</span> */}
      <span
        onClick={deleteHandler}
        id="todo-delete"
        className="material-symbols-outlined"
      >
        delete
      </span>
    </li>
  );
};

export default Todo;
