import useStore from "../store";

const DisplayTodos = () => {
  const { todos, deleteTodo } = useStore((state) => {
    return { todos: state.todos, deleteTodo: state.deleteTodo };
  });
  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={`${todo.completed && "line-through"}`}
          onClick={() => toggleTodo(todo.id)}
        >
          {todo.text}
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default DisplayTodos;
