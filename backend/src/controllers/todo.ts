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

export const deleteTodo = async (req: Request, res: Response) => {
  const id = req.params.id as string;
  const todo = await todoService.deleteTodo(id);
  if (!todo) {
    res.status(404).json({ message: "Todo not found" });
    return;
  }
  res.status(204).send();
};

export const toggleTodo = async (req: Request, res: Response) => {
  const id = req.params.id as string;
  const todo = await todoService.toggleTodo(id);
  if (!todo) {
    res.status(404).json({ message: "Todo not found" });
    return;
  }
  res.json(todo);
};
