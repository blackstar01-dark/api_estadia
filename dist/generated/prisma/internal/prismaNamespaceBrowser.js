"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullsOrder = exports.QueryMode = exports.SortOrder = exports.AuditoriaScalarFieldEnum = exports.ProgramaMantenimientoScalarFieldEnum = exports.PlantillaMantenimientoScalarFieldEnum = exports.MantenimientoScalarFieldEnum = exports.DescargaPipaScalarFieldEnum = exports.RegistroBitacoraScalarFieldEnum = exports.BitacoraScalarFieldEnum = exports.PersonaAutorizadaScalarFieldEnum = exports.EstacionScalarFieldEnum = exports.UsuarioScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.Decimal = void 0;
const runtime = __importStar(require("@prisma/client/runtime/index-browser"));
exports.Decimal = runtime.Decimal;
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    Usuario: 'Usuario',
    Estacion: 'Estacion',
    PersonaAutorizada: 'PersonaAutorizada',
    Bitacora: 'Bitacora',
    RegistroBitacora: 'RegistroBitacora',
    DescargaPipa: 'DescargaPipa',
    Mantenimiento: 'Mantenimiento',
    PlantillaMantenimiento: 'PlantillaMantenimiento',
    ProgramaMantenimiento: 'ProgramaMantenimiento',
    Auditoria: 'Auditoria'
};
exports.TransactionIsolationLevel = {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
};
exports.UsuarioScalarFieldEnum = {
    id: 'id',
    nombre: 'nombre',
    correo: 'correo',
    contrasenaHash: 'contrasenaHash',
    rol: 'rol',
    refreshTokenHash: 'refreshTokenHash',
    createdAt: 'createdAt'
};
exports.EstacionScalarFieldEnum = {
    id: 'id',
    nombre: 'nombre',
    razonSocial: 'razonSocial',
    rfc: 'rfc',
    permisoCRE: 'permisoCRE',
    direccion: 'direccion',
    representante: 'representante',
    telefono: 'telefono',
    adminId: 'adminId',
    createdAt: 'createdAt'
};
exports.PersonaAutorizadaScalarFieldEnum = {
    id: 'id',
    nombre: 'nombre',
    cargo: 'cargo',
    firmaHashPersona: 'firmaHashPersona',
    estacionId: 'estacionId',
    creadoPorId: 'creadoPorId',
    createdAt: 'createdAt'
};
exports.BitacoraScalarFieldEnum = {
    id: 'id',
    tipo: 'tipo',
    estacionId: 'estacionId',
    fundamento: 'fundamento',
    createdAt: 'createdAt'
};
exports.RegistroBitacoraScalarFieldEnum = {
    id: 'id',
    folio: 'folio',
    fechaHora: 'fechaHora',
    descripcion: 'descripcion',
    periodicidad: 'periodicidad',
    firmaHashRegistro: 'firmaHashRegistro',
    firmaAlgoritmo: 'firmaAlgoritmo',
    firmaFecha: 'firmaFecha',
    cerrado: 'cerrado',
    fechaCierre: 'fechaCierre',
    personaId: 'personaId',
    bitacoraId: 'bitacoraId',
    estacionId: 'estacionId'
};
exports.DescargaPipaScalarFieldEnum = {
    id: 'id',
    registroId: 'registroId',
    numeroPipa: 'numeroPipa',
    producto: 'producto',
    volumenRecibido: 'volumenRecibido',
    proveedor: 'proveedor'
};
exports.MantenimientoScalarFieldEnum = {
    id: 'id',
    registroId: 'registroId',
    tipo: 'tipo',
    actividad: 'actividad',
    observaciones: 'observaciones',
    programaId: 'programaId'
};
exports.PlantillaMantenimientoScalarFieldEnum = {
    id: 'id',
    numeralNom: 'numeralNom',
    actividad: 'actividad',
    periodicidad: 'periodicidad',
    activa: 'activa'
};
exports.ProgramaMantenimientoScalarFieldEnum = {
    id: 'id',
    estacionId: 'estacionId',
    plantillaId: 'plantillaId',
    activo: 'activo',
    fechaInicio: 'fechaInicio'
};
exports.AuditoriaScalarFieldEnum = {
    id: 'id',
    tabla: 'tabla',
    registroId: 'registroId',
    accion: 'accion',
    fecha: 'fecha',
    usuarioId: 'usuarioId'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
//# sourceMappingURL=prismaNamespaceBrowser.js.map