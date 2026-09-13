import type { Request, Response } from "express";
import * as todoService from "../services/todo.js";

export const getTodos = async (_req: Request, res: Response) => {
  const todos = await todoService.getAllTodos();
  res.json(todos);
};

export const createTodo = async (req: Request, res: Response) => {
  const { title } = req.body;
  if (!title) {
    res.status(400).json({ message: "Title is required" });
    return;
  }
  const todo = await todoService.createTodo(title);
  res.status(201).json(todo);
};
