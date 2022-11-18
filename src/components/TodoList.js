import { React, useEffect, useState } from "react";
import Todo from "./Todo";

const TodoList = () => {
  let [todos, setTodos] = useState([]);
  let [categoryState, setCategoryState] = useState([]);

  useEffect(() => {
    const values = Object.values(localStorage);
    setTodos([...values]);
  }, []);

  useEffect(() => {
    setCategoryState("all");
  }, []);

  const handleCategories = (e) => {
    setCategoryState(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target[0].value) {
      const randomnumber = Math.floor(Math.random() * 100000000 + 1);

      localStorage.setItem(String(randomnumber), e.target[0].value);
      if (!todos.includes(e.target[0].value))
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
        <select className="categories" onChange={handleCategories}>
          <option value="all">Todos (All)</option>
          <option value="progress">Todos (In Progress)</option>
          <option value="done">Todos (Dones)</option>
        </select>
        <ul className="todo-app__list-container__list">
          {todos.map((todo, key) => (
            <Todo
              localStorage={localStorage}
              key={key}
              index={key}
              todo={todo}
              todos={todos}
              setTodos={setTodos}
              categoryState={categoryState}
            />
          ))}
        </ul>
      </article>
    </main>
  );
};
export default TodoList;
