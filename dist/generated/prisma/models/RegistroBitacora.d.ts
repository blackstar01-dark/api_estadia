import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type RegistroBitacoraModel = runtime.Types.Result.DefaultSelection<Prisma.$RegistroBitacoraPayload>;
export type AggregateRegistroBitacora = {
    _count: RegistroBitacoraCountAggregateOutputType | null;
    _avg: RegistroBitacoraAvgAggregateOutputType | null;
    _sum: RegistroBitacoraSumAggregateOutputType | null;
    _min: RegistroBitacoraMinAggregateOutputType | null;
    _max: RegistroBitacoraMaxAggregateOutputType | null;
};
export type RegistroBitacoraAvgAggregateOutputType = {
    id: number | null;
    folio: number | null;
    personaId: number | null;
    bitacoraId: number | null;
    estacionId: number | null;
};
export type RegistroBitacoraSumAggregateOutputType = {
    id: number | null;
    folio: number | null;
    personaId: number | null;
    bitacoraId: number | null;
    estacionId: number | null;
};
export type RegistroBitacoraMinAggregateOutputType = {
    id: number | null;
    folio: number | null;
    fechaHora: Date | null;
    descripcion: string | null;
    periodicidad: $Enums.PeriodicidadBitacora | null;
    firmaHashRegistro: string | null;
    firmaAlgoritmo: string | null;
    firmaFecha: Date | null;
    cerrado: boolean | null;
    fechaCierre: Date | null;
    personaId: number | null;
    bitacoraId: number | null;
    estacionId: number | null;
};
export type RegistroBitacoraMaxAggregateOutputType = {
    id: number | null;
    folio: number | null;
    fechaHora: Date | null;
    descripcion: string | null;
    periodicidad: $Enums.PeriodicidadBitacora | null;
    firmaHashRegistro: string | null;
    firmaAlgoritmo: string | null;
    firmaFecha: Date | null;
    cerrado: boolean | null;
    fechaCierre: Date | null;
    personaId: number | null;
    bitacoraId: number | null;
    estacionId: number | null;
};
export type RegistroBitacoraCountAggregateOutputType = {
    id: number;
    folio: number;
    fechaHora: number;
    descripcion: number;
    periodicidad: number;
    firmaHashRegistro: number;
    firmaAlgoritmo: number;
    firmaFecha: number;
    cerrado: number;
    fechaCierre: number;
    personaId: number;
    bitacoraId: number;
    estacionId: number;
    _all: number;
};
export type RegistroBitacoraAvgAggregateInputType = {
    id?: true;
    folio?: true;
    personaId?: true;
    bitacoraId?: true;
    estacionId?: true;
};
export type RegistroBitacoraSumAggregateInputType = {
    id?: true;
    folio?: true;
    personaId?: true;
    bitacoraId?: true;
    estacionId?: true;
};
export type RegistroBitacoraMinAggregateInputType = {
    id?: true;
    folio?: true;
    fechaHora?: true;
    descripcion?: true;
    periodicidad?: true;
    firmaHashRegistro?: true;
    firmaAlgoritmo?: true;
    firmaFecha?: true;
    cerrado?: true;
    fechaCierre?: true;
    personaId?: true;
    bitacoraId?: true;
    estacionId?: true;
};
export type RegistroBitacoraMaxAggregateInputType = {
    id?: true;
    folio?: true;
    fechaHora?: true;
    descripcion?: true;
    periodicidad?: true;
    firmaHashRegistro?: true;
    firmaAlgoritmo?: true;
    firmaFecha?: true;
    cerrado?: true;
    fechaCierre?: true;
    personaId?: true;
    bitacoraId?: true;
    estacionId?: true;
};
export type RegistroBitacoraCountAggregateInputType = {
    id?: true;
    folio?: true;
    fechaHora?: true;
    descripcion?: true;
    periodicidad?: true;
    firmaHashRegistro?: true;
    firmaAlgoritmo?: true;
    firmaFecha?: true;
    cerrado?: true;
    fechaCierre?: true;
    personaId?: true;
    bitacoraId?: true;
    estacionId?: true;
    _all?: true;
};
export type RegistroBitacoraAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RegistroBitacoraWhereInput;
    orderBy?: Prisma.RegistroBitacoraOrderByWithRelationInput | Prisma.RegistroBitacoraOrderByWithRelationInput[];
    cursor?: Prisma.RegistroBitacoraWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RegistroBitacoraCountAggregateInputType;
    _avg?: RegistroBitacoraAvgAggregateInputType;
    _sum?: RegistroBitacoraSumAggregateInputType;
    _min?: RegistroBitacoraMinAggregateInputType;
    _max?: RegistroBitacoraMaxAggregateInputType;
};
export type GetRegistroBitacoraAggregateType<T extends RegistroBitacoraAggregateArgs> = {
    [P in keyof T & keyof AggregateRegistroBitacora]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRegistroBitacora[P]> : Prisma.GetScalarType<T[P], AggregateRegistroBitacora[P]>;
};
export type RegistroBitacoraGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RegistroBitacoraWhereInput;
    orderBy?: Prisma.RegistroBitacoraOrderByWithAggregationInput | Prisma.RegistroBitacoraOrderByWithAggregationInput[];
    by: Prisma.RegistroBitacoraScalarFieldEnum[] | Prisma.RegistroBitacoraScalarFieldEnum;
    having?: Prisma.RegistroBitacoraScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RegistroBitacoraCountAggregateInputType | true;
    _avg?: RegistroBitacoraAvgAggregateInputType;
    _sum?: RegistroBitacoraSumAggregateInputType;
    _min?: RegistroBitacoraMinAggregateInputType;
    _max?: RegistroBitacoraMaxAggregateInputType;
};
export type RegistroBitacoraGroupByOutputType = {
    id: number;
    folio: number;
    fechaHora: Date;
    descripcion: string;
    periodicidad: $Enums.PeriodicidadBitacora | null;
    firmaHashRegistro: string;
    firmaAlgoritmo: string;
    firmaFecha: Date;
    cerrado: boolean;
    fechaCierre: Date;
    personaId: number;
    bitacoraId: number;
    estacionId: number;
    _count: RegistroBitacoraCountAggregateOutputType | null;
    _avg: RegistroBitacoraAvgAggregateOutputType | null;
    _sum: RegistroBitacoraSumAggregateOutputType | null;
    _min: RegistroBitacoraMinAggregateOutputType | null;
    _max: RegistroBitacoraMaxAggregateOutputType | null;
};
type GetRegistroBitacoraGroupByPayload<T extends RegistroBitacoraGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RegistroBitacoraGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RegistroBitacoraGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RegistroBitacoraGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RegistroBitacoraGroupByOutputType[P]>;
}>>;
export type RegistroBitacoraWhereInput = {
    AND?: Prisma.RegistroBitacoraWhereInput | Prisma.RegistroBitacoraWhereInput[];
    OR?: Prisma.RegistroBitacoraWhereInput[];
    NOT?: Prisma.RegistroBitacoraWhereInput | Prisma.RegistroBitacoraWhereInput[];
    id?: Prisma.IntFilter<"RegistroBitacora"> | number;
    folio?: Prisma.IntFilter<"RegistroBitacora"> | number;
    fechaHora?: Prisma.DateTimeFilter<"RegistroBitacora"> | Date | string;
    descripcion?: Prisma.StringFilter<"RegistroBitacora"> | string;
    periodicidad?: Prisma.EnumPeriodicidadBitacoraNullableFilter<"RegistroBitacora"> | $Enums.PeriodicidadBitacora | null;
    firmaHashRegistro?: Prisma.StringFilter<"RegistroBitacora"> | string;
    firmaAlgoritmo?: Prisma.StringFilter<"RegistroBitacora"> | string;
    firmaFecha?: Prisma.DateTimeFilter<"RegistroBitacora"> | Date | string;
    cerrado?: Prisma.BoolFilter<"RegistroBitacora"> | boolean;
    fechaCierre?: Prisma.DateTimeFilter<"RegistroBitacora"> | Date | string;
    personaId?: Prisma.IntFilter<"RegistroBitacora"> | number;
    bitacoraId?: Prisma.IntFilter<"RegistroBitacora"> | number;
    estacionId?: Prisma.IntFilter<"RegistroBitacora"> | number;
    persona?: Prisma.XOR<Prisma.PersonaAutorizadaScalarRelationFilter, Prisma.PersonaAutorizadaWhereInput>;
    bitacora?: Prisma.XOR<Prisma.BitacoraScalarRelationFilter, Prisma.BitacoraWhereInput>;
    descargaPipa?: Prisma.XOR<Prisma.DescargaPipaNullableScalarRelationFilter, Prisma.DescargaPipaWhereInput> | null;
    mantenimiento?: Prisma.XOR<Prisma.MantenimientoNullableScalarRelationFilter, Prisma.MantenimientoWhereInput> | null;
};
export type RegistroBitacoraOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    folio?: Prisma.SortOrder;
    fechaHora?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    periodicidad?: Prisma.SortOrderInput | Prisma.SortOrder;
    firmaHashRegistro?: Prisma.SortOrder;
    firmaAlgoritmo?: Prisma.SortOrder;
    firmaFecha?: Prisma.SortOrder;
    cerrado?: Prisma.SortOrder;
    fechaCierre?: Prisma.SortOrder;
    personaId?: Prisma.SortOrder;
    bitacoraId?: Prisma.SortOrder;
    estacionId?: Prisma.SortOrder;
    persona?: Prisma.PersonaAutorizadaOrderByWithRelationInput;
    bitacora?: Prisma.BitacoraOrderByWithRelationInput;
    descargaPipa?: Prisma.DescargaPipaOrderByWithRelationInput;
    mantenimiento?: Prisma.MantenimientoOrderByWithRelationInput;
};
export type RegistroBitacoraWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    estacionId_bitacoraId_folio?: Prisma.RegistroBitacoraEstacionIdBitacoraIdFolioCompoundUniqueInput;
    AND?: Prisma.RegistroBitacoraWhereInput | Prisma.RegistroBitacoraWhereInput[];
    OR?: Prisma.RegistroBitacoraWhereInput[];
    NOT?: Prisma.RegistroBitacoraWhereInput | Prisma.RegistroBitacoraWhereInput[];
    folio?: Prisma.IntFilter<"RegistroBitacora"> | number;
    fechaHora?: Prisma.DateTimeFilter<"RegistroBitacora"> | Date | string;
    descripcion?: Prisma.StringFilter<"RegistroBitacora"> | string;
    periodicidad?: Prisma.EnumPeriodicidadBitacoraNullableFilter<"RegistroBitacora"> | $Enums.PeriodicidadBitacora | null;
    firmaHashRegistro?: Prisma.StringFilter<"RegistroBitacora"> | string;
    firmaAlgoritmo?: Prisma.StringFilter<"RegistroBitacora"> | string;
    firmaFecha?: Prisma.DateTimeFilter<"RegistroBitacora"> | Date | string;
    cerrado?: Prisma.BoolFilter<"RegistroBitacora"> | boolean;
    fechaCierre?: Prisma.DateTimeFilter<"RegistroBitacora"> | Date | string;
    personaId?: Prisma.IntFilter<"RegistroBitacora"> | number;
    bitacoraId?: Prisma.IntFilter<"RegistroBitacora"> | number;
    estacionId?: Prisma.IntFilter<"RegistroBitacora"> | number;
    persona?: Prisma.XOR<Prisma.PersonaAutorizadaScalarRelationFilter, Prisma.PersonaAutorizadaWhereInput>;
    bitacora?: Prisma.XOR<Prisma.BitacoraScalarRelationFilter, Prisma.BitacoraWhereInput>;
    descargaPipa?: Prisma.XOR<Prisma.DescargaPipaNullableScalarRelationFilter, Prisma.DescargaPipaWhereInput> | null;
    mantenimiento?: Prisma.XOR<Prisma.MantenimientoNullableScalarRelationFilter, Prisma.MantenimientoWhereInput> | null;
}, "id" | "estacionId_bitacoraId_folio">;
export type RegistroBitacoraOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    folio?: Prisma.SortOrder;
    fechaHora?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    periodicidad?: Prisma.SortOrderInput | Prisma.SortOrder;
    firmaHashRegistro?: Prisma.SortOrder;
    firmaAlgoritmo?: Prisma.SortOrder;
    firmaFecha?: Prisma.SortOrder;
    cerrado?: Prisma.SortOrder;
    fechaCierre?: Prisma.SortOrder;
    personaId?: Prisma.SortOrder;
    bitacoraId?: Prisma.SortOrder;
    estacionId?: Prisma.SortOrder;
    _count?: Prisma.RegistroBitacoraCountOrderByAggregateInput;
    _avg?: Prisma.RegistroBitacoraAvgOrderByAggregateInput;
    _max?: Prisma.RegistroBitacoraMaxOrderByAggregateInput;
    _min?: Prisma.RegistroBitacoraMinOrderByAggregateInput;
    _sum?: Prisma.RegistroBitacoraSumOrderByAggregateInput;
};
export type RegistroBitacoraScalarWhereWithAggregatesInput = {
    AND?: Prisma.RegistroBitacoraScalarWhereWithAggregatesInput | Prisma.RegistroBitacoraScalarWhereWithAggregatesInput[];
    OR?: Prisma.RegistroBitacoraScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RegistroBitacoraScalarWhereWithAggregatesInput | Prisma.RegistroBitacoraScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"RegistroBitacora"> | number;
    folio?: Prisma.IntWithAggregatesFilter<"RegistroBitacora"> | number;
    fechaHora?: Prisma.DateTimeWithAggregatesFilter<"RegistroBitacora"> | Date | string;
    descripcion?: Prisma.StringWithAggregatesFilter<"RegistroBitacora"> | string;
    periodicidad?: Prisma.EnumPeriodicidadBitacoraNullableWithAggregatesFilter<"RegistroBitacora"> | $Enums.PeriodicidadBitacora | null;
    firmaHashRegistro?: Prisma.StringWithAggregatesFilter<"RegistroBitacora"> | string;
    firmaAlgoritmo?: Prisma.StringWithAggregatesFilter<"RegistroBitacora"> | string;
    firmaFecha?: Prisma.DateTimeWithAggregatesFilter<"RegistroBitacora"> | Date | string;
    cerrado?: Prisma.BoolWithAggregatesFilter<"RegistroBitacora"> | boolean;
    fechaCierre?: Prisma.DateTimeWithAggregatesFilter<"RegistroBitacora"> | Date | string;
    personaId?: Prisma.IntWithAggregatesFilter<"RegistroBitacora"> | number;
    bitacoraId?: Prisma.IntWithAggregatesFilter<"RegistroBitacora"> | number;
    estacionId?: Prisma.IntWithAggregatesFilter<"RegistroBitacora"> | number;
};
export type RegistroBitacoraCreateInput = {
    folio: number;
    fechaHora?: Date | string;
    descripcion: string;
    periodicidad?: $Enums.PeriodicidadBitacora | null;
    firmaHashRegistro: string;
    firmaAlgoritmo?: string;
    firmaFecha?: Date | string;
    cerrado?: boolean;
    fechaCierre?: Date | string;
    estacionId: number;
    persona: Prisma.PersonaAutorizadaCreateNestedOneWithoutRegistrosInput;
    bitacora: Prisma.BitacoraCreateNestedOneWithoutRegistrosInput;
    descargaPipa?: Prisma.DescargaPipaCreateNestedOneWithoutRegistroInput;
    mantenimiento?: Prisma.MantenimientoCreateNestedOneWithoutRegistroInput;
};
export type RegistroBitacoraUncheckedCreateInput = {
    id?: number;
    folio: number;
    fechaHora?: Date | string;
    descripcion: string;
    periodicidad?: $Enums.PeriodicidadBitacora | null;
    firmaHashRegistro: string;
    firmaAlgoritmo?: string;
    firmaFecha?: Date | string;
    cerrado?: boolean;
    fechaCierre?: Date | string;
    personaId: number;
    bitacoraId: number;
    estacionId: number;
    descargaPipa?: Prisma.DescargaPipaUncheckedCreateNestedOneWithoutRegistroInput;
    mantenimiento?: Prisma.MantenimientoUncheckedCreateNestedOneWithoutRegistroInput;
};
export type RegistroBitacoraUpdateInput = {
    folio?: Prisma.IntFieldUpdateOperationsInput | number;
    fechaHora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    periodicidad?: Prisma.NullableEnumPeriodicidadBitacoraFieldUpdateOperationsInput | $Enums.PeriodicidadBitacora | null;
    firmaHashRegistro?: Prisma.StringFieldUpdateOperationsInput | string;
    firmaAlgoritmo?: Prisma.StringFieldUpdateOperationsInput | string;
    firmaFecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cerrado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fechaCierre?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estacionId?: Prisma.IntFieldUpdateOperationsInput | number;
    persona?: Prisma.PersonaAutorizadaUpdateOneRequiredWithoutRegistrosNestedInput;
    bitacora?: Prisma.BitacoraUpdateOneRequiredWithoutRegistrosNestedInput;
    descargaPipa?: Prisma.DescargaPipaUpdateOneWithoutRegistroNestedInput;
    mantenimiento?: Prisma.MantenimientoUpdateOneWithoutRegistroNestedInput;
};
export type RegistroBitacoraUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    folio?: Prisma.IntFieldUpdateOperationsInput | number;
    fechaHora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    periodicidad?: Prisma.NullableEnumPeriodicidadBitacoraFieldUpdateOperationsInput | $Enums.PeriodicidadBitacora | null;
    firmaHashRegistro?: Prisma.StringFieldUpdateOperationsInput | string;
    firmaAlgoritmo?: Prisma.StringFieldUpdateOperationsInput | string;
    firmaFecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cerrado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fechaCierre?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    personaId?: Prisma.IntFieldUpdateOperationsInput | number;
    bitacoraId?: Prisma.IntFieldUpdateOperationsInput | number;
    estacionId?: Prisma.IntFieldUpdateOperationsInput | number;
    descargaPipa?: Prisma.DescargaPipaUncheckedUpdateOneWithoutRegistroNestedInput;
    mantenimiento?: Prisma.MantenimientoUncheckedUpdateOneWithoutRegistroNestedInput;
};
export type RegistroBitacoraCreateManyInput = {
    id?: number;
    folio: number;
    fechaHora?: Date | string;
    descripcion: string;
    periodicidad?: $Enums.PeriodicidadBitacora | null;
    firmaHashRegistro: string;
    firmaAlgoritmo?: string;
    firmaFecha?: Date | string;
    cerrado?: boolean;
    fechaCierre?: Date | string;
    personaId: number;
    bitacoraId: number;
    estacionId: number;
};
export type RegistroBitacoraUpdateManyMutationInput = {
    folio?: Prisma.IntFieldUpdateOperationsInput | number;
    fechaHora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    periodicidad?: Prisma.NullableEnumPeriodicidadBitacoraFieldUpdateOperationsInput | $Enums.PeriodicidadBitacora | null;
    firmaHashRegistro?: Prisma.StringFieldUpdateOperationsInput | string;
    firmaAlgoritmo?: Prisma.StringFieldUpdateOperationsInput | string;
    firmaFecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cerrado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fechaCierre?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estacionId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type RegistroBitacoraUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    folio?: Prisma.IntFieldUpdateOperationsInput | number;
    fechaHora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    periodicidad?: Prisma.NullableEnumPeriodicidadBitacoraFieldUpdateOperationsInput | $Enums.PeriodicidadBitacora | null;
    firmaHashRegistro?: Prisma.StringFieldUpdateOperationsInput | string;
    firmaAlgoritmo?: Prisma.StringFieldUpdateOperationsInput | string;
    firmaFecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cerrado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fechaCierre?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    personaId?: Prisma.IntFieldUpdateOperationsInput | number;
    bitacoraId?: Prisma.IntFieldUpdateOperationsInput | number;
    estacionId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type RegistroBitacoraListRelationFilter = {
    every?: Prisma.RegistroBitacoraWhereInput;
    some?: Prisma.RegistroBitacoraWhereInput;
    none?: Prisma.RegistroBitacoraWhereInput;
};
export type RegistroBitacoraOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type RegistroBitacoraEstacionIdBitacoraIdFolioCompoundUniqueInput = {
    estacionId: number;
    bitacoraId: number;
    folio: number;
};
export type RegistroBitacoraCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    folio?: Prisma.SortOrder;
    fechaHora?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    periodicidad?: Prisma.SortOrder;
    firmaHashRegistro?: Prisma.SortOrder;
    firmaAlgoritmo?: Prisma.SortOrder;
    firmaFecha?: Prisma.SortOrder;
    cerrado?: Prisma.SortOrder;
    fechaCierre?: Prisma.SortOrder;
    personaId?: Prisma.SortOrder;
    bitacoraId?: Prisma.SortOrder;
    estacionId?: Prisma.SortOrder;
};
export type RegistroBitacoraAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    folio?: Prisma.SortOrder;
    personaId?: Prisma.SortOrder;
    bitacoraId?: Prisma.SortOrder;
    estacionId?: Prisma.SortOrder;
};
export type RegistroBitacoraMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    folio?: Prisma.SortOrder;
    fechaHora?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    periodicidad?: Prisma.SortOrder;
    firmaHashRegistro?: Prisma.SortOrder;
    firmaAlgoritmo?: Prisma.SortOrder;
    firmaFecha?: Prisma.SortOrder;
    cerrado?: Prisma.SortOrder;
    fechaCierre?: Prisma.SortOrder;
    personaId?: Prisma.SortOrder;
    bitacoraId?: Prisma.SortOrder;
    estacionId?: Prisma.SortOrder;
};
export type RegistroBitacoraMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    folio?: Prisma.SortOrder;
    fechaHora?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    periodicidad?: Prisma.SortOrder;
    firmaHashRegistro?: Prisma.SortOrder;
    firmaAlgoritmo?: Prisma.SortOrder;
    firmaFecha?: Prisma.SortOrder;
    cerrado?: Prisma.SortOrder;
    fechaCierre?: Prisma.SortOrder;
    personaId?: Prisma.SortOrder;
    bitacoraId?: Prisma.SortOrder;
    estacionId?: Prisma.SortOrder;
};
export type RegistroBitacoraSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    folio?: Prisma.SortOrder;
    personaId?: Prisma.SortOrder;
    bitacoraId?: Prisma.SortOrder;
    estacionId?: Prisma.SortOrder;
};
export type RegistroBitacoraScalarRelationFilter = {
    is?: Prisma.RegistroBitacoraWhereInput;
    isNot?: Prisma.RegistroBitacoraWhereInput;
};
export type RegistroBitacoraCreateNestedManyWithoutPersonaInput = {
    create?: Prisma.XOR<Prisma.RegistroBitacoraCreateWithoutPersonaInput, Prisma.RegistroBitacoraUncheckedCreateWithoutPersonaInput> | Prisma.RegistroBitacoraCreateWithoutPersonaInput[] | Prisma.RegistroBitacoraUncheckedCreateWithoutPersonaInput[];
    connectOrCreate?: Prisma.RegistroBitacoraCreateOrConnectWithoutPersonaInput | Prisma.RegistroBitacoraCreateOrConnectWithoutPersonaInput[];
    createMany?: Prisma.RegistroBitacoraCreateManyPersonaInputEnvelope;
    connect?: Prisma.RegistroBitacoraWhereUniqueInput | Prisma.RegistroBitacoraWhereUniqueInput[];
};
export type RegistroBitacoraUncheckedCreateNestedManyWithoutPersonaInput = {
    create?: Prisma.XOR<Prisma.RegistroBitacoraCreateWithoutPersonaInput, Prisma.RegistroBitacoraUncheckedCreateWithoutPersonaInput> | Prisma.RegistroBitacoraCreateWithoutPersonaInput[] | Prisma.RegistroBitacoraUncheckedCreateWithoutPersonaInput[];
    connectOrCreate?: Prisma.RegistroBitacoraCreateOrConnectWithoutPersonaInput | Prisma.RegistroBitacoraCreateOrConnectWithoutPersonaInput[];
    createMany?: Prisma.RegistroBitacoraCreateManyPersonaInputEnvelope;
    connect?: Prisma.RegistroBitacoraWhereUniqueInput | Prisma.RegistroBitacoraWhereUniqueInput[];
};
export type RegistroBitacoraUpdateManyWithoutPersonaNestedInput = {
    create?: Prisma.XOR<Prisma.RegistroBitacoraCreateWithoutPersonaInput, Prisma.RegistroBitacoraUncheckedCreateWithoutPersonaInput> | Prisma.RegistroBitacoraCreateWithoutPersonaInput[] | Prisma.RegistroBitacoraUncheckedCreateWithoutPersonaInput[];
    connectOrCreate?: Prisma.RegistroBitacoraCreateOrConnectWithoutPersonaInput | Prisma.RegistroBitacoraCreateOrConnectWithoutPersonaInput[];
    upsert?: Prisma.RegistroBitacoraUpsertWithWhereUniqueWithoutPersonaInput | Prisma.RegistroBitacoraUpsertWithWhereUniqueWithoutPersonaInput[];
    createMany?: Prisma.RegistroBitacoraCreateManyPersonaInputEnvelope;
    set?: Prisma.RegistroBitacoraWhereUniqueInput | Prisma.RegistroBitacoraWhereUniqueInput[];
    disconnect?: Prisma.RegistroBitacoraWhereUniqueInput | Prisma.RegistroBitacoraWhereUniqueInput[];
    delete?: Prisma.RegistroBitacoraWhereUniqueInput | Prisma.RegistroBitacoraWhereUniqueInput[];
    connect?: Prisma.RegistroBitacoraWhereUniqueInput | Prisma.RegistroBitacoraWhereUniqueInput[];
    update?: Prisma.RegistroBitacoraUpdateWithWhereUniqueWithoutPersonaInput | Prisma.RegistroBitacoraUpdateWithWhereUniqueWithoutPersonaInput[];
    updateMany?: Prisma.RegistroBitacoraUpdateManyWithWhereWithoutPersonaInput | Prisma.RegistroBitacoraUpdateManyWithWhereWithoutPersonaInput[];
    deleteMany?: Prisma.RegistroBitacoraScalarWhereInput | Prisma.RegistroBitacoraScalarWhereInput[];
};
export type RegistroBitacoraUncheckedUpdateManyWithoutPersonaNestedInput = {
    create?: Prisma.XOR<Prisma.RegistroBitacoraCreateWithoutPersonaInput, Prisma.RegistroBitacoraUncheckedCreateWithoutPersonaInput> | Prisma.RegistroBitacoraCreateWithoutPersonaInput[] | Prisma.RegistroBitacoraUncheckedCreateWithoutPersonaInput[];
    connectOrCreate?: Prisma.RegistroBitacoraCreateOrConnectWithoutPersonaInput | Prisma.RegistroBitacoraCreateOrConnectWithoutPersonaInput[];
    upsert?: Prisma.RegistroBitacoraUpsertWithWhereUniqueWithoutPersonaInput | Prisma.RegistroBitacoraUpsertWithWhereUniqueWithoutPersonaInput[];
    createMany?: Prisma.RegistroBitacoraCreateManyPersonaInputEnvelope;
    set?: Prisma.RegistroBitacoraWhereUniqueInput | Prisma.RegistroBitacoraWhereUniqueInput[];
    disconnect?: Prisma.RegistroBitacoraWhereUniqueInput | Prisma.RegistroBitacoraWhereUniqueInput[];
    delete?: Prisma.RegistroBitacoraWhereUniqueInput | Prisma.RegistroBitacoraWhereUniqueInput[];
    connect?: Prisma.RegistroBitacoraWhereUniqueInput | Prisma.RegistroBitacoraWhereUniqueInput[];
    update?: Prisma.RegistroBitacoraUpdateWithWhereUniqueWithoutPersonaInput | Prisma.RegistroBitacoraUpdateWithWhereUniqueWithoutPersonaInput[];
    updateMany?: Prisma.RegistroBitacoraUpdateManyWithWhereWithoutPersonaInput | Prisma.RegistroBitacoraUpdateManyWithWhereWithoutPersonaInput[];
    deleteMany?: Prisma.RegistroBitacoraScalarWhereInput | Prisma.RegistroBitacoraScalarWhereInput[];
};
export type RegistroBitacoraCreateNestedManyWithoutBitacoraInput = {
    create?: Prisma.XOR<Prisma.RegistroBitacoraCreateWithoutBitacoraInput, Prisma.RegistroBitacoraUncheckedCreateWithoutBitacoraInput> | Prisma.RegistroBitacoraCreateWithoutBitacoraInput[] | Prisma.RegistroBitacoraUncheckedCreateWithoutBitacoraInput[];
    connectOrCreate?: Prisma.RegistroBitacoraCreateOrConnectWithoutBitacoraInput | Prisma.RegistroBitacoraCreateOrConnectWithoutBitacoraInput[];
    createMany?: Prisma.RegistroBitacoraCreateManyBitacoraInputEnvelope;
    connect?: Prisma.RegistroBitacoraWhereUniqueInput | Prisma.RegistroBitacoraWhereUniqueInput[];
};
export type RegistroBitacoraUncheckedCreateNestedManyWithoutBitacoraInput = {
    create?: Prisma.XOR<Prisma.RegistroBitacoraCreateWithoutBitacoraInput, Prisma.RegistroBitacoraUncheckedCreateWithoutBitacoraInput> | Prisma.RegistroBitacoraCreateWithoutBitacoraInput[] | Prisma.RegistroBitacoraUncheckedCreateWithoutBitacoraInput[];
    connectOrCreate?: Prisma.RegistroBitacoraCreateOrConnectWithoutBitacoraInput | Prisma.RegistroBitacoraCreateOrConnectWithoutBitacoraInput[];
    createMany?: Prisma.RegistroBitacoraCreateManyBitacoraInputEnvelope;
    connect?: Prisma.RegistroBitacoraWhereUniqueInput | Prisma.RegistroBitacoraWhereUniqueInput[];
};
export type RegistroBitacoraUpdateManyWithoutBitacoraNestedInput = {
    create?: Prisma.XOR<Prisma.RegistroBitacoraCreateWithoutBitacoraInput, Prisma.RegistroBitacoraUncheckedCreateWithoutBitacoraInput> | Prisma.RegistroBitacoraCreateWithoutBitacoraInput[] | Prisma.RegistroBitacoraUncheckedCreateWithoutBitacoraInput[];
    connectOrCreate?: Prisma.RegistroBitacoraCreateOrConnectWithoutBitacoraInput | Prisma.RegistroBitacoraCreateOrConnectWithoutBitacoraInput[];
    upsert?: Prisma.RegistroBitacoraUpsertWithWhereUniqueWithoutBitacoraInput | Prisma.RegistroBitacoraUpsertWithWhereUniqueWithoutBitacoraInput[];
    createMany?: Prisma.RegistroBitacoraCreateManyBitacoraInputEnvelope;
    set?: Prisma.RegistroBitacoraWhereUniqueInput | Prisma.RegistroBitacoraWhereUniqueInput[];
    disconnect?: Prisma.RegistroBitacoraWhereUniqueInput | Prisma.RegistroBitacoraWhereUniqueInput[];
    delete?: Prisma.RegistroBitacoraWhereUniqueInput | Prisma.RegistroBitacoraWhereUniqueInput[];
    connect?: Prisma.RegistroBitacoraWhereUniqueInput | Prisma.RegistroBitacoraWhereUniqueInput[];
    update?: Prisma.RegistroBitacoraUpdateWithWhereUniqueWithoutBitacoraInput | Prisma.RegistroBitacoraUpdateWithWhereUniqueWithoutBitacoraInput[];
    updateMany?: Prisma.RegistroBitacoraUpdateManyWithWhereWithoutBitacoraInput | Prisma.RegistroBitacoraUpdateManyWithWhereWithoutBitacoraInput[];
    deleteMany?: Prisma.RegistroBitacoraScalarWhereInput | Prisma.RegistroBitacoraScalarWhereInput[];
};
export type RegistroBitacoraUncheckedUpdateManyWithoutBitacoraNestedInput = {
    create?: Prisma.XOR<Prisma.RegistroBitacoraCreateWithoutBitacoraInput, Prisma.RegistroBitacoraUncheckedCreateWithoutBitacoraInput> | Prisma.RegistroBitacoraCreateWithoutBitacoraInput[] | Prisma.RegistroBitacoraUncheckedCreateWithoutBitacoraInput[];
    connectOrCreate?: Prisma.RegistroBitacoraCreateOrConnectWithoutBitacoraInput | Prisma.RegistroBitacoraCreateOrConnectWithoutBitacoraInput[];
    upsert?: Prisma.RegistroBitacoraUpsertWithWhereUniqueWithoutBitacoraInput | Prisma.RegistroBitacoraUpsertWithWhereUniqueWithoutBitacoraInput[];
    createMany?: Prisma.RegistroBitacoraCreateManyBitacoraInputEnvelope;
    set?: Prisma.RegistroBitacoraWhereUniqueInput | Prisma.RegistroBitacoraWhereUniqueInput[];
    disconnect?: Prisma.RegistroBitacoraWhereUniqueInput | Prisma.RegistroBitacoraWhereUniqueInput[];
    delete?: Prisma.RegistroBitacoraWhereUniqueInput | Prisma.RegistroBitacoraWhereUniqueInput[];
    connect?: Prisma.RegistroBitacoraWhereUniqueInput | Prisma.RegistroBitacoraWhereUniqueInput[];
    update?: Prisma.RegistroBitacoraUpdateWithWhereUniqueWithoutBitacoraInput | Prisma.RegistroBitacoraUpdateWithWhereUniqueWithoutBitacoraInput[];
    updateMany?: Prisma.RegistroBitacoraUpdateManyWithWhereWithoutBitacoraInput | Prisma.RegistroBitacoraUpdateManyWithWhereWithoutBitacoraInput[];
    deleteMany?: Prisma.RegistroBitacoraScalarWhereInput | Prisma.RegistroBitacoraScalarWhereInput[];
};
export type NullableEnumPeriodicidadBitacoraFieldUpdateOperationsInput = {
    set?: $Enums.PeriodicidadBitacora | null;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type RegistroBitacoraCreateNestedOneWithoutDescargaPipaInput = {
    create?: Prisma.XOR<Prisma.RegistroBitacoraCreateWithoutDescargaPipaInput, Prisma.RegistroBitacoraUncheckedCreateWithoutDescargaPipaInput>;
    connectOrCreate?: Prisma.RegistroBitacoraCreateOrConnectWithoutDescargaPipaInput;
    connect?: Prisma.RegistroBitacoraWhereUniqueInput;
};
export type RegistroBitacoraUpdateOneRequiredWithoutDescargaPipaNestedInput = {
    create?: Prisma.XOR<Prisma.RegistroBitacoraCreateWithoutDescargaPipaInput, Prisma.RegistroBitacoraUncheckedCreateWithoutDescargaPipaInput>;
    connectOrCreate?: Prisma.RegistroBitacoraCreateOrConnectWithoutDescargaPipaInput;
    upsert?: Prisma.RegistroBitacoraUpsertWithoutDescargaPipaInput;
    connect?: Prisma.RegistroBitacoraWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.RegistroBitacoraUpdateToOneWithWhereWithoutDescargaPipaInput, Prisma.RegistroBitacoraUpdateWithoutDescargaPipaInput>, Prisma.RegistroBitacoraUncheckedUpdateWithoutDescargaPipaInput>;
};
export type RegistroBitacoraCreateNestedOneWithoutMantenimientoInput = {
    create?: Prisma.XOR<Prisma.RegistroBitacoraCreateWithoutMantenimientoInput, Prisma.RegistroBitacoraUncheckedCreateWithoutMantenimientoInput>;
    connectOrCreate?: Prisma.RegistroBitacoraCreateOrConnectWithoutMantenimientoInput;
    connect?: Prisma.RegistroBitacoraWhereUniqueInput;
};
export type RegistroBitacoraUpdateOneRequiredWithoutMantenimientoNestedInput = {
    create?: Prisma.XOR<Prisma.RegistroBitacoraCreateWithoutMantenimientoInput, Prisma.RegistroBitacoraUncheckedCreateWithoutMantenimientoInput>;
    connectOrCreate?: Prisma.RegistroBitacoraCreateOrConnectWithoutMantenimientoInput;
    upsert?: Prisma.RegistroBitacoraUpsertWithoutMantenimientoInput;
    connect?: Prisma.RegistroBitacoraWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.RegistroBitacoraUpdateToOneWithWhereWithoutMantenimientoInput, Prisma.RegistroBitacoraUpdateWithoutMantenimientoInput>, Prisma.RegistroBitacoraUncheckedUpdateWithoutMantenimientoInput>;
};
export type RegistroBitacoraCreateWithoutPersonaInput = {
    folio: number;
    fechaHora?: Date | string;
    descripcion: string;
    periodicidad?: $Enums.PeriodicidadBitacora | null;
    firmaHashRegistro: string;
    firmaAlgoritmo?: string;
    firmaFecha?: Date | string;
    cerrado?: boolean;
    fechaCierre?: Date | string;
    estacionId: number;
    bitacora: Prisma.BitacoraCreateNestedOneWithoutRegistrosInput;
    descargaPipa?: Prisma.DescargaPipaCreateNestedOneWithoutRegistroInput;
    mantenimiento?: Prisma.MantenimientoCreateNestedOneWithoutRegistroInput;
};
export type RegistroBitacoraUncheckedCreateWithoutPersonaInput = {
    id?: number;
    folio: number;
    fechaHora?: Date | string;
    descripcion: string;
    periodicidad?: $Enums.PeriodicidadBitacora | null;
    firmaHashRegistro: string;
    firmaAlgoritmo?: string;
    firmaFecha?: Date | string;
    cerrado?: boolean;
    fechaCierre?: Date | string;
    bitacoraId: number;
    estacionId: number;
    descargaPipa?: Prisma.DescargaPipaUncheckedCreateNestedOneWithoutRegistroInput;
    mantenimiento?: Prisma.MantenimientoUncheckedCreateNestedOneWithoutRegistroInput;
};
export type RegistroBitacoraCreateOrConnectWithoutPersonaInput = {
    where: Prisma.RegistroBitacoraWhereUniqueInput;
    create: Prisma.XOR<Prisma.RegistroBitacoraCreateWithoutPersonaInput, Prisma.RegistroBitacoraUncheckedCreateWithoutPersonaInput>;
};
export type RegistroBitacoraCreateManyPersonaInputEnvelope = {
    data: Prisma.RegistroBitacoraCreateManyPersonaInput | Prisma.RegistroBitacoraCreateManyPersonaInput[];
    skipDuplicates?: boolean;
};
export type RegistroBitacoraUpsertWithWhereUniqueWithoutPersonaInput = {
    where: Prisma.RegistroBitacoraWhereUniqueInput;
    update: Prisma.XOR<Prisma.RegistroBitacoraUpdateWithoutPersonaInput, Prisma.RegistroBitacoraUncheckedUpdateWithoutPersonaInput>;
    create: Prisma.XOR<Prisma.RegistroBitacoraCreateWithoutPersonaInput, Prisma.RegistroBitacoraUncheckedCreateWithoutPersonaInput>;
};
export type RegistroBitacoraUpdateWithWhereUniqueWithoutPersonaInput = {
    where: Prisma.RegistroBitacoraWhereUniqueInput;
    data: Prisma.XOR<Prisma.RegistroBitacoraUpdateWithoutPersonaInput, Prisma.RegistroBitacoraUncheckedUpdateWithoutPersonaInput>;
};
export type RegistroBitacoraUpdateManyWithWhereWithoutPersonaInput = {
    where: Prisma.RegistroBitacoraScalarWhereInput;
    data: Prisma.XOR<Prisma.RegistroBitacoraUpdateManyMutationInput, Prisma.RegistroBitacoraUncheckedUpdateManyWithoutPersonaInput>;
};
export type RegistroBitacoraScalarWhereInput = {
    AND?: Prisma.RegistroBitacoraScalarWhereInput | Prisma.RegistroBitacoraScalarWhereInput[];
    OR?: Prisma.RegistroBitacoraScalarWhereInput[];
    NOT?: Prisma.RegistroBitacoraScalarWhereInput | Prisma.RegistroBitacoraScalarWhereInput[];
    id?: Prisma.IntFilter<"RegistroBitacora"> | number;
    folio?: Prisma.IntFilter<"RegistroBitacora"> | number;
    fechaHora?: Prisma.DateTimeFilter<"RegistroBitacora"> | Date | string;
    descripcion?: Prisma.StringFilter<"RegistroBitacora"> | string;
    periodicidad?: Prisma.EnumPeriodicidadBitacoraNullableFilter<"RegistroBitacora"> | $Enums.PeriodicidadBitacora | null;
    firmaHashRegistro?: Prisma.StringFilter<"RegistroBitacora"> | string;
    firmaAlgoritmo?: Prisma.StringFilter<"RegistroBitacora"> | string;
    firmaFecha?: Prisma.DateTimeFilter<"RegistroBitacora"> | Date | string;
    cerrado?: Prisma.BoolFilter<"RegistroBitacora"> | boolean;
    fechaCierre?: Prisma.DateTimeFilter<"RegistroBitacora"> | Date | string;
    personaId?: Prisma.IntFilter<"RegistroBitacora"> | number;
    bitacoraId?: Prisma.IntFilter<"RegistroBitacora"> | number;
    estacionId?: Prisma.IntFilter<"RegistroBitacora"> | number;
};
export type RegistroBitacoraCreateWithoutBitacoraInput = {
    folio: number;
    fechaHora?: Date | string;
    descripcion: string;
    periodicidad?: $Enums.PeriodicidadBitacora | null;
    firmaHashRegistro: string;
    firmaAlgoritmo?: string;
    firmaFecha?: Date | string;
    cerrado?: boolean;
    fechaCierre?: Date | string;
    estacionId: number;
    persona: Prisma.PersonaAutorizadaCreateNestedOneWithoutRegistrosInput;
    descargaPipa?: Prisma.DescargaPipaCreateNestedOneWithoutRegistroInput;
    mantenimiento?: Prisma.MantenimientoCreateNestedOneWithoutRegistroInput;
};
export type RegistroBitacoraUncheckedCreateWithoutBitacoraInput = {
    id?: number;
    folio: number;
    fechaHora?: Date | string;
    descripcion: string;
    periodicidad?: $Enums.PeriodicidadBitacora | null;
    firmaHashRegistro: string;
    firmaAlgoritmo?: string;
    firmaFecha?: Date | string;
    cerrado?: boolean;
    fechaCierre?: Date | string;
    personaId: number;
    estacionId: number;
    descargaPipa?: Prisma.DescargaPipaUncheckedCreateNestedOneWithoutRegistroInput;
    mantenimiento?: Prisma.MantenimientoUncheckedCreateNestedOneWithoutRegistroInput;
};
export type RegistroBitacoraCreateOrConnectWithoutBitacoraInput = {
    where: Prisma.RegistroBitacoraWhereUniqueInput;
    create: Prisma.XOR<Prisma.RegistroBitacoraCreateWithoutBitacoraInput, Prisma.RegistroBitacoraUncheckedCreateWithoutBitacoraInput>;
};
export type RegistroBitacoraCreateManyBitacoraInputEnvelope = {
    data: Prisma.RegistroBitacoraCreateManyBitacoraInput | Prisma.RegistroBitacoraCreateManyBitacoraInput[];
    skipDuplicates?: boolean;
};
export type RegistroBitacoraUpsertWithWhereUniqueWithoutBitacoraInput = {
    where: Prisma.RegistroBitacoraWhereUniqueInput;
    update: Prisma.XOR<Prisma.RegistroBitacoraUpdateWithoutBitacoraInput, Prisma.RegistroBitacoraUncheckedUpdateWithoutBitacoraInput>;
    create: Prisma.XOR<Prisma.RegistroBitacoraCreateWithoutBitacoraInput, Prisma.RegistroBitacoraUncheckedCreateWithoutBitacoraInput>;
};
export type RegistroBitacoraUpdateWithWhereUniqueWithoutBitacoraInput = {
    where: Prisma.RegistroBitacoraWhereUniqueInput;
    data: Prisma.XOR<Prisma.RegistroBitacoraUpdateWithoutBitacoraInput, Prisma.RegistroBitacoraUncheckedUpdateWithoutBitacoraInput>;
};
export type RegistroBitacoraUpdateManyWithWhereWithoutBitacoraInput = {
    where: Prisma.RegistroBitacoraScalarWhereInput;
    data: Prisma.XOR<Prisma.RegistroBitacoraUpdateManyMutationInput, Prisma.RegistroBitacoraUncheckedUpdateManyWithoutBitacoraInput>;
};
export type RegistroBitacoraCreateWithoutDescargaPipaInput = {
    folio: number;
    fechaHora?: Date | string;
    descripcion: string;
    periodicidad?: $Enums.PeriodicidadBitacora | null;
    firmaHashRegistro: string;
    firmaAlgoritmo?: string;
    firmaFecha?: Date | string;
    cerrado?: boolean;
    fechaCierre?: Date | string;
    estacionId: number;
    persona: Prisma.PersonaAutorizadaCreateNestedOneWithoutRegistrosInput;
    bitacora: Prisma.BitacoraCreateNestedOneWithoutRegistrosInput;
    mantenimiento?: Prisma.MantenimientoCreateNestedOneWithoutRegistroInput;
};
export type RegistroBitacoraUncheckedCreateWithoutDescargaPipaInput = {
    id?: number;
    folio: number;
    fechaHora?: Date | string;
    descripcion: string;
    periodicidad?: $Enums.PeriodicidadBitacora | null;
    firmaHashRegistro: string;
    firmaAlgoritmo?: string;
    firmaFecha?: Date | string;
    cerrado?: boolean;
    fechaCierre?: Date | string;
    personaId: number;
    bitacoraId: number;
    estacionId: number;
    mantenimiento?: Prisma.MantenimientoUncheckedCreateNestedOneWithoutRegistroInput;
};
export type RegistroBitacoraCreateOrConnectWithoutDescargaPipaInput = {
    where: Prisma.RegistroBitacoraWhereUniqueInput;
    create: Prisma.XOR<Prisma.RegistroBitacoraCreateWithoutDescargaPipaInput, Prisma.RegistroBitacoraUncheckedCreateWithoutDescargaPipaInput>;
};
export type RegistroBitacoraUpsertWithoutDescargaPipaInput = {
    update: Prisma.XOR<Prisma.RegistroBitacoraUpdateWithoutDescargaPipaInput, Prisma.RegistroBitacoraUncheckedUpdateWithoutDescargaPipaInput>;
    create: Prisma.XOR<Prisma.RegistroBitacoraCreateWithoutDescargaPipaInput, Prisma.RegistroBitacoraUncheckedCreateWithoutDescargaPipaInput>;
    where?: Prisma.RegistroBitacoraWhereInput;
};
export type RegistroBitacoraUpdateToOneWithWhereWithoutDescargaPipaInput = {
    where?: Prisma.RegistroBitacoraWhereInput;
    data: Prisma.XOR<Prisma.RegistroBitacoraUpdateWithoutDescargaPipaInput, Prisma.RegistroBitacoraUncheckedUpdateWithoutDescargaPipaInput>;
};
export type RegistroBitacoraUpdateWithoutDescargaPipaInput = {
    folio?: Prisma.IntFieldUpdateOperationsInput | number;
    fechaHora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    periodicidad?: Prisma.NullableEnumPeriodicidadBitacoraFieldUpdateOperationsInput | $Enums.PeriodicidadBitacora | null;
    firmaHashRegistro?: Prisma.StringFieldUpdateOperationsInput | string;
    firmaAlgoritmo?: Prisma.StringFieldUpdateOperationsInput | string;
    firmaFecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cerrado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fechaCierre?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estacionId?: Prisma.IntFieldUpdateOperationsInput | number;
    persona?: Prisma.PersonaAutorizadaUpdateOneRequiredWithoutRegistrosNestedInput;
    bitacora?: Prisma.BitacoraUpdateOneRequiredWithoutRegistrosNestedInput;
    mantenimiento?: Prisma.MantenimientoUpdateOneWithoutRegistroNestedInput;
};
export type RegistroBitacoraUncheckedUpdateWithoutDescargaPipaInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    folio?: Prisma.IntFieldUpdateOperationsInput | number;
    fechaHora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    periodicidad?: Prisma.NullableEnumPeriodicidadBitacoraFieldUpdateOperationsInput | $Enums.PeriodicidadBitacora | null;
    firmaHashRegistro?: Prisma.StringFieldUpdateOperationsInput | string;
    firmaAlgoritmo?: Prisma.StringFieldUpdateOperationsInput | string;
    firmaFecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cerrado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fechaCierre?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    personaId?: Prisma.IntFieldUpdateOperationsInput | number;
    bitacoraId?: Prisma.IntFieldUpdateOperationsInput | number;
    estacionId?: Prisma.IntFieldUpdateOperationsInput | number;
    mantenimiento?: Prisma.MantenimientoUncheckedUpdateOneWithoutRegistroNestedInput;
};
export type RegistroBitacoraCreateWithoutMantenimientoInput = {
    folio: number;
    fechaHora?: Date | string;
    descripcion: string;
    periodicidad?: $Enums.PeriodicidadBitacora | null;
    firmaHashRegistro: string;
    firmaAlgoritmo?: string;
    firmaFecha?: Date | string;
    cerrado?: boolean;
    fechaCierre?: Date | string;
    estacionId: number;
    persona: Prisma.PersonaAutorizadaCreateNestedOneWithoutRegistrosInput;
    bitacora: Prisma.BitacoraCreateNestedOneWithoutRegistrosInput;
    descargaPipa?: Prisma.DescargaPipaCreateNestedOneWithoutRegistroInput;
};
export type RegistroBitacoraUncheckedCreateWithoutMantenimientoInput = {
    id?: number;
    folio: number;
    fechaHora?: Date | string;
    descripcion: string;
    periodicidad?: $Enums.PeriodicidadBitacora | null;
    firmaHashRegistro: string;
    firmaAlgoritmo?: string;
    firmaFecha?: Date | string;
    cerrado?: boolean;
    fechaCierre?: Date | string;
    personaId: number;
    bitacoraId: number;
    estacionId: number;
    descargaPipa?: Prisma.DescargaPipaUncheckedCreateNestedOneWithoutRegistroInput;
};
export type RegistroBitacoraCreateOrConnectWithoutMantenimientoInput = {
    where: Prisma.RegistroBitacoraWhereUniqueInput;
    create: Prisma.XOR<Prisma.RegistroBitacoraCreateWithoutMantenimientoInput, Prisma.RegistroBitacoraUncheckedCreateWithoutMantenimientoInput>;
};
export type RegistroBitacoraUpsertWithoutMantenimientoInput = {
    update: Prisma.XOR<Prisma.RegistroBitacoraUpdateWithoutMantenimientoInput, Prisma.RegistroBitacoraUncheckedUpdateWithoutMantenimientoInput>;
    create: Prisma.XOR<Prisma.RegistroBitacoraCreateWithoutMantenimientoInput, Prisma.RegistroBitacoraUncheckedCreateWithoutMantenimientoInput>;
    where?: Prisma.RegistroBitacoraWhereInput;
};
export type RegistroBitacoraUpdateToOneWithWhereWithoutMantenimientoInput = {
    where?: Prisma.RegistroBitacoraWhereInput;
    data: Prisma.XOR<Prisma.RegistroBitacoraUpdateWithoutMantenimientoInput, Prisma.RegistroBitacoraUncheckedUpdateWithoutMantenimientoInput>;
};
export type RegistroBitacoraUpdateWithoutMantenimientoInput = {
    folio?: Prisma.IntFieldUpdateOperationsInput | number;
    fechaHora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    periodicidad?: Prisma.NullableEnumPeriodicidadBitacoraFieldUpdateOperationsInput | $Enums.PeriodicidadBitacora | null;
    firmaHashRegistro?: Prisma.StringFieldUpdateOperationsInput | string;
    firmaAlgoritmo?: Prisma.StringFieldUpdateOperationsInput | string;
    firmaFecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cerrado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fechaCierre?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estacionId?: Prisma.IntFieldUpdateOperationsInput | number;
    persona?: Prisma.PersonaAutorizadaUpdateOneRequiredWithoutRegistrosNestedInput;
    bitacora?: Prisma.BitacoraUpdateOneRequiredWithoutRegistrosNestedInput;
    descargaPipa?: Prisma.DescargaPipaUpdateOneWithoutRegistroNestedInput;
};
export type RegistroBitacoraUncheckedUpdateWithoutMantenimientoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    folio?: Prisma.IntFieldUpdateOperationsInput | number;
    fechaHora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    periodicidad?: Prisma.NullableEnumPeriodicidadBitacoraFieldUpdateOperationsInput | $Enums.PeriodicidadBitacora | null;
    firmaHashRegistro?: Prisma.StringFieldUpdateOperationsInput | string;
    firmaAlgoritmo?: Prisma.StringFieldUpdateOperationsInput | string;
    firmaFecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cerrado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fechaCierre?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    personaId?: Prisma.IntFieldUpdateOperationsInput | number;
    bitacoraId?: Prisma.IntFieldUpdateOperationsInput | number;
    estacionId?: Prisma.IntFieldUpdateOperationsInput | number;
    descargaPipa?: Prisma.DescargaPipaUncheckedUpdateOneWithoutRegistroNestedInput;
};
export type RegistroBitacoraCreateManyPersonaInput = {
    id?: number;
    folio: number;
    fechaHora?: Date | string;
    descripcion: string;
    periodicidad?: $Enums.PeriodicidadBitacora | null;
    firmaHashRegistro: string;
    firmaAlgoritmo?: string;
    firmaFecha?: Date | string;
    cerrado?: boolean;
    fechaCierre?: Date | string;
    bitacoraId: number;
    estacionId: number;
};
export type RegistroBitacoraUpdateWithoutPersonaInput = {
    folio?: Prisma.IntFieldUpdateOperationsInput | number;
    fechaHora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    periodicidad?: Prisma.NullableEnumPeriodicidadBitacoraFieldUpdateOperationsInput | $Enums.PeriodicidadBitacora | null;
    firmaHashRegistro?: Prisma.StringFieldUpdateOperationsInput | string;
    firmaAlgoritmo?: Prisma.StringFieldUpdateOperationsInput | string;
    firmaFecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cerrado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fechaCierre?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estacionId?: Prisma.IntFieldUpdateOperationsInput | number;
    bitacora?: Prisma.BitacoraUpdateOneRequiredWithoutRegistrosNestedInput;
    descargaPipa?: Prisma.DescargaPipaUpdateOneWithoutRegistroNestedInput;
    mantenimiento?: Prisma.MantenimientoUpdateOneWithoutRegistroNestedInput;
};
export type RegistroBitacoraUncheckedUpdateWithoutPersonaInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    folio?: Prisma.IntFieldUpdateOperationsInput | number;
    fechaHora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    periodicidad?: Prisma.NullableEnumPeriodicidadBitacoraFieldUpdateOperationsInput | $Enums.PeriodicidadBitacora | null;
    firmaHashRegistro?: Prisma.StringFieldUpdateOperationsInput | string;
    firmaAlgoritmo?: Prisma.StringFieldUpdateOperationsInput | string;
    firmaFecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cerrado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fechaCierre?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bitacoraId?: Prisma.IntFieldUpdateOperationsInput | number;
    estacionId?: Prisma.IntFieldUpdateOperationsInput | number;
    descargaPipa?: Prisma.DescargaPipaUncheckedUpdateOneWithoutRegistroNestedInput;
    mantenimiento?: Prisma.MantenimientoUncheckedUpdateOneWithoutRegistroNestedInput;
};
export type RegistroBitacoraUncheckedUpdateManyWithoutPersonaInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    folio?: Prisma.IntFieldUpdateOperationsInput | number;
    fechaHora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    periodicidad?: Prisma.NullableEnumPeriodicidadBitacoraFieldUpdateOperationsInput | $Enums.PeriodicidadBitacora | null;
    firmaHashRegistro?: Prisma.StringFieldUpdateOperationsInput | string;
    firmaAlgoritmo?: Prisma.StringFieldUpdateOperationsInput | string;
    firmaFecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cerrado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fechaCierre?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bitacoraId?: Prisma.IntFieldUpdateOperationsInput | number;
    estacionId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type RegistroBitacoraCreateManyBitacoraInput = {
    id?: number;
    folio: number;
    fechaHora?: Date | string;
    descripcion: string;
    periodicidad?: $Enums.PeriodicidadBitacora | null;
    firmaHashRegistro: string;
    firmaAlgoritmo?: string;
    firmaFecha?: Date | string;
    cerrado?: boolean;
    fechaCierre?: Date | string;
    personaId: number;
    estacionId: number;
};
export type RegistroBitacoraUpdateWithoutBitacoraInput = {
    folio?: Prisma.IntFieldUpdateOperationsInput | number;
    fechaHora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    periodicidad?: Prisma.NullableEnumPeriodicidadBitacoraFieldUpdateOperationsInput | $Enums.PeriodicidadBitacora | null;
    firmaHashRegistro?: Prisma.StringFieldUpdateOperationsInput | string;
    firmaAlgoritmo?: Prisma.StringFieldUpdateOperationsInput | string;
    firmaFecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cerrado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fechaCierre?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estacionId?: Prisma.IntFieldUpdateOperationsInput | number;
    persona?: Prisma.PersonaAutorizadaUpdateOneRequiredWithoutRegistrosNestedInput;
    descargaPipa?: Prisma.DescargaPipaUpdateOneWithoutRegistroNestedInput;
    mantenimiento?: Prisma.MantenimientoUpdateOneWithoutRegistroNestedInput;
};
export type RegistroBitacoraUncheckedUpdateWithoutBitacoraInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    folio?: Prisma.IntFieldUpdateOperationsInput | number;
    fechaHora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    periodicidad?: Prisma.NullableEnumPeriodicidadBitacoraFieldUpdateOperationsInput | $Enums.PeriodicidadBitacora | null;
    firmaHashRegistro?: Prisma.StringFieldUpdateOperationsInput | string;
    firmaAlgoritmo?: Prisma.StringFieldUpdateOperationsInput | string;
    firmaFecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cerrado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fechaCierre?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    personaId?: Prisma.IntFieldUpdateOperationsInput | number;
    estacionId?: Prisma.IntFieldUpdateOperationsInput | number;
    descargaPipa?: Prisma.DescargaPipaUncheckedUpdateOneWithoutRegistroNestedInput;
    mantenimiento?: Prisma.MantenimientoUncheckedUpdateOneWithoutRegistroNestedInput;
};
export type RegistroBitacoraUncheckedUpdateManyWithoutBitacoraInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    folio?: Prisma.IntFieldUpdateOperationsInput | number;
    fechaHora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    periodicidad?: Prisma.NullableEnumPeriodicidadBitacoraFieldUpdateOperationsInput | $Enums.PeriodicidadBitacora | null;
    firmaHashRegistro?: Prisma.StringFieldUpdateOperationsInput | string;
    firmaAlgoritmo?: Prisma.StringFieldUpdateOperationsInput | string;
    firmaFecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cerrado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fechaCierre?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    personaId?: Prisma.IntFieldUpdateOperationsInput | number;
    estacionId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type RegistroBitacoraSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    folio?: boolean;
    fechaHora?: boolean;
    descripcion?: boolean;
    periodicidad?: boolean;
    firmaHashRegistro?: boolean;
    firmaAlgoritmo?: boolean;
    firmaFecha?: boolean;
    cerrado?: boolean;
    fechaCierre?: boolean;
    personaId?: boolean;
    bitacoraId?: boolean;
    estacionId?: boolean;
    persona?: boolean | Prisma.PersonaAutorizadaDefaultArgs<ExtArgs>;
    bitacora?: boolean | Prisma.BitacoraDefaultArgs<ExtArgs>;
    descargaPipa?: boolean | Prisma.RegistroBitacora$descargaPipaArgs<ExtArgs>;
    mantenimiento?: boolean | Prisma.RegistroBitacora$mantenimientoArgs<ExtArgs>;
}, ExtArgs["result"]["registroBitacora"]>;
export type RegistroBitacoraSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    folio?: boolean;
    fechaHora?: boolean;
    descripcion?: boolean;
    periodicidad?: boolean;
    firmaHashRegistro?: boolean;
    firmaAlgoritmo?: boolean;
    firmaFecha?: boolean;
    cerrado?: boolean;
    fechaCierre?: boolean;
    personaId?: boolean;
    bitacoraId?: boolean;
    estacionId?: boolean;
    persona?: boolean | Prisma.PersonaAutorizadaDefaultArgs<ExtArgs>;
    bitacora?: boolean | Prisma.BitacoraDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["registroBitacora"]>;
