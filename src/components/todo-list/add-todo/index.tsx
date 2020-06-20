import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { v4 } from "uuid";

import { addTodo } from "../../../store/todos/slice";

interface FormInput {
  content: string;
}

export function AddTodo() {
  const { register, handleSubmit, setValue } = useForm<FormInput>();
  const dispatch = useDispatch();
  return (
    <form
      onSubmit={handleSubmit(({ content }: FormInput) => {
        setValue("content", "");
        dispatch(addTodo({ content, done: false, removed: false, id: v4() }));
      })}
    >
      <input type="text" name="content" ref={register} />
    </form>
  );
}
