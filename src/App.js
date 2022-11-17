// import components
import React from "react";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {

  return (
    <React.Fragment>
      <Header />
      <TodoForm />
      <TodoList />
    </React.Fragment>
  );
}

export default App;
