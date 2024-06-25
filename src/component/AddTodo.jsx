import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Slices/TodoSlice";
import { Button, Input } from "@mui/material";
function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input) {
      dispatch(addTodo(input));
      setInput("");
    }
  };
  const handleinput = (e) => {
    const { value } = e.target;
    if (value !== "") {
      setInput(value);
    }
  };
  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <Input
        type="text"
        placeholder="Enter a Todo..."
        value={input}
        onChange={handleinput}
      />
      <Button type="submit" className="shadow-md">
        Add Todo
      </Button>
    </form>
  );
}

export default AddTodo;
