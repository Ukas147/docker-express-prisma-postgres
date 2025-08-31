import type { Task } from "@prisma/client";
export declare const taskRepository: {
    findAll: () => Promise<Task[]>;
    create: (title: string, description: string) => Promise<Task>;
    updateTitle: (id: string, newTitle: string) => Promise<Task>;
    updateDescription: (id: string, newDescription: string) => Promise<Task>;
    updateCompleted: (id: string) => Promise<Task>;
    softDelete: (id: string) => Promise<Task>;
};
//# sourceMappingURL=task.repository.d.ts.map