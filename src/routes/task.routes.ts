// src/routes/task.routes.ts
import { Router } from "express";
import {
  getTasks,
  postTask,
  patchTaskTitle,
  patchTaskDescription,
  patchTaskCompleted,
  deleteTask,
} from "../controllers/task.controller.js";

const router = Router();

router.get("/", getTasks);
router.post("/", postTask);
router.patch("/:id/title", patchTaskTitle);
router.patch("/:id/description", patchTaskDescription);
router.patch("/:id/completed", patchTaskCompleted);
router.patch("/:id/delete", deleteTask);

export default router;