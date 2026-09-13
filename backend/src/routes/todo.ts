import { Router } from "express";
import * as todoController from "../controllers/todo.js";

const router = Router();

router.get("/", todoController.getTodos);
router.post("/", todoController.createTodo);

export default router;
