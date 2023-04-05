import { Checkbox } from "@mui/material";
import React, { useState, useRef } from "react";

import SaveIcon from "@mui/icons-material/Save";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Todo = ({ todo, id, setTodos, todos }) => {
  const inputRef = useRef(null);
  const [edit, setEdit] = useState(false);
  const [checked, setchecked] = useState(false);

  // to check todo
  const handleChange = () => {
    setchecked(!checked);
    console.log(todos);

    const updatedTodos = todos.map((item) => {
      if (item.id === id) {
        console.log(item);
        console.log(todos);
        return { ...item, completed: !item.completed };
      } else {
        return item;
      }
    });

    setTodos(updatedTodos);
  };

  // to delete todo

  const handleDelete = () => {
    const updatedTodos = todos.filter((item) => {
      return item.id !== id;
    });

    setTodos(updatedTodos);
  };

  // to edit todo
  const handleEdit = () => {
    setEdit(!edit);
    inputRef.current.focus();
    console.log(inputRef);
  };

  // to save
  const handleSave = () => {
    setEdit(!edit);
    const updatedTodos = todos.map((item) => {
      if (item.id === id) {
        return { ...item, todo: inputRef.current.innerText };
      } else {
        return item;
      }
    });

    setTodos(updatedTodos);
  };

  return (
    <div
      className={`
    ${edit ? "border border-red-500" : "no-underline"}
    mt-5 md:mx-10  lg:mx-56  flex bg-slate-100 rounded-md justify-between px-5 items-center`}
    >
      <div className="flex items-center">
        <Checkbox checked={checked} onChange={() => handleChange(id)} />
        <p
          contentEditable={edit}
          className={`${
            checked
              ? "text-red-500 line-through text-opacity-50"
              : "no-underline text-teal"
          }
            min-w-full
              `}
          ref={inputRef}
        >
          {todo}
        </p>
      </div>

      {edit ? (
        <div>
          <SaveIcon
            sx={{ "&:hover": { fontSize: "32px" } }}
            color="primary"
            fontSize="small"
            className=" hover:cursor-pointer"
            onClick={() => handleSave()}
          />
        </div>
      ) : (
        <div className="space-x-2">
          <EditIcon
            sx={{ "&:hover": { fontSize: "32px" } }}
            color="primary"
            fontSize="small"
            className=" hover:cursor-pointer"
            onClick={() => handleEdit()}
          />
          <DeleteIcon
            sx={{ "&:hover": { fontSize: "32px" } }}
            color="primary"
            fontSize="small"
            className=" hover:cursor-pointer"
            onClick={() => {
              handleDelete(id);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Todo;
