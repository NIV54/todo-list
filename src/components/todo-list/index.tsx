import React from "react";
import { Todo } from "../../store/todos/type";
import { TodoItem } from "./todo-item";

interface TodoListProps {
  todos: Todo[];
}

export function TodoList({ todos }: TodoListProps) {
  return (
    <>
      {[...todos]
        .sort((a, b) => (a.checked ? 1 : b.checked ? -1 : 0))
        .map(todo => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
    </>
  );
}
