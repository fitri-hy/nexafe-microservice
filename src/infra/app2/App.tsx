import React, { useState } from "react";
import { Link } from "react-router-dom";

import Card from "../../ui/components/Card";
import { formatDate } from "../../utils/formatDate";
import { useTodos } from "./useTodos";

export default function App() {
  const { todos, addTodo, toggleComplete, deleteTodo } = useTodos();
  const [newTodo, setNewTodo] = useState("");

  return (
    <div className="px-4 md:p-9">
      <h1 className="text-center text-3xl md:text-4xl font-bold text-black dark:text-white">
        TodoList
      </h1>
      <p className="text-center max-w-sm mx-auto mt-2 text-gray-700 dark:text-gray-300">
        A simple in-memory todo list for adding, editing, and deleting tasks locally.
      </p>
      <code className="block text-xs font-mono text-center mb-2 text-indigo-500">
        /src/infra/app2/App.tsx
      </code>
      <Link to="/" className="block text-center text-blue-500 mx-auto font-semibold hover:underline mt-2" >
        Back Home
      </Link>

      <div className="flex gap-2 max-w-lg justify-center items-center mx-auto mt-6">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add new todo"
          className="bg-white dark:bg-slate-800 w-full rounded border border-neutral-200/60 dark:border-slate-700/50 px-4 py-2 focus:outline-none"
        />
        <button
          className="px-4 py-2 bg-blue-500 dark:bg-blue-600 text-white rounded hover:bg-blue-600 dark:hover:bg-blue-500 hover:duration-300"
          onClick={() => {
            addTodo(newTodo);
            setNewTodo("");
          }}
        >
          Add
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
        {todos.map((todo) => (
          <Card key={todo.id} title={todo.text}>
            <p>
			  Status: <span className="font-semibold">{todo.completed ? "✅ Completed" : "❌ Pending"}</span>
			</p>
            <p>
              Created: <span className="font-semibold">{formatDate(todo.createdAt)}</span>
            </p>
            <div className="flex gap-4 mt-4 items-center justify-center">
              <button
                className="flex items-center gap-1 hover:underline text-emerald-500 font-semibold"
                onClick={() => toggleComplete(todo.id)}
              >
                {todo.completed ? "Undo" : "Complete"}
              </button>
              <button
                className="flex items-center gap-1 hover:underline text-rose-500 font-semibold"
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
