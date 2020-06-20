import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { v4 } from "uuid";

import { addTodo } from "../../../store/todos/slice";
import { FormInput } from "./types";

export function AddTodo() {
  const { register, handleSubmit, setValue, errors } = useForm<FormInput>();
  const dispatch = useDispatch();
  return (
    <>
      <h2>Add Todo</h2>
      <form
        onSubmit={handleSubmit(({ content }: FormInput) => {
          setValue("content", "");
          dispatch(addTodo({ content, done: false, removed: false, id: v4() }));
        })}
      >
        <label htmlFor="content">Content</label>
        <input
          type="text"
          name="content"
          ref={register({
            required: { value: true, message: "Content cannot be empty" },
          })}
        />
        {errors.content && <span>{errors.content.message}</span>}
      </form>
    </>
  );
}
