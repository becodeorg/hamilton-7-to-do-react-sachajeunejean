import React from "react";

const Input = () => {
  return (
    <input
      className="todo-form__input"
      type="text"
      placeholder="Type a new todo"
    ></input>
  );
};

const Button = () => {
  return <button type="submit">Add Todo</button>;
};

const TodoForm = () => {

  return (
    <form>
      <Input />
      <Button />
    </form>
  );
};

export default TodoForm;
