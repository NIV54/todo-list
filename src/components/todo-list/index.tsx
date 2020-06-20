import React from "react";
import { Todo } from "../../store/todos/type";
import { TodoItem } from "./todo-item";
import { removeTodo } from "../../store/todos/slice";
import { useDispatch } from "react-redux";

interface TodoListProps {
  todos: Todo[];
}

export function TodoList({ todos }: TodoListProps) {
  const dispatch = useDispatch();
  const removeCompleted = () => {
    todos
      .filter(todo => todo.checked)
      .map(todo => dispatch(removeTodo(todo.id)));
  };

  return (
    <>
      <button onClick={removeCompleted}>remove completed</button>
      {[...todos]
        .sort((a, b) => (a.checked ? 1 : b.checked ? -1 : 0))
        .map(todo => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
    </>
  );
}
