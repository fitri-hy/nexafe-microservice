import { useState } from "react";
import { Todo } from "./types";

const DEFAULT_TODOS: Todo[] = [
  { id: 1, text: "Learn React", completed: false, createdAt: new Date().toISOString() },
  { id: 2, text: "Build Microfrontend", completed: false, createdAt: new Date().toISOString() },
  { id: 3, text: "Write Documentation", completed: false, createdAt: new Date().toISOString() },
];

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>(DEFAULT_TODOS);

  const addTodo = (text: string) => {
    if (!text.trim()) return;
    const todo: Todo = {
      id: Date.now(),
      text: text.trim(),
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setTodos((prev) => [...prev, todo]);
  };

  const toggleComplete = (id: number) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const deleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  return { todos, addTodo, toggleComplete, deleteTodo };
}
