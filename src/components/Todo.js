import React, { useState } from "react";

const Todo = ({ todo, categorySelected }) => {
  const [category, setCategory] = useState(todo.category);
  const [isChecked, setIsChecked] = useState(false);

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

  // const deleteTodo = (e) => {};

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
      <input
        type="text"
        id="txt"
        className={
          isChecked === true
            ? `${todo.index}-content crossed-out`
            : `${todo.index}-content`
        }
        placeholder={todo.content}
        maxLength="20"
        onBlur={updateTextHandler}
      />
      <span id="todo-delete" className="material-symbols-outlined">
        delete
      </span>
    </li>
  );
};

export default Todo;
