import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
export declare const prismaVersion: PrismaVersion;
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: runtime.DbNullClass;
export declare const JsonNull: runtime.JsonNullClass;
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly Usuario: "Usuario";
    readonly Estacion: "Estacion";
    readonly PersonaAutorizada: "PersonaAutorizada";
    readonly Bitacora: "Bitacora";
    readonly RegistroBitacora: "RegistroBitacora";
    readonly DescargaPipa: "DescargaPipa";
    readonly Mantenimiento: "Mantenimiento";
    readonly PlantillaMantenimiento: "PlantillaMantenimiento";
    readonly ProgramaMantenimiento: "ProgramaMantenimiento";
    readonly Auditoria: "Auditoria";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "usuario" | "estacion" | "personaAutorizada" | "bitacora" | "registroBitacora" | "descargaPipa" | "mantenimiento" | "plantillaMantenimiento" | "programaMantenimiento" | "auditoria";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        Usuario: {
            payload: Prisma.$UsuarioPayload<ExtArgs>;
            fields: Prisma.UsuarioFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UsuarioFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioPayload>;
                };
                findFirst: {
                    args: Prisma.UsuarioFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioPayload>;
                };
                findMany: {
                    args: Prisma.UsuarioFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioPayload>[];
                };
                create: {
                    args: Prisma.UsuarioCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioPayload>;
                };
                createMany: {
                    args: Prisma.UsuarioCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioPayload>[];
                };
                delete: {
                    args: Prisma.UsuarioDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioPayload>;
                };
                update: {
                    args: Prisma.UsuarioUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioPayload>;
                };
                deleteMany: {
                    args: Prisma.UsuarioDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UsuarioUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioPayload>[];
                };
                upsert: {
                    args: Prisma.UsuarioUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioPayload>;
                };
                aggregate: {
                    args: Prisma.UsuarioAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUsuario>;
                };
                groupBy: {
                    args: Prisma.UsuarioGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UsuarioGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UsuarioCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UsuarioCountAggregateOutputType> | number;
                };
            };
        };
        Estacion: {
            payload: Prisma.$EstacionPayload<ExtArgs>;
            fields: Prisma.EstacionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.EstacionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EstacionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.EstacionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EstacionPayload>;
                };
                findFirst: {
                    args: Prisma.EstacionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EstacionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.EstacionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EstacionPayload>;
                };
                findMany: {
                    args: Prisma.EstacionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EstacionPayload>[];
                };
                create: {
                    args: Prisma.EstacionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EstacionPayload>;
                };
                createMany: {
                    args: Prisma.EstacionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.EstacionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EstacionPayload>[];
                };
                delete: {
                    args: Prisma.EstacionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EstacionPayload>;
                };
                update: {
                    args: Prisma.EstacionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EstacionPayload>;
                };
                deleteMany: {
                    args: Prisma.EstacionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.EstacionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.EstacionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EstacionPayload>[];
                };
                upsert: {
                    args: Prisma.EstacionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EstacionPayload>;
                };
                aggregate: {
                    args: Prisma.EstacionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateEstacion>;
                };
                groupBy: {
                    args: Prisma.EstacionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EstacionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.EstacionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EstacionCountAggregateOutputType> | number;
                };
            };
        };
        PersonaAutorizada: {
            payload: Prisma.$PersonaAutorizadaPayload<ExtArgs>;
            fields: Prisma.PersonaAutorizadaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PersonaAutorizadaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PersonaAutorizadaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PersonaAutorizadaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PersonaAutorizadaPayload>;
                };
                findFirst: {
                    args: Prisma.PersonaAutorizadaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PersonaAutorizadaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PersonaAutorizadaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PersonaAutorizadaPayload>;
                };
                findMany: {
                    args: Prisma.PersonaAutorizadaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PersonaAutorizadaPayload>[];
                };
                create: {
                    args: Prisma.PersonaAutorizadaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PersonaAutorizadaPayload>;
                };
                createMany: {
                    args: Prisma.PersonaAutorizadaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PersonaAutorizadaCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PersonaAutorizadaPayload>[];
                };
                delete: {
                    args: Prisma.PersonaAutorizadaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PersonaAutorizadaPayload>;
                };
                update: {
                    args: Prisma.PersonaAutorizadaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PersonaAutorizadaPayload>;
                };
                deleteMany: {
                    args: Prisma.PersonaAutorizadaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PersonaAutorizadaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PersonaAutorizadaUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PersonaAutorizadaPayload>[];
                };
                upsert: {
                    args: Prisma.PersonaAutorizadaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PersonaAutorizadaPayload>;
                };
                aggregate: {
                    args: Prisma.PersonaAutorizadaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePersonaAutorizada>;
                };
                groupBy: {
                    args: Prisma.PersonaAutorizadaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PersonaAutorizadaGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PersonaAutorizadaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PersonaAutorizadaCountAggregateOutputType> | number;
                };
            };
        };
        Bitacora: {
            payload: Prisma.$BitacoraPayload<ExtArgs>;
            fields: Prisma.BitacoraFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.BitacoraFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BitacoraPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.BitacoraFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BitacoraPayload>;
                };
                findFirst: {
                    args: Prisma.BitacoraFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BitacoraPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.BitacoraFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BitacoraPayload>;
                };
                findMany: {
                    args: Prisma.BitacoraFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BitacoraPayload>[];
                };
                create: {
                    args: Prisma.BitacoraCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BitacoraPayload>;
                };
                createMany: {
                    args: Prisma.BitacoraCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.BitacoraCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BitacoraPayload>[];
                };
                delete: {
                    args: Prisma.BitacoraDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BitacoraPayload>;
                };
                update: {
                    args: Prisma.BitacoraUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BitacoraPayload>;
                };
                deleteMany: {
                    args: Prisma.BitacoraDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.BitacoraUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.BitacoraUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BitacoraPayload>[];
                };
                upsert: {
                    args: Prisma.BitacoraUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BitacoraPayload>;
                };
                aggregate: {
                    args: Prisma.BitacoraAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateBitacora>;
                };
                groupBy: {
                    args: Prisma.BitacoraGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BitacoraGroupByOutputType>[];
                };
                count: {
                    args: Prisma.BitacoraCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BitacoraCountAggregateOutputType> | number;
                };
            };
        };
        RegistroBitacora: {
            payload: Prisma.$RegistroBitacoraPayload<ExtArgs>;
            fields: Prisma.RegistroBitacoraFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.RegistroBitacoraFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RegistroBitacoraPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.RegistroBitacoraFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RegistroBitacoraPayload>;
                };
                findFirst: {
                    args: Prisma.RegistroBitacoraFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RegistroBitacoraPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.RegistroBitacoraFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RegistroBitacoraPayload>;
                };
                findMany: {
                    args: Prisma.RegistroBitacoraFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RegistroBitacoraPayload>[];
                };
                create: {
                    args: Prisma.RegistroBitacoraCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RegistroBitacoraPayload>;
                };
                createMany: {
                    args: Prisma.RegistroBitacoraCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.RegistroBitacoraCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RegistroBitacoraPayload>[];
                };
                delete: {
                    args: Prisma.RegistroBitacoraDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RegistroBitacoraPayload>;
                };
                update: {
                    args: Prisma.RegistroBitacoraUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RegistroBitacoraPayload>;
                };
                deleteMany: {
                    args: Prisma.RegistroBitacoraDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.RegistroBitacoraUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.RegistroBitacoraUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RegistroBitacoraPayload>[];
                };
                upsert: {
                    args: Prisma.RegistroBitacoraUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RegistroBitacoraPayload>;
                };
                aggregate: {
                    args: Prisma.RegistroBitacoraAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRegistroBitacora>;
                };
                groupBy: {
                    args: Prisma.RegistroBitacoraGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RegistroBitacoraGroupByOutputType>[];
                };
                count: {
                    args: Prisma.RegistroBitacoraCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RegistroBitacoraCountAggregateOutputType> | number;
                };
            };
        };
        DescargaPipa: {
            payload: Prisma.$DescargaPipaPayload<ExtArgs>;
            fields: Prisma.DescargaPipaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DescargaPipaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DescargaPipaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DescargaPipaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DescargaPipaPayload>;
                };
                findFirst: {
                    args: Prisma.DescargaPipaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DescargaPipaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DescargaPipaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DescargaPipaPayload>;
                };
                findMany: {
                    args: Prisma.DescargaPipaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DescargaPipaPayload>[];
                };
                create: {
                    args: Prisma.DescargaPipaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DescargaPipaPayload>;
                };
                createMany: {
                    args: Prisma.DescargaPipaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.DescargaPipaCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DescargaPipaPayload>[];
                };
                delete: {
                    args: Prisma.DescargaPipaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DescargaPipaPayload>;
                };
                update: {
                    args: Prisma.DescargaPipaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DescargaPipaPayload>;
                };
                deleteMany: {
                    args: Prisma.DescargaPipaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DescargaPipaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.DescargaPipaUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DescargaPipaPayload>[];
                };
                upsert: {
                    args: Prisma.DescargaPipaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DescargaPipaPayload>;
                };
                aggregate: {
                    args: Prisma.DescargaPipaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDescargaPipa>;
                };
                groupBy: {
                    args: Prisma.DescargaPipaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DescargaPipaGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DescargaPipaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DescargaPipaCountAggregateOutputType> | number;
                };
            };
        };
        Mantenimiento: {
            payload: Prisma.$MantenimientoPayload<ExtArgs>;
            fields: Prisma.MantenimientoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MantenimientoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MantenimientoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MantenimientoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MantenimientoPayload>;
                };
                findFirst: {
                    args: Prisma.MantenimientoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MantenimientoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MantenimientoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MantenimientoPayload>;
                };
                findMany: {
                    args: Prisma.MantenimientoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MantenimientoPayload>[];
                };
                create: {
                    args: Prisma.MantenimientoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MantenimientoPayload>;
                };
                createMany: {
                    args: Prisma.MantenimientoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.MantenimientoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MantenimientoPayload>[];
                };
                delete: {
                    args: Prisma.MantenimientoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MantenimientoPayload>;
                };
                update: {
                    args: Prisma.MantenimientoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MantenimientoPayload>;
                };
                deleteMany: {
                    args: Prisma.MantenimientoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MantenimientoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.MantenimientoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MantenimientoPayload>[];
                };
                upsert: {
                    args: Prisma.MantenimientoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MantenimientoPayload>;
                };
                aggregate: {
                    args: Prisma.MantenimientoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMantenimiento>;
                };
                groupBy: {
                    args: Prisma.MantenimientoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MantenimientoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MantenimientoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MantenimientoCountAggregateOutputType> | number;
                };
            };
        };
        PlantillaMantenimiento: {
            payload: Prisma.$PlantillaMantenimientoPayload<ExtArgs>;
            fields: Prisma.PlantillaMantenimientoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PlantillaMantenimientoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlantillaMantenimientoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PlantillaMantenimientoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlantillaMantenimientoPayload>;
                };
                findFirst: {
                    args: Prisma.PlantillaMantenimientoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlantillaMantenimientoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PlantillaMantenimientoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlantillaMantenimientoPayload>;
                };
                findMany: {
                    args: Prisma.PlantillaMantenimientoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlantillaMantenimientoPayload>[];
                };
                create: {
                    args: Prisma.PlantillaMantenimientoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlantillaMantenimientoPayload>;
                };
                createMany: {
                    args: Prisma.PlantillaMantenimientoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PlantillaMantenimientoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlantillaMantenimientoPayload>[];
                };
                delete: {
                    args: Prisma.PlantillaMantenimientoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlantillaMantenimientoPayload>;
                };
                update: {
                    args: Prisma.PlantillaMantenimientoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlantillaMantenimientoPayload>;
                };
                deleteMany: {
                    args: Prisma.PlantillaMantenimientoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PlantillaMantenimientoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PlantillaMantenimientoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlantillaMantenimientoPayload>[];
                };
                upsert: {
                    args: Prisma.PlantillaMantenimientoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlantillaMantenimientoPayload>;
                };
                aggregate: {
                    args: Prisma.PlantillaMantenimientoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePlantillaMantenimiento>;
                };
                groupBy: {
                    args: Prisma.PlantillaMantenimientoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PlantillaMantenimientoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PlantillaMantenimientoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PlantillaMantenimientoCountAggregateOutputType> | number;
                };
            };
        };
        ProgramaMantenimiento: {
            payload: Prisma.$ProgramaMantenimientoPayload<ExtArgs>;
            fields: Prisma.ProgramaMantenimientoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ProgramaMantenimientoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgramaMantenimientoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ProgramaMantenimientoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgramaMantenimientoPayload>;
                };
                findFirst: {
                    args: Prisma.ProgramaMantenimientoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgramaMantenimientoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ProgramaMantenimientoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgramaMantenimientoPayload>;
                };
                findMany: {
                    args: Prisma.ProgramaMantenimientoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgramaMantenimientoPayload>[];
                };
                create: {
                    args: Prisma.ProgramaMantenimientoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgramaMantenimientoPayload>;
                };
                createMany: {
                    args: Prisma.ProgramaMantenimientoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ProgramaMantenimientoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgramaMantenimientoPayload>[];
                };
                delete: {
                    args: Prisma.ProgramaMantenimientoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgramaMantenimientoPayload>;
                };
                update: {
                    args: Prisma.ProgramaMantenimientoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgramaMantenimientoPayload>;
                };
                deleteMany: {
                    args: Prisma.ProgramaMantenimientoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ProgramaMantenimientoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ProgramaMantenimientoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgramaMantenimientoPayload>[];
                };
                upsert: {
                    args: Prisma.ProgramaMantenimientoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgramaMantenimientoPayload>;
                };
                aggregate: {
                    args: Prisma.ProgramaMantenimientoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProgramaMantenimiento>;
                };
                groupBy: {
                    args: Prisma.ProgramaMantenimientoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProgramaMantenimientoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ProgramaMantenimientoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProgramaMantenimientoCountAggregateOutputType> | number;
                };
            };
        };
        Auditoria: {
            payload: Prisma.$AuditoriaPayload<ExtArgs>;
            fields: Prisma.AuditoriaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AuditoriaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditoriaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AuditoriaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditoriaPayload>;
                };
                findFirst: {
                    args: Prisma.AuditoriaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditoriaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AuditoriaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditoriaPayload>;
                };
                findMany: {
                    args: Prisma.AuditoriaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditoriaPayload>[];
                };
                create: {
                    args: Prisma.AuditoriaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditoriaPayload>;
                };
                createMany: {
                    args: Prisma.AuditoriaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AuditoriaCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditoriaPayload>[];
                };
                delete: {
                    args: Prisma.AuditoriaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditoriaPayload>;
                };
                update: {
                    args: Prisma.AuditoriaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditoriaPayload>;
                };
                deleteMany: {
                    args: Prisma.AuditoriaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AuditoriaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AuditoriaUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditoriaPayload>[];
                };
                upsert: {
                    args: Prisma.AuditoriaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditoriaPayload>;
                };
                aggregate: {
                    args: Prisma.AuditoriaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAuditoria>;
                };
                groupBy: {
                    args: Prisma.AuditoriaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AuditoriaGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AuditoriaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AuditoriaCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UsuarioScalarFieldEnum: {
    readonly id: "id";
    readonly nombre: "nombre";
    readonly correo: "correo";
    readonly contrasenaHash: "contrasenaHash";
    readonly rol: "rol";
    readonly refreshTokenHash: "refreshTokenHash";
    readonly createdAt: "createdAt";
};
export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum];
export declare const EstacionScalarFieldEnum: {
    readonly id: "id";
    readonly nombre: "nombre";
    readonly razonSocial: "razonSocial";
    readonly rfc: "rfc";
    readonly permisoCRE: "permisoCRE";
    readonly direccion: "direccion";
    readonly representante: "representante";
    readonly telefono: "telefono";
    readonly adminId: "adminId";
    readonly createdAt: "createdAt";
};
export type EstacionScalarFieldEnum = (typeof EstacionScalarFieldEnum)[keyof typeof EstacionScalarFieldEnum];
export declare const PersonaAutorizadaScalarFieldEnum: {
    readonly id: "id";
    readonly nombre: "nombre";
    readonly cargo: "cargo";
    readonly firmaHashPersona: "firmaHashPersona";
    readonly estacionId: "estacionId";
    readonly creadoPorId: "creadoPorId";
    readonly createdAt: "createdAt";
};
export type PersonaAutorizadaScalarFieldEnum = (typeof PersonaAutorizadaScalarFieldEnum)[keyof typeof PersonaAutorizadaScalarFieldEnum];
export declare const BitacoraScalarFieldEnum: {
    readonly id: "id";
    readonly tipo: "tipo";
    readonly estacionId: "estacionId";
    readonly fundamento: "fundamento";
    readonly createdAt: "createdAt";
};
export type BitacoraScalarFieldEnum = (typeof BitacoraScalarFieldEnum)[keyof typeof BitacoraScalarFieldEnum];
export declare const RegistroBitacoraScalarFieldEnum: {
    readonly id: "id";
    readonly folio: "folio";
    readonly fechaHora: "fechaHora";
    readonly descripcion: "descripcion";
    readonly periodicidad: "periodicidad";
    readonly firmaHashRegistro: "firmaHashRegistro";
    readonly firmaAlgoritmo: "firmaAlgoritmo";
    readonly firmaFecha: "firmaFecha";
    readonly cerrado: "cerrado";
    readonly fechaCierre: "fechaCierre";
    readonly personaId: "personaId";
    readonly bitacoraId: "bitacoraId";
    readonly estacionId: "estacionId";
};
export type RegistroBitacoraScalarFieldEnum = (typeof RegistroBitacoraScalarFieldEnum)[keyof typeof RegistroBitacoraScalarFieldEnum];
export declare const DescargaPipaScalarFieldEnum: {
    readonly id: "id";
    readonly registroId: "registroId";
    readonly numeroPipa: "numeroPipa";
    readonly producto: "producto";
    readonly volumenRecibido: "volumenRecibido";
    readonly proveedor: "proveedor";
};
export type DescargaPipaScalarFieldEnum = (typeof DescargaPipaScalarFieldEnum)[keyof typeof DescargaPipaScalarFieldEnum];
export declare const MantenimientoScalarFieldEnum: {
    readonly id: "id";
    readonly registroId: "registroId";
    readonly tipo: "tipo";
    readonly actividad: "actividad";
    readonly observaciones: "observaciones";
    readonly programaId: "programaId";
};
export type MantenimientoScalarFieldEnum = (typeof MantenimientoScalarFieldEnum)[keyof typeof MantenimientoScalarFieldEnum];
export declare const PlantillaMantenimientoScalarFieldEnum: {
    readonly id: "id";
    readonly numeralNom: "numeralNom";
    readonly actividad: "actividad";
    readonly periodicidad: "periodicidad";
    readonly activa: "activa";
};
export type PlantillaMantenimientoScalarFieldEnum = (typeof PlantillaMantenimientoScalarFieldEnum)[keyof typeof PlantillaMantenimientoScalarFieldEnum];
export declare const ProgramaMantenimientoScalarFieldEnum: {
    readonly id: "id";
    readonly estacionId: "estacionId";
    readonly plantillaId: "plantillaId";
    readonly activo: "activo";
    readonly fechaInicio: "fechaInicio";
};
export type ProgramaMantenimientoScalarFieldEnum = (typeof ProgramaMantenimientoScalarFieldEnum)[keyof typeof ProgramaMantenimientoScalarFieldEnum];
export declare const AuditoriaScalarFieldEnum: {
    readonly id: "id";
    readonly tabla: "tabla";
    readonly registroId: "registroId";
    readonly accion: "accion";
    readonly fecha: "fecha";
    readonly usuarioId: "usuarioId";
};
export type AuditoriaScalarFieldEnum = (typeof AuditoriaScalarFieldEnum)[keyof typeof AuditoriaScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
export type EnumRolUsuarioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RolUsuario'>;
export type ListEnumRolUsuarioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RolUsuario[]'>;
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
export type EnumTipoBitacoraFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoBitacora'>;
export type ListEnumTipoBitacoraFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoBitacora[]'>;
export type EnumPeriodicidadBitacoraFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PeriodicidadBitacora'>;
export type ListEnumPeriodicidadBitacoraFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PeriodicidadBitacora[]'>;
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
export type EnumTipoMantenimientoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoMantenimiento'>;
export type ListEnumTipoMantenimientoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoMantenimiento[]'>;
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export type PrismaClientOptions = ({
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
} | {
    accelerateUrl: string;
    adapter?: never;
}) & {
    errorFormat?: ErrorFormat;
    log?: (LogLevel | LogDefinition)[];
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    omit?: GlobalOmitConfig;
    comments?: runtime.SqlCommenterPlugin[];
};
export type GlobalOmitConfig = {
    usuario?: Prisma.UsuarioOmit;
    estacion?: Prisma.EstacionOmit;
    personaAutorizada?: Prisma.PersonaAutorizadaOmit;
    bitacora?: Prisma.BitacoraOmit;
    registroBitacora?: Prisma.RegistroBitacoraOmit;
    descargaPipa?: Prisma.DescargaPipaOmit;
    mantenimiento?: Prisma.MantenimientoOmit;
    plantillaMantenimiento?: Prisma.PlantillaMantenimientoOmit;
    programaMantenimiento?: Prisma.ProgramaMantenimientoOmit;
    auditoria?: Prisma.AuditoriaOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
