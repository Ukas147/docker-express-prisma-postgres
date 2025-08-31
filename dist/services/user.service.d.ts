export declare function getAllUsers(): Promise<{
    name: string;
    id: number;
    email: string;
    createdAt: Date;
    deletedAt: Date | null;
    isDeleted: boolean;
}[]>;
export declare function createUser(name: string, email: string): Promise<{
    name: string;
    id: number;
    email: string;
    createdAt: Date;
    deletedAt: Date | null;
    isDeleted: boolean;
}>;
export declare function updateUserEmail(email: string, newEmail: string): Promise<{
    name: string;
    id: number;
    email: string;
    createdAt: Date;
    deletedAt: Date | null;
    isDeleted: boolean;
}>;
export declare function softDeleteUser(email: string): Promise<{
    name: string;
    id: number;
    email: string;
    createdAt: Date;
    deletedAt: Date | null;
    isDeleted: boolean;
}>;
//# sourceMappingURL=user.service.d.ts.map