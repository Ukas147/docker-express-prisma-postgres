export declare function getAllTasks(): Promise<{
    id: string;
    createdAt: Date;
    deletedAt: Date | null;
    isDeleted: boolean;
    title: string;
    description: string;
    isCompleted: boolean;
    updatedAt: Date;
}[]>;
export declare function createTask(title: string, description: string): Promise<{
    id: string;
    createdAt: Date;
    deletedAt: Date | null;
    isDeleted: boolean;
    title: string;
    description: string;
    isCompleted: boolean;
    updatedAt: Date;
}>;
export declare function updateTaskTitle(id: string, newTitle: string): Promise<{
    id: string;
    createdAt: Date;
    deletedAt: Date | null;
    isDeleted: boolean;
    title: string;
    description: string;
    isCompleted: boolean;
    updatedAt: Date;
}>;
export declare function updateTaskDescription(id: string, newDescription: string): Promise<{
    id: string;
    createdAt: Date;
    deletedAt: Date | null;
    isDeleted: boolean;
    title: string;
    description: string;
    isCompleted: boolean;
    updatedAt: Date;
}>;
export declare function updateTaskCompleted(id: string): Promise<{
    id: string;
    createdAt: Date;
    deletedAt: Date | null;
    isDeleted: boolean;
    title: string;
    description: string;
    isCompleted: boolean;
    updatedAt: Date;
}>;
export declare function softDeleteTask(id: string): Promise<{
    id: string;
    createdAt: Date;
    deletedAt: Date | null;
    isDeleted: boolean;
    title: string;
    description: string;
    isCompleted: boolean;
    updatedAt: Date;
}>;
//# sourceMappingURL=task.service.d.ts.map