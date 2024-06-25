import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { completeTask, editTodo, removeTodo } from "../Slices/TodoSlice";
import { RiEdit2Fill } from "react-icons/ri";
import { LuClipboardEdit } from "react-icons/lu";
import { MdDelete } from "react-icons/md";
import { Checkbox } from "@mui/material";

function TodoItem({ todo }) {
  const dispatch = useDispatch();

  const [edit, setedit] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);

  const handleEdit = () => {
    dispatch(
      editTodo({
        id: todo.id,
        title: editedTitle,
      })
    );
    setedit(false);
  };
  useEffect(() => {
    handleEdit();
  }, []);

  return (
    <li
      className="mt-4 flex justify-between items-center shadow-md px-4 py-2 rounded"
      key={todo.id}
    >
      {edit ? (
        <input
          type="text"
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
          className="text-black text-lg"
        />
      ) : (
        <h2 className={`text-black text-lg ${todo.iscom}`}>{todo.title}</h2>
      )}
      <div className="flex gap-5 items-center">
        {edit ? (
          <LuClipboardEdit style={{cursor:"pointer"}} onClick={handleEdit} size={25} />
        ) : (
          <RiEdit2Fill style={{cursor:"pointer"}} onClick={() => setedit(true)} size={25} />
        )}

        <MdDelete style={{cursor:"pointer"}} onClick={() => dispatch(removeTodo(todo.id))} size={25} />
        <Checkbox style={{cursor:"pointer"}}  
          checked={todo.iscomplete}
          onChange={() => dispatch(completeTask(todo.id))}
        />
      </div>
    </li>
  );
}

export default TodoItem;
