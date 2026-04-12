import { Request } from 'express';
export interface RequestWithPersonal extends Request {
    user: {
        id: number;
        nombre: string;
    };
}
