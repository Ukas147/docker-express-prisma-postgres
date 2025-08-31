import db from "../prisma/client.js";
export const taskRepository = {
    findAll: async () => {
        return db.task.findMany();
    },
    create: async (title, description) => {
        return db.task.create({
            data: { title, description }
        });
    },
    updateTitle: async (id, newTitle) => {
        return db.task.update({
            where: { id },
            data: { title: newTitle }
        });
    },
    updateDescription: async (id, newDescription) => {
        return db.task.update({
            where: { id },
            data: { description: newDescription }
        });
    },
    updateCompleted: async (id) => {
        return db.task.update({
            where: { id },
            data: { isCompleted: true }
        });
    },
    softDelete: async (id) => {
        return db.task.update({
            where: { id },
            data: { isDeleted: true }
        });
    },
};
//# sourceMappingURL=task.repository.js.map