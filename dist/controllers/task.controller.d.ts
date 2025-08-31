import type { Request, Response } from "express";
export declare function getTasks(_req: Request, res: Response): Promise<void>;
export declare function postTask(req: Request, res: Response): Promise<void>;
export declare function patchTaskTitle(req: Request<{
    id: string;
}>, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
export declare function patchTaskDescription(req: Request<{
    id: string;
}>, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
export declare function patchTaskCompleted(req: Request<{
    id: string;
}>, res: Response): Promise<void>;
export declare function deleteTask(req: Request<{
    id: string;
}>, res: Response): Promise<void>;
//# sourceMappingURL=task.controller.d.ts.map