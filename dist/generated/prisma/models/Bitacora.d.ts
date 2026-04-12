import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type BitacoraModel = runtime.Types.Result.DefaultSelection<Prisma.$BitacoraPayload>;
export type AggregateBitacora = {
    _count: BitacoraCountAggregateOutputType | null;
    _avg: BitacoraAvgAggregateOutputType | null;
    _sum: BitacoraSumAggregateOutputType | null;
    _min: BitacoraMinAggregateOutputType | null;
    _max: BitacoraMaxAggregateOutputType | null;
};
export type BitacoraAvgAggregateOutputType = {
    id: number | null;
    estacionId: number | null;
};
export type BitacoraSumAggregateOutputType = {
    id: number | null;
    estacionId: number | null;
};
export type BitacoraMinAggregateOutputType = {
    id: number | null;
    tipo: $Enums.TipoBitacora | null;
    estacionId: number | null;
    fundamento: string | null;
    createdAt: Date | null;
};
export type BitacoraMaxAggregateOutputType = {
    id: number | null;
    tipo: $Enums.TipoBitacora | null;
    estacionId: number | null;
    fundamento: string | null;
    createdAt: Date | null;
};
export type BitacoraCountAggregateOutputType = {
    id: number;
    tipo: number;
    estacionId: number;
    fundamento: number;
    createdAt: number;
    _all: number;
};
export type BitacoraAvgAggregateInputType = {
    id?: true;
    estacionId?: true;
};
export type BitacoraSumAggregateInputType = {
    id?: true;
    estacionId?: true;
};
export type BitacoraMinAggregateInputType = {
    id?: true;
    tipo?: true;
    estacionId?: true;
    fundamento?: true;
    createdAt?: true;
};
export type BitacoraMaxAggregateInputType = {
    id?: true;
    tipo?: true;
    estacionId?: true;
    fundamento?: true;
    createdAt?: true;
};
export type BitacoraCountAggregateInputType = {
    id?: true;
    tipo?: true;
    estacionId?: true;
    fundamento?: true;
    createdAt?: true;
    _all?: true;
};
export type BitacoraAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BitacoraWhereInput;
    orderBy?: Prisma.BitacoraOrderByWithRelationInput | Prisma.BitacoraOrderByWithRelationInput[];
    cursor?: Prisma.BitacoraWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | BitacoraCountAggregateInputType;
    _avg?: BitacoraAvgAggregateInputType;
    _sum?: BitacoraSumAggregateInputType;
    _min?: BitacoraMinAggregateInputType;
    _max?: BitacoraMaxAggregateInputType;
};
export type GetBitacoraAggregateType<T extends BitacoraAggregateArgs> = {
    [P in keyof T & keyof AggregateBitacora]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBitacora[P]> : Prisma.GetScalarType<T[P], AggregateBitacora[P]>;
};
export type BitacoraGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BitacoraWhereInput;
    orderBy?: Prisma.BitacoraOrderByWithAggregationInput | Prisma.BitacoraOrderByWithAggregationInput[];
    by: Prisma.BitacoraScalarFieldEnum[] | Prisma.BitacoraScalarFieldEnum;
    having?: Prisma.BitacoraScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BitacoraCountAggregateInputType | true;
    _avg?: BitacoraAvgAggregateInputType;
    _sum?: BitacoraSumAggregateInputType;
    _min?: BitacoraMinAggregateInputType;
    _max?: BitacoraMaxAggregateInputType;
};
export type BitacoraGroupByOutputType = {
    id: number;
    tipo: $Enums.TipoBitacora;
    estacionId: number;
    fundamento: string;
    createdAt: Date;
    _count: BitacoraCountAggregateOutputType | null;
    _avg: BitacoraAvgAggregateOutputType | null;
    _sum: BitacoraSumAggregateOutputType | null;
    _min: BitacoraMinAggregateOutputType | null;
    _max: BitacoraMaxAggregateOutputType | null;
};
type GetBitacoraGroupByPayload<T extends BitacoraGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BitacoraGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BitacoraGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BitacoraGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BitacoraGroupByOutputType[P]>;
}>>;
export type BitacoraWhereInput = {
    AND?: Prisma.BitacoraWhereInput | Prisma.BitacoraWhereInput[];
    OR?: Prisma.BitacoraWhereInput[];
    NOT?: Prisma.BitacoraWhereInput | Prisma.BitacoraWhereInput[];
    id?: Prisma.IntFilter<"Bitacora"> | number;
    tipo?: Prisma.EnumTipoBitacoraFilter<"Bitacora"> | $Enums.TipoBitacora;
    estacionId?: Prisma.IntFilter<"Bitacora"> | number;
    fundamento?: Prisma.StringFilter<"Bitacora"> | string;
    createdAt?: Prisma.DateTimeFilter<"Bitacora"> | Date | string;
    estacion?: Prisma.XOR<Prisma.EstacionScalarRelationFilter, Prisma.EstacionWhereInput>;
    registros?: Prisma.RegistroBitacoraListRelationFilter;
};
export type BitacoraOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    estacionId?: Prisma.SortOrder;
    fundamento?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    estacion?: Prisma.EstacionOrderByWithRelationInput;
    registros?: Prisma.RegistroBitacoraOrderByRelationAggregateInput;
};
export type BitacoraWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    estacionId_tipo?: Prisma.BitacoraEstacionIdTipoCompoundUniqueInput;
    AND?: Prisma.BitacoraWhereInput | Prisma.BitacoraWhereInput[];
    OR?: Prisma.BitacoraWhereInput[];
    NOT?: Prisma.BitacoraWhereInput | Prisma.BitacoraWhereInput[];
    tipo?: Prisma.EnumTipoBitacoraFilter<"Bitacora"> | $Enums.TipoBitacora;
    estacionId?: Prisma.IntFilter<"Bitacora"> | number;
    fundamento?: Prisma.StringFilter<"Bitacora"> | string;
    createdAt?: Prisma.DateTimeFilter<"Bitacora"> | Date | string;
    estacion?: Prisma.XOR<Prisma.EstacionScalarRelationFilter, Prisma.EstacionWhereInput>;
    registros?: Prisma.RegistroBitacoraListRelationFilter;
}, "id" | "estacionId_tipo">;
export type BitacoraOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    estacionId?: Prisma.SortOrder;
    fundamento?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.BitacoraCountOrderByAggregateInput;
    _avg?: Prisma.BitacoraAvgOrderByAggregateInput;
    _max?: Prisma.BitacoraMaxOrderByAggregateInput;
    _min?: Prisma.BitacoraMinOrderByAggregateInput;
    _sum?: Prisma.BitacoraSumOrderByAggregateInput;
};
export type BitacoraScalarWhereWithAggregatesInput = {
    AND?: Prisma.BitacoraScalarWhereWithAggregatesInput | Prisma.BitacoraScalarWhereWithAggregatesInput[];
    OR?: Prisma.BitacoraScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BitacoraScalarWhereWithAggregatesInput | Prisma.BitacoraScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Bitacora"> | number;
    tipo?: Prisma.EnumTipoBitacoraWithAggregatesFilter<"Bitacora"> | $Enums.TipoBitacora;
    estacionId?: Prisma.IntWithAggregatesFilter<"Bitacora"> | number;
    fundamento?: Prisma.StringWithAggregatesFilter<"Bitacora"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Bitacora"> | Date | string;
};
export type BitacoraCreateInput = {
    tipo: $Enums.TipoBitacora;
    fundamento?: string;
    createdAt?: Date | string;
    estacion: Prisma.EstacionCreateNestedOneWithoutBitacorasInput;
    registros?: Prisma.RegistroBitacoraCreateNestedManyWithoutBitacoraInput;
};
export type BitacoraUncheckedCreateInput = {
    id?: number;
    tipo: $Enums.TipoBitacora;
    estacionId: number;
    fundamento?: string;
    createdAt?: Date | string;
    registros?: Prisma.RegistroBitacoraUncheckedCreateNestedManyWithoutBitacoraInput;
};
export type BitacoraUpdateInput = {
    tipo?: Prisma.EnumTipoBitacoraFieldUpdateOperationsInput | $Enums.TipoBitacora;
    fundamento?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estacion?: Prisma.EstacionUpdateOneRequiredWithoutBitacorasNestedInput;
    registros?: Prisma.RegistroBitacoraUpdateManyWithoutBitacoraNestedInput;
};
export type BitacoraUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo?: Prisma.EnumTipoBitacoraFieldUpdateOperationsInput | $Enums.TipoBitacora;
    estacionId?: Prisma.IntFieldUpdateOperationsInput | number;
    fundamento?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    registros?: Prisma.RegistroBitacoraUncheckedUpdateManyWithoutBitacoraNestedInput;
};
export type BitacoraCreateManyInput = {
    id?: number;
    tipo: $Enums.TipoBitacora;
    estacionId: number;
    fundamento?: string;
    createdAt?: Date | string;
};
export type BitacoraUpdateManyMutationInput = {
    tipo?: Prisma.EnumTipoBitacoraFieldUpdateOperationsInput | $Enums.TipoBitacora;
    fundamento?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BitacoraUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo?: Prisma.EnumTipoBitacoraFieldUpdateOperationsInput | $Enums.TipoBitacora;
    estacionId?: Prisma.IntFieldUpdateOperationsInput | number;
    fundamento?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BitacoraListRelationFilter = {
    every?: Prisma.BitacoraWhereInput;
    some?: Prisma.BitacoraWhereInput;
    none?: Prisma.BitacoraWhereInput;
};
export type BitacoraOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type BitacoraEstacionIdTipoCompoundUniqueInput = {
    estacionId: number;
    tipo: $Enums.TipoBitacora;
};
export type BitacoraCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    estacionId?: Prisma.SortOrder;
    fundamento?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type BitacoraAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    estacionId?: Prisma.SortOrder;
};
export type BitacoraMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    estacionId?: Prisma.SortOrder;
    fundamento?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type BitacoraMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    estacionId?: Prisma.SortOrder;
    fundamento?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type BitacoraSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    estacionId?: Prisma.SortOrder;
};
export type BitacoraScalarRelationFilter = {
    is?: Prisma.BitacoraWhereInput;
    isNot?: Prisma.BitacoraWhereInput;
};
export type BitacoraCreateNestedManyWithoutEstacionInput = {
    create?: Prisma.XOR<Prisma.BitacoraCreateWithoutEstacionInput, Prisma.BitacoraUncheckedCreateWithoutEstacionInput> | Prisma.BitacoraCreateWithoutEstacionInput[] | Prisma.BitacoraUncheckedCreateWithoutEstacionInput[];
    connectOrCreate?: Prisma.BitacoraCreateOrConnectWithoutEstacionInput | Prisma.BitacoraCreateOrConnectWithoutEstacionInput[];
    createMany?: Prisma.BitacoraCreateManyEstacionInputEnvelope;
    connect?: Prisma.BitacoraWhereUniqueInput | Prisma.BitacoraWhereUniqueInput[];
};
export type BitacoraUncheckedCreateNestedManyWithoutEstacionInput = {
    create?: Prisma.XOR<Prisma.BitacoraCreateWithoutEstacionInput, Prisma.BitacoraUncheckedCreateWithoutEstacionInput> | Prisma.BitacoraCreateWithoutEstacionInput[] | Prisma.BitacoraUncheckedCreateWithoutEstacionInput[];
    connectOrCreate?: Prisma.BitacoraCreateOrConnectWithoutEstacionInput | Prisma.BitacoraCreateOrConnectWithoutEstacionInput[];
    createMany?: Prisma.BitacoraCreateManyEstacionInputEnvelope;
    connect?: Prisma.BitacoraWhereUniqueInput | Prisma.BitacoraWhereUniqueInput[];
};
export type BitacoraUpdateManyWithoutEstacionNestedInput = {
    create?: Prisma.XOR<Prisma.BitacoraCreateWithoutEstacionInput, Prisma.BitacoraUncheckedCreateWithoutEstacionInput> | Prisma.BitacoraCreateWithoutEstacionInput[] | Prisma.BitacoraUncheckedCreateWithoutEstacionInput[];
    connectOrCreate?: Prisma.BitacoraCreateOrConnectWithoutEstacionInput | Prisma.BitacoraCreateOrConnectWithoutEstacionInput[];
    upsert?: Prisma.BitacoraUpsertWithWhereUniqueWithoutEstacionInput | Prisma.BitacoraUpsertWithWhereUniqueWithoutEstacionInput[];
    createMany?: Prisma.BitacoraCreateManyEstacionInputEnvelope;
    set?: Prisma.BitacoraWhereUniqueInput | Prisma.BitacoraWhereUniqueInput[];
    disconnect?: Prisma.BitacoraWhereUniqueInput | Prisma.BitacoraWhereUniqueInput[];
    delete?: Prisma.BitacoraWhereUniqueInput | Prisma.BitacoraWhereUniqueInput[];
    connect?: Prisma.BitacoraWhereUniqueInput | Prisma.BitacoraWhereUniqueInput[];
    update?: Prisma.BitacoraUpdateWithWhereUniqueWithoutEstacionInput | Prisma.BitacoraUpdateWithWhereUniqueWithoutEstacionInput[];
    updateMany?: Prisma.BitacoraUpdateManyWithWhereWithoutEstacionInput | Prisma.BitacoraUpdateManyWithWhereWithoutEstacionInput[];
    deleteMany?: Prisma.BitacoraScalarWhereInput | Prisma.BitacoraScalarWhereInput[];
};
export type BitacoraUncheckedUpdateManyWithoutEstacionNestedInput = {
    create?: Prisma.XOR<Prisma.BitacoraCreateWithoutEstacionInput, Prisma.BitacoraUncheckedCreateWithoutEstacionInput> | Prisma.BitacoraCreateWithoutEstacionInput[] | Prisma.BitacoraUncheckedCreateWithoutEstacionInput[];
    connectOrCreate?: Prisma.BitacoraCreateOrConnectWithoutEstacionInput | Prisma.BitacoraCreateOrConnectWithoutEstacionInput[];
    upsert?: Prisma.BitacoraUpsertWithWhereUniqueWithoutEstacionInput | Prisma.BitacoraUpsertWithWhereUniqueWithoutEstacionInput[];
    createMany?: Prisma.BitacoraCreateManyEstacionInputEnvelope;
    set?: Prisma.BitacoraWhereUniqueInput | Prisma.BitacoraWhereUniqueInput[];
    disconnect?: Prisma.BitacoraWhereUniqueInput | Prisma.BitacoraWhereUniqueInput[];
    delete?: Prisma.BitacoraWhereUniqueInput | Prisma.BitacoraWhereUniqueInput[];
    connect?: Prisma.BitacoraWhereUniqueInput | Prisma.BitacoraWhereUniqueInput[];
    update?: Prisma.BitacoraUpdateWithWhereUniqueWithoutEstacionInput | Prisma.BitacoraUpdateWithWhereUniqueWithoutEstacionInput[];
    updateMany?: Prisma.BitacoraUpdateManyWithWhereWithoutEstacionInput | Prisma.BitacoraUpdateManyWithWhereWithoutEstacionInput[];
    deleteMany?: Prisma.BitacoraScalarWhereInput | Prisma.BitacoraScalarWhereInput[];
};
export type EnumTipoBitacoraFieldUpdateOperationsInput = {
    set?: $Enums.TipoBitacora;
};
export type BitacoraCreateNestedOneWithoutRegistrosInput = {
    create?: Prisma.XOR<Prisma.BitacoraCreateWithoutRegistrosInput, Prisma.BitacoraUncheckedCreateWithoutRegistrosInput>;
    connectOrCreate?: Prisma.BitacoraCreateOrConnectWithoutRegistrosInput;
    connect?: Prisma.BitacoraWhereUniqueInput;
};
export type BitacoraUpdateOneRequiredWithoutRegistrosNestedInput = {
    create?: Prisma.XOR<Prisma.BitacoraCreateWithoutRegistrosInput, Prisma.BitacoraUncheckedCreateWithoutRegistrosInput>;
    connectOrCreate?: Prisma.BitacoraCreateOrConnectWithoutRegistrosInput;
    upsert?: Prisma.BitacoraUpsertWithoutRegistrosInput;
    connect?: Prisma.BitacoraWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BitacoraUpdateToOneWithWhereWithoutRegistrosInput, Prisma.BitacoraUpdateWithoutRegistrosInput>, Prisma.BitacoraUncheckedUpdateWithoutRegistrosInput>;
};
export type BitacoraCreateWithoutEstacionInput = {
    tipo: $Enums.TipoBitacora;
    fundamento?: string;
    createdAt?: Date | string;
    registros?: Prisma.RegistroBitacoraCreateNestedManyWithoutBitacoraInput;
};
export type BitacoraUncheckedCreateWithoutEstacionInput = {
    id?: number;
    tipo: $Enums.TipoBitacora;
    fundamento?: string;
    createdAt?: Date | string;
    registros?: Prisma.RegistroBitacoraUncheckedCreateNestedManyWithoutBitacoraInput;
};
export type BitacoraCreateOrConnectWithoutEstacionInput = {
    where: Prisma.BitacoraWhereUniqueInput;
    create: Prisma.XOR<Prisma.BitacoraCreateWithoutEstacionInput, Prisma.BitacoraUncheckedCreateWithoutEstacionInput>;
};
export type BitacoraCreateManyEstacionInputEnvelope = {
    data: Prisma.BitacoraCreateManyEstacionInput | Prisma.BitacoraCreateManyEstacionInput[];
    skipDuplicates?: boolean;
};
export type BitacoraUpsertWithWhereUniqueWithoutEstacionInput = {
    where: Prisma.BitacoraWhereUniqueInput;
    update: Prisma.XOR<Prisma.BitacoraUpdateWithoutEstacionInput, Prisma.BitacoraUncheckedUpdateWithoutEstacionInput>;
    create: Prisma.XOR<Prisma.BitacoraCreateWithoutEstacionInput, Prisma.BitacoraUncheckedCreateWithoutEstacionInput>;
};
export type BitacoraUpdateWithWhereUniqueWithoutEstacionInput = {
    where: Prisma.BitacoraWhereUniqueInput;
    data: Prisma.XOR<Prisma.BitacoraUpdateWithoutEstacionInput, Prisma.BitacoraUncheckedUpdateWithoutEstacionInput>;
};
export type BitacoraUpdateManyWithWhereWithoutEstacionInput = {
    where: Prisma.BitacoraScalarWhereInput;
    data: Prisma.XOR<Prisma.BitacoraUpdateManyMutationInput, Prisma.BitacoraUncheckedUpdateManyWithoutEstacionInput>;
};
export type BitacoraScalarWhereInput = {
    AND?: Prisma.BitacoraScalarWhereInput | Prisma.BitacoraScalarWhereInput[];
    OR?: Prisma.BitacoraScalarWhereInput[];
    NOT?: Prisma.BitacoraScalarWhereInput | Prisma.BitacoraScalarWhereInput[];
    id?: Prisma.IntFilter<"Bitacora"> | number;
    tipo?: Prisma.EnumTipoBitacoraFilter<"Bitacora"> | $Enums.TipoBitacora;
    estacionId?: Prisma.IntFilter<"Bitacora"> | number;
    fundamento?: Prisma.StringFilter<"Bitacora"> | string;
    createdAt?: Prisma.DateTimeFilter<"Bitacora"> | Date | string;
};
export type BitacoraCreateWithoutRegistrosInput = {
    tipo: $Enums.TipoBitacora;
    fundamento?: string;
    createdAt?: Date | string;
    estacion: Prisma.EstacionCreateNestedOneWithoutBitacorasInput;
};
export type BitacoraUncheckedCreateWithoutRegistrosInput = {
    id?: number;
    tipo: $Enums.TipoBitacora;
    estacionId: number;
    fundamento?: string;
    createdAt?: Date | string;
};
export type BitacoraCreateOrConnectWithoutRegistrosInput = {
    where: Prisma.BitacoraWhereUniqueInput;
    create: Prisma.XOR<Prisma.BitacoraCreateWithoutRegistrosInput, Prisma.BitacoraUncheckedCreateWithoutRegistrosInput>;
};
export type BitacoraUpsertWithoutRegistrosInput = {
    update: Prisma.XOR<Prisma.BitacoraUpdateWithoutRegistrosInput, Prisma.BitacoraUncheckedUpdateWithoutRegistrosInput>;
    create: Prisma.XOR<Prisma.BitacoraCreateWithoutRegistrosInput, Prisma.BitacoraUncheckedCreateWithoutRegistrosInput>;
    where?: Prisma.BitacoraWhereInput;
};
export type BitacoraUpdateToOneWithWhereWithoutRegistrosInput = {
    where?: Prisma.BitacoraWhereInput;
    data: Prisma.XOR<Prisma.BitacoraUpdateWithoutRegistrosInput, Prisma.BitacoraUncheckedUpdateWithoutRegistrosInput>;
};
export type BitacoraUpdateWithoutRegistrosInput = {
    tipo?: Prisma.EnumTipoBitacoraFieldUpdateOperationsInput | $Enums.TipoBitacora;
    fundamento?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estacion?: Prisma.EstacionUpdateOneRequiredWithoutBitacorasNestedInput;
};
export type BitacoraUncheckedUpdateWithoutRegistrosInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo?: Prisma.EnumTipoBitacoraFieldUpdateOperationsInput | $Enums.TipoBitacora;
    estacionId?: Prisma.IntFieldUpdateOperationsInput | number;
    fundamento?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BitacoraCreateManyEstacionInput = {
    id?: number;
    tipo: $Enums.TipoBitacora;
    fundamento?: string;
    createdAt?: Date | string;
};
export type BitacoraUpdateWithoutEstacionInput = {
    tipo?: Prisma.EnumTipoBitacoraFieldUpdateOperationsInput | $Enums.TipoBitacora;
    fundamento?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    registros?: Prisma.RegistroBitacoraUpdateManyWithoutBitacoraNestedInput;
};
export type BitacoraUncheckedUpdateWithoutEstacionInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo?: Prisma.EnumTipoBitacoraFieldUpdateOperationsInput | $Enums.TipoBitacora;
    fundamento?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    registros?: Prisma.RegistroBitacoraUncheckedUpdateManyWithoutBitacoraNestedInput;
};
export type BitacoraUncheckedUpdateManyWithoutEstacionInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo?: Prisma.EnumTipoBitacoraFieldUpdateOperationsInput | $Enums.TipoBitacora;
    fundamento?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BitacoraCountOutputType = {
    registros: number;
};
export type BitacoraCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    registros?: boolean | BitacoraCountOutputTypeCountRegistrosArgs;
};
export type BitacoraCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BitacoraCountOutputTypeSelect<ExtArgs> | null;
};
export type BitacoraCountOutputTypeCountRegistrosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RegistroBitacoraWhereInput;
};
export type BitacoraSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tipo?: boolean;
    estacionId?: boolean;
    fundamento?: boolean;
    createdAt?: boolean;
    estacion?: boolean | Prisma.EstacionDefaultArgs<ExtArgs>;
    registros?: boolean | Prisma.Bitacora$registrosArgs<ExtArgs>;
    _count?: boolean | Prisma.BitacoraCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["bitacora"]>;
