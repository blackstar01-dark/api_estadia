import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ProgramaMantenimientoModel = runtime.Types.Result.DefaultSelection<Prisma.$ProgramaMantenimientoPayload>;
export type AggregateProgramaMantenimiento = {
    _count: ProgramaMantenimientoCountAggregateOutputType | null;
    _avg: ProgramaMantenimientoAvgAggregateOutputType | null;
    _sum: ProgramaMantenimientoSumAggregateOutputType | null;
    _min: ProgramaMantenimientoMinAggregateOutputType | null;
    _max: ProgramaMantenimientoMaxAggregateOutputType | null;
};
export type ProgramaMantenimientoAvgAggregateOutputType = {
    id: number | null;
    estacionId: number | null;
    plantillaId: number | null;
};
export type ProgramaMantenimientoSumAggregateOutputType = {
    id: number | null;
    estacionId: number | null;
    plantillaId: number | null;
};
export type ProgramaMantenimientoMinAggregateOutputType = {
    id: number | null;
    estacionId: number | null;
    plantillaId: number | null;
    activo: boolean | null;
    fechaInicio: Date | null;
};
export type ProgramaMantenimientoMaxAggregateOutputType = {
    id: number | null;
    estacionId: number | null;
    plantillaId: number | null;
    activo: boolean | null;
    fechaInicio: Date | null;
};
export type ProgramaMantenimientoCountAggregateOutputType = {
    id: number;
    estacionId: number;
    plantillaId: number;
    activo: number;
    fechaInicio: number;
    _all: number;
};
export type ProgramaMantenimientoAvgAggregateInputType = {
    id?: true;
    estacionId?: true;
    plantillaId?: true;
};
export type ProgramaMantenimientoSumAggregateInputType = {
    id?: true;
    estacionId?: true;
    plantillaId?: true;
};
export type ProgramaMantenimientoMinAggregateInputType = {
    id?: true;
    estacionId?: true;
    plantillaId?: true;
    activo?: true;
    fechaInicio?: true;
};
export type ProgramaMantenimientoMaxAggregateInputType = {
    id?: true;
    estacionId?: true;
    plantillaId?: true;
    activo?: true;
    fechaInicio?: true;
};
export type ProgramaMantenimientoCountAggregateInputType = {
    id?: true;
    estacionId?: true;
    plantillaId?: true;
    activo?: true;
    fechaInicio?: true;
    _all?: true;
};
export type ProgramaMantenimientoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProgramaMantenimientoWhereInput;
    orderBy?: Prisma.ProgramaMantenimientoOrderByWithRelationInput | Prisma.ProgramaMantenimientoOrderByWithRelationInput[];
    cursor?: Prisma.ProgramaMantenimientoWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ProgramaMantenimientoCountAggregateInputType;
    _avg?: ProgramaMantenimientoAvgAggregateInputType;
    _sum?: ProgramaMantenimientoSumAggregateInputType;
    _min?: ProgramaMantenimientoMinAggregateInputType;
    _max?: ProgramaMantenimientoMaxAggregateInputType;
};
export type GetProgramaMantenimientoAggregateType<T extends ProgramaMantenimientoAggregateArgs> = {
    [P in keyof T & keyof AggregateProgramaMantenimiento]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProgramaMantenimiento[P]> : Prisma.GetScalarType<T[P], AggregateProgramaMantenimiento[P]>;
};
export type ProgramaMantenimientoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProgramaMantenimientoWhereInput;
    orderBy?: Prisma.ProgramaMantenimientoOrderByWithAggregationInput | Prisma.ProgramaMantenimientoOrderByWithAggregationInput[];
    by: Prisma.ProgramaMantenimientoScalarFieldEnum[] | Prisma.ProgramaMantenimientoScalarFieldEnum;
    having?: Prisma.ProgramaMantenimientoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProgramaMantenimientoCountAggregateInputType | true;
    _avg?: ProgramaMantenimientoAvgAggregateInputType;
    _sum?: ProgramaMantenimientoSumAggregateInputType;
    _min?: ProgramaMantenimientoMinAggregateInputType;
    _max?: ProgramaMantenimientoMaxAggregateInputType;
};
export type ProgramaMantenimientoGroupByOutputType = {
    id: number;
    estacionId: number;
    plantillaId: number;
    activo: boolean;
    fechaInicio: Date;
    _count: ProgramaMantenimientoCountAggregateOutputType | null;
    _avg: ProgramaMantenimientoAvgAggregateOutputType | null;
    _sum: ProgramaMantenimientoSumAggregateOutputType | null;
    _min: ProgramaMantenimientoMinAggregateOutputType | null;
    _max: ProgramaMantenimientoMaxAggregateOutputType | null;
};
type GetProgramaMantenimientoGroupByPayload<T extends ProgramaMantenimientoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProgramaMantenimientoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProgramaMantenimientoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProgramaMantenimientoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProgramaMantenimientoGroupByOutputType[P]>;
}>>;
export type ProgramaMantenimientoWhereInput = {
    AND?: Prisma.ProgramaMantenimientoWhereInput | Prisma.ProgramaMantenimientoWhereInput[];
    OR?: Prisma.ProgramaMantenimientoWhereInput[];
    NOT?: Prisma.ProgramaMantenimientoWhereInput | Prisma.ProgramaMantenimientoWhereInput[];
    id?: Prisma.IntFilter<"ProgramaMantenimiento"> | number;
    estacionId?: Prisma.IntFilter<"ProgramaMantenimiento"> | number;
    plantillaId?: Prisma.IntFilter<"ProgramaMantenimiento"> | number;
    activo?: Prisma.BoolFilter<"ProgramaMantenimiento"> | boolean;
    fechaInicio?: Prisma.DateTimeFilter<"ProgramaMantenimiento"> | Date | string;
    estacion?: Prisma.XOR<Prisma.EstacionScalarRelationFilter, Prisma.EstacionWhereInput>;
    plantilla?: Prisma.XOR<Prisma.PlantillaMantenimientoScalarRelationFilter, Prisma.PlantillaMantenimientoWhereInput>;
    mantenimientos?: Prisma.MantenimientoListRelationFilter;
};
export type ProgramaMantenimientoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    estacionId?: Prisma.SortOrder;
    plantillaId?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    fechaInicio?: Prisma.SortOrder;
    estacion?: Prisma.EstacionOrderByWithRelationInput;
    plantilla?: Prisma.PlantillaMantenimientoOrderByWithRelationInput;
    mantenimientos?: Prisma.MantenimientoOrderByRelationAggregateInput;
};
export type ProgramaMantenimientoWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    estacionId_plantillaId?: Prisma.ProgramaMantenimientoEstacionIdPlantillaIdCompoundUniqueInput;
    AND?: Prisma.ProgramaMantenimientoWhereInput | Prisma.ProgramaMantenimientoWhereInput[];
    OR?: Prisma.ProgramaMantenimientoWhereInput[];
    NOT?: Prisma.ProgramaMantenimientoWhereInput | Prisma.ProgramaMantenimientoWhereInput[];
    estacionId?: Prisma.IntFilter<"ProgramaMantenimiento"> | number;
    plantillaId?: Prisma.IntFilter<"ProgramaMantenimiento"> | number;
    activo?: Prisma.BoolFilter<"ProgramaMantenimiento"> | boolean;
    fechaInicio?: Prisma.DateTimeFilter<"ProgramaMantenimiento"> | Date | string;
    estacion?: Prisma.XOR<Prisma.EstacionScalarRelationFilter, Prisma.EstacionWhereInput>;
    plantilla?: Prisma.XOR<Prisma.PlantillaMantenimientoScalarRelationFilter, Prisma.PlantillaMantenimientoWhereInput>;
    mantenimientos?: Prisma.MantenimientoListRelationFilter;
}, "id" | "estacionId_plantillaId">;
export type ProgramaMantenimientoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    estacionId?: Prisma.SortOrder;
    plantillaId?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    fechaInicio?: Prisma.SortOrder;
    _count?: Prisma.ProgramaMantenimientoCountOrderByAggregateInput;
    _avg?: Prisma.ProgramaMantenimientoAvgOrderByAggregateInput;
    _max?: Prisma.ProgramaMantenimientoMaxOrderByAggregateInput;
    _min?: Prisma.ProgramaMantenimientoMinOrderByAggregateInput;
    _sum?: Prisma.ProgramaMantenimientoSumOrderByAggregateInput;
};
export type ProgramaMantenimientoScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProgramaMantenimientoScalarWhereWithAggregatesInput | Prisma.ProgramaMantenimientoScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProgramaMantenimientoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProgramaMantenimientoScalarWhereWithAggregatesInput | Prisma.ProgramaMantenimientoScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"ProgramaMantenimiento"> | number;
    estacionId?: Prisma.IntWithAggregatesFilter<"ProgramaMantenimiento"> | number;
    plantillaId?: Prisma.IntWithAggregatesFilter<"ProgramaMantenimiento"> | number;
    activo?: Prisma.BoolWithAggregatesFilter<"ProgramaMantenimiento"> | boolean;
    fechaInicio?: Prisma.DateTimeWithAggregatesFilter<"ProgramaMantenimiento"> | Date | string;
};
export type ProgramaMantenimientoCreateInput = {
    activo?: boolean;
    fechaInicio?: Date | string;
    estacion: Prisma.EstacionCreateNestedOneWithoutProgramasMantenimientoInput;
    plantilla: Prisma.PlantillaMantenimientoCreateNestedOneWithoutProgramasInput;
    mantenimientos?: Prisma.MantenimientoCreateNestedManyWithoutProgramaInput;
};
export type ProgramaMantenimientoUncheckedCreateInput = {
    id?: number;
    estacionId: number;
    plantillaId: number;
    activo?: boolean;
    fechaInicio?: Date | string;
    mantenimientos?: Prisma.MantenimientoUncheckedCreateNestedManyWithoutProgramaInput;
};
export type ProgramaMantenimientoUpdateInput = {
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estacion?: Prisma.EstacionUpdateOneRequiredWithoutProgramasMantenimientoNestedInput;
    plantilla?: Prisma.PlantillaMantenimientoUpdateOneRequiredWithoutProgramasNestedInput;
    mantenimientos?: Prisma.MantenimientoUpdateManyWithoutProgramaNestedInput;
};
export type ProgramaMantenimientoUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    estacionId?: Prisma.IntFieldUpdateOperationsInput | number;
    plantillaId?: Prisma.IntFieldUpdateOperationsInput | number;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    mantenimientos?: Prisma.MantenimientoUncheckedUpdateManyWithoutProgramaNestedInput;
};
export type ProgramaMantenimientoCreateManyInput = {
    id?: number;
    estacionId: number;
    plantillaId: number;
    activo?: boolean;
    fechaInicio?: Date | string;
};
export type ProgramaMantenimientoUpdateManyMutationInput = {
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProgramaMantenimientoUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    estacionId?: Prisma.IntFieldUpdateOperationsInput | number;
    plantillaId?: Prisma.IntFieldUpdateOperationsInput | number;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProgramaMantenimientoListRelationFilter = {
    every?: Prisma.ProgramaMantenimientoWhereInput;
    some?: Prisma.ProgramaMantenimientoWhereInput;
    none?: Prisma.ProgramaMantenimientoWhereInput;
};
export type ProgramaMantenimientoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ProgramaMantenimientoNullableScalarRelationFilter = {
    is?: Prisma.ProgramaMantenimientoWhereInput | null;
    isNot?: Prisma.ProgramaMantenimientoWhereInput | null;
};
export type ProgramaMantenimientoEstacionIdPlantillaIdCompoundUniqueInput = {
    estacionId: number;
    plantillaId: number;
};
export type ProgramaMantenimientoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    estacionId?: Prisma.SortOrder;
    plantillaId?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    fechaInicio?: Prisma.SortOrder;
};
export type ProgramaMantenimientoAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    estacionId?: Prisma.SortOrder;
    plantillaId?: Prisma.SortOrder;
};
export type ProgramaMantenimientoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    estacionId?: Prisma.SortOrder;
    plantillaId?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    fechaInicio?: Prisma.SortOrder;
};
export type ProgramaMantenimientoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    estacionId?: Prisma.SortOrder;
    plantillaId?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    fechaInicio?: Prisma.SortOrder;
};
export type ProgramaMantenimientoSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    estacionId?: Prisma.SortOrder;
    plantillaId?: Prisma.SortOrder;
};
export type ProgramaMantenimientoCreateNestedManyWithoutEstacionInput = {
    create?: Prisma.XOR<Prisma.ProgramaMantenimientoCreateWithoutEstacionInput, Prisma.ProgramaMantenimientoUncheckedCreateWithoutEstacionInput> | Prisma.ProgramaMantenimientoCreateWithoutEstacionInput[] | Prisma.ProgramaMantenimientoUncheckedCreateWithoutEstacionInput[];
    connectOrCreate?: Prisma.ProgramaMantenimientoCreateOrConnectWithoutEstacionInput | Prisma.ProgramaMantenimientoCreateOrConnectWithoutEstacionInput[];
    createMany?: Prisma.ProgramaMantenimientoCreateManyEstacionInputEnvelope;
    connect?: Prisma.ProgramaMantenimientoWhereUniqueInput | Prisma.ProgramaMantenimientoWhereUniqueInput[];
};
export type ProgramaMantenimientoUncheckedCreateNestedManyWithoutEstacionInput = {
    create?: Prisma.XOR<Prisma.ProgramaMantenimientoCreateWithoutEstacionInput, Prisma.ProgramaMantenimientoUncheckedCreateWithoutEstacionInput> | Prisma.ProgramaMantenimientoCreateWithoutEstacionInput[] | Prisma.ProgramaMantenimientoUncheckedCreateWithoutEstacionInput[];
    connectOrCreate?: Prisma.ProgramaMantenimientoCreateOrConnectWithoutEstacionInput | Prisma.ProgramaMantenimientoCreateOrConnectWithoutEstacionInput[];
    createMany?: Prisma.ProgramaMantenimientoCreateManyEstacionInputEnvelope;
    connect?: Prisma.ProgramaMantenimientoWhereUniqueInput | Prisma.ProgramaMantenimientoWhereUniqueInput[];
};
export type ProgramaMantenimientoUpdateManyWithoutEstacionNestedInput = {
    create?: Prisma.XOR<Prisma.ProgramaMantenimientoCreateWithoutEstacionInput, Prisma.ProgramaMantenimientoUncheckedCreateWithoutEstacionInput> | Prisma.ProgramaMantenimientoCreateWithoutEstacionInput[] | Prisma.ProgramaMantenimientoUncheckedCreateWithoutEstacionInput[];
    connectOrCreate?: Prisma.ProgramaMantenimientoCreateOrConnectWithoutEstacionInput | Prisma.ProgramaMantenimientoCreateOrConnectWithoutEstacionInput[];
    upsert?: Prisma.ProgramaMantenimientoUpsertWithWhereUniqueWithoutEstacionInput | Prisma.ProgramaMantenimientoUpsertWithWhereUniqueWithoutEstacionInput[];
    createMany?: Prisma.ProgramaMantenimientoCreateManyEstacionInputEnvelope;
    set?: Prisma.ProgramaMantenimientoWhereUniqueInput | Prisma.ProgramaMantenimientoWhereUniqueInput[];
    disconnect?: Prisma.ProgramaMantenimientoWhereUniqueInput | Prisma.ProgramaMantenimientoWhereUniqueInput[];
    delete?: Prisma.ProgramaMantenimientoWhereUniqueInput | Prisma.ProgramaMantenimientoWhereUniqueInput[];
    connect?: Prisma.ProgramaMantenimientoWhereUniqueInput | Prisma.ProgramaMantenimientoWhereUniqueInput[];
    update?: Prisma.ProgramaMantenimientoUpdateWithWhereUniqueWithoutEstacionInput | Prisma.ProgramaMantenimientoUpdateWithWhereUniqueWithoutEstacionInput[];
    updateMany?: Prisma.ProgramaMantenimientoUpdateManyWithWhereWithoutEstacionInput | Prisma.ProgramaMantenimientoUpdateManyWithWhereWithoutEstacionInput[];
    deleteMany?: Prisma.ProgramaMantenimientoScalarWhereInput | Prisma.ProgramaMantenimientoScalarWhereInput[];
};
export type ProgramaMantenimientoUncheckedUpdateManyWithoutEstacionNestedInput = {
    create?: Prisma.XOR<Prisma.ProgramaMantenimientoCreateWithoutEstacionInput, Prisma.ProgramaMantenimientoUncheckedCreateWithoutEstacionInput> | Prisma.ProgramaMantenimientoCreateWithoutEstacionInput[] | Prisma.ProgramaMantenimientoUncheckedCreateWithoutEstacionInput[];
    connectOrCreate?: Prisma.ProgramaMantenimientoCreateOrConnectWithoutEstacionInput | Prisma.ProgramaMantenimientoCreateOrConnectWithoutEstacionInput[];
    upsert?: Prisma.ProgramaMantenimientoUpsertWithWhereUniqueWithoutEstacionInput | Prisma.ProgramaMantenimientoUpsertWithWhereUniqueWithoutEstacionInput[];
    createMany?: Prisma.ProgramaMantenimientoCreateManyEstacionInputEnvelope;
    set?: Prisma.ProgramaMantenimientoWhereUniqueInput | Prisma.ProgramaMantenimientoWhereUniqueInput[];
    disconnect?: Prisma.ProgramaMantenimientoWhereUniqueInput | Prisma.ProgramaMantenimientoWhereUniqueInput[];
    delete?: Prisma.ProgramaMantenimientoWhereUniqueInput | Prisma.ProgramaMantenimientoWhereUniqueInput[];
    connect?: Prisma.ProgramaMantenimientoWhereUniqueInput | Prisma.ProgramaMantenimientoWhereUniqueInput[];
    update?: Prisma.ProgramaMantenimientoUpdateWithWhereUniqueWithoutEstacionInput | Prisma.ProgramaMantenimientoUpdateWithWhereUniqueWithoutEstacionInput[];
    updateMany?: Prisma.ProgramaMantenimientoUpdateManyWithWhereWithoutEstacionInput | Prisma.ProgramaMantenimientoUpdateManyWithWhereWithoutEstacionInput[];
    deleteMany?: Prisma.ProgramaMantenimientoScalarWhereInput | Prisma.ProgramaMantenimientoScalarWhereInput[];
};
export type ProgramaMantenimientoCreateNestedOneWithoutMantenimientosInput = {
    create?: Prisma.XOR<Prisma.ProgramaMantenimientoCreateWithoutMantenimientosInput, Prisma.ProgramaMantenimientoUncheckedCreateWithoutMantenimientosInput>;
    connectOrCreate?: Prisma.ProgramaMantenimientoCreateOrConnectWithoutMantenimientosInput;
    connect?: Prisma.ProgramaMantenimientoWhereUniqueInput;
};
export type ProgramaMantenimientoUpdateOneWithoutMantenimientosNestedInput = {
    create?: Prisma.XOR<Prisma.ProgramaMantenimientoCreateWithoutMantenimientosInput, Prisma.ProgramaMantenimientoUncheckedCreateWithoutMantenimientosInput>;
    connectOrCreate?: Prisma.ProgramaMantenimientoCreateOrConnectWithoutMantenimientosInput;
    upsert?: Prisma.ProgramaMantenimientoUpsertWithoutMantenimientosInput;
    disconnect?: Prisma.ProgramaMantenimientoWhereInput | boolean;
    delete?: Prisma.ProgramaMantenimientoWhereInput | boolean;
    connect?: Prisma.ProgramaMantenimientoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProgramaMantenimientoUpdateToOneWithWhereWithoutMantenimientosInput, Prisma.ProgramaMantenimientoUpdateWithoutMantenimientosInput>, Prisma.ProgramaMantenimientoUncheckedUpdateWithoutMantenimientosInput>;
};
export type ProgramaMantenimientoCreateNestedManyWithoutPlantillaInput = {
    create?: Prisma.XOR<Prisma.ProgramaMantenimientoCreateWithoutPlantillaInput, Prisma.ProgramaMantenimientoUncheckedCreateWithoutPlantillaInput> | Prisma.ProgramaMantenimientoCreateWithoutPlantillaInput[] | Prisma.ProgramaMantenimientoUncheckedCreateWithoutPlantillaInput[];
    connectOrCreate?: Prisma.ProgramaMantenimientoCreateOrConnectWithoutPlantillaInput | Prisma.ProgramaMantenimientoCreateOrConnectWithoutPlantillaInput[];
    createMany?: Prisma.ProgramaMantenimientoCreateManyPlantillaInputEnvelope;
    connect?: Prisma.ProgramaMantenimientoWhereUniqueInput | Prisma.ProgramaMantenimientoWhereUniqueInput[];
};
export type ProgramaMantenimientoUncheckedCreateNestedManyWithoutPlantillaInput = {
    create?: Prisma.XOR<Prisma.ProgramaMantenimientoCreateWithoutPlantillaInput, Prisma.ProgramaMantenimientoUncheckedCreateWithoutPlantillaInput> | Prisma.ProgramaMantenimientoCreateWithoutPlantillaInput[] | Prisma.ProgramaMantenimientoUncheckedCreateWithoutPlantillaInput[];
    connectOrCreate?: Prisma.ProgramaMantenimientoCreateOrConnectWithoutPlantillaInput | Prisma.ProgramaMantenimientoCreateOrConnectWithoutPlantillaInput[];
    createMany?: Prisma.ProgramaMantenimientoCreateManyPlantillaInputEnvelope;
    connect?: Prisma.ProgramaMantenimientoWhereUniqueInput | Prisma.ProgramaMantenimientoWhereUniqueInput[];
};
export type ProgramaMantenimientoUpdateManyWithoutPlantillaNestedInput = {
    create?: Prisma.XOR<Prisma.ProgramaMantenimientoCreateWithoutPlantillaInput, Prisma.ProgramaMantenimientoUncheckedCreateWithoutPlantillaInput> | Prisma.ProgramaMantenimientoCreateWithoutPlantillaInput[] | Prisma.ProgramaMantenimientoUncheckedCreateWithoutPlantillaInput[];
    connectOrCreate?: Prisma.ProgramaMantenimientoCreateOrConnectWithoutPlantillaInput | Prisma.ProgramaMantenimientoCreateOrConnectWithoutPlantillaInput[];
    upsert?: Prisma.ProgramaMantenimientoUpsertWithWhereUniqueWithoutPlantillaInput | Prisma.ProgramaMantenimientoUpsertWithWhereUniqueWithoutPlantillaInput[];
    createMany?: Prisma.ProgramaMantenimientoCreateManyPlantillaInputEnvelope;
    set?: Prisma.ProgramaMantenimientoWhereUniqueInput | Prisma.ProgramaMantenimientoWhereUniqueInput[];
    disconnect?: Prisma.ProgramaMantenimientoWhereUniqueInput | Prisma.ProgramaMantenimientoWhereUniqueInput[];
    delete?: Prisma.ProgramaMantenimientoWhereUniqueInput | Prisma.ProgramaMantenimientoWhereUniqueInput[];
    connect?: Prisma.ProgramaMantenimientoWhereUniqueInput | Prisma.ProgramaMantenimientoWhereUniqueInput[];
    update?: Prisma.ProgramaMantenimientoUpdateWithWhereUniqueWithoutPlantillaInput | Prisma.ProgramaMantenimientoUpdateWithWhereUniqueWithoutPlantillaInput[];
    updateMany?: Prisma.ProgramaMantenimientoUpdateManyWithWhereWithoutPlantillaInput | Prisma.ProgramaMantenimientoUpdateManyWithWhereWithoutPlantillaInput[];
    deleteMany?: Prisma.ProgramaMantenimientoScalarWhereInput | Prisma.ProgramaMantenimientoScalarWhereInput[];
};
export type ProgramaMantenimientoUncheckedUpdateManyWithoutPlantillaNestedInput = {
    create?: Prisma.XOR<Prisma.ProgramaMantenimientoCreateWithoutPlantillaInput, Prisma.ProgramaMantenimientoUncheckedCreateWithoutPlantillaInput> | Prisma.ProgramaMantenimientoCreateWithoutPlantillaInput[] | Prisma.ProgramaMantenimientoUncheckedCreateWithoutPlantillaInput[];
    connectOrCreate?: Prisma.ProgramaMantenimientoCreateOrConnectWithoutPlantillaInput | Prisma.ProgramaMantenimientoCreateOrConnectWithoutPlantillaInput[];
    upsert?: Prisma.ProgramaMantenimientoUpsertWithWhereUniqueWithoutPlantillaInput | Prisma.ProgramaMantenimientoUpsertWithWhereUniqueWithoutPlantillaInput[];
    createMany?: Prisma.ProgramaMantenimientoCreateManyPlantillaInputEnvelope;
    set?: Prisma.ProgramaMantenimientoWhereUniqueInput | Prisma.ProgramaMantenimientoWhereUniqueInput[];
    disconnect?: Prisma.ProgramaMantenimientoWhereUniqueInput | Prisma.ProgramaMantenimientoWhereUniqueInput[];
    delete?: Prisma.ProgramaMantenimientoWhereUniqueInput | Prisma.ProgramaMantenimientoWhereUniqueInput[];
    connect?: Prisma.ProgramaMantenimientoWhereUniqueInput | Prisma.ProgramaMantenimientoWhereUniqueInput[];
    update?: Prisma.ProgramaMantenimientoUpdateWithWhereUniqueWithoutPlantillaInput | Prisma.ProgramaMantenimientoUpdateWithWhereUniqueWithoutPlantillaInput[];
    updateMany?: Prisma.ProgramaMantenimientoUpdateManyWithWhereWithoutPlantillaInput | Prisma.ProgramaMantenimientoUpdateManyWithWhereWithoutPlantillaInput[];
    deleteMany?: Prisma.ProgramaMantenimientoScalarWhereInput | Prisma.ProgramaMantenimientoScalarWhereInput[];
};
export type ProgramaMantenimientoCreateWithoutEstacionInput = {
    activo?: boolean;
    fechaInicio?: Date | string;
    plantilla: Prisma.PlantillaMantenimientoCreateNestedOneWithoutProgramasInput;
    mantenimientos?: Prisma.MantenimientoCreateNestedManyWithoutProgramaInput;
};
export type ProgramaMantenimientoUncheckedCreateWithoutEstacionInput = {
    id?: number;
    plantillaId: number;
    activo?: boolean;
    fechaInicio?: Date | string;
    mantenimientos?: Prisma.MantenimientoUncheckedCreateNestedManyWithoutProgramaInput;
};
export type ProgramaMantenimientoCreateOrConnectWithoutEstacionInput = {
    where: Prisma.ProgramaMantenimientoWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProgramaMantenimientoCreateWithoutEstacionInput, Prisma.ProgramaMantenimientoUncheckedCreateWithoutEstacionInput>;
};
export type ProgramaMantenimientoCreateManyEstacionInputEnvelope = {
    data: Prisma.ProgramaMantenimientoCreateManyEstacionInput | Prisma.ProgramaMantenimientoCreateManyEstacionInput[];
    skipDuplicates?: boolean;
};
export type ProgramaMantenimientoUpsertWithWhereUniqueWithoutEstacionInput = {
    where: Prisma.ProgramaMantenimientoWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProgramaMantenimientoUpdateWithoutEstacionInput, Prisma.ProgramaMantenimientoUncheckedUpdateWithoutEstacionInput>;
    create: Prisma.XOR<Prisma.ProgramaMantenimientoCreateWithoutEstacionInput, Prisma.ProgramaMantenimientoUncheckedCreateWithoutEstacionInput>;
};
export type ProgramaMantenimientoUpdateWithWhereUniqueWithoutEstacionInput = {
    where: Prisma.ProgramaMantenimientoWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProgramaMantenimientoUpdateWithoutEstacionInput, Prisma.ProgramaMantenimientoUncheckedUpdateWithoutEstacionInput>;
};
export type ProgramaMantenimientoUpdateManyWithWhereWithoutEstacionInput = {
    where: Prisma.ProgramaMantenimientoScalarWhereInput;
    data: Prisma.XOR<Prisma.ProgramaMantenimientoUpdateManyMutationInput, Prisma.ProgramaMantenimientoUncheckedUpdateManyWithoutEstacionInput>;
};
export type ProgramaMantenimientoScalarWhereInput = {
    AND?: Prisma.ProgramaMantenimientoScalarWhereInput | Prisma.ProgramaMantenimientoScalarWhereInput[];
    OR?: Prisma.ProgramaMantenimientoScalarWhereInput[];
    NOT?: Prisma.ProgramaMantenimientoScalarWhereInput | Prisma.ProgramaMantenimientoScalarWhereInput[];
    id?: Prisma.IntFilter<"ProgramaMantenimiento"> | number;
    estacionId?: Prisma.IntFilter<"ProgramaMantenimiento"> | number;
    plantillaId?: Prisma.IntFilter<"ProgramaMantenimiento"> | number;
    activo?: Prisma.BoolFilter<"ProgramaMantenimiento"> | boolean;
    fechaInicio?: Prisma.DateTimeFilter<"ProgramaMantenimiento"> | Date | string;
};
export type ProgramaMantenimientoCreateWithoutMantenimientosInput = {
    activo?: boolean;
    fechaInicio?: Date | string;
    estacion: Prisma.EstacionCreateNestedOneWithoutProgramasMantenimientoInput;
    plantilla: Prisma.PlantillaMantenimientoCreateNestedOneWithoutProgramasInput;
};
export type ProgramaMantenimientoUncheckedCreateWithoutMantenimientosInput = {
    id?: number;
    estacionId: number;
    plantillaId: number;
    activo?: boolean;
    fechaInicio?: Date | string;
};
export type ProgramaMantenimientoCreateOrConnectWithoutMantenimientosInput = {
    where: Prisma.ProgramaMantenimientoWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProgramaMantenimientoCreateWithoutMantenimientosInput, Prisma.ProgramaMantenimientoUncheckedCreateWithoutMantenimientosInput>;
};
export type ProgramaMantenimientoUpsertWithoutMantenimientosInput = {
    update: Prisma.XOR<Prisma.ProgramaMantenimientoUpdateWithoutMantenimientosInput, Prisma.ProgramaMantenimientoUncheckedUpdateWithoutMantenimientosInput>;
    create: Prisma.XOR<Prisma.ProgramaMantenimientoCreateWithoutMantenimientosInput, Prisma.ProgramaMantenimientoUncheckedCreateWithoutMantenimientosInput>;
    where?: Prisma.ProgramaMantenimientoWhereInput;
};
export type ProgramaMantenimientoUpdateToOneWithWhereWithoutMantenimientosInput = {
    where?: Prisma.ProgramaMantenimientoWhereInput;
    data: Prisma.XOR<Prisma.ProgramaMantenimientoUpdateWithoutMantenimientosInput, Prisma.ProgramaMantenimientoUncheckedUpdateWithoutMantenimientosInput>;
};
export type ProgramaMantenimientoUpdateWithoutMantenimientosInput = {
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estacion?: Prisma.EstacionUpdateOneRequiredWithoutProgramasMantenimientoNestedInput;
    plantilla?: Prisma.PlantillaMantenimientoUpdateOneRequiredWithoutProgramasNestedInput;
};
export type ProgramaMantenimientoUncheckedUpdateWithoutMantenimientosInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    estacionId?: Prisma.IntFieldUpdateOperationsInput | number;
    plantillaId?: Prisma.IntFieldUpdateOperationsInput | number;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProgramaMantenimientoCreateWithoutPlantillaInput = {
    activo?: boolean;
    fechaInicio?: Date | string;
    estacion: Prisma.EstacionCreateNestedOneWithoutProgramasMantenimientoInput;
    mantenimientos?: Prisma.MantenimientoCreateNestedManyWithoutProgramaInput;
};
export type ProgramaMantenimientoUncheckedCreateWithoutPlantillaInput = {
    id?: number;
    estacionId: number;
    activo?: boolean;
    fechaInicio?: Date | string;
    mantenimientos?: Prisma.MantenimientoUncheckedCreateNestedManyWithoutProgramaInput;
};
export type ProgramaMantenimientoCreateOrConnectWithoutPlantillaInput = {
    where: Prisma.ProgramaMantenimientoWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProgramaMantenimientoCreateWithoutPlantillaInput, Prisma.ProgramaMantenimientoUncheckedCreateWithoutPlantillaInput>;
};
export type ProgramaMantenimientoCreateManyPlantillaInputEnvelope = {
    data: Prisma.ProgramaMantenimientoCreateManyPlantillaInput | Prisma.ProgramaMantenimientoCreateManyPlantillaInput[];
    skipDuplicates?: boolean;
};
export type ProgramaMantenimientoUpsertWithWhereUniqueWithoutPlantillaInput = {
    where: Prisma.ProgramaMantenimientoWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProgramaMantenimientoUpdateWithoutPlantillaInput, Prisma.ProgramaMantenimientoUncheckedUpdateWithoutPlantillaInput>;
    create: Prisma.XOR<Prisma.ProgramaMantenimientoCreateWithoutPlantillaInput, Prisma.ProgramaMantenimientoUncheckedCreateWithoutPlantillaInput>;
};
export type ProgramaMantenimientoUpdateWithWhereUniqueWithoutPlantillaInput = {
    where: Prisma.ProgramaMantenimientoWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProgramaMantenimientoUpdateWithoutPlantillaInput, Prisma.ProgramaMantenimientoUncheckedUpdateWithoutPlantillaInput>;
};
export type ProgramaMantenimientoUpdateManyWithWhereWithoutPlantillaInput = {
    where: Prisma.ProgramaMantenimientoScalarWhereInput;
    data: Prisma.XOR<Prisma.ProgramaMantenimientoUpdateManyMutationInput, Prisma.ProgramaMantenimientoUncheckedUpdateManyWithoutPlantillaInput>;
};
export type ProgramaMantenimientoCreateManyEstacionInput = {
    id?: number;
    plantillaId: number;
    activo?: boolean;
    fechaInicio?: Date | string;
};
export type ProgramaMantenimientoUpdateWithoutEstacionInput = {
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    plantilla?: Prisma.PlantillaMantenimientoUpdateOneRequiredWithoutProgramasNestedInput;
    mantenimientos?: Prisma.MantenimientoUpdateManyWithoutProgramaNestedInput;
};
export type ProgramaMantenimientoUncheckedUpdateWithoutEstacionInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    plantillaId?: Prisma.IntFieldUpdateOperationsInput | number;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    mantenimientos?: Prisma.MantenimientoUncheckedUpdateManyWithoutProgramaNestedInput;
};
export type ProgramaMantenimientoUncheckedUpdateManyWithoutEstacionInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    plantillaId?: Prisma.IntFieldUpdateOperationsInput | number;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProgramaMantenimientoCreateManyPlantillaInput = {
    id?: number;
    estacionId: number;
    activo?: boolean;
    fechaInicio?: Date | string;
};
export type ProgramaMantenimientoUpdateWithoutPlantillaInput = {
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estacion?: Prisma.EstacionUpdateOneRequiredWithoutProgramasMantenimientoNestedInput;
    mantenimientos?: Prisma.MantenimientoUpdateManyWithoutProgramaNestedInput;
};
export type ProgramaMantenimientoUncheckedUpdateWithoutPlantillaInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    estacionId?: Prisma.IntFieldUpdateOperationsInput | number;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    mantenimientos?: Prisma.MantenimientoUncheckedUpdateManyWithoutProgramaNestedInput;
};
export type ProgramaMantenimientoUncheckedUpdateManyWithoutPlantillaInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    estacionId?: Prisma.IntFieldUpdateOperationsInput | number;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProgramaMantenimientoCountOutputType = {
    mantenimientos: number;
};
export type ProgramaMantenimientoCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    mantenimientos?: boolean | ProgramaMantenimientoCountOutputTypeCountMantenimientosArgs;
};
export type ProgramaMantenimientoCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProgramaMantenimientoCountOutputTypeSelect<ExtArgs> | null;
};
export type ProgramaMantenimientoCountOutputTypeCountMantenimientosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MantenimientoWhereInput;
};
export type ProgramaMantenimientoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    estacionId?: boolean;
    plantillaId?: boolean;
    activo?: boolean;
    fechaInicio?: boolean;
    estacion?: boolean | Prisma.EstacionDefaultArgs<ExtArgs>;
    plantilla?: boolean | Prisma.PlantillaMantenimientoDefaultArgs<ExtArgs>;
    mantenimientos?: boolean | Prisma.ProgramaMantenimiento$mantenimientosArgs<ExtArgs>;
    _count?: boolean | Prisma.ProgramaMantenimientoCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["programaMantenimiento"]>;
