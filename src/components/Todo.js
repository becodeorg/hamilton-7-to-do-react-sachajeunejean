import React, { useEffect, useState } from "react";

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

    console.log(todo);
    localStorage.removeItem(todo.index);
    localStorage.setItem(todo.index, JSON.stringify(todo));
  };

  return (
    <li
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
      <p>{todo.content}</p>
    </li>
  );
};

export default Todo;
