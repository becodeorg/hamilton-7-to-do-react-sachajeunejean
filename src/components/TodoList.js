import React, { useState } from "react";
import Todo from "./Todo";

const TodoList = () => {
  let [todos, setTodos] = useState([[]]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target[0].value) {
      setTodos([...todos, e.target[0].value]);
    }
  };

  return (
    <main className="todo-app">
      <form className="todo-app__form" onSubmit={handleSubmit}>
        <input
          className="todo-app__form__input"
          type="text"
          name="new-todo"
          id="new-todo"
        />
        <button
          className="todo-app__form__button"
          type="submit"
          id="button-submit"
        >
          Add Todo
        </button>
      </form>
      <article className="todo-app__list-container">
        <h2>Todos</h2>
        <ul className="todo-app__list-container__list">
          {todos.map((todo, index) => (
            <Todo key={index} content={todo} />
          ))}
        </ul>
      </article>
    </main>
  );
};
export default TodoList;
