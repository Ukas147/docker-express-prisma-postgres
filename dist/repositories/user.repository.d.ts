import type { User } from "@prisma/client";
export declare const userRepository: {
    findAll: () => Promise<User[]>;
    create: (name: string, email: string) => Promise<User>;
    updateEmail: (email: string, newEmail: string) => Promise<User>;
    softDelete: (email: string) => Promise<User>;
};
//# sourceMappingURL=user.repository.d.ts.map