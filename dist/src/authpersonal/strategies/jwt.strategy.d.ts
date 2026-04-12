import { Strategy } from "passport-jwt";
import { ConfigService } from "@nestjs/config";
import { JwtPayloadPersonal } from "../interface/jwt-payload.interface";
declare const JwtStrategyPersonal_base: new (...args: [opt: import("passport-jwt").StrategyOptionsWithRequest] | [opt: import("passport-jwt").StrategyOptionsWithoutRequest]) => Strategy & {
    validate(...args: any[]): unknown;
};
export declare class JwtStrategyPersonal extends JwtStrategyPersonal_base {
    private readonly config;
    constructor(config: ConfigService);
    validate(payload: JwtPayloadPersonal): Promise<{
        id: number;
        nombre: string;
    }>;
}
export {};
