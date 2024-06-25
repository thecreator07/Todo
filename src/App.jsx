import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AddTodo from "./component/AddTodo";
import Todos from "./component/Todos";

function App() {

  return (
    <>
      <h1 className="text-3xl font-semibold text-blue-400">TODO</h1>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
