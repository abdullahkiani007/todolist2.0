import { useState, useEffect } from "react";

import Button from "@mui/material/Button";
import Input from "./components/Input";
import Todo from "./components/Todo";
import "./App.css";
import { LinearProgress } from "@mui/material";

function App() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const percentComplete = Math.round(
    (todos.filter((todo) => todo.completed).length / todos.length) * 100
  );

  return (
    <div className="bg-teal min-h-screen py-10 px-5 md:px-28 lg:px-72 lg:py-20">
      <div className="bg-grey h-full flex flex-col justify-center py-10 px-5 rounded-md">
        <h1 className="text-center font-bold text-2xl">Todo List</h1>
        <LinearProgress
          variant="determinate"
          value={percentComplete}
          className="mt-6 mx-10"
        />

        <div className="w-full my-10 flex flex-col content-center ">
          <Input length={todos.length} method={setTodos} todos={todos} />
          {todos.length === 0 ? (
            <h1 className="text-center pt-10 text-teal italic text-lg tracking-wider">
              " Do you have so much time on your hands that you're considering
              becoming a professional procrastinator? "
            </h1>
          ) : (
            ""
          )}
          {todos.map((item) => {
            return (
              <Todo
                key={item.id}
                todo={item.todo}
                id={item.id}
                setTodos={setTodos}
                todos={todos}
              />
            );
          })}
        </div>
        <div className="min-w-full flex justify-center lg:min-w-2">
          <Button
            variant="outlined"
            sx={{
              width: "100%",
            }}
            className=""
            onClick={() => {
              const newTodos = todos.filter((item) => {
                return !item.completed;
              });

              setTodos(newTodos);
            }}
          >
            Clear Checked
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
