import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
function Todos() {
  const todos = useSelector((state) => state.todos);
  console.log(todos)

  return (
    <>
      <ul className="list-none">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </>
  );
}

export default Todos;
