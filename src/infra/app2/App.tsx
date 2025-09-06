import React, { useState } from "react";
import { Link } from "react-router-dom";

import Card from "../../ui/components/Card";
import Button from "../../ui/components/Button";
import Input from "../../ui/components/Input";
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
      <Link
        to="/"
        className="block text-center text-blue-500 mx-auto font-semibold hover:underline mt-2"
      >
        Back Home
      </Link>

      <div className="flex gap-2 w-full max-w-lg justify-center items-center mx-auto mt-6">
        <Input
          placeholder="Add new todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="w-full"
        />
        <Button
          label="Add"
          variant="primary"
          onClick={() => {
            if (newTodo.trim() === "") return;
            addTodo(newTodo.trim());
            setNewTodo("");
          }}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
        {todos.map((todo) => (
          <Card key={todo.id} title={todo.text} className="flex flex-col justify-between">
            <p>
              Status:{" "}
              <span className="font-semibold">
                {todo.completed ? "✅ Completed" : "❌ Pending"}
              </span>
            </p>
            <p>
              Created: <span className="font-semibold">{formatDate(todo.createdAt)}</span>
            </p>
            <div className="flex gap-2 mt-4 items-center justify-center">
              <Button
                label={todo.completed ? "Undo" : "Complete"}
                variant="success"
                onClick={() => toggleComplete(todo.id)}
              />
              <Button
                label="Delete"
                variant="danger"
                onClick={() => deleteTodo(todo.id)}
              />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
