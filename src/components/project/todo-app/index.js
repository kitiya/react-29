import React, { useState } from "react";

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div key={index} className="todo-item-wrapper">
      <label
        className="todo-item"
        style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      >
        {todo.text}
      </label>
      <div className="btn-wrapper">
        <button className="btn" onClick={() => completeTodo(index)}>
          complete
        </button>
        <button className="btn" onClick={() => removeTodo(index)} index={index}>
          remove
        </button>
      </div>
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
    <section className="input-wrapper">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input-text"
          value={value}
          placeholder="Add Todo..."
          onChange={e => setValue(e.target.value)}
        />
      </form>
    </section>
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
    <main id="todo-app" className="project-container">
      <h1 className="project-header">My Todo List</h1>
      <div className="project-wrapper">
        <section className="output-wrapper">
          {todos.map((todo, index) => (
            <Todo
              key={index}
              index={index}
              todo={todo}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
            />
          ))}
        </section>
        <TodoForm addTodo={addTodo} />
      </div>
    </main>
  );
};

export default TodoApp;

/*
import React, { useState, useEffect } from "react";

const TodoApp = () => {
  const [todos, setTodos] = useState([
    { text: "Learn about React", isCompleted: false },
    { text: "Meet friends for lunch", isCompleted: false },
    { text: "Build a really cool TODO App", isCompleted: false }
  ]);

  const handleKeyDown = useEffect(
    event => {
      if (event) {
        if (event.key === "Enter") {
          const newItem = event.target.value;
          todos.push(newItem);
          setTodos(todos);
        } else {
          console.log("test");
        }
      }
    },
    [todos]
  );

  const todosView = todos => {
    // console.log(todos);
    return todos.map((item, index) => (
      <div key={index} className="todo-item-wrapper">
        <label className="todo-item">{item}</label>
        <div className="btn-wrapper">
          <button className="btn">complete</button>
          <button className="btn">remove</button>
        </div>
        <br />
      </div>
    ));
  };

  return (
    <main id="todo-app" className="project-container">
      <h1 className="project-header">My Todo List</h1>
      <div className="project-wrapper">
        <section className="output-wrapper">{todosView(todos)}</section>
        <section className="input-wrapper">
          <label className="input-label">Add new</label>
          <textarea className="input-text" onKeyDown={handleKeyDown} />
        </section>
      </div>
    </main>
  );
};

export default TodoApp;

*/
