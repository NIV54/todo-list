import React from "react";
import { Todo } from "../../store/todos/type";
import { TodoItem } from "./todo-item";
import { removeTodo } from "../../store/todos/slice";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { HOME_ROUTE } from "../app/routes";

interface TodoListProps {
  todos: Todo[];
}

export function TodoList({ todos }: TodoListProps) {
  const location = useLocation();
  const dispatch = useDispatch();
  const removeCompleted = () => {
    todos.filter(todo => todo.done).map(todo => dispatch(removeTodo(todo.id)));
  };

  return (
    <>
      <h2>Todos</h2>
      {todos.length > 0 && location.pathname === HOME_ROUTE && (
        <button onClick={removeCompleted}>remove completed</button>
      )}
      {[...todos]
        .sort((a, b) => (a.done ? 1 : b.done ? -1 : 0))
        .map(todo => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
    </>
  );
}
