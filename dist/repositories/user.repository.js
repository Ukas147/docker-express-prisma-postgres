import db from "../prisma/client.js";
export const userRepository = {
    findAll: async () => {
        return db.user.findMany();
    },
    create: async (name, email) => {
        return db.user.create({
            data: { name, email }
        });
    },
    updateEmail: async (email, newEmail) => {
        return db.user.update({
            where: { email },
            data: { email: newEmail }
        });
    },
    softDelete: async (email) => {
        return db.user.update({
            where: { email },
            data: { isDeleted: true }
        });
    },
};
//# sourceMappingURL=user.repository.js.map