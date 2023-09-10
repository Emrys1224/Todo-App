import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos } from "../../store/reducers/todos";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";
import { Box, Tab, Tabs } from "@mui/material";

export function TodoList() {
  const ALL = 0;
  const NEW = 1;
  const IN_PROGRESS = 2;
  const DONE = 3;
  const [filter, setFilter] = useState(ALL);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
  }, []);
  const todos = useSelector((state) => state.todos);

  let todoDisplayed = [];
  switch (filter) {
    case NEW:
      todoDisplayed = todos.filter((todo) => todo.state === "new");
      break;

    case IN_PROGRESS:
      todoDisplayed = todos.filter((todo) => todo.state === "in progress");
      break;

    case DONE:
      todoDisplayed = todos.filter((todo) => todo.state === "done");
      break;

    default:
      todoDisplayed = todos;
  }

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={filter}
          onChange={(e, filterVal) => {
            setFilter(filterVal);
          }}
        >
          <Tab label="All" />
          <Tab label="New" />
          <Tab label="In progress" />
          <Tab label="Done" />
        </Tabs>
      </Box>
      <div className="todo-list-container">
        {todoDisplayed.length > 0 ? (
          todoDisplayed.map((todo) => <TodoItem key={todo.id} todo={todo} />)
        ) : (
          <h2>There is nothing to show</h2>
        )}
      </div>
    </>
  );
}