export type ProgramaMantenimientoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    estacionId?: boolean;
    plantillaId?: boolean;
    activo?: boolean;
    fechaInicio?: boolean;
    estacion?: boolean | Prisma.EstacionDefaultArgs<ExtArgs>;
    plantilla?: boolean | Prisma.PlantillaMantenimientoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["programaMantenimiento"]>;
export type ProgramaMantenimientoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    estacionId?: boolean;
    plantillaId?: boolean;
    activo?: boolean;
    fechaInicio?: boolean;
    estacion?: boolean | Prisma.EstacionDefaultArgs<ExtArgs>;
    plantilla?: boolean | Prisma.PlantillaMantenimientoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["programaMantenimiento"]>;
export type ProgramaMantenimientoSelectScalar = {
    id?: boolean;
    estacionId?: boolean;
    plantillaId?: boolean;
    activo?: boolean;
    fechaInicio?: boolean;
};
export type ProgramaMantenimientoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "estacionId" | "plantillaId" | "activo" | "fechaInicio", ExtArgs["result"]["programaMantenimiento"]>;
export type ProgramaMantenimientoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    estacion?: boolean | Prisma.EstacionDefaultArgs<ExtArgs>;
    plantilla?: boolean | Prisma.PlantillaMantenimientoDefaultArgs<ExtArgs>;
    mantenimientos?: boolean | Prisma.ProgramaMantenimiento$mantenimientosArgs<ExtArgs>;
    _count?: boolean | Prisma.ProgramaMantenimientoCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ProgramaMantenimientoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    estacion?: boolean | Prisma.EstacionDefaultArgs<ExtArgs>;
    plantilla?: boolean | Prisma.PlantillaMantenimientoDefaultArgs<ExtArgs>;
};
export type ProgramaMantenimientoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    estacion?: boolean | Prisma.EstacionDefaultArgs<ExtArgs>;
    plantilla?: boolean | Prisma.PlantillaMantenimientoDefaultArgs<ExtArgs>;
};
export type $ProgramaMantenimientoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ProgramaMantenimiento";
    objects: {
        estacion: Prisma.$EstacionPayload<ExtArgs>;
        plantilla: Prisma.$PlantillaMantenimientoPayload<ExtArgs>;
        mantenimientos: Prisma.$MantenimientoPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        estacionId: number;
        plantillaId: number;
        activo: boolean;
        fechaInicio: Date;
    }, ExtArgs["result"]["programaMantenimiento"]>;
    composites: {};
};
export type ProgramaMantenimientoGetPayload<S extends boolean | null | undefined | ProgramaMantenimientoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProgramaMantenimientoPayload, S>;
export type ProgramaMantenimientoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProgramaMantenimientoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProgramaMantenimientoCountAggregateInputType | true;
};
export interface ProgramaMantenimientoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ProgramaMantenimiento'];
        meta: {
            name: 'ProgramaMantenimiento';
        };
    };
    findUnique<T extends ProgramaMantenimientoFindUniqueArgs>(args: Prisma.SelectSubset<T, ProgramaMantenimientoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProgramaMantenimientoClient<runtime.Types.Result.GetResult<Prisma.$ProgramaMantenimientoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ProgramaMantenimientoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProgramaMantenimientoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProgramaMantenimientoClient<runtime.Types.Result.GetResult<Prisma.$ProgramaMantenimientoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ProgramaMantenimientoFindFirstArgs>(args?: Prisma.SelectSubset<T, ProgramaMantenimientoFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProgramaMantenimientoClient<runtime.Types.Result.GetResult<Prisma.$ProgramaMantenimientoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ProgramaMantenimientoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProgramaMantenimientoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProgramaMantenimientoClient<runtime.Types.Result.GetResult<Prisma.$ProgramaMantenimientoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ProgramaMantenimientoFindManyArgs>(args?: Prisma.SelectSubset<T, ProgramaMantenimientoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProgramaMantenimientoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ProgramaMantenimientoCreateArgs>(args: Prisma.SelectSubset<T, ProgramaMantenimientoCreateArgs<ExtArgs>>): Prisma.Prisma__ProgramaMantenimientoClient<runtime.Types.Result.GetResult<Prisma.$ProgramaMantenimientoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ProgramaMantenimientoCreateManyArgs>(args?: Prisma.SelectSubset<T, ProgramaMantenimientoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ProgramaMantenimientoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProgramaMantenimientoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProgramaMantenimientoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ProgramaMantenimientoDeleteArgs>(args: Prisma.SelectSubset<T, ProgramaMantenimientoDeleteArgs<ExtArgs>>): Prisma.Prisma__ProgramaMantenimientoClient<runtime.Types.Result.GetResult<Prisma.$ProgramaMantenimientoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ProgramaMantenimientoUpdateArgs>(args: Prisma.SelectSubset<T, ProgramaMantenimientoUpdateArgs<ExtArgs>>): Prisma.Prisma__ProgramaMantenimientoClient<runtime.Types.Result.GetResult<Prisma.$ProgramaMantenimientoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ProgramaMantenimientoDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProgramaMantenimientoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ProgramaMantenimientoUpdateManyArgs>(args: Prisma.SelectSubset<T, ProgramaMantenimientoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ProgramaMantenimientoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProgramaMantenimientoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProgramaMantenimientoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ProgramaMantenimientoUpsertArgs>(args: Prisma.SelectSubset<T, ProgramaMantenimientoUpsertArgs<ExtArgs>>): Prisma.Prisma__ProgramaMantenimientoClient<runtime.Types.Result.GetResult<Prisma.$ProgramaMantenimientoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ProgramaMantenimientoCountArgs>(args?: Prisma.Subset<T, ProgramaMantenimientoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProgramaMantenimientoCountAggregateOutputType> : number>;
    aggregate<T extends ProgramaMantenimientoAggregateArgs>(args: Prisma.Subset<T, ProgramaMantenimientoAggregateArgs>): Prisma.PrismaPromise<GetProgramaMantenimientoAggregateType<T>>;
    groupBy<T extends ProgramaMantenimientoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProgramaMantenimientoGroupByArgs['orderBy'];
    } : {
        orderBy?: ProgramaMantenimientoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProgramaMantenimientoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProgramaMantenimientoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ProgramaMantenimientoFieldRefs;
}
export interface Prisma__ProgramaMantenimientoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    estacion<T extends Prisma.EstacionDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EstacionDefaultArgs<ExtArgs>>): Prisma.Prisma__EstacionClient<runtime.Types.Result.GetResult<Prisma.$EstacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    plantilla<T extends Prisma.PlantillaMantenimientoDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PlantillaMantenimientoDefaultArgs<ExtArgs>>): Prisma.Prisma__PlantillaMantenimientoClient<runtime.Types.Result.GetResult<Prisma.$PlantillaMantenimientoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    mantenimientos<T extends Prisma.ProgramaMantenimiento$mantenimientosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProgramaMantenimiento$mantenimientosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MantenimientoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ProgramaMantenimientoFieldRefs {
    readonly id: Prisma.FieldRef<"ProgramaMantenimiento", 'Int'>;
    readonly estacionId: Prisma.FieldRef<"ProgramaMantenimiento", 'Int'>;
    readonly plantillaId: Prisma.FieldRef<"ProgramaMantenimiento", 'Int'>;
    readonly activo: Prisma.FieldRef<"ProgramaMantenimiento", 'Boolean'>;
    readonly fechaInicio: Prisma.FieldRef<"ProgramaMantenimiento", 'DateTime'>;
}
export type ProgramaMantenimientoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProgramaMantenimientoSelect<ExtArgs> | null;
    omit?: Prisma.ProgramaMantenimientoOmit<ExtArgs> | null;
    include?: Prisma.ProgramaMantenimientoInclude<ExtArgs> | null;
    where: Prisma.ProgramaMantenimientoWhereUniqueInput;
};
export type ProgramaMantenimientoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProgramaMantenimientoSelect<ExtArgs> | null;
    omit?: Prisma.ProgramaMantenimientoOmit<ExtArgs> | null;
    include?: Prisma.ProgramaMantenimientoInclude<ExtArgs> | null;
    where: Prisma.ProgramaMantenimientoWhereUniqueInput;
};
export type ProgramaMantenimientoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProgramaMantenimientoSelect<ExtArgs> | null;
    omit?: Prisma.ProgramaMantenimientoOmit<ExtArgs> | null;
    include?: Prisma.ProgramaMantenimientoInclude<ExtArgs> | null;
    where?: Prisma.ProgramaMantenimientoWhereInput;
    orderBy?: Prisma.ProgramaMantenimientoOrderByWithRelationInput | Prisma.ProgramaMantenimientoOrderByWithRelationInput[];
    cursor?: Prisma.ProgramaMantenimientoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProgramaMantenimientoScalarFieldEnum | Prisma.ProgramaMantenimientoScalarFieldEnum[];
};
export type ProgramaMantenimientoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProgramaMantenimientoSelect<ExtArgs> | null;
    omit?: Prisma.ProgramaMantenimientoOmit<ExtArgs> | null;
    include?: Prisma.ProgramaMantenimientoInclude<ExtArgs> | null;
    where?: Prisma.ProgramaMantenimientoWhereInput;
    orderBy?: Prisma.ProgramaMantenimientoOrderByWithRelationInput | Prisma.ProgramaMantenimientoOrderByWithRelationInput[];
    cursor?: Prisma.ProgramaMantenimientoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProgramaMantenimientoScalarFieldEnum | Prisma.ProgramaMantenimientoScalarFieldEnum[];
};
export type ProgramaMantenimientoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProgramaMantenimientoSelect<ExtArgs> | null;
    omit?: Prisma.ProgramaMantenimientoOmit<ExtArgs> | null;
    include?: Prisma.ProgramaMantenimientoInclude<ExtArgs> | null;
    where?: Prisma.ProgramaMantenimientoWhereInput;
    orderBy?: Prisma.ProgramaMantenimientoOrderByWithRelationInput | Prisma.ProgramaMantenimientoOrderByWithRelationInput[];
    cursor?: Prisma.ProgramaMantenimientoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProgramaMantenimientoScalarFieldEnum | Prisma.ProgramaMantenimientoScalarFieldEnum[];
};
export type ProgramaMantenimientoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProgramaMantenimientoSelect<ExtArgs> | null;
    omit?: Prisma.ProgramaMantenimientoOmit<ExtArgs> | null;
    include?: Prisma.ProgramaMantenimientoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProgramaMantenimientoCreateInput, Prisma.ProgramaMantenimientoUncheckedCreateInput>;
};
export type ProgramaMantenimientoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ProgramaMantenimientoCreateManyInput | Prisma.ProgramaMantenimientoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ProgramaMantenimientoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProgramaMantenimientoSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProgramaMantenimientoOmit<ExtArgs> | null;
    data: Prisma.ProgramaMantenimientoCreateManyInput | Prisma.ProgramaMantenimientoCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ProgramaMantenimientoIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ProgramaMantenimientoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProgramaMantenimientoSelect<ExtArgs> | null;
    omit?: Prisma.ProgramaMantenimientoOmit<ExtArgs> | null;
    include?: Prisma.ProgramaMantenimientoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProgramaMantenimientoUpdateInput, Prisma.ProgramaMantenimientoUncheckedUpdateInput>;
    where: Prisma.ProgramaMantenimientoWhereUniqueInput;
};
export type ProgramaMantenimientoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ProgramaMantenimientoUpdateManyMutationInput, Prisma.ProgramaMantenimientoUncheckedUpdateManyInput>;
    where?: Prisma.ProgramaMantenimientoWhereInput;
    limit?: number;
};
export type ProgramaMantenimientoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProgramaMantenimientoSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProgramaMantenimientoOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProgramaMantenimientoUpdateManyMutationInput, Prisma.ProgramaMantenimientoUncheckedUpdateManyInput>;
    where?: Prisma.ProgramaMantenimientoWhereInput;
    limit?: number;
    include?: Prisma.ProgramaMantenimientoIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ProgramaMantenimientoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProgramaMantenimientoSelect<ExtArgs> | null;
    omit?: Prisma.ProgramaMantenimientoOmit<ExtArgs> | null;
    include?: Prisma.ProgramaMantenimientoInclude<ExtArgs> | null;
    where: Prisma.ProgramaMantenimientoWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProgramaMantenimientoCreateInput, Prisma.ProgramaMantenimientoUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ProgramaMantenimientoUpdateInput, Prisma.ProgramaMantenimientoUncheckedUpdateInput>;
};
export type ProgramaMantenimientoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProgramaMantenimientoSelect<ExtArgs> | null;
    omit?: Prisma.ProgramaMantenimientoOmit<ExtArgs> | null;
    include?: Prisma.ProgramaMantenimientoInclude<ExtArgs> | null;
    where: Prisma.ProgramaMantenimientoWhereUniqueInput;
};
export type ProgramaMantenimientoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProgramaMantenimientoWhereInput;
    limit?: number;
};
export type ProgramaMantenimiento$mantenimientosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ProgramaMantenimientoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProgramaMantenimientoSelect<ExtArgs> | null;
    omit?: Prisma.ProgramaMantenimientoOmit<ExtArgs> | null;
    include?: Prisma.ProgramaMantenimientoInclude<ExtArgs> | null;
};
export {};
