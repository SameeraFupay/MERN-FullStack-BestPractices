//Focus on the core functionality

function TodoList() {
    const [todos, setTodos] = useState([]);
    
    const addTodo = (todo) => {
      setTodos([...todos, todo]);
    };
    
    const completeTodo = (index) => {
      setTodos(
        todos.map((todo, i) => {
          if (i === index) {
            return { ...todo, completed: true };
          }
          return todo;
        })
      );
    };
    
    return (
      <div>
        <h1>Todo List</h1>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} completeTodo={completeTodo} />
      </div>
    );
  }

  //Avoid over-engineering

  function Todo({ todo, completeTodo }) {
    return (
      <div>
        <p style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
          {todo.task}
        </p>
        <button onClick={() => completeTodo(todo.index)}>Complete</button>
      </div>
    );
  }
  
  function TodoList({ todos, completeTodo }) {
    return (
      <div>
        {todos.map((todo, index) => (
          <Todo key={index} todo={todo} completeTodo={completeTodo} />
        ))}
      </div>
    );
  }

  //Use simple and straightforward designs

  function TodoForm({ addTodo }) {
    const [task, setTask] = useState("");
    
    const handleSubmit = (event) => {
      event.preventDefault();
      addTodo({ task, completed: false });
      setTask("");
    };
    
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" value={task} onChange={(event) => setTask(event.target.value)} />
        <button type="submit">Add Todo</button>
      </form>
    );
  }

  //Avoid unnecessary abstractions

  function Todo({ todo, completeTodo }) {
    return (
      <div>
        <p style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
          {todo.task}
        </p>
        <button onClick={() => completeTodo(todo.index)}>Complete</button>
      </div>
    );
  }

  //Prioritize user experience
  function TodoList({ todos, completeTodo }) {
    return (
      <div>
        <h1>Todo List</h1>
        {todos.map((todo, index) => (
          <Todo key={index} todo={todo} completeTodo={completeTodo} />
        ))}
      </div>
    );
  }