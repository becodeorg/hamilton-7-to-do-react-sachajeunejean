const Title = () => {
  return <h2>Todos</h2>;
};

const Todo = (props) => {
  return (
    <div className="todo">
      <input type="checkbox"></input>
      <p>{props.content}</p>
    </div>
  );
};

const TodoList = () => {
  return (
    <article>
      <Title />
    </article>
  );
};

/*
<Todo content="Learn React"></Todo>
<Todo content="Be Awesome!"></Todo>
*/

export default TodoList;
