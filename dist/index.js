//.src/index.ts
import express from "express";
import userRoutes from "./routes/user.routes.js";
import taskRoutes from "./routes/task.routes.js";
const app = express();
app.use(express.json());
app.use("/users", userRoutes);
app.use("/tasks", taskRoutes);
app.listen(3000, () => console.log("porta 3000 sendo escutada"));
//# sourceMappingURL=index.js.map