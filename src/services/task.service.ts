//.src/routes/task.service.ts
import { taskRepository } from "../repositories/task.repository.js";

export async function getAllTasks() {
  return await taskRepository.findAll();
}

export async function createTask(title: string, description: string) {
  return await taskRepository.create(title, description);
}

export async function updateTaskTitle(id: string, newTitle: string) {
  return await taskRepository.updateTitle(id, newTitle);
}

export async function updateTaskDescription(id: string, newDescription: string) {
  return await taskRepository.updateDescription(id, newDescription);
}

export async function updateTaskCompleted(id: string) {
  return await taskRepository.updateCompleted(id);
}

export async function softDeleteTask(id: string) {
  return await taskRepository.softDelete(id);
}