export type TodoId = string;

export interface Todo {
  id: TodoId;
  content: string;
  checked: boolean;
  removed: boolean;
}