export type RegistroBitacoraSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    folio?: boolean;
    fechaHora?: boolean;
    descripcion?: boolean;
    periodicidad?: boolean;
    firmaHashRegistro?: boolean;
    firmaAlgoritmo?: boolean;
    firmaFecha?: boolean;
    cerrado?: boolean;
    fechaCierre?: boolean;
    personaId?: boolean;
    bitacoraId?: boolean;
    estacionId?: boolean;
    persona?: boolean | Prisma.PersonaAutorizadaDefaultArgs<ExtArgs>;
    bitacora?: boolean | Prisma.BitacoraDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["registroBitacora"]>;
export type RegistroBitacoraSelectScalar = {
    id?: boolean;
    folio?: boolean;
    fechaHora?: boolean;
    descripcion?: boolean;
    periodicidad?: boolean;
    firmaHashRegistro?: boolean;
    firmaAlgoritmo?: boolean;
    firmaFecha?: boolean;
    cerrado?: boolean;
    fechaCierre?: boolean;
    personaId?: boolean;
    bitacoraId?: boolean;
    estacionId?: boolean;
};
export type RegistroBitacoraOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "folio" | "fechaHora" | "descripcion" | "periodicidad" | "firmaHashRegistro" | "firmaAlgoritmo" | "firmaFecha" | "cerrado" | "fechaCierre" | "personaId" | "bitacoraId" | "estacionId", ExtArgs["result"]["registroBitacora"]>;
export type RegistroBitacoraInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    persona?: boolean | Prisma.PersonaAutorizadaDefaultArgs<ExtArgs>;
    bitacora?: boolean | Prisma.BitacoraDefaultArgs<ExtArgs>;
    descargaPipa?: boolean | Prisma.RegistroBitacora$descargaPipaArgs<ExtArgs>;
    mantenimiento?: boolean | Prisma.RegistroBitacora$mantenimientoArgs<ExtArgs>;
};
export type RegistroBitacoraIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    persona?: boolean | Prisma.PersonaAutorizadaDefaultArgs<ExtArgs>;
    bitacora?: boolean | Prisma.BitacoraDefaultArgs<ExtArgs>;
};
export type RegistroBitacoraIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    persona?: boolean | Prisma.PersonaAutorizadaDefaultArgs<ExtArgs>;
    bitacora?: boolean | Prisma.BitacoraDefaultArgs<ExtArgs>;
};
export type $RegistroBitacoraPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "RegistroBitacora";
    objects: {
        persona: Prisma.$PersonaAutorizadaPayload<ExtArgs>;
        bitacora: Prisma.$BitacoraPayload<ExtArgs>;
        descargaPipa: Prisma.$DescargaPipaPayload<ExtArgs> | null;
        mantenimiento: Prisma.$MantenimientoPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        folio: number;
        fechaHora: Date;
        descripcion: string;
        periodicidad: $Enums.PeriodicidadBitacora | null;
        firmaHashRegistro: string;
        firmaAlgoritmo: string;
        firmaFecha: Date;
        cerrado: boolean;
        fechaCierre: Date;
        personaId: number;
        bitacoraId: number;
        estacionId: number;
    }, ExtArgs["result"]["registroBitacora"]>;
    composites: {};
};
export type RegistroBitacoraGetPayload<S extends boolean | null | undefined | RegistroBitacoraDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RegistroBitacoraPayload, S>;
export type RegistroBitacoraCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RegistroBitacoraFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RegistroBitacoraCountAggregateInputType | true;
};
export interface RegistroBitacoraDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['RegistroBitacora'];
        meta: {
            name: 'RegistroBitacora';
        };
    };
    findUnique<T extends RegistroBitacoraFindUniqueArgs>(args: Prisma.SelectSubset<T, RegistroBitacoraFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RegistroBitacoraClient<runtime.Types.Result.GetResult<Prisma.$RegistroBitacoraPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends RegistroBitacoraFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RegistroBitacoraFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RegistroBitacoraClient<runtime.Types.Result.GetResult<Prisma.$RegistroBitacoraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends RegistroBitacoraFindFirstArgs>(args?: Prisma.SelectSubset<T, RegistroBitacoraFindFirstArgs<ExtArgs>>): Prisma.Prisma__RegistroBitacoraClient<runtime.Types.Result.GetResult<Prisma.$RegistroBitacoraPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends RegistroBitacoraFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RegistroBitacoraFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RegistroBitacoraClient<runtime.Types.Result.GetResult<Prisma.$RegistroBitacoraPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends RegistroBitacoraFindManyArgs>(args?: Prisma.SelectSubset<T, RegistroBitacoraFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RegistroBitacoraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends RegistroBitacoraCreateArgs>(args: Prisma.SelectSubset<T, RegistroBitacoraCreateArgs<ExtArgs>>): Prisma.Prisma__RegistroBitacoraClient<runtime.Types.Result.GetResult<Prisma.$RegistroBitacoraPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends RegistroBitacoraCreateManyArgs>(args?: Prisma.SelectSubset<T, RegistroBitacoraCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends RegistroBitacoraCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RegistroBitacoraCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RegistroBitacoraPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends RegistroBitacoraDeleteArgs>(args: Prisma.SelectSubset<T, RegistroBitacoraDeleteArgs<ExtArgs>>): Prisma.Prisma__RegistroBitacoraClient<runtime.Types.Result.GetResult<Prisma.$RegistroBitacoraPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends RegistroBitacoraUpdateArgs>(args: Prisma.SelectSubset<T, RegistroBitacoraUpdateArgs<ExtArgs>>): Prisma.Prisma__RegistroBitacoraClient<runtime.Types.Result.GetResult<Prisma.$RegistroBitacoraPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends RegistroBitacoraDeleteManyArgs>(args?: Prisma.SelectSubset<T, RegistroBitacoraDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends RegistroBitacoraUpdateManyArgs>(args: Prisma.SelectSubset<T, RegistroBitacoraUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends RegistroBitacoraUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RegistroBitacoraUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RegistroBitacoraPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends RegistroBitacoraUpsertArgs>(args: Prisma.SelectSubset<T, RegistroBitacoraUpsertArgs<ExtArgs>>): Prisma.Prisma__RegistroBitacoraClient<runtime.Types.Result.GetResult<Prisma.$RegistroBitacoraPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends RegistroBitacoraCountArgs>(args?: Prisma.Subset<T, RegistroBitacoraCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RegistroBitacoraCountAggregateOutputType> : number>;
    aggregate<T extends RegistroBitacoraAggregateArgs>(args: Prisma.Subset<T, RegistroBitacoraAggregateArgs>): Prisma.PrismaPromise<GetRegistroBitacoraAggregateType<T>>;
    groupBy<T extends RegistroBitacoraGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RegistroBitacoraGroupByArgs['orderBy'];
    } : {
        orderBy?: RegistroBitacoraGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RegistroBitacoraGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegistroBitacoraGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: RegistroBitacoraFieldRefs;
}
export interface Prisma__RegistroBitacoraClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    persona<T extends Prisma.PersonaAutorizadaDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PersonaAutorizadaDefaultArgs<ExtArgs>>): Prisma.Prisma__PersonaAutorizadaClient<runtime.Types.Result.GetResult<Prisma.$PersonaAutorizadaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    bitacora<T extends Prisma.BitacoraDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BitacoraDefaultArgs<ExtArgs>>): Prisma.Prisma__BitacoraClient<runtime.Types.Result.GetResult<Prisma.$BitacoraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    descargaPipa<T extends Prisma.RegistroBitacora$descargaPipaArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RegistroBitacora$descargaPipaArgs<ExtArgs>>): Prisma.Prisma__DescargaPipaClient<runtime.Types.Result.GetResult<Prisma.$DescargaPipaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    mantenimiento<T extends Prisma.RegistroBitacora$mantenimientoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RegistroBitacora$mantenimientoArgs<ExtArgs>>): Prisma.Prisma__MantenimientoClient<runtime.Types.Result.GetResult<Prisma.$MantenimientoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface RegistroBitacoraFieldRefs {
    readonly id: Prisma.FieldRef<"RegistroBitacora", 'Int'>;
    readonly folio: Prisma.FieldRef<"RegistroBitacora", 'Int'>;
    readonly fechaHora: Prisma.FieldRef<"RegistroBitacora", 'DateTime'>;
    readonly descripcion: Prisma.FieldRef<"RegistroBitacora", 'String'>;
    readonly periodicidad: Prisma.FieldRef<"RegistroBitacora", 'PeriodicidadBitacora'>;
    readonly firmaHashRegistro: Prisma.FieldRef<"RegistroBitacora", 'String'>;
    readonly firmaAlgoritmo: Prisma.FieldRef<"RegistroBitacora", 'String'>;
    readonly firmaFecha: Prisma.FieldRef<"RegistroBitacora", 'DateTime'>;
    readonly cerrado: Prisma.FieldRef<"RegistroBitacora", 'Boolean'>;
    readonly fechaCierre: Prisma.FieldRef<"RegistroBitacora", 'DateTime'>;
    readonly personaId: Prisma.FieldRef<"RegistroBitacora", 'Int'>;
    readonly bitacoraId: Prisma.FieldRef<"RegistroBitacora", 'Int'>;
    readonly estacionId: Prisma.FieldRef<"RegistroBitacora", 'Int'>;
}
export type RegistroBitacoraFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegistroBitacoraSelect<ExtArgs> | null;
    omit?: Prisma.RegistroBitacoraOmit<ExtArgs> | null;
    include?: Prisma.RegistroBitacoraInclude<ExtArgs> | null;
    where: Prisma.RegistroBitacoraWhereUniqueInput;
};
export type RegistroBitacoraFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegistroBitacoraSelect<ExtArgs> | null;
    omit?: Prisma.RegistroBitacoraOmit<ExtArgs> | null;
    include?: Prisma.RegistroBitacoraInclude<ExtArgs> | null;
    where: Prisma.RegistroBitacoraWhereUniqueInput;
};
export type RegistroBitacoraFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegistroBitacoraSelect<ExtArgs> | null;
    omit?: Prisma.RegistroBitacoraOmit<ExtArgs> | null;
    include?: Prisma.RegistroBitacoraInclude<ExtArgs> | null;
    where?: Prisma.RegistroBitacoraWhereInput;
    orderBy?: Prisma.RegistroBitacoraOrderByWithRelationInput | Prisma.RegistroBitacoraOrderByWithRelationInput[];
    cursor?: Prisma.RegistroBitacoraWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RegistroBitacoraScalarFieldEnum | Prisma.RegistroBitacoraScalarFieldEnum[];
};
export type RegistroBitacoraFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegistroBitacoraSelect<ExtArgs> | null;
    omit?: Prisma.RegistroBitacoraOmit<ExtArgs> | null;
    include?: Prisma.RegistroBitacoraInclude<ExtArgs> | null;
    where?: Prisma.RegistroBitacoraWhereInput;
    orderBy?: Prisma.RegistroBitacoraOrderByWithRelationInput | Prisma.RegistroBitacoraOrderByWithRelationInput[];
    cursor?: Prisma.RegistroBitacoraWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RegistroBitacoraScalarFieldEnum | Prisma.RegistroBitacoraScalarFieldEnum[];
};
export type RegistroBitacoraFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegistroBitacoraSelect<ExtArgs> | null;
    omit?: Prisma.RegistroBitacoraOmit<ExtArgs> | null;
    include?: Prisma.RegistroBitacoraInclude<ExtArgs> | null;
    where?: Prisma.RegistroBitacoraWhereInput;
    orderBy?: Prisma.RegistroBitacoraOrderByWithRelationInput | Prisma.RegistroBitacoraOrderByWithRelationInput[];
    cursor?: Prisma.RegistroBitacoraWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RegistroBitacoraScalarFieldEnum | Prisma.RegistroBitacoraScalarFieldEnum[];
};
export type RegistroBitacoraCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegistroBitacoraSelect<ExtArgs> | null;
    omit?: Prisma.RegistroBitacoraOmit<ExtArgs> | null;
    include?: Prisma.RegistroBitacoraInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RegistroBitacoraCreateInput, Prisma.RegistroBitacoraUncheckedCreateInput>;
};
export type RegistroBitacoraCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.RegistroBitacoraCreateManyInput | Prisma.RegistroBitacoraCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RegistroBitacoraCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegistroBitacoraSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RegistroBitacoraOmit<ExtArgs> | null;
    data: Prisma.RegistroBitacoraCreateManyInput | Prisma.RegistroBitacoraCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.RegistroBitacoraIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type RegistroBitacoraUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegistroBitacoraSelect<ExtArgs> | null;
    omit?: Prisma.RegistroBitacoraOmit<ExtArgs> | null;
    include?: Prisma.RegistroBitacoraInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RegistroBitacoraUpdateInput, Prisma.RegistroBitacoraUncheckedUpdateInput>;
    where: Prisma.RegistroBitacoraWhereUniqueInput;
};
export type RegistroBitacoraUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.RegistroBitacoraUpdateManyMutationInput, Prisma.RegistroBitacoraUncheckedUpdateManyInput>;
    where?: Prisma.RegistroBitacoraWhereInput;
    limit?: number;
};
export type RegistroBitacoraUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegistroBitacoraSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RegistroBitacoraOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RegistroBitacoraUpdateManyMutationInput, Prisma.RegistroBitacoraUncheckedUpdateManyInput>;
    where?: Prisma.RegistroBitacoraWhereInput;
    limit?: number;
    include?: Prisma.RegistroBitacoraIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type RegistroBitacoraUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegistroBitacoraSelect<ExtArgs> | null;
    omit?: Prisma.RegistroBitacoraOmit<ExtArgs> | null;
    include?: Prisma.RegistroBitacoraInclude<ExtArgs> | null;
    where: Prisma.RegistroBitacoraWhereUniqueInput;
    create: Prisma.XOR<Prisma.RegistroBitacoraCreateInput, Prisma.RegistroBitacoraUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.RegistroBitacoraUpdateInput, Prisma.RegistroBitacoraUncheckedUpdateInput>;
};
export type RegistroBitacoraDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegistroBitacoraSelect<ExtArgs> | null;
    omit?: Prisma.RegistroBitacoraOmit<ExtArgs> | null;
    include?: Prisma.RegistroBitacoraInclude<ExtArgs> | null;
    where: Prisma.RegistroBitacoraWhereUniqueInput;
};
export type RegistroBitacoraDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RegistroBitacoraWhereInput;
    limit?: number;
};
export type RegistroBitacora$descargaPipaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DescargaPipaSelect<ExtArgs> | null;
    omit?: Prisma.DescargaPipaOmit<ExtArgs> | null;
    include?: Prisma.DescargaPipaInclude<ExtArgs> | null;
    where?: Prisma.DescargaPipaWhereInput;
};
export type RegistroBitacora$mantenimientoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MantenimientoSelect<ExtArgs> | null;
    omit?: Prisma.MantenimientoOmit<ExtArgs> | null;
    include?: Prisma.MantenimientoInclude<ExtArgs> | null;
    where?: Prisma.MantenimientoWhereInput;
};
export type RegistroBitacoraDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegistroBitacoraSelect<ExtArgs> | null;
    omit?: Prisma.RegistroBitacoraOmit<ExtArgs> | null;
    include?: Prisma.RegistroBitacoraInclude<ExtArgs> | null;
};
export {};
