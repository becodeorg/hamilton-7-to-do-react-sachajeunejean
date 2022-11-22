import React, { useEffect, useState } from "react";
import Todo from "./Todo";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [categorySelected, setCategorySelected] = useState("all");

  useEffect(() => {
    const localStorageKeys = Object.keys(localStorage);
    const localStorageItems = [];

    for (let key of localStorageKeys) {
      localStorageItems.push(JSON.parse(localStorage.getItem(key)));
    }

    setTodos(localStorageItems);
  }, []);

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (e.target[0].value) {
      let index = -1;
      do {
        index = Math.floor(Math.random() * 10) + 1;
      } while (localStorage.getItem(index));

      const todo = {
        content: e.target[0].value,
        category: "progress",
        index: index,
      };

      setTodos([...todos, todo]);

      if (!localStorage.getItem(index)) {
        const item = {
          content: todo.content,
          category: todo.category,
          index: index,
        };
        localStorage.setItem(index, JSON.stringify(item));
      }

      e.target[0].value = "";
    }
  };

  const categoryHandler = (e) => {
    setCategorySelected(e.target.value);
  };

  return (
    <main className="todo-app">
      <h2>Add items to the list</h2>
      <form className="todo-app__form" onSubmit={formSubmitHandler}>
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
        <select className="categories" onChange={categoryHandler}>
          <option value="all">Todos (All)</option>
          <option value="progress">Todos (In Progress)</option>
          <option value="done">Todos (Done)</option>
        </select>
        <ul className="todo-app__list-container__list">
          {todos.map((todo, index) => (
            <Todo
              key={index}
              todo={todo}
              todos={todos}
              setTodos={setTodos}
              categorySelected={categorySelected}
            />
          ))}
        </ul>
      </article>
    </main>
  );
};

export default TodoList;