export type BitacoraSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tipo?: boolean;
    estacionId?: boolean;
    fundamento?: boolean;
    createdAt?: boolean;
    estacion?: boolean | Prisma.EstacionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["bitacora"]>;
export type BitacoraSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tipo?: boolean;
    estacionId?: boolean;
    fundamento?: boolean;
    createdAt?: boolean;
    estacion?: boolean | Prisma.EstacionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["bitacora"]>;
export type BitacoraSelectScalar = {
    id?: boolean;
    tipo?: boolean;
    estacionId?: boolean;
    fundamento?: boolean;
    createdAt?: boolean;
};
export type BitacoraOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "tipo" | "estacionId" | "fundamento" | "createdAt", ExtArgs["result"]["bitacora"]>;
export type BitacoraInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    estacion?: boolean | Prisma.EstacionDefaultArgs<ExtArgs>;
    registros?: boolean | Prisma.Bitacora$registrosArgs<ExtArgs>;
    _count?: boolean | Prisma.BitacoraCountOutputTypeDefaultArgs<ExtArgs>;
};
export type BitacoraIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    estacion?: boolean | Prisma.EstacionDefaultArgs<ExtArgs>;
};
export type BitacoraIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    estacion?: boolean | Prisma.EstacionDefaultArgs<ExtArgs>;
};
export type $BitacoraPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Bitacora";
    objects: {
        estacion: Prisma.$EstacionPayload<ExtArgs>;
        registros: Prisma.$RegistroBitacoraPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        tipo: $Enums.TipoBitacora;
        estacionId: number;
        fundamento: string;
        createdAt: Date;
    }, ExtArgs["result"]["bitacora"]>;
    composites: {};
};
export type BitacoraGetPayload<S extends boolean | null | undefined | BitacoraDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BitacoraPayload, S>;
export type BitacoraCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BitacoraFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BitacoraCountAggregateInputType | true;
};
export interface BitacoraDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Bitacora'];
        meta: {
            name: 'Bitacora';
        };
    };
    findUnique<T extends BitacoraFindUniqueArgs>(args: Prisma.SelectSubset<T, BitacoraFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BitacoraClient<runtime.Types.Result.GetResult<Prisma.$BitacoraPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends BitacoraFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BitacoraFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BitacoraClient<runtime.Types.Result.GetResult<Prisma.$BitacoraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends BitacoraFindFirstArgs>(args?: Prisma.SelectSubset<T, BitacoraFindFirstArgs<ExtArgs>>): Prisma.Prisma__BitacoraClient<runtime.Types.Result.GetResult<Prisma.$BitacoraPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends BitacoraFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BitacoraFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BitacoraClient<runtime.Types.Result.GetResult<Prisma.$BitacoraPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends BitacoraFindManyArgs>(args?: Prisma.SelectSubset<T, BitacoraFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BitacoraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends BitacoraCreateArgs>(args: Prisma.SelectSubset<T, BitacoraCreateArgs<ExtArgs>>): Prisma.Prisma__BitacoraClient<runtime.Types.Result.GetResult<Prisma.$BitacoraPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends BitacoraCreateManyArgs>(args?: Prisma.SelectSubset<T, BitacoraCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends BitacoraCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BitacoraCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BitacoraPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends BitacoraDeleteArgs>(args: Prisma.SelectSubset<T, BitacoraDeleteArgs<ExtArgs>>): Prisma.Prisma__BitacoraClient<runtime.Types.Result.GetResult<Prisma.$BitacoraPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends BitacoraUpdateArgs>(args: Prisma.SelectSubset<T, BitacoraUpdateArgs<ExtArgs>>): Prisma.Prisma__BitacoraClient<runtime.Types.Result.GetResult<Prisma.$BitacoraPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends BitacoraDeleteManyArgs>(args?: Prisma.SelectSubset<T, BitacoraDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends BitacoraUpdateManyArgs>(args: Prisma.SelectSubset<T, BitacoraUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends BitacoraUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BitacoraUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BitacoraPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends BitacoraUpsertArgs>(args: Prisma.SelectSubset<T, BitacoraUpsertArgs<ExtArgs>>): Prisma.Prisma__BitacoraClient<runtime.Types.Result.GetResult<Prisma.$BitacoraPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends BitacoraCountArgs>(args?: Prisma.Subset<T, BitacoraCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BitacoraCountAggregateOutputType> : number>;
    aggregate<T extends BitacoraAggregateArgs>(args: Prisma.Subset<T, BitacoraAggregateArgs>): Prisma.PrismaPromise<GetBitacoraAggregateType<T>>;
    groupBy<T extends BitacoraGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BitacoraGroupByArgs['orderBy'];
    } : {
        orderBy?: BitacoraGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BitacoraGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBitacoraGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: BitacoraFieldRefs;
}
export interface Prisma__BitacoraClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    estacion<T extends Prisma.EstacionDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EstacionDefaultArgs<ExtArgs>>): Prisma.Prisma__EstacionClient<runtime.Types.Result.GetResult<Prisma.$EstacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    registros<T extends Prisma.Bitacora$registrosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Bitacora$registrosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RegistroBitacoraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface BitacoraFieldRefs {
    readonly id: Prisma.FieldRef<"Bitacora", 'Int'>;
    readonly tipo: Prisma.FieldRef<"Bitacora", 'TipoBitacora'>;
    readonly estacionId: Prisma.FieldRef<"Bitacora", 'Int'>;
    readonly fundamento: Prisma.FieldRef<"Bitacora", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Bitacora", 'DateTime'>;
}
export type BitacoraFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BitacoraSelect<ExtArgs> | null;
    omit?: Prisma.BitacoraOmit<ExtArgs> | null;
    include?: Prisma.BitacoraInclude<ExtArgs> | null;
    where: Prisma.BitacoraWhereUniqueInput;
};
export type BitacoraFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BitacoraSelect<ExtArgs> | null;
    omit?: Prisma.BitacoraOmit<ExtArgs> | null;
    include?: Prisma.BitacoraInclude<ExtArgs> | null;
    where: Prisma.BitacoraWhereUniqueInput;
};
export type BitacoraFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BitacoraSelect<ExtArgs> | null;
    omit?: Prisma.BitacoraOmit<ExtArgs> | null;
    include?: Prisma.BitacoraInclude<ExtArgs> | null;
    where?: Prisma.BitacoraWhereInput;
    orderBy?: Prisma.BitacoraOrderByWithRelationInput | Prisma.BitacoraOrderByWithRelationInput[];
    cursor?: Prisma.BitacoraWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BitacoraScalarFieldEnum | Prisma.BitacoraScalarFieldEnum[];
};
export type BitacoraFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BitacoraSelect<ExtArgs> | null;
    omit?: Prisma.BitacoraOmit<ExtArgs> | null;
    include?: Prisma.BitacoraInclude<ExtArgs> | null;
    where?: Prisma.BitacoraWhereInput;
    orderBy?: Prisma.BitacoraOrderByWithRelationInput | Prisma.BitacoraOrderByWithRelationInput[];
    cursor?: Prisma.BitacoraWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BitacoraScalarFieldEnum | Prisma.BitacoraScalarFieldEnum[];
};
export type BitacoraFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BitacoraSelect<ExtArgs> | null;
    omit?: Prisma.BitacoraOmit<ExtArgs> | null;
    include?: Prisma.BitacoraInclude<ExtArgs> | null;
    where?: Prisma.BitacoraWhereInput;
    orderBy?: Prisma.BitacoraOrderByWithRelationInput | Prisma.BitacoraOrderByWithRelationInput[];
    cursor?: Prisma.BitacoraWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BitacoraScalarFieldEnum | Prisma.BitacoraScalarFieldEnum[];
};
export type BitacoraCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BitacoraSelect<ExtArgs> | null;
    omit?: Prisma.BitacoraOmit<ExtArgs> | null;
    include?: Prisma.BitacoraInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BitacoraCreateInput, Prisma.BitacoraUncheckedCreateInput>;
};
export type BitacoraCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.BitacoraCreateManyInput | Prisma.BitacoraCreateManyInput[];
    skipDuplicates?: boolean;
};
export type BitacoraCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BitacoraSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BitacoraOmit<ExtArgs> | null;
    data: Prisma.BitacoraCreateManyInput | Prisma.BitacoraCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.BitacoraIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type BitacoraUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BitacoraSelect<ExtArgs> | null;
    omit?: Prisma.BitacoraOmit<ExtArgs> | null;
    include?: Prisma.BitacoraInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BitacoraUpdateInput, Prisma.BitacoraUncheckedUpdateInput>;
    where: Prisma.BitacoraWhereUniqueInput;
};
export type BitacoraUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.BitacoraUpdateManyMutationInput, Prisma.BitacoraUncheckedUpdateManyInput>;
    where?: Prisma.BitacoraWhereInput;
    limit?: number;
};
export type BitacoraUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BitacoraSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BitacoraOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BitacoraUpdateManyMutationInput, Prisma.BitacoraUncheckedUpdateManyInput>;
    where?: Prisma.BitacoraWhereInput;
    limit?: number;
    include?: Prisma.BitacoraIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type BitacoraUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BitacoraSelect<ExtArgs> | null;
    omit?: Prisma.BitacoraOmit<ExtArgs> | null;
    include?: Prisma.BitacoraInclude<ExtArgs> | null;
    where: Prisma.BitacoraWhereUniqueInput;
    create: Prisma.XOR<Prisma.BitacoraCreateInput, Prisma.BitacoraUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.BitacoraUpdateInput, Prisma.BitacoraUncheckedUpdateInput>;
};
export type BitacoraDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BitacoraSelect<ExtArgs> | null;
    omit?: Prisma.BitacoraOmit<ExtArgs> | null;
    include?: Prisma.BitacoraInclude<ExtArgs> | null;
    where: Prisma.BitacoraWhereUniqueInput;
};
export type BitacoraDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BitacoraWhereInput;
    limit?: number;
};
export type Bitacora$registrosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type BitacoraDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BitacoraSelect<ExtArgs> | null;
    omit?: Prisma.BitacoraOmit<ExtArgs> | null;
    include?: Prisma.BitacoraInclude<ExtArgs> | null;
};
export {};
