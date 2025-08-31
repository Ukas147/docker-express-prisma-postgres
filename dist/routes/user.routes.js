// src/routes/user.routes.ts
import { Router } from "express";
import { getUsers, postUser, patchUser, deleteUser, } from "../controllers/user.controller.js";
const router = Router();
router.get("/", getUsers);
router.post("/", postUser);
router.patch("/:email", patchUser);
router.patch("/:email/delete", deleteUser);
export default router;
//# sourceMappingURL=user.routes.js.map