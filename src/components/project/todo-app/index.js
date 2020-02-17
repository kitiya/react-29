import React, { useState } from "react";

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div key={index} className="row p-2">
      <label
        className="col m-1 p-2 rounded border align-self-center text-left bg-light"
        style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      >
        {todo.text}
      </label>
      <button
        className="col-3 col-md-2 col-xl-1 btn btn-info m-1 "
        onClick={() => completeTodo(index)}
      >
        complete
      </button>
      <button
        className="col-3 col-md-2 col-xl-1 btn btn-info m-1"
        onClick={() => removeTodo(index)}
        index={index}
      >
        remove
      </button>
    </div>
  );
}

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    if (!value) return;

    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <section className="row mt-3">
        <input
          type="text"
          className="col form-control pt-3 pb-3 m-2 border border-info"
          value={value}
          placeholder="Add Todo..."
          onChange={e => setValue(e.target.value)}
        />
      </section>
    </form>
  );
}

const TodoApp = () => {
  const [todos, setTodos] = useState([
    { text: "Learn about React", isCompleted: false },
    { text: "Meet friends for lunch", isCompleted: false },
    { text: "Build a really cool Todo App", isCompleted: false }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1); // remove 1 element

    setTodos(newTodos);
  };
  return (
    <main id="todo-app" className="container text-center">
      <h1>My Todo List</h1>
      {todos.map((todo, index) => (
        <Todo
          key={index}
          index={index}
          todo={todo}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
        />
      ))}
      <TodoForm addTodo={addTodo} />
    </main>
  );
};

export default TodoApp;
