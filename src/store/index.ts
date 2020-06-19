import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { todosReducer } from "./todos/slice";
import { createBrowserHistory } from "history";

const rootReducer = combineReducers({
  todos: todosReducer,
});

export type Store = ReturnType<typeof rootReducer>;
export const store = configureStore({
  reducer: rootReducer,
});

export const history = createBrowserHistory();
