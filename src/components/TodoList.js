import React, { useEffect, useState } from "react";
import Todo from "./Todo";

const TodoList = () => {
  let [todos, setTodos] = useState([]);

  useEffect(() => {
    const values = Object.values(localStorage);
    setTodos([...values]);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target[0].value) {
      const randomnumber = Math.floor(Math.random() * 100000000 + 1);

      localStorage.setItem(String(randomnumber), e.target[0].value);
      setTodos([...todos, e.target[0].value]);

      e.target[0].value = "";
    }
  };

  return (
    <main className="todo-app">
      <h2>Add Items to the TodoList</h2>
      <form className="todo-app__form" onSubmit={handleSubmit}>
        <input
          className="todo-app__form__input"
          type="text"
          name="new-todo"
          id="new-todo"
          placeholder="example: Learn React"
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
        <h2>All Todos</h2>
        <ul className="todo-app__list-container__list">
          {todos.map((todo, key) => (
            <Todo
              localStorage={localStorage}
              key={key}
              index={key}
              todo={todo}
              todos={todos}
              setTodos={setTodos}
            />
          ))}
        </ul>
      </article>
    </main>
  );
};
export default TodoList;
