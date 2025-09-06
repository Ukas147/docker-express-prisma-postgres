import db from "../prisma/client.js";
import type { User } from "@prisma/client";

export const userRepository = {
  findAll: async (): Promise<User[]> => {
    return db.user.findMany({ where: { isDeleted: false } });
  },

  create: async (name: string, email: string): Promise<User> => {
    return db.user.create({
      data: { name, email }
    });
  },

  updateEmail: async (email: string, newEmail: string): Promise<User> => {
    return db.user.update({
      where: { email },
      data: { email: newEmail }
    });
  },

  softDelete: async (email: string): Promise<User> => {
    return db.user.update({
      where: { email },
      data: { isDeleted: true }
    });
  },
};
