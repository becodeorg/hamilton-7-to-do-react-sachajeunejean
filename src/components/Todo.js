import React, { useState } from "react";

const Todo = ({ todo, categorySelected }) => {
  const [category, setCategory] = useState(todo.category);

  const handleCheckboxState = (e) => {
    if (e.target.checked) {
      setCategory("done");
      todo.category = "done";
    } else {
      setCategory("progress");
      todo.category = "progress";
    }

    localStorage.removeItem(todo.index);
    localStorage.setItem(todo.index, JSON.stringify(todo));
  };

  // const textChangeHandler = (e) => {
  //   console.log(e.target.value);
  //   e.target.style.width = (e.target.value.length + 1) * 8 + "px";
  // };

  const updateTextHandler = (e) => {
    todo.content = e.target.value;

    localStorage.removeItem(todo.index);
    localStorage.setItem(todo.index, JSON.stringify(todo));
  };

  const deleteTodo = (e) => {};

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
        className={`${todo.index}-content`}
        placeholder={todo.content}
        maxLength="20"
        // onInput={textChangeHandler}
        onBlur={updateTextHandler}
      />
      <span id="todo-delete" className="material-symbols-outlined">
        delete
      </span>
      {/* {todo.content} */}
    </li>
  );
};

export default Todo;
