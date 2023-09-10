import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { todoAPI } from "../../api";

// the outside "thunk creator" function
export const fetchTodos = createAsyncThunk("todos/fetchAll", () =>
  todoAPI.fetchAll()
);

export const deleteTodo = createAsyncThunk("todo/delete", (id) => {
  // TODO: return a call  to corresponding API method i.e. todoAPI.fetchAll()
  return todoAPI.deleteOne(id);
});

export const updateTodo = createAsyncThunk("todo/update", (payload) => {
  // TODO: return a call  to corresponding API method i.e. todoAPI.fetchAll()
  return todoAPI.updateOne(payload);
});

export const addTodo = createAsyncThunk("todo/add", (todo) => {
  // TODO: return a call  to corresponding API method i.e. todoAPI.fetchAll()
  return todoAPI.createOne(todo);
});

const initialState = [];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      Object.assign(state, action.payload);
    });

    builder.addCase(deleteTodo.fulfilled, (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.meta.arg);
      if (index !== -1) state.splice(index, 1);
    });

    builder.addCase(addTodo.fulfilled, (state, action) => {
      // TODO: Finish the code for adding todo
      state.push(action.payload);
    });

    builder.addCase(updateTodo.fulfilled, (state, action) => {
      // TODO: Finish the code for updating todo
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      if (index !== -1) state[index].state = action.payload.state;
    });
  },
});

export default todosSlice.reducer;
