import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo, TodoId } from "./type";

const todosSlice = createSlice({
  name: "todos",
  initialState: [] as Todo[],
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) =>
      state.concat(action.payload),
    changeTodoStatus: (state, action: PayloadAction<TodoId>) =>
      state.map(todo =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      ),
    removeTodo: (state, action: PayloadAction<TodoId>) =>
      state.map(todo =>
        todo.id === action.payload ? { ...todo, removed: true } : todo
      ),
    reviveTodo: (state, action: PayloadAction<TodoId>) =>
      state.map(todo =>
        todo.id === action.payload
          ? { ...todo, done: false, removed: false }
          : todo
      ),
    deleteTodo: (state, action: PayloadAction<TodoId>) =>
      state.filter(todo => todo.id !== action.payload),
  },
});

export const {
  reducer: todosReducer,
  actions: { addTodo, changeTodoStatus, removeTodo, reviveTodo, deleteTodo },
} = todosSlice;
