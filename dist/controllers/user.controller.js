import * as userService from "../services/user.service.js";
export async function getUsers(_req, res) {
    const users = await userService.getAllUsers();
    res.json(users);
}
export async function postUser(req, res) {
    try {
        const { name, email } = req.body;
        const user = await userService.createUser(name, email);
        res.status(201).json({ message: `o usuário ${user.name} criado com sucesso.` });
    }
    catch {
        res.status(400).json({ error: "erro ao criar usuário" });
    }
}
export async function patchUser(req, res) {
    const { email } = req.params;
    const { newEmail } = req.body;
    if (!newEmail)
        return res.status(400).json({ error: "novo email obrigatório" });
    try {
        const updated = await userService.updateUserEmail(email, newEmail);
        res.json(updated);
    }
    catch {
        res.status(404).json({ error: "não encontrado" });
    }
}
export async function deleteUser(req, res) {
    const { email } = req.params;
    try {
        const updated = await userService.softDeleteUser(email);
        res.json({ message: `usuário ${updated.email} marcado como deletado` });
    }
    catch {
        res.status(404).json({ error: "não encontrado" });
    }
}
//# sourceMappingURL=user.controller.js.map