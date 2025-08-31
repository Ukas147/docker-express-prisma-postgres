import type { Request, Response } from "express";
export declare function getUsers(_req: Request, res: Response): Promise<void>;
export declare function postUser(req: Request, res: Response): Promise<void>;
export declare function patchUser(req: Request<{
    email: string;
}>, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
export declare function deleteUser(req: Request<{
    email: string;
}>, res: Response): Promise<void>;
//# sourceMappingURL=user.controller.d.ts.map