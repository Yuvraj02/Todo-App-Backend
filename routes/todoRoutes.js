import express from "express"
import { createTodo, deleteTodo, getAllTodos, getTodoById, updateTodo } from "../controllers/todoController";

const router = express.Router();

router.get("/todos",getAllTodos);
router.delete("/todos/:id", deleteTodo);
router.get("/todos/:id", getTodoById);
router.post("/todos", createTodo);
router.put("/todos/:id", updateTodo);

export default router