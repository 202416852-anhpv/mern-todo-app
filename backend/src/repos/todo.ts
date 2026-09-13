import { Todo, type ITodo } from "../models/todo.js";

export const findAll = async (): Promise<ITodo[]> => {
  return Todo.find().sort({ createdAt: -1 });
};

export const create = async (data: { title: string }): Promise<ITodo> => {
  return Todo.create(data);
};
