import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { Button, TextField } from "@mui/material";
import { teal } from "@mui/material/colors";

const input = ({ length, method, todos }) => {
  const [todo, setTodo] = useState("");

  return (
    <>
      <form className="w-full flex justify-center" action="">
        <TextField
          id="outlined-basic"
          label="Enter Todo"
          variant="outlined"
          multiline
          value={todo}
          className="w-full md:w-1/2 font-roboto"
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />

        <Button
          variant="contained"
          className=""
          disabled={!todo}
          onClick={() => {
            method([...todos, { id: uuid(), todo: todo, completed: false }]);
            setTodo("");
          }}
        >
          +
        </Button>
      </form>
    </>
  );
};

export default input;
