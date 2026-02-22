import { useState } from "react";
import "./App.css";

function App() {
  //this is new react.
  // "Used TypeScript interface to define the exact shape of Todo objects. This provides compile-time type checking, prevents runtime errors, enables full IntelliSense, and documents the data structure for other developers."
  interface Todo {
    id: number;
    text: string;
    completed: boolean;
  }
  const [input, setInput] = useState("");

  const [todoList, setTodoList] = useState<Todo[]>([]);

  const addTodoItem = () => {
    if (input.trim() === "") return;
    const itemToBeAdded = {
      id: todoList.length + 1,
      text: input.trim(),
      completed: false,
    };
    setTodoList((prev) => [...prev, itemToBeAdded]);
    setInput("");
  };

  const toggleCompleted = (id: number) => {
    // setTodoList(
    //   todoList.map((t) => {
    //     if (t.id === id) {
    //       return {
    //         ...t,
    //         completed: !t.completed,
    //       };
    //     } else {
    //       return t;
    //     }
    //   }),
    // );

    //from chatgpt
    setTodoList((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
    );
  };

  const deleteTodo = (id: number) => {
    setTodoList(todoList.filter((t) => t.id != id));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter ToDo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => addTodoItem()}>Add</button>
      <ul>
        {todoList.map((t) => (
          <li key={t.id}>
            <input
              type="checkbox"
              checked={t.completed}
              onChange={() => toggleCompleted(t.id)}
            />
            <span className={t.completed ? "strikeThrough" : ""}>{t.text}</span>
            <button onClick={() => deleteTodo(t.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
