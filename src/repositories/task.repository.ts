import db from "../prisma/client.js";
import type { Task } from "@prisma/client";

export const taskRepository = {
  findAll: async (): Promise<Task[]> => {
    return db.task.findMany({ where: { isDeleted: false } });
  },

  create: async (title: string, description: string): Promise<Task> => {
    return db.task.create({
      data: { title, description }
    });
  },

  updateTitle: async (id: string, newTitle: string): Promise<Task> => {
    return db.task.update({
      where: { id },
      data: { title: newTitle }
    });
  },

  updateDescription: async (id: string, newDescription: string): Promise<Task> => {
    return db.task.update({
      where: { id },
      data: { description: newDescription }
    });
  },

  updateCompleted: async (id: string, newIsCompleted: boolean): Promise<Task> => {
    return db.task.update({
      where: { id },
      data: { isCompleted: newIsCompleted }
    });
  },

  softDelete: async (id: string): Promise<Task> => {
    return db.task.update({
      where: { id },
      data: { isDeleted: true }
    });
  },
};
