import prisma from "../prisma/client.js";
export const prismaUserRepository = {
    findAll: async () => {
        return prisma.user.findMany();
    },
    create: async (name, email) => {
        return prisma.user.create({
            data: { name, email }
        });
    },
    updateEmail: async (email, newEmail) => {
        return prisma.user.update({
            where: { email },
            data: { email: newEmail }
        });
    },
    softDelete: async (email) => {
        return prisma.user.update({
            where: { email },
            data: { isDeleted: true }
        });
    },
};
//# sourceMappingURL=prisma.user.repository.js.map