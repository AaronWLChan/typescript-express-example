import { Router } from "express";
import { TodoController } from "./controller";

const router = Router()

const controller = new TodoController()

/**
 * Get Todos
 */
router.get("/", controller.get)

/**
 * Get Todo By Id
 */
 router.get("/:id", controller.getById)

/**
 * Create Todo
 */
 router.post("/", controller.create)

/**
 * Update Todo
 */
router.put("/:id", controller.update)

/**
 * Delete Todo
 */
 router.delete("/:id", controller.delete)

export default router