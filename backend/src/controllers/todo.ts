import type { Request, Response } from "express";
import { z } from "zod";
import * as todoService from "../services/todo.js";
import { createTodoSchema } from "../validations/todo.js";

export const getTodos = async (_req: Request, res: Response) => {
  const todos = await todoService.getAllTodos();
  res.json(todos);
};

export const createTodo = async (req: Request, res: Response) => {
  const parsed = createTodoSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({
      message: "Validation failed",
      errors: z.flattenError(parsed.error).fieldErrors,
    });
    return;
  }
  const todo = await todoService.createTodo(parsed.data.title);
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
