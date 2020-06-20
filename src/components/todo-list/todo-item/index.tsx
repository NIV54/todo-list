import React from "react";
import { Todo } from "../../../store/todos/type";
import { reviveTodo } from "../../../store/todos/slice";
import { useDispatch } from "react-redux";

interface TodoItemProps {
  todo: Todo;
}

export function TodoItem({
  todo: { checked, content, removed, id },
}: TodoItemProps) {
  const dispatch = useDispatch();
  return (
    <>
      {!removed && <input type="checkbox" value={checked.toString()} />}
      <span>{content}</span>
      {removed && (
        <button onClick={() => dispatch(reviveTodo(id))}>revive</button>
      )}
    </>
  );
}
