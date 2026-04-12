import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type MantenimientoModel = runtime.Types.Result.DefaultSelection<Prisma.$MantenimientoPayload>;
export type AggregateMantenimiento = {
    _count: MantenimientoCountAggregateOutputType | null;
    _avg: MantenimientoAvgAggregateOutputType | null;
    _sum: MantenimientoSumAggregateOutputType | null;
    _min: MantenimientoMinAggregateOutputType | null;
    _max: MantenimientoMaxAggregateOutputType | null;
};
export type MantenimientoAvgAggregateOutputType = {
    id: number | null;
    registroId: number | null;
    programaId: number | null;
};
export type MantenimientoSumAggregateOutputType = {
    id: number | null;
    registroId: number | null;
    programaId: number | null;
};
export type MantenimientoMinAggregateOutputType = {
    id: number | null;
    registroId: number | null;
    tipo: $Enums.TipoMantenimiento | null;
    actividad: string | null;
    observaciones: string | null;
    programaId: number | null;
};
export type MantenimientoMaxAggregateOutputType = {
    id: number | null;
    registroId: number | null;
    tipo: $Enums.TipoMantenimiento | null;
    actividad: string | null;
    observaciones: string | null;
    programaId: number | null;
};
export type MantenimientoCountAggregateOutputType = {
    id: number;
    registroId: number;
    tipo: number;
    actividad: number;
    observaciones: number;
    programaId: number;
    _all: number;
};
export type MantenimientoAvgAggregateInputType = {
    id?: true;
    registroId?: true;
    programaId?: true;
};
export type MantenimientoSumAggregateInputType = {
    id?: true;
    registroId?: true;
    programaId?: true;
};
export type MantenimientoMinAggregateInputType = {
    id?: true;
    registroId?: true;
    tipo?: true;
    actividad?: true;
    observaciones?: true;
    programaId?: true;
};
export type MantenimientoMaxAggregateInputType = {
    id?: true;
    registroId?: true;
    tipo?: true;
    actividad?: true;
    observaciones?: true;
    programaId?: true;
};
export type MantenimientoCountAggregateInputType = {
    id?: true;
    registroId?: true;
    tipo?: true;
    actividad?: true;
    observaciones?: true;
    programaId?: true;
    _all?: true;
};
export type MantenimientoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MantenimientoWhereInput;
    orderBy?: Prisma.MantenimientoOrderByWithRelationInput | Prisma.MantenimientoOrderByWithRelationInput[];
    cursor?: Prisma.MantenimientoWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MantenimientoCountAggregateInputType;
    _avg?: MantenimientoAvgAggregateInputType;
    _sum?: MantenimientoSumAggregateInputType;
    _min?: MantenimientoMinAggregateInputType;
    _max?: MantenimientoMaxAggregateInputType;
};
export type GetMantenimientoAggregateType<T extends MantenimientoAggregateArgs> = {
    [P in keyof T & keyof AggregateMantenimiento]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMantenimiento[P]> : Prisma.GetScalarType<T[P], AggregateMantenimiento[P]>;
};
export type MantenimientoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MantenimientoWhereInput;
    orderBy?: Prisma.MantenimientoOrderByWithAggregationInput | Prisma.MantenimientoOrderByWithAggregationInput[];
    by: Prisma.MantenimientoScalarFieldEnum[] | Prisma.MantenimientoScalarFieldEnum;
    having?: Prisma.MantenimientoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MantenimientoCountAggregateInputType | true;
    _avg?: MantenimientoAvgAggregateInputType;
    _sum?: MantenimientoSumAggregateInputType;
    _min?: MantenimientoMinAggregateInputType;
    _max?: MantenimientoMaxAggregateInputType;
};
export type MantenimientoGroupByOutputType = {
    id: number;
    registroId: number;
    tipo: $Enums.TipoMantenimiento;
    actividad: string;
    observaciones: string | null;
    programaId: number | null;
    _count: MantenimientoCountAggregateOutputType | null;
    _avg: MantenimientoAvgAggregateOutputType | null;
    _sum: MantenimientoSumAggregateOutputType | null;
    _min: MantenimientoMinAggregateOutputType | null;
    _max: MantenimientoMaxAggregateOutputType | null;
};
type GetMantenimientoGroupByPayload<T extends MantenimientoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MantenimientoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MantenimientoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MantenimientoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MantenimientoGroupByOutputType[P]>;
}>>;
export type MantenimientoWhereInput = {
    AND?: Prisma.MantenimientoWhereInput | Prisma.MantenimientoWhereInput[];
    OR?: Prisma.MantenimientoWhereInput[];
    NOT?: Prisma.MantenimientoWhereInput | Prisma.MantenimientoWhereInput[];
    id?: Prisma.IntFilter<"Mantenimiento"> | number;
    registroId?: Prisma.IntFilter<"Mantenimiento"> | number;
    tipo?: Prisma.EnumTipoMantenimientoFilter<"Mantenimiento"> | $Enums.TipoMantenimiento;
    actividad?: Prisma.StringFilter<"Mantenimiento"> | string;
    observaciones?: Prisma.StringNullableFilter<"Mantenimiento"> | string | null;
    programaId?: Prisma.IntNullableFilter<"Mantenimiento"> | number | null;
    programa?: Prisma.XOR<Prisma.ProgramaMantenimientoNullableScalarRelationFilter, Prisma.ProgramaMantenimientoWhereInput> | null;
    registro?: Prisma.XOR<Prisma.RegistroBitacoraScalarRelationFilter, Prisma.RegistroBitacoraWhereInput>;
};
export type MantenimientoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    registroId?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    actividad?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrderInput | Prisma.SortOrder;
    programaId?: Prisma.SortOrderInput | Prisma.SortOrder;
    programa?: Prisma.ProgramaMantenimientoOrderByWithRelationInput;
    registro?: Prisma.RegistroBitacoraOrderByWithRelationInput;
};
export type MantenimientoWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    registroId?: number;
    AND?: Prisma.MantenimientoWhereInput | Prisma.MantenimientoWhereInput[];
    OR?: Prisma.MantenimientoWhereInput[];
    NOT?: Prisma.MantenimientoWhereInput | Prisma.MantenimientoWhereInput[];
    tipo?: Prisma.EnumTipoMantenimientoFilter<"Mantenimiento"> | $Enums.TipoMantenimiento;
    actividad?: Prisma.StringFilter<"Mantenimiento"> | string;
    observaciones?: Prisma.StringNullableFilter<"Mantenimiento"> | string | null;
    programaId?: Prisma.IntNullableFilter<"Mantenimiento"> | number | null;
    programa?: Prisma.XOR<Prisma.ProgramaMantenimientoNullableScalarRelationFilter, Prisma.ProgramaMantenimientoWhereInput> | null;
    registro?: Prisma.XOR<Prisma.RegistroBitacoraScalarRelationFilter, Prisma.RegistroBitacoraWhereInput>;
}, "id" | "registroId">;
export type MantenimientoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    registroId?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    actividad?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrderInput | Prisma.SortOrder;
    programaId?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.MantenimientoCountOrderByAggregateInput;
    _avg?: Prisma.MantenimientoAvgOrderByAggregateInput;
    _max?: Prisma.MantenimientoMaxOrderByAggregateInput;
    _min?: Prisma.MantenimientoMinOrderByAggregateInput;
    _sum?: Prisma.MantenimientoSumOrderByAggregateInput;
};
export type MantenimientoScalarWhereWithAggregatesInput = {
    AND?: Prisma.MantenimientoScalarWhereWithAggregatesInput | Prisma.MantenimientoScalarWhereWithAggregatesInput[];
    OR?: Prisma.MantenimientoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MantenimientoScalarWhereWithAggregatesInput | Prisma.MantenimientoScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Mantenimiento"> | number;
    registroId?: Prisma.IntWithAggregatesFilter<"Mantenimiento"> | number;
    tipo?: Prisma.EnumTipoMantenimientoWithAggregatesFilter<"Mantenimiento"> | $Enums.TipoMantenimiento;
    actividad?: Prisma.StringWithAggregatesFilter<"Mantenimiento"> | string;
    observaciones?: Prisma.StringNullableWithAggregatesFilter<"Mantenimiento"> | string | null;
    programaId?: Prisma.IntNullableWithAggregatesFilter<"Mantenimiento"> | number | null;
};
export type MantenimientoCreateInput = {
    tipo: $Enums.TipoMantenimiento;
    actividad: string;
    observaciones?: string | null;
    programa?: Prisma.ProgramaMantenimientoCreateNestedOneWithoutMantenimientosInput;
    registro: Prisma.RegistroBitacoraCreateNestedOneWithoutMantenimientoInput;
};
export type MantenimientoUncheckedCreateInput = {
    id?: number;
    registroId: number;
    tipo: $Enums.TipoMantenimiento;
    actividad: string;
    observaciones?: string | null;
    programaId?: number | null;
};
export type MantenimientoUpdateInput = {
    tipo?: Prisma.EnumTipoMantenimientoFieldUpdateOperationsInput | $Enums.TipoMantenimiento;
    actividad?: Prisma.StringFieldUpdateOperationsInput | string;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    programa?: Prisma.ProgramaMantenimientoUpdateOneWithoutMantenimientosNestedInput;
    registro?: Prisma.RegistroBitacoraUpdateOneRequiredWithoutMantenimientoNestedInput;
};
export type MantenimientoUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    registroId?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo?: Prisma.EnumTipoMantenimientoFieldUpdateOperationsInput | $Enums.TipoMantenimiento;
    actividad?: Prisma.StringFieldUpdateOperationsInput | string;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    programaId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type MantenimientoCreateManyInput = {
    id?: number;
    registroId: number;
    tipo: $Enums.TipoMantenimiento;
    actividad: string;
    observaciones?: string | null;
    programaId?: number | null;
};
export type MantenimientoUpdateManyMutationInput = {
    tipo?: Prisma.EnumTipoMantenimientoFieldUpdateOperationsInput | $Enums.TipoMantenimiento;
    actividad?: Prisma.StringFieldUpdateOperationsInput | string;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type MantenimientoUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    registroId?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo?: Prisma.EnumTipoMantenimientoFieldUpdateOperationsInput | $Enums.TipoMantenimiento;
    actividad?: Prisma.StringFieldUpdateOperationsInput | string;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    programaId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type MantenimientoNullableScalarRelationFilter = {
    is?: Prisma.MantenimientoWhereInput | null;
    isNot?: Prisma.MantenimientoWhereInput | null;
};
export type MantenimientoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    registroId?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    actividad?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    programaId?: Prisma.SortOrder;
};
export type MantenimientoAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    registroId?: Prisma.SortOrder;
    programaId?: Prisma.SortOrder;
};
export type MantenimientoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    registroId?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    actividad?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    programaId?: Prisma.SortOrder;
};
export type MantenimientoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    registroId?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    actividad?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    programaId?: Prisma.SortOrder;
};
export type MantenimientoSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    registroId?: Prisma.SortOrder;
    programaId?: Prisma.SortOrder;
};
export type MantenimientoListRelationFilter = {
    every?: Prisma.MantenimientoWhereInput;
    some?: Prisma.MantenimientoWhereInput;
    none?: Prisma.MantenimientoWhereInput;
};
export type MantenimientoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type MantenimientoCreateNestedOneWithoutRegistroInput = {
    create?: Prisma.XOR<Prisma.MantenimientoCreateWithoutRegistroInput, Prisma.MantenimientoUncheckedCreateWithoutRegistroInput>;
    connectOrCreate?: Prisma.MantenimientoCreateOrConnectWithoutRegistroInput;
    connect?: Prisma.MantenimientoWhereUniqueInput;
};
export type MantenimientoUncheckedCreateNestedOneWithoutRegistroInput = {
    create?: Prisma.XOR<Prisma.MantenimientoCreateWithoutRegistroInput, Prisma.MantenimientoUncheckedCreateWithoutRegistroInput>;
    connectOrCreate?: Prisma.MantenimientoCreateOrConnectWithoutRegistroInput;
    connect?: Prisma.MantenimientoWhereUniqueInput;
};
export type MantenimientoUpdateOneWithoutRegistroNestedInput = {
    create?: Prisma.XOR<Prisma.MantenimientoCreateWithoutRegistroInput, Prisma.MantenimientoUncheckedCreateWithoutRegistroInput>;
    connectOrCreate?: Prisma.MantenimientoCreateOrConnectWithoutRegistroInput;
    upsert?: Prisma.MantenimientoUpsertWithoutRegistroInput;
    disconnect?: Prisma.MantenimientoWhereInput | boolean;
    delete?: Prisma.MantenimientoWhereInput | boolean;
    connect?: Prisma.MantenimientoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MantenimientoUpdateToOneWithWhereWithoutRegistroInput, Prisma.MantenimientoUpdateWithoutRegistroInput>, Prisma.MantenimientoUncheckedUpdateWithoutRegistroInput>;
};
export type MantenimientoUncheckedUpdateOneWithoutRegistroNestedInput = {
    create?: Prisma.XOR<Prisma.MantenimientoCreateWithoutRegistroInput, Prisma.MantenimientoUncheckedCreateWithoutRegistroInput>;
    connectOrCreate?: Prisma.MantenimientoCreateOrConnectWithoutRegistroInput;
    upsert?: Prisma.MantenimientoUpsertWithoutRegistroInput;
    disconnect?: Prisma.MantenimientoWhereInput | boolean;
    delete?: Prisma.MantenimientoWhereInput | boolean;
    connect?: Prisma.MantenimientoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MantenimientoUpdateToOneWithWhereWithoutRegistroInput, Prisma.MantenimientoUpdateWithoutRegistroInput>, Prisma.MantenimientoUncheckedUpdateWithoutRegistroInput>;
};
export type EnumTipoMantenimientoFieldUpdateOperationsInput = {
    set?: $Enums.TipoMantenimiento;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type MantenimientoCreateNestedManyWithoutProgramaInput = {
    create?: Prisma.XOR<Prisma.MantenimientoCreateWithoutProgramaInput, Prisma.MantenimientoUncheckedCreateWithoutProgramaInput> | Prisma.MantenimientoCreateWithoutProgramaInput[] | Prisma.MantenimientoUncheckedCreateWithoutProgramaInput[];
    connectOrCreate?: Prisma.MantenimientoCreateOrConnectWithoutProgramaInput | Prisma.MantenimientoCreateOrConnectWithoutProgramaInput[];
    createMany?: Prisma.MantenimientoCreateManyProgramaInputEnvelope;
    connect?: Prisma.MantenimientoWhereUniqueInput | Prisma.MantenimientoWhereUniqueInput[];
};
export type MantenimientoUncheckedCreateNestedManyWithoutProgramaInput = {
    create?: Prisma.XOR<Prisma.MantenimientoCreateWithoutProgramaInput, Prisma.MantenimientoUncheckedCreateWithoutProgramaInput> | Prisma.MantenimientoCreateWithoutProgramaInput[] | Prisma.MantenimientoUncheckedCreateWithoutProgramaInput[];
    connectOrCreate?: Prisma.MantenimientoCreateOrConnectWithoutProgramaInput | Prisma.MantenimientoCreateOrConnectWithoutProgramaInput[];
    createMany?: Prisma.MantenimientoCreateManyProgramaInputEnvelope;
    connect?: Prisma.MantenimientoWhereUniqueInput | Prisma.MantenimientoWhereUniqueInput[];
};
export type MantenimientoUpdateManyWithoutProgramaNestedInput = {
    create?: Prisma.XOR<Prisma.MantenimientoCreateWithoutProgramaInput, Prisma.MantenimientoUncheckedCreateWithoutProgramaInput> | Prisma.MantenimientoCreateWithoutProgramaInput[] | Prisma.MantenimientoUncheckedCreateWithoutProgramaInput[];
    connectOrCreate?: Prisma.MantenimientoCreateOrConnectWithoutProgramaInput | Prisma.MantenimientoCreateOrConnectWithoutProgramaInput[];
    upsert?: Prisma.MantenimientoUpsertWithWhereUniqueWithoutProgramaInput | Prisma.MantenimientoUpsertWithWhereUniqueWithoutProgramaInput[];
    createMany?: Prisma.MantenimientoCreateManyProgramaInputEnvelope;
    set?: Prisma.MantenimientoWhereUniqueInput | Prisma.MantenimientoWhereUniqueInput[];
    disconnect?: Prisma.MantenimientoWhereUniqueInput | Prisma.MantenimientoWhereUniqueInput[];
    delete?: Prisma.MantenimientoWhereUniqueInput | Prisma.MantenimientoWhereUniqueInput[];
    connect?: Prisma.MantenimientoWhereUniqueInput | Prisma.MantenimientoWhereUniqueInput[];
    update?: Prisma.MantenimientoUpdateWithWhereUniqueWithoutProgramaInput | Prisma.MantenimientoUpdateWithWhereUniqueWithoutProgramaInput[];
    updateMany?: Prisma.MantenimientoUpdateManyWithWhereWithoutProgramaInput | Prisma.MantenimientoUpdateManyWithWhereWithoutProgramaInput[];
    deleteMany?: Prisma.MantenimientoScalarWhereInput | Prisma.MantenimientoScalarWhereInput[];
};
export type MantenimientoUncheckedUpdateManyWithoutProgramaNestedInput = {
    create?: Prisma.XOR<Prisma.MantenimientoCreateWithoutProgramaInput, Prisma.MantenimientoUncheckedCreateWithoutProgramaInput> | Prisma.MantenimientoCreateWithoutProgramaInput[] | Prisma.MantenimientoUncheckedCreateWithoutProgramaInput[];
    connectOrCreate?: Prisma.MantenimientoCreateOrConnectWithoutProgramaInput | Prisma.MantenimientoCreateOrConnectWithoutProgramaInput[];
    upsert?: Prisma.MantenimientoUpsertWithWhereUniqueWithoutProgramaInput | Prisma.MantenimientoUpsertWithWhereUniqueWithoutProgramaInput[];
    createMany?: Prisma.MantenimientoCreateManyProgramaInputEnvelope;
    set?: Prisma.MantenimientoWhereUniqueInput | Prisma.MantenimientoWhereUniqueInput[];
    disconnect?: Prisma.MantenimientoWhereUniqueInput | Prisma.MantenimientoWhereUniqueInput[];
    delete?: Prisma.MantenimientoWhereUniqueInput | Prisma.MantenimientoWhereUniqueInput[];
    connect?: Prisma.MantenimientoWhereUniqueInput | Prisma.MantenimientoWhereUniqueInput[];
    update?: Prisma.MantenimientoUpdateWithWhereUniqueWithoutProgramaInput | Prisma.MantenimientoUpdateWithWhereUniqueWithoutProgramaInput[];
    updateMany?: Prisma.MantenimientoUpdateManyWithWhereWithoutProgramaInput | Prisma.MantenimientoUpdateManyWithWhereWithoutProgramaInput[];
    deleteMany?: Prisma.MantenimientoScalarWhereInput | Prisma.MantenimientoScalarWhereInput[];
};
export type MantenimientoCreateWithoutRegistroInput = {
    tipo: $Enums.TipoMantenimiento;
    actividad: string;
    observaciones?: string | null;
    programa?: Prisma.ProgramaMantenimientoCreateNestedOneWithoutMantenimientosInput;
};
export type MantenimientoUncheckedCreateWithoutRegistroInput = {
    id?: number;
    tipo: $Enums.TipoMantenimiento;
    actividad: string;
    observaciones?: string | null;
    programaId?: number | null;
};
export type MantenimientoCreateOrConnectWithoutRegistroInput = {
    where: Prisma.MantenimientoWhereUniqueInput;
    create: Prisma.XOR<Prisma.MantenimientoCreateWithoutRegistroInput, Prisma.MantenimientoUncheckedCreateWithoutRegistroInput>;
};
export type MantenimientoUpsertWithoutRegistroInput = {
    update: Prisma.XOR<Prisma.MantenimientoUpdateWithoutRegistroInput, Prisma.MantenimientoUncheckedUpdateWithoutRegistroInput>;
    create: Prisma.XOR<Prisma.MantenimientoCreateWithoutRegistroInput, Prisma.MantenimientoUncheckedCreateWithoutRegistroInput>;
    where?: Prisma.MantenimientoWhereInput;
};
export type MantenimientoUpdateToOneWithWhereWithoutRegistroInput = {
    where?: Prisma.MantenimientoWhereInput;
    data: Prisma.XOR<Prisma.MantenimientoUpdateWithoutRegistroInput, Prisma.MantenimientoUncheckedUpdateWithoutRegistroInput>;
};
export type MantenimientoUpdateWithoutRegistroInput = {
    tipo?: Prisma.EnumTipoMantenimientoFieldUpdateOperationsInput | $Enums.TipoMantenimiento;
    actividad?: Prisma.StringFieldUpdateOperationsInput | string;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    programa?: Prisma.ProgramaMantenimientoUpdateOneWithoutMantenimientosNestedInput;
};
export type MantenimientoUncheckedUpdateWithoutRegistroInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo?: Prisma.EnumTipoMantenimientoFieldUpdateOperationsInput | $Enums.TipoMantenimiento;
    actividad?: Prisma.StringFieldUpdateOperationsInput | string;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    programaId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type MantenimientoCreateWithoutProgramaInput = {
    tipo: $Enums.TipoMantenimiento;
    actividad: string;
    observaciones?: string | null;
    registro: Prisma.RegistroBitacoraCreateNestedOneWithoutMantenimientoInput;
};
export type MantenimientoUncheckedCreateWithoutProgramaInput = {
    id?: number;
    registroId: number;
    tipo: $Enums.TipoMantenimiento;
    actividad: string;
    observaciones?: string | null;
};
export type MantenimientoCreateOrConnectWithoutProgramaInput = {
    where: Prisma.MantenimientoWhereUniqueInput;
    create: Prisma.XOR<Prisma.MantenimientoCreateWithoutProgramaInput, Prisma.MantenimientoUncheckedCreateWithoutProgramaInput>;
};
export type MantenimientoCreateManyProgramaInputEnvelope = {
    data: Prisma.MantenimientoCreateManyProgramaInput | Prisma.MantenimientoCreateManyProgramaInput[];
    skipDuplicates?: boolean;
};
export type MantenimientoUpsertWithWhereUniqueWithoutProgramaInput = {
    where: Prisma.MantenimientoWhereUniqueInput;
    update: Prisma.XOR<Prisma.MantenimientoUpdateWithoutProgramaInput, Prisma.MantenimientoUncheckedUpdateWithoutProgramaInput>;
    create: Prisma.XOR<Prisma.MantenimientoCreateWithoutProgramaInput, Prisma.MantenimientoUncheckedCreateWithoutProgramaInput>;
};
export type MantenimientoUpdateWithWhereUniqueWithoutProgramaInput = {
    where: Prisma.MantenimientoWhereUniqueInput;
    data: Prisma.XOR<Prisma.MantenimientoUpdateWithoutProgramaInput, Prisma.MantenimientoUncheckedUpdateWithoutProgramaInput>;
};
export type MantenimientoUpdateManyWithWhereWithoutProgramaInput = {
    where: Prisma.MantenimientoScalarWhereInput;
    data: Prisma.XOR<Prisma.MantenimientoUpdateManyMutationInput, Prisma.MantenimientoUncheckedUpdateManyWithoutProgramaInput>;
};
export type MantenimientoScalarWhereInput = {
    AND?: Prisma.MantenimientoScalarWhereInput | Prisma.MantenimientoScalarWhereInput[];
    OR?: Prisma.MantenimientoScalarWhereInput[];
    NOT?: Prisma.MantenimientoScalarWhereInput | Prisma.MantenimientoScalarWhereInput[];
    id?: Prisma.IntFilter<"Mantenimiento"> | number;
    registroId?: Prisma.IntFilter<"Mantenimiento"> | number;
    tipo?: Prisma.EnumTipoMantenimientoFilter<"Mantenimiento"> | $Enums.TipoMantenimiento;
    actividad?: Prisma.StringFilter<"Mantenimiento"> | string;
    observaciones?: Prisma.StringNullableFilter<"Mantenimiento"> | string | null;
    programaId?: Prisma.IntNullableFilter<"Mantenimiento"> | number | null;
};
export type MantenimientoCreateManyProgramaInput = {
    id?: number;
    registroId: number;
    tipo: $Enums.TipoMantenimiento;
    actividad: string;
    observaciones?: string | null;
};
export type MantenimientoUpdateWithoutProgramaInput = {
    tipo?: Prisma.EnumTipoMantenimientoFieldUpdateOperationsInput | $Enums.TipoMantenimiento;
    actividad?: Prisma.StringFieldUpdateOperationsInput | string;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    registro?: Prisma.RegistroBitacoraUpdateOneRequiredWithoutMantenimientoNestedInput;
};
export type MantenimientoUncheckedUpdateWithoutProgramaInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    registroId?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo?: Prisma.EnumTipoMantenimientoFieldUpdateOperationsInput | $Enums.TipoMantenimiento;
    actividad?: Prisma.StringFieldUpdateOperationsInput | string;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type MantenimientoUncheckedUpdateManyWithoutProgramaInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    registroId?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo?: Prisma.EnumTipoMantenimientoFieldUpdateOperationsInput | $Enums.TipoMantenimiento;
    actividad?: Prisma.StringFieldUpdateOperationsInput | string;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type MantenimientoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    registroId?: boolean;
    tipo?: boolean;
    actividad?: boolean;
    observaciones?: boolean;
    programaId?: boolean;
    programa?: boolean | Prisma.Mantenimiento$programaArgs<ExtArgs>;
    registro?: boolean | Prisma.RegistroBitacoraDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["mantenimiento"]>;
export type MantenimientoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    registroId?: boolean;
    tipo?: boolean;
    actividad?: boolean;
    observaciones?: boolean;
    programaId?: boolean;
    programa?: boolean | Prisma.Mantenimiento$programaArgs<ExtArgs>;
    registro?: boolean | Prisma.RegistroBitacoraDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["mantenimiento"]>;
export type MantenimientoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    registroId?: boolean;
    tipo?: boolean;
    actividad?: boolean;
    observaciones?: boolean;
    programaId?: boolean;
    programa?: boolean | Prisma.Mantenimiento$programaArgs<ExtArgs>;
    registro?: boolean | Prisma.RegistroBitacoraDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["mantenimiento"]>;
export type MantenimientoSelectScalar = {
    id?: boolean;
    registroId?: boolean;
    tipo?: boolean;
    actividad?: boolean;
    observaciones?: boolean;
    programaId?: boolean;
};
export type MantenimientoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "registroId" | "tipo" | "actividad" | "observaciones" | "programaId", ExtArgs["result"]["mantenimiento"]>;
export type MantenimientoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    programa?: boolean | Prisma.Mantenimiento$programaArgs<ExtArgs>;
    registro?: boolean | Prisma.RegistroBitacoraDefaultArgs<ExtArgs>;
};
export type MantenimientoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    programa?: boolean | Prisma.Mantenimiento$programaArgs<ExtArgs>;
    registro?: boolean | Prisma.RegistroBitacoraDefaultArgs<ExtArgs>;
};
export type MantenimientoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    programa?: boolean | Prisma.Mantenimiento$programaArgs<ExtArgs>;
    registro?: boolean | Prisma.RegistroBitacoraDefaultArgs<ExtArgs>;
};
export type $MantenimientoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Mantenimiento";
    objects: {
        programa: Prisma.$ProgramaMantenimientoPayload<ExtArgs> | null;
        registro: Prisma.$RegistroBitacoraPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        registroId: number;
        tipo: $Enums.TipoMantenimiento;
        actividad: string;
        observaciones: string | null;
        programaId: number | null;
    }, ExtArgs["result"]["mantenimiento"]>;
    composites: {};
};
export type MantenimientoGetPayload<S extends boolean | null | undefined | MantenimientoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MantenimientoPayload, S>;
export type MantenimientoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MantenimientoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MantenimientoCountAggregateInputType | true;
};
export interface MantenimientoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Mantenimiento'];
        meta: {
            name: 'Mantenimiento';
        };
    };
    findUnique<T extends MantenimientoFindUniqueArgs>(args: Prisma.SelectSubset<T, MantenimientoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MantenimientoClient<runtime.Types.Result.GetResult<Prisma.$MantenimientoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MantenimientoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MantenimientoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MantenimientoClient<runtime.Types.Result.GetResult<Prisma.$MantenimientoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MantenimientoFindFirstArgs>(args?: Prisma.SelectSubset<T, MantenimientoFindFirstArgs<ExtArgs>>): Prisma.Prisma__MantenimientoClient<runtime.Types.Result.GetResult<Prisma.$MantenimientoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MantenimientoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MantenimientoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MantenimientoClient<runtime.Types.Result.GetResult<Prisma.$MantenimientoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MantenimientoFindManyArgs>(args?: Prisma.SelectSubset<T, MantenimientoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MantenimientoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MantenimientoCreateArgs>(args: Prisma.SelectSubset<T, MantenimientoCreateArgs<ExtArgs>>): Prisma.Prisma__MantenimientoClient<runtime.Types.Result.GetResult<Prisma.$MantenimientoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MantenimientoCreateManyArgs>(args?: Prisma.SelectSubset<T, MantenimientoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends MantenimientoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MantenimientoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MantenimientoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends MantenimientoDeleteArgs>(args: Prisma.SelectSubset<T, MantenimientoDeleteArgs<ExtArgs>>): Prisma.Prisma__MantenimientoClient<runtime.Types.Result.GetResult<Prisma.$MantenimientoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MantenimientoUpdateArgs>(args: Prisma.SelectSubset<T, MantenimientoUpdateArgs<ExtArgs>>): Prisma.Prisma__MantenimientoClient<runtime.Types.Result.GetResult<Prisma.$MantenimientoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MantenimientoDeleteManyArgs>(args?: Prisma.SelectSubset<T, MantenimientoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MantenimientoUpdateManyArgs>(args: Prisma.SelectSubset<T, MantenimientoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends MantenimientoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MantenimientoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MantenimientoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends MantenimientoUpsertArgs>(args: Prisma.SelectSubset<T, MantenimientoUpsertArgs<ExtArgs>>): Prisma.Prisma__MantenimientoClient<runtime.Types.Result.GetResult<Prisma.$MantenimientoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MantenimientoCountArgs>(args?: Prisma.Subset<T, MantenimientoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MantenimientoCountAggregateOutputType> : number>;
    aggregate<T extends MantenimientoAggregateArgs>(args: Prisma.Subset<T, MantenimientoAggregateArgs>): Prisma.PrismaPromise<GetMantenimientoAggregateType<T>>;
    groupBy<T extends MantenimientoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MantenimientoGroupByArgs['orderBy'];
    } : {
        orderBy?: MantenimientoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MantenimientoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMantenimientoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MantenimientoFieldRefs;
}
export interface Prisma__MantenimientoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    programa<T extends Prisma.Mantenimiento$programaArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Mantenimiento$programaArgs<ExtArgs>>): Prisma.Prisma__ProgramaMantenimientoClient<runtime.Types.Result.GetResult<Prisma.$ProgramaMantenimientoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    registro<T extends Prisma.RegistroBitacoraDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RegistroBitacoraDefaultArgs<ExtArgs>>): Prisma.Prisma__RegistroBitacoraClient<runtime.Types.Result.GetResult<Prisma.$RegistroBitacoraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MantenimientoFieldRefs {
    readonly id: Prisma.FieldRef<"Mantenimiento", 'Int'>;
    readonly registroId: Prisma.FieldRef<"Mantenimiento", 'Int'>;
    readonly tipo: Prisma.FieldRef<"Mantenimiento", 'TipoMantenimiento'>;
    readonly actividad: Prisma.FieldRef<"Mantenimiento", 'String'>;
    readonly observaciones: Prisma.FieldRef<"Mantenimiento", 'String'>;
    readonly programaId: Prisma.FieldRef<"Mantenimiento", 'Int'>;
}
export type MantenimientoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MantenimientoSelect<ExtArgs> | null;
    omit?: Prisma.MantenimientoOmit<ExtArgs> | null;
    include?: Prisma.MantenimientoInclude<ExtArgs> | null;
    where: Prisma.MantenimientoWhereUniqueInput;
};
export type MantenimientoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MantenimientoSelect<ExtArgs> | null;
    omit?: Prisma.MantenimientoOmit<ExtArgs> | null;
    include?: Prisma.MantenimientoInclude<ExtArgs> | null;
    where: Prisma.MantenimientoWhereUniqueInput;
};
export type MantenimientoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MantenimientoSelect<ExtArgs> | null;
    omit?: Prisma.MantenimientoOmit<ExtArgs> | null;
    include?: Prisma.MantenimientoInclude<ExtArgs> | null;
    where?: Prisma.MantenimientoWhereInput;
    orderBy?: Prisma.MantenimientoOrderByWithRelationInput | Prisma.MantenimientoOrderByWithRelationInput[];
    cursor?: Prisma.MantenimientoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MantenimientoScalarFieldEnum | Prisma.MantenimientoScalarFieldEnum[];
};
export type MantenimientoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MantenimientoSelect<ExtArgs> | null;
    omit?: Prisma.MantenimientoOmit<ExtArgs> | null;
    include?: Prisma.MantenimientoInclude<ExtArgs> | null;
    where?: Prisma.MantenimientoWhereInput;
    orderBy?: Prisma.MantenimientoOrderByWithRelationInput | Prisma.MantenimientoOrderByWithRelationInput[];
    cursor?: Prisma.MantenimientoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MantenimientoScalarFieldEnum | Prisma.MantenimientoScalarFieldEnum[];
};
export type MantenimientoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MantenimientoSelect<ExtArgs> | null;
    omit?: Prisma.MantenimientoOmit<ExtArgs> | null;
    include?: Prisma.MantenimientoInclude<ExtArgs> | null;
    where?: Prisma.MantenimientoWhereInput;
    orderBy?: Prisma.MantenimientoOrderByWithRelationInput | Prisma.MantenimientoOrderByWithRelationInput[];
    cursor?: Prisma.MantenimientoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MantenimientoScalarFieldEnum | Prisma.MantenimientoScalarFieldEnum[];
};
export type MantenimientoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MantenimientoSelect<ExtArgs> | null;
    omit?: Prisma.MantenimientoOmit<ExtArgs> | null;
    include?: Prisma.MantenimientoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MantenimientoCreateInput, Prisma.MantenimientoUncheckedCreateInput>;
};
export type MantenimientoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MantenimientoCreateManyInput | Prisma.MantenimientoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MantenimientoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MantenimientoSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MantenimientoOmit<ExtArgs> | null;
    data: Prisma.MantenimientoCreateManyInput | Prisma.MantenimientoCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.MantenimientoIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type MantenimientoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MantenimientoSelect<ExtArgs> | null;
    omit?: Prisma.MantenimientoOmit<ExtArgs> | null;
    include?: Prisma.MantenimientoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MantenimientoUpdateInput, Prisma.MantenimientoUncheckedUpdateInput>;
    where: Prisma.MantenimientoWhereUniqueInput;
};
export type MantenimientoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MantenimientoUpdateManyMutationInput, Prisma.MantenimientoUncheckedUpdateManyInput>;
    where?: Prisma.MantenimientoWhereInput;
    limit?: number;
};
export type MantenimientoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MantenimientoSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MantenimientoOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MantenimientoUpdateManyMutationInput, Prisma.MantenimientoUncheckedUpdateManyInput>;
    where?: Prisma.MantenimientoWhereInput;
    limit?: number;
    include?: Prisma.MantenimientoIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type MantenimientoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MantenimientoSelect<ExtArgs> | null;
    omit?: Prisma.MantenimientoOmit<ExtArgs> | null;
    include?: Prisma.MantenimientoInclude<ExtArgs> | null;
    where: Prisma.MantenimientoWhereUniqueInput;
    create: Prisma.XOR<Prisma.MantenimientoCreateInput, Prisma.MantenimientoUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MantenimientoUpdateInput, Prisma.MantenimientoUncheckedUpdateInput>;
};
export type MantenimientoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MantenimientoSelect<ExtArgs> | null;
    omit?: Prisma.MantenimientoOmit<ExtArgs> | null;
    include?: Prisma.MantenimientoInclude<ExtArgs> | null;
    where: Prisma.MantenimientoWhereUniqueInput;
};
export type MantenimientoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MantenimientoWhereInput;
    limit?: number;
};
export type Mantenimiento$programaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProgramaMantenimientoSelect<ExtArgs> | null;
    omit?: Prisma.ProgramaMantenimientoOmit<ExtArgs> | null;
    include?: Prisma.ProgramaMantenimientoInclude<ExtArgs> | null;
    where?: Prisma.ProgramaMantenimientoWhereInput;
};
export type MantenimientoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MantenimientoSelect<ExtArgs> | null;
    omit?: Prisma.MantenimientoOmit<ExtArgs> | null;
    include?: Prisma.MantenimientoInclude<ExtArgs> | null;
};
export {};
