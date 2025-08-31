import * as taskService from "../services/task.service.js";
import type { Request, Response } from "express";

export async function getTasks(_req: Request, res: Response) {
  const tasks = await taskService.getAllTasks();
  res.json(tasks);
}

export async function postTask(req: Request, res: Response) {
  try {
    const { title, description } = req.body;
    const task = await taskService.createTask(title, description);
    res.status(201).json({ message: `A tarefa "${task.title}" foi criada com sucesso.` });
  } catch {
    res.status(400).json({ error: "erro ao criar a tarefa" });
  }
}

export async function patchTaskTitle(req: Request<{ id: string }>, res: Response) {
  const { id } = req.params;
  const { newTitle } = req.body;

  if (!newTitle) return res.status(400).json({ error: "newTitle obrigatório" });

  try {
    const updated = await taskService.updateTaskTitle(id, newTitle);
    res.json(updated);
  } catch {
    res.status(404).json({ error: "não encontrado" });
  }
}

export async function patchTaskDescription(req: Request<{ id: string }>, res: Response) {
  const { id } = req.params;
  const { newDescription } = req.body;

  if (!newDescription) return res.status(400).json({ error: "newDescription obrigatório" });

  try {
    const updated = await taskService.updateTaskDescription(id, newDescription);
    res.json(updated);
  } catch {
    res.status(404).json({ error: "não encontrado" });
  }
}

export async function patchTaskCompleted(req: Request<{ id: string, isCompleted: boolean }>, res: Response) {
  const { id } = req.params;
  const { isCompleted } = req.body;

  try {
    const updated = await taskService.updateTaskCompleted(id, isCompleted);
    res.json(updated);
  } catch {
    res.status(404).json({ error: "não encontrado" });
  }
}

export async function deleteTask(req: Request<{ id: string }>, res: Response) {
  const { id } = req.params;

  try {
    const updated = await taskService.softDeleteTask(id);
    res.json({ message: `usuário ${updated.id} deletado` });
  } catch {
    res.status(404).json({ error: "não encontrado" });
  }
}
