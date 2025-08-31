//.src/routes/task.service.ts
import { taskRepository } from "../repositories/task.repository.js";
export async function getAllTasks() {
    return await taskRepository.findAll();
}
export async function createTask(title, description) {
    return await taskRepository.create(title, description);
}
export async function updateTaskTitle(id, newTitle) {
    return await taskRepository.updateTitle(id, newTitle);
}
export async function updateTaskDescription(id, newDescription) {
    return await taskRepository.updateDescription(id, newDescription);
}
export async function updateTaskCompleted(id) {
    return await taskRepository.updateCompleted(id);
}
export async function softDeleteTask(id) {
    return await taskRepository.softDelete(id);
}
//# sourceMappingURL=task.service.js.map