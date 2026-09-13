import * as todoRepo from "../repos/todo.js";
import type { ITodo } from "../models/todo.js";

export const getAllTodos = async (): Promise<ITodo[]> => {
  return todoRepo.findAll();
};

export const createTodo = async (title: string): Promise<ITodo> => {
  return todoRepo.create({ title });
};
