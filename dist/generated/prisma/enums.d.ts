export declare const RolUsuario: {
    readonly ADMIN: "ADMIN";
    readonly OPERADOR: "OPERADOR";
};
export type RolUsuario = (typeof RolUsuario)[keyof typeof RolUsuario];
export declare const TipoBitacora: {
    readonly ACTIVIDADES_DIARIAS: "ACTIVIDADES_DIARIAS";
    readonly DESCARGA_PIPAS: "DESCARGA_PIPAS";
    readonly OPERACION_MANTENIMIENTO: "OPERACION_MANTENIMIENTO";
};
export type TipoBitacora = (typeof TipoBitacora)[keyof typeof TipoBitacora];
export declare const TipoMantenimiento: {
    readonly PREVENTIVO: "PREVENTIVO";
    readonly CORRECTIVO: "CORRECTIVO";
};
export type TipoMantenimiento = (typeof TipoMantenimiento)[keyof typeof TipoMantenimiento];
export declare const PeriodicidadBitacora: {
    readonly DIARIA: "DIARIA";
    readonly POR_EVENTO: "POR_EVENTO";
    readonly TRIMESTRAL: "TRIMESTRAL";
    readonly ANUAL: "ANUAL";
    readonly MENSUAL: "MENSUAL";
};
export type PeriodicidadBitacora = (typeof PeriodicidadBitacora)[keyof typeof PeriodicidadBitacora];
