import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
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
