import React from "react";
import { Todo } from "../../store/todos/type";
import { Store } from "../../store";
import { useSelector } from "react-redux";
import { AddTodo } from "../todo-list/add-todo";
import { TodoList } from "../todo-list";

function App() {
  const todos = useSelector<Store, Todo[]>(state =>
    state.todos.filter(todo => !todo.removed)
  );
  return (
    <>
      <AddTodo />
      <TodoList todos={todos} />
    </>
  );
}

export default App;
