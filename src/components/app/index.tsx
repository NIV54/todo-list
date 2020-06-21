import React from "react";
import { Todo } from "../../store/todos/type";
import { Store } from "../../store";
import { useSelector } from "react-redux";
import { AddTodo } from "../todo-list/add-todo";
import { TodoList } from "../todo-list";
import { useLocation, Link, Route } from "react-router-dom";
import { REMOVED_ROUTE } from "./routes";

function App() {
  const location = useLocation();
  const todos = useSelector<Store, Todo[]>(state =>
    state.todos.filter(todo =>
      location.pathname === REMOVED_ROUTE ? todo.removed : !todo.removed
    )
  );
  return (
    <>
      <Link to="/">New Todos</Link>
      <Link to={REMOVED_ROUTE}>Done Todos</Link>
      <Route exact path={"/"} component={AddTodo} />
      <TodoList todos={todos} />
    </>
  );
}

export default App;
