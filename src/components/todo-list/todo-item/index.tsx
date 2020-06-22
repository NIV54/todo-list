import React from "react";
import { Todo } from "../../../store/todos/type";
import {
  reviveTodo,
  changeTodoStatus,
  deleteTodo,
} from "../../../store/todos/slice";
import { useDispatch } from "react-redux";

interface TodoItemProps {
  todo: Todo;
}

export function TodoItem({
  todo: { done, content, removed, id },
}: TodoItemProps) {
  const dispatch = useDispatch();
  return (
    <>
      {!removed && (
        <input
          type="checkbox"
          checked={done}
          onClick={() => dispatch(changeTodoStatus(id))}
        />
      )}
      <span>{content}</span>
      {removed && (
        <>
          <button onClick={() => dispatch(reviveTodo(id))}>revive</button>
          <button onClick={() => dispatch(deleteTodo(id))}>delete</button>
        </>
      )}
    </>
  );
}
