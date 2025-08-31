import type { User } from "@prisma/client";
export declare const prismaUserRepository: {
    findAll: () => Promise<User[]>;
    create: (name: string, email: string) => Promise<User>;
    updateEmail: (email: string, newEmail: string) => Promise<User>;
    softDelete: (email: string) => Promise<User>;
};
//# sourceMappingURL=prisma.user.repository.d.ts.map