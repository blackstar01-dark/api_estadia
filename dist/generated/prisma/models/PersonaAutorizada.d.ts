import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PersonaAutorizadaModel = runtime.Types.Result.DefaultSelection<Prisma.$PersonaAutorizadaPayload>;
export type AggregatePersonaAutorizada = {
    _count: PersonaAutorizadaCountAggregateOutputType | null;
    _avg: PersonaAutorizadaAvgAggregateOutputType | null;
    _sum: PersonaAutorizadaSumAggregateOutputType | null;
    _min: PersonaAutorizadaMinAggregateOutputType | null;
    _max: PersonaAutorizadaMaxAggregateOutputType | null;
};
export type PersonaAutorizadaAvgAggregateOutputType = {
    id: number | null;
    estacionId: number | null;
    creadoPorId: number | null;
};
export type PersonaAutorizadaSumAggregateOutputType = {
    id: number | null;
    estacionId: number | null;
    creadoPorId: number | null;
};
export type PersonaAutorizadaMinAggregateOutputType = {
    id: number | null;
    nombre: string | null;
    cargo: string | null;
    firmaHashPersona: string | null;
    estacionId: number | null;
    creadoPorId: number | null;
    createdAt: Date | null;
};
export type PersonaAutorizadaMaxAggregateOutputType = {
    id: number | null;
    nombre: string | null;
    cargo: string | null;
    firmaHashPersona: string | null;
    estacionId: number | null;
    creadoPorId: number | null;
    createdAt: Date | null;
};
export type PersonaAutorizadaCountAggregateOutputType = {
    id: number;
    nombre: number;
    cargo: number;
    firmaHashPersona: number;
    estacionId: number;
    creadoPorId: number;
    createdAt: number;
    _all: number;
};
export type PersonaAutorizadaAvgAggregateInputType = {
    id?: true;
    estacionId?: true;
    creadoPorId?: true;
};
export type PersonaAutorizadaSumAggregateInputType = {
    id?: true;
    estacionId?: true;
    creadoPorId?: true;
};
export type PersonaAutorizadaMinAggregateInputType = {
    id?: true;
    nombre?: true;
    cargo?: true;
    firmaHashPersona?: true;
    estacionId?: true;
    creadoPorId?: true;
    createdAt?: true;
};
export type PersonaAutorizadaMaxAggregateInputType = {
    id?: true;
    nombre?: true;
    cargo?: true;
    firmaHashPersona?: true;
    estacionId?: true;
    creadoPorId?: true;
    createdAt?: true;
};
export type PersonaAutorizadaCountAggregateInputType = {
    id?: true;
    nombre?: true;
    cargo?: true;
    firmaHashPersona?: true;
    estacionId?: true;
    creadoPorId?: true;
    createdAt?: true;
    _all?: true;
};
export type PersonaAutorizadaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PersonaAutorizadaWhereInput;
    orderBy?: Prisma.PersonaAutorizadaOrderByWithRelationInput | Prisma.PersonaAutorizadaOrderByWithRelationInput[];
    cursor?: Prisma.PersonaAutorizadaWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PersonaAutorizadaCountAggregateInputType;
    _avg?: PersonaAutorizadaAvgAggregateInputType;
    _sum?: PersonaAutorizadaSumAggregateInputType;
    _min?: PersonaAutorizadaMinAggregateInputType;
    _max?: PersonaAutorizadaMaxAggregateInputType;
};
export type GetPersonaAutorizadaAggregateType<T extends PersonaAutorizadaAggregateArgs> = {
    [P in keyof T & keyof AggregatePersonaAutorizada]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePersonaAutorizada[P]> : Prisma.GetScalarType<T[P], AggregatePersonaAutorizada[P]>;
};
export type PersonaAutorizadaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PersonaAutorizadaWhereInput;
    orderBy?: Prisma.PersonaAutorizadaOrderByWithAggregationInput | Prisma.PersonaAutorizadaOrderByWithAggregationInput[];
    by: Prisma.PersonaAutorizadaScalarFieldEnum[] | Prisma.PersonaAutorizadaScalarFieldEnum;
    having?: Prisma.PersonaAutorizadaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PersonaAutorizadaCountAggregateInputType | true;
    _avg?: PersonaAutorizadaAvgAggregateInputType;
    _sum?: PersonaAutorizadaSumAggregateInputType;
    _min?: PersonaAutorizadaMinAggregateInputType;
    _max?: PersonaAutorizadaMaxAggregateInputType;
};
export type PersonaAutorizadaGroupByOutputType = {
    id: number;
    nombre: string;
    cargo: string;
    firmaHashPersona: string;
    estacionId: number;
    creadoPorId: number;
    createdAt: Date;
    _count: PersonaAutorizadaCountAggregateOutputType | null;
    _avg: PersonaAutorizadaAvgAggregateOutputType | null;
    _sum: PersonaAutorizadaSumAggregateOutputType | null;
    _min: PersonaAutorizadaMinAggregateOutputType | null;
    _max: PersonaAutorizadaMaxAggregateOutputType | null;
};
type GetPersonaAutorizadaGroupByPayload<T extends PersonaAutorizadaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PersonaAutorizadaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PersonaAutorizadaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PersonaAutorizadaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PersonaAutorizadaGroupByOutputType[P]>;
}>>;
export type PersonaAutorizadaWhereInput = {
    AND?: Prisma.PersonaAutorizadaWhereInput | Prisma.PersonaAutorizadaWhereInput[];
    OR?: Prisma.PersonaAutorizadaWhereInput[];
    NOT?: Prisma.PersonaAutorizadaWhereInput | Prisma.PersonaAutorizadaWhereInput[];
    id?: Prisma.IntFilter<"PersonaAutorizada"> | number;
    nombre?: Prisma.StringFilter<"PersonaAutorizada"> | string;
    cargo?: Prisma.StringFilter<"PersonaAutorizada"> | string;
    firmaHashPersona?: Prisma.StringFilter<"PersonaAutorizada"> | string;
    estacionId?: Prisma.IntFilter<"PersonaAutorizada"> | number;
    creadoPorId?: Prisma.IntFilter<"PersonaAutorizada"> | number;
    createdAt?: Prisma.DateTimeFilter<"PersonaAutorizada"> | Date | string;
    estacion?: Prisma.XOR<Prisma.EstacionScalarRelationFilter, Prisma.EstacionWhereInput>;
    creadoPor?: Prisma.XOR<Prisma.UsuarioScalarRelationFilter, Prisma.UsuarioWhereInput>;
    registros?: Prisma.RegistroBitacoraListRelationFilter;
};
export type PersonaAutorizadaOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    cargo?: Prisma.SortOrder;
    firmaHashPersona?: Prisma.SortOrder;
    estacionId?: Prisma.SortOrder;
    creadoPorId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    estacion?: Prisma.EstacionOrderByWithRelationInput;
    creadoPor?: Prisma.UsuarioOrderByWithRelationInput;
    registros?: Prisma.RegistroBitacoraOrderByRelationAggregateInput;
};
export type PersonaAutorizadaWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.PersonaAutorizadaWhereInput | Prisma.PersonaAutorizadaWhereInput[];
    OR?: Prisma.PersonaAutorizadaWhereInput[];
    NOT?: Prisma.PersonaAutorizadaWhereInput | Prisma.PersonaAutorizadaWhereInput[];
    nombre?: Prisma.StringFilter<"PersonaAutorizada"> | string;
    cargo?: Prisma.StringFilter<"PersonaAutorizada"> | string;
    firmaHashPersona?: Prisma.StringFilter<"PersonaAutorizada"> | string;
    estacionId?: Prisma.IntFilter<"PersonaAutorizada"> | number;
    creadoPorId?: Prisma.IntFilter<"PersonaAutorizada"> | number;
    createdAt?: Prisma.DateTimeFilter<"PersonaAutorizada"> | Date | string;
    estacion?: Prisma.XOR<Prisma.EstacionScalarRelationFilter, Prisma.EstacionWhereInput>;
    creadoPor?: Prisma.XOR<Prisma.UsuarioScalarRelationFilter, Prisma.UsuarioWhereInput>;
    registros?: Prisma.RegistroBitacoraListRelationFilter;
}, "id">;
export type PersonaAutorizadaOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    cargo?: Prisma.SortOrder;
    firmaHashPersona?: Prisma.SortOrder;
    estacionId?: Prisma.SortOrder;
    creadoPorId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.PersonaAutorizadaCountOrderByAggregateInput;
    _avg?: Prisma.PersonaAutorizadaAvgOrderByAggregateInput;
    _max?: Prisma.PersonaAutorizadaMaxOrderByAggregateInput;
    _min?: Prisma.PersonaAutorizadaMinOrderByAggregateInput;
    _sum?: Prisma.PersonaAutorizadaSumOrderByAggregateInput;
};
export type PersonaAutorizadaScalarWhereWithAggregatesInput = {
    AND?: Prisma.PersonaAutorizadaScalarWhereWithAggregatesInput | Prisma.PersonaAutorizadaScalarWhereWithAggregatesInput[];
    OR?: Prisma.PersonaAutorizadaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PersonaAutorizadaScalarWhereWithAggregatesInput | Prisma.PersonaAutorizadaScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"PersonaAutorizada"> | number;
    nombre?: Prisma.StringWithAggregatesFilter<"PersonaAutorizada"> | string;
    cargo?: Prisma.StringWithAggregatesFilter<"PersonaAutorizada"> | string;
    firmaHashPersona?: Prisma.StringWithAggregatesFilter<"PersonaAutorizada"> | string;
    estacionId?: Prisma.IntWithAggregatesFilter<"PersonaAutorizada"> | number;
    creadoPorId?: Prisma.IntWithAggregatesFilter<"PersonaAutorizada"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"PersonaAutorizada"> | Date | string;
};
export type PersonaAutorizadaCreateInput = {
    nombre: string;
    cargo: string;
    firmaHashPersona: string;
    createdAt?: Date | string;
    estacion: Prisma.EstacionCreateNestedOneWithoutPersonasInput;
    creadoPor: Prisma.UsuarioCreateNestedOneWithoutPersonasCreadasInput;
    registros?: Prisma.RegistroBitacoraCreateNestedManyWithoutPersonaInput;
};
export type PersonaAutorizadaUncheckedCreateInput = {
    id?: number;
    nombre: string;
    cargo: string;
    firmaHashPersona: string;
    estacionId: number;
    creadoPorId: number;
    createdAt?: Date | string;
    registros?: Prisma.RegistroBitacoraUncheckedCreateNestedManyWithoutPersonaInput;
};
export type PersonaAutorizadaUpdateInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    cargo?: Prisma.StringFieldUpdateOperationsInput | string;
    firmaHashPersona?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estacion?: Prisma.EstacionUpdateOneRequiredWithoutPersonasNestedInput;
    creadoPor?: Prisma.UsuarioUpdateOneRequiredWithoutPersonasCreadasNestedInput;
    registros?: Prisma.RegistroBitacoraUpdateManyWithoutPersonaNestedInput;
};
export type PersonaAutorizadaUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    cargo?: Prisma.StringFieldUpdateOperationsInput | string;
    firmaHashPersona?: Prisma.StringFieldUpdateOperationsInput | string;
    estacionId?: Prisma.IntFieldUpdateOperationsInput | number;
    creadoPorId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    registros?: Prisma.RegistroBitacoraUncheckedUpdateManyWithoutPersonaNestedInput;
};
export type PersonaAutorizadaCreateManyInput = {
    id?: number;
    nombre: string;
    cargo: string;
    firmaHashPersona: string;
    estacionId: number;
    creadoPorId: number;
    createdAt?: Date | string;
};
export type PersonaAutorizadaUpdateManyMutationInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    cargo?: Prisma.StringFieldUpdateOperationsInput | string;
    firmaHashPersona?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PersonaAutorizadaUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    cargo?: Prisma.StringFieldUpdateOperationsInput | string;
    firmaHashPersona?: Prisma.StringFieldUpdateOperationsInput | string;
    estacionId?: Prisma.IntFieldUpdateOperationsInput | number;
    creadoPorId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PersonaAutorizadaListRelationFilter = {
    every?: Prisma.PersonaAutorizadaWhereInput;
    some?: Prisma.PersonaAutorizadaWhereInput;
    none?: Prisma.PersonaAutorizadaWhereInput;
};
export type PersonaAutorizadaOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PersonaAutorizadaCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    cargo?: Prisma.SortOrder;
    firmaHashPersona?: Prisma.SortOrder;
    estacionId?: Prisma.SortOrder;
    creadoPorId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PersonaAutorizadaAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    estacionId?: Prisma.SortOrder;
    creadoPorId?: Prisma.SortOrder;
};
export type PersonaAutorizadaMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    cargo?: Prisma.SortOrder;
    firmaHashPersona?: Prisma.SortOrder;
    estacionId?: Prisma.SortOrder;
    creadoPorId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PersonaAutorizadaMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    cargo?: Prisma.SortOrder;
    firmaHashPersona?: Prisma.SortOrder;
    estacionId?: Prisma.SortOrder;
    creadoPorId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PersonaAutorizadaSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    estacionId?: Prisma.SortOrder;
    creadoPorId?: Prisma.SortOrder;
};
export type PersonaAutorizadaScalarRelationFilter = {
    is?: Prisma.PersonaAutorizadaWhereInput;
    isNot?: Prisma.PersonaAutorizadaWhereInput;
};
export type PersonaAutorizadaCreateNestedManyWithoutCreadoPorInput = {
    create?: Prisma.XOR<Prisma.PersonaAutorizadaCreateWithoutCreadoPorInput, Prisma.PersonaAutorizadaUncheckedCreateWithoutCreadoPorInput> | Prisma.PersonaAutorizadaCreateWithoutCreadoPorInput[] | Prisma.PersonaAutorizadaUncheckedCreateWithoutCreadoPorInput[];
    connectOrCreate?: Prisma.PersonaAutorizadaCreateOrConnectWithoutCreadoPorInput | Prisma.PersonaAutorizadaCreateOrConnectWithoutCreadoPorInput[];
    createMany?: Prisma.PersonaAutorizadaCreateManyCreadoPorInputEnvelope;
    connect?: Prisma.PersonaAutorizadaWhereUniqueInput | Prisma.PersonaAutorizadaWhereUniqueInput[];
};
export type PersonaAutorizadaUncheckedCreateNestedManyWithoutCreadoPorInput = {
    create?: Prisma.XOR<Prisma.PersonaAutorizadaCreateWithoutCreadoPorInput, Prisma.PersonaAutorizadaUncheckedCreateWithoutCreadoPorInput> | Prisma.PersonaAutorizadaCreateWithoutCreadoPorInput[] | Prisma.PersonaAutorizadaUncheckedCreateWithoutCreadoPorInput[];
    connectOrCreate?: Prisma.PersonaAutorizadaCreateOrConnectWithoutCreadoPorInput | Prisma.PersonaAutorizadaCreateOrConnectWithoutCreadoPorInput[];
    createMany?: Prisma.PersonaAutorizadaCreateManyCreadoPorInputEnvelope;
    connect?: Prisma.PersonaAutorizadaWhereUniqueInput | Prisma.PersonaAutorizadaWhereUniqueInput[];
};
export type PersonaAutorizadaUpdateManyWithoutCreadoPorNestedInput = {
    create?: Prisma.XOR<Prisma.PersonaAutorizadaCreateWithoutCreadoPorInput, Prisma.PersonaAutorizadaUncheckedCreateWithoutCreadoPorInput> | Prisma.PersonaAutorizadaCreateWithoutCreadoPorInput[] | Prisma.PersonaAutorizadaUncheckedCreateWithoutCreadoPorInput[];
    connectOrCreate?: Prisma.PersonaAutorizadaCreateOrConnectWithoutCreadoPorInput | Prisma.PersonaAutorizadaCreateOrConnectWithoutCreadoPorInput[];
    upsert?: Prisma.PersonaAutorizadaUpsertWithWhereUniqueWithoutCreadoPorInput | Prisma.PersonaAutorizadaUpsertWithWhereUniqueWithoutCreadoPorInput[];
    createMany?: Prisma.PersonaAutorizadaCreateManyCreadoPorInputEnvelope;
    set?: Prisma.PersonaAutorizadaWhereUniqueInput | Prisma.PersonaAutorizadaWhereUniqueInput[];
    disconnect?: Prisma.PersonaAutorizadaWhereUniqueInput | Prisma.PersonaAutorizadaWhereUniqueInput[];
    delete?: Prisma.PersonaAutorizadaWhereUniqueInput | Prisma.PersonaAutorizadaWhereUniqueInput[];
    connect?: Prisma.PersonaAutorizadaWhereUniqueInput | Prisma.PersonaAutorizadaWhereUniqueInput[];
    update?: Prisma.PersonaAutorizadaUpdateWithWhereUniqueWithoutCreadoPorInput | Prisma.PersonaAutorizadaUpdateWithWhereUniqueWithoutCreadoPorInput[];
    updateMany?: Prisma.PersonaAutorizadaUpdateManyWithWhereWithoutCreadoPorInput | Prisma.PersonaAutorizadaUpdateManyWithWhereWithoutCreadoPorInput[];
    deleteMany?: Prisma.PersonaAutorizadaScalarWhereInput | Prisma.PersonaAutorizadaScalarWhereInput[];
};
export type PersonaAutorizadaUncheckedUpdateManyWithoutCreadoPorNestedInput = {
    create?: Prisma.XOR<Prisma.PersonaAutorizadaCreateWithoutCreadoPorInput, Prisma.PersonaAutorizadaUncheckedCreateWithoutCreadoPorInput> | Prisma.PersonaAutorizadaCreateWithoutCreadoPorInput[] | Prisma.PersonaAutorizadaUncheckedCreateWithoutCreadoPorInput[];
    connectOrCreate?: Prisma.PersonaAutorizadaCreateOrConnectWithoutCreadoPorInput | Prisma.PersonaAutorizadaCreateOrConnectWithoutCreadoPorInput[];
    upsert?: Prisma.PersonaAutorizadaUpsertWithWhereUniqueWithoutCreadoPorInput | Prisma.PersonaAutorizadaUpsertWithWhereUniqueWithoutCreadoPorInput[];
    createMany?: Prisma.PersonaAutorizadaCreateManyCreadoPorInputEnvelope;
    set?: Prisma.PersonaAutorizadaWhereUniqueInput | Prisma.PersonaAutorizadaWhereUniqueInput[];
    disconnect?: Prisma.PersonaAutorizadaWhereUniqueInput | Prisma.PersonaAutorizadaWhereUniqueInput[];
    delete?: Prisma.PersonaAutorizadaWhereUniqueInput | Prisma.PersonaAutorizadaWhereUniqueInput[];
    connect?: Prisma.PersonaAutorizadaWhereUniqueInput | Prisma.PersonaAutorizadaWhereUniqueInput[];
    update?: Prisma.PersonaAutorizadaUpdateWithWhereUniqueWithoutCreadoPorInput | Prisma.PersonaAutorizadaUpdateWithWhereUniqueWithoutCreadoPorInput[];
    updateMany?: Prisma.PersonaAutorizadaUpdateManyWithWhereWithoutCreadoPorInput | Prisma.PersonaAutorizadaUpdateManyWithWhereWithoutCreadoPorInput[];
    deleteMany?: Prisma.PersonaAutorizadaScalarWhereInput | Prisma.PersonaAutorizadaScalarWhereInput[];
};
export type PersonaAutorizadaCreateNestedManyWithoutEstacionInput = {
    create?: Prisma.XOR<Prisma.PersonaAutorizadaCreateWithoutEstacionInput, Prisma.PersonaAutorizadaUncheckedCreateWithoutEstacionInput> | Prisma.PersonaAutorizadaCreateWithoutEstacionInput[] | Prisma.PersonaAutorizadaUncheckedCreateWithoutEstacionInput[];
    connectOrCreate?: Prisma.PersonaAutorizadaCreateOrConnectWithoutEstacionInput | Prisma.PersonaAutorizadaCreateOrConnectWithoutEstacionInput[];
    createMany?: Prisma.PersonaAutorizadaCreateManyEstacionInputEnvelope;
    connect?: Prisma.PersonaAutorizadaWhereUniqueInput | Prisma.PersonaAutorizadaWhereUniqueInput[];
};
export type PersonaAutorizadaUncheckedCreateNestedManyWithoutEstacionInput = {
    create?: Prisma.XOR<Prisma.PersonaAutorizadaCreateWithoutEstacionInput, Prisma.PersonaAutorizadaUncheckedCreateWithoutEstacionInput> | Prisma.PersonaAutorizadaCreateWithoutEstacionInput[] | Prisma.PersonaAutorizadaUncheckedCreateWithoutEstacionInput[];
    connectOrCreate?: Prisma.PersonaAutorizadaCreateOrConnectWithoutEstacionInput | Prisma.PersonaAutorizadaCreateOrConnectWithoutEstacionInput[];
    createMany?: Prisma.PersonaAutorizadaCreateManyEstacionInputEnvelope;
    connect?: Prisma.PersonaAutorizadaWhereUniqueInput | Prisma.PersonaAutorizadaWhereUniqueInput[];
};
export type PersonaAutorizadaUpdateManyWithoutEstacionNestedInput = {
    create?: Prisma.XOR<Prisma.PersonaAutorizadaCreateWithoutEstacionInput, Prisma.PersonaAutorizadaUncheckedCreateWithoutEstacionInput> | Prisma.PersonaAutorizadaCreateWithoutEstacionInput[] | Prisma.PersonaAutorizadaUncheckedCreateWithoutEstacionInput[];
    connectOrCreate?: Prisma.PersonaAutorizadaCreateOrConnectWithoutEstacionInput | Prisma.PersonaAutorizadaCreateOrConnectWithoutEstacionInput[];
    upsert?: Prisma.PersonaAutorizadaUpsertWithWhereUniqueWithoutEstacionInput | Prisma.PersonaAutorizadaUpsertWithWhereUniqueWithoutEstacionInput[];
    createMany?: Prisma.PersonaAutorizadaCreateManyEstacionInputEnvelope;
    set?: Prisma.PersonaAutorizadaWhereUniqueInput | Prisma.PersonaAutorizadaWhereUniqueInput[];
    disconnect?: Prisma.PersonaAutorizadaWhereUniqueInput | Prisma.PersonaAutorizadaWhereUniqueInput[];
    delete?: Prisma.PersonaAutorizadaWhereUniqueInput | Prisma.PersonaAutorizadaWhereUniqueInput[];
    connect?: Prisma.PersonaAutorizadaWhereUniqueInput | Prisma.PersonaAutorizadaWhereUniqueInput[];
    update?: Prisma.PersonaAutorizadaUpdateWithWhereUniqueWithoutEstacionInput | Prisma.PersonaAutorizadaUpdateWithWhereUniqueWithoutEstacionInput[];
    updateMany?: Prisma.PersonaAutorizadaUpdateManyWithWhereWithoutEstacionInput | Prisma.PersonaAutorizadaUpdateManyWithWhereWithoutEstacionInput[];
    deleteMany?: Prisma.PersonaAutorizadaScalarWhereInput | Prisma.PersonaAutorizadaScalarWhereInput[];
};
export type PersonaAutorizadaUncheckedUpdateManyWithoutEstacionNestedInput = {
    create?: Prisma.XOR<Prisma.PersonaAutorizadaCreateWithoutEstacionInput, Prisma.PersonaAutorizadaUncheckedCreateWithoutEstacionInput> | Prisma.PersonaAutorizadaCreateWithoutEstacionInput[] | Prisma.PersonaAutorizadaUncheckedCreateWithoutEstacionInput[];
    connectOrCreate?: Prisma.PersonaAutorizadaCreateOrConnectWithoutEstacionInput | Prisma.PersonaAutorizadaCreateOrConnectWithoutEstacionInput[];
    upsert?: Prisma.PersonaAutorizadaUpsertWithWhereUniqueWithoutEstacionInput | Prisma.PersonaAutorizadaUpsertWithWhereUniqueWithoutEstacionInput[];
    createMany?: Prisma.PersonaAutorizadaCreateManyEstacionInputEnvelope;
    set?: Prisma.PersonaAutorizadaWhereUniqueInput | Prisma.PersonaAutorizadaWhereUniqueInput[];
    disconnect?: Prisma.PersonaAutorizadaWhereUniqueInput | Prisma.PersonaAutorizadaWhereUniqueInput[];
    delete?: Prisma.PersonaAutorizadaWhereUniqueInput | Prisma.PersonaAutorizadaWhereUniqueInput[];
    connect?: Prisma.PersonaAutorizadaWhereUniqueInput | Prisma.PersonaAutorizadaWhereUniqueInput[];
    update?: Prisma.PersonaAutorizadaUpdateWithWhereUniqueWithoutEstacionInput | Prisma.PersonaAutorizadaUpdateWithWhereUniqueWithoutEstacionInput[];
    updateMany?: Prisma.PersonaAutorizadaUpdateManyWithWhereWithoutEstacionInput | Prisma.PersonaAutorizadaUpdateManyWithWhereWithoutEstacionInput[];
    deleteMany?: Prisma.PersonaAutorizadaScalarWhereInput | Prisma.PersonaAutorizadaScalarWhereInput[];
};
export type PersonaAutorizadaCreateNestedOneWithoutRegistrosInput = {
    create?: Prisma.XOR<Prisma.PersonaAutorizadaCreateWithoutRegistrosInput, Prisma.PersonaAutorizadaUncheckedCreateWithoutRegistrosInput>;
    connectOrCreate?: Prisma.PersonaAutorizadaCreateOrConnectWithoutRegistrosInput;
    connect?: Prisma.PersonaAutorizadaWhereUniqueInput;
};
export type PersonaAutorizadaUpdateOneRequiredWithoutRegistrosNestedInput = {
    create?: Prisma.XOR<Prisma.PersonaAutorizadaCreateWithoutRegistrosInput, Prisma.PersonaAutorizadaUncheckedCreateWithoutRegistrosInput>;
    connectOrCreate?: Prisma.PersonaAutorizadaCreateOrConnectWithoutRegistrosInput;
    upsert?: Prisma.PersonaAutorizadaUpsertWithoutRegistrosInput;
    connect?: Prisma.PersonaAutorizadaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PersonaAutorizadaUpdateToOneWithWhereWithoutRegistrosInput, Prisma.PersonaAutorizadaUpdateWithoutRegistrosInput>, Prisma.PersonaAutorizadaUncheckedUpdateWithoutRegistrosInput>;
};
export type PersonaAutorizadaCreateWithoutCreadoPorInput = {
    nombre: string;
    cargo: string;
    firmaHashPersona: string;
    createdAt?: Date | string;
    estacion: Prisma.EstacionCreateNestedOneWithoutPersonasInput;
    registros?: Prisma.RegistroBitacoraCreateNestedManyWithoutPersonaInput;
};
export type PersonaAutorizadaUncheckedCreateWithoutCreadoPorInput = {
    id?: number;
    nombre: string;
    cargo: string;
    firmaHashPersona: string;
    estacionId: number;
    createdAt?: Date | string;
    registros?: Prisma.RegistroBitacoraUncheckedCreateNestedManyWithoutPersonaInput;
};
export type PersonaAutorizadaCreateOrConnectWithoutCreadoPorInput = {
    where: Prisma.PersonaAutorizadaWhereUniqueInput;
    create: Prisma.XOR<Prisma.PersonaAutorizadaCreateWithoutCreadoPorInput, Prisma.PersonaAutorizadaUncheckedCreateWithoutCreadoPorInput>;
};
export type PersonaAutorizadaCreateManyCreadoPorInputEnvelope = {
    data: Prisma.PersonaAutorizadaCreateManyCreadoPorInput | Prisma.PersonaAutorizadaCreateManyCreadoPorInput[];
    skipDuplicates?: boolean;
};
export type PersonaAutorizadaUpsertWithWhereUniqueWithoutCreadoPorInput = {
    where: Prisma.PersonaAutorizadaWhereUniqueInput;
    update: Prisma.XOR<Prisma.PersonaAutorizadaUpdateWithoutCreadoPorInput, Prisma.PersonaAutorizadaUncheckedUpdateWithoutCreadoPorInput>;
    create: Prisma.XOR<Prisma.PersonaAutorizadaCreateWithoutCreadoPorInput, Prisma.PersonaAutorizadaUncheckedCreateWithoutCreadoPorInput>;
};
export type PersonaAutorizadaUpdateWithWhereUniqueWithoutCreadoPorInput = {
    where: Prisma.PersonaAutorizadaWhereUniqueInput;
    data: Prisma.XOR<Prisma.PersonaAutorizadaUpdateWithoutCreadoPorInput, Prisma.PersonaAutorizadaUncheckedUpdateWithoutCreadoPorInput>;
};
export type PersonaAutorizadaUpdateManyWithWhereWithoutCreadoPorInput = {
    where: Prisma.PersonaAutorizadaScalarWhereInput;
    data: Prisma.XOR<Prisma.PersonaAutorizadaUpdateManyMutationInput, Prisma.PersonaAutorizadaUncheckedUpdateManyWithoutCreadoPorInput>;
};
export type PersonaAutorizadaScalarWhereInput = {
    AND?: Prisma.PersonaAutorizadaScalarWhereInput | Prisma.PersonaAutorizadaScalarWhereInput[];
    OR?: Prisma.PersonaAutorizadaScalarWhereInput[];
    NOT?: Prisma.PersonaAutorizadaScalarWhereInput | Prisma.PersonaAutorizadaScalarWhereInput[];
    id?: Prisma.IntFilter<"PersonaAutorizada"> | number;
    nombre?: Prisma.StringFilter<"PersonaAutorizada"> | string;
    cargo?: Prisma.StringFilter<"PersonaAutorizada"> | string;
    firmaHashPersona?: Prisma.StringFilter<"PersonaAutorizada"> | string;
    estacionId?: Prisma.IntFilter<"PersonaAutorizada"> | number;
    creadoPorId?: Prisma.IntFilter<"PersonaAutorizada"> | number;
    createdAt?: Prisma.DateTimeFilter<"PersonaAutorizada"> | Date | string;
};
export type PersonaAutorizadaCreateWithoutEstacionInput = {
    nombre: string;
    cargo: string;
    firmaHashPersona: string;
    createdAt?: Date | string;
    creadoPor: Prisma.UsuarioCreateNestedOneWithoutPersonasCreadasInput;
    registros?: Prisma.RegistroBitacoraCreateNestedManyWithoutPersonaInput;
};
export type PersonaAutorizadaUncheckedCreateWithoutEstacionInput = {
    id?: number;
    nombre: string;
    cargo: string;
    firmaHashPersona: string;
    creadoPorId: number;
    createdAt?: Date | string;
    registros?: Prisma.RegistroBitacoraUncheckedCreateNestedManyWithoutPersonaInput;
};
export type PersonaAutorizadaCreateOrConnectWithoutEstacionInput = {
    where: Prisma.PersonaAutorizadaWhereUniqueInput;
    create: Prisma.XOR<Prisma.PersonaAutorizadaCreateWithoutEstacionInput, Prisma.PersonaAutorizadaUncheckedCreateWithoutEstacionInput>;
};
export type PersonaAutorizadaCreateManyEstacionInputEnvelope = {
    data: Prisma.PersonaAutorizadaCreateManyEstacionInput | Prisma.PersonaAutorizadaCreateManyEstacionInput[];
    skipDuplicates?: boolean;
};
export type PersonaAutorizadaUpsertWithWhereUniqueWithoutEstacionInput = {
    where: Prisma.PersonaAutorizadaWhereUniqueInput;
    update: Prisma.XOR<Prisma.PersonaAutorizadaUpdateWithoutEstacionInput, Prisma.PersonaAutorizadaUncheckedUpdateWithoutEstacionInput>;
    create: Prisma.XOR<Prisma.PersonaAutorizadaCreateWithoutEstacionInput, Prisma.PersonaAutorizadaUncheckedCreateWithoutEstacionInput>;
};
export type PersonaAutorizadaUpdateWithWhereUniqueWithoutEstacionInput = {
    where: Prisma.PersonaAutorizadaWhereUniqueInput;
    data: Prisma.XOR<Prisma.PersonaAutorizadaUpdateWithoutEstacionInput, Prisma.PersonaAutorizadaUncheckedUpdateWithoutEstacionInput>;
};
export type PersonaAutorizadaUpdateManyWithWhereWithoutEstacionInput = {
    where: Prisma.PersonaAutorizadaScalarWhereInput;
    data: Prisma.XOR<Prisma.PersonaAutorizadaUpdateManyMutationInput, Prisma.PersonaAutorizadaUncheckedUpdateManyWithoutEstacionInput>;
};
export type PersonaAutorizadaCreateWithoutRegistrosInput = {
    nombre: string;
    cargo: string;
    firmaHashPersona: string;
    createdAt?: Date | string;
    estacion: Prisma.EstacionCreateNestedOneWithoutPersonasInput;
    creadoPor: Prisma.UsuarioCreateNestedOneWithoutPersonasCreadasInput;
};
export type PersonaAutorizadaUncheckedCreateWithoutRegistrosInput = {
    id?: number;
    nombre: string;
    cargo: string;
    firmaHashPersona: string;
    estacionId: number;
    creadoPorId: number;
    createdAt?: Date | string;
};
export type PersonaAutorizadaCreateOrConnectWithoutRegistrosInput = {
    where: Prisma.PersonaAutorizadaWhereUniqueInput;
    create: Prisma.XOR<Prisma.PersonaAutorizadaCreateWithoutRegistrosInput, Prisma.PersonaAutorizadaUncheckedCreateWithoutRegistrosInput>;
};
export type PersonaAutorizadaUpsertWithoutRegistrosInput = {
    update: Prisma.XOR<Prisma.PersonaAutorizadaUpdateWithoutRegistrosInput, Prisma.PersonaAutorizadaUncheckedUpdateWithoutRegistrosInput>;
    create: Prisma.XOR<Prisma.PersonaAutorizadaCreateWithoutRegistrosInput, Prisma.PersonaAutorizadaUncheckedCreateWithoutRegistrosInput>;
    where?: Prisma.PersonaAutorizadaWhereInput;
};
export type PersonaAutorizadaUpdateToOneWithWhereWithoutRegistrosInput = {
    where?: Prisma.PersonaAutorizadaWhereInput;
    data: Prisma.XOR<Prisma.PersonaAutorizadaUpdateWithoutRegistrosInput, Prisma.PersonaAutorizadaUncheckedUpdateWithoutRegistrosInput>;
};
export type PersonaAutorizadaUpdateWithoutRegistrosInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    cargo?: Prisma.StringFieldUpdateOperationsInput | string;
    firmaHashPersona?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estacion?: Prisma.EstacionUpdateOneRequiredWithoutPersonasNestedInput;
    creadoPor?: Prisma.UsuarioUpdateOneRequiredWithoutPersonasCreadasNestedInput;
};
export type PersonaAutorizadaUncheckedUpdateWithoutRegistrosInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    cargo?: Prisma.StringFieldUpdateOperationsInput | string;
    firmaHashPersona?: Prisma.StringFieldUpdateOperationsInput | string;
    estacionId?: Prisma.IntFieldUpdateOperationsInput | number;
    creadoPorId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PersonaAutorizadaCreateManyCreadoPorInput = {
    id?: number;
    nombre: string;
    cargo: string;
    firmaHashPersona: string;
    estacionId: number;
    createdAt?: Date | string;
};
export type PersonaAutorizadaUpdateWithoutCreadoPorInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    cargo?: Prisma.StringFieldUpdateOperationsInput | string;
    firmaHashPersona?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estacion?: Prisma.EstacionUpdateOneRequiredWithoutPersonasNestedInput;
    registros?: Prisma.RegistroBitacoraUpdateManyWithoutPersonaNestedInput;
};
export type PersonaAutorizadaUncheckedUpdateWithoutCreadoPorInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    cargo?: Prisma.StringFieldUpdateOperationsInput | string;
    firmaHashPersona?: Prisma.StringFieldUpdateOperationsInput | string;
    estacionId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    registros?: Prisma.RegistroBitacoraUncheckedUpdateManyWithoutPersonaNestedInput;
};
export type PersonaAutorizadaUncheckedUpdateManyWithoutCreadoPorInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    cargo?: Prisma.StringFieldUpdateOperationsInput | string;
    firmaHashPersona?: Prisma.StringFieldUpdateOperationsInput | string;
    estacionId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PersonaAutorizadaCreateManyEstacionInput = {
    id?: number;
    nombre: string;
    cargo: string;
    firmaHashPersona: string;
    creadoPorId: number;
    createdAt?: Date | string;
};
export type PersonaAutorizadaUpdateWithoutEstacionInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    cargo?: Prisma.StringFieldUpdateOperationsInput | string;
    firmaHashPersona?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    creadoPor?: Prisma.UsuarioUpdateOneRequiredWithoutPersonasCreadasNestedInput;
    registros?: Prisma.RegistroBitacoraUpdateManyWithoutPersonaNestedInput;
};
export type PersonaAutorizadaUncheckedUpdateWithoutEstacionInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    cargo?: Prisma.StringFieldUpdateOperationsInput | string;
    firmaHashPersona?: Prisma.StringFieldUpdateOperationsInput | string;
    creadoPorId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    registros?: Prisma.RegistroBitacoraUncheckedUpdateManyWithoutPersonaNestedInput;
};
export type PersonaAutorizadaUncheckedUpdateManyWithoutEstacionInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    cargo?: Prisma.StringFieldUpdateOperationsInput | string;
    firmaHashPersona?: Prisma.StringFieldUpdateOperationsInput | string;
    creadoPorId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PersonaAutorizadaCountOutputType = {
    registros: number;
};
export type PersonaAutorizadaCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    registros?: boolean | PersonaAutorizadaCountOutputTypeCountRegistrosArgs;
};
export type PersonaAutorizadaCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PersonaAutorizadaCountOutputTypeSelect<ExtArgs> | null;
};
export type PersonaAutorizadaCountOutputTypeCountRegistrosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RegistroBitacoraWhereInput;
};
export type PersonaAutorizadaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    cargo?: boolean;
    firmaHashPersona?: boolean;
    estacionId?: boolean;
    creadoPorId?: boolean;
    createdAt?: boolean;
    estacion?: boolean | Prisma.EstacionDefaultArgs<ExtArgs>;
    creadoPor?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
    registros?: boolean | Prisma.PersonaAutorizada$registrosArgs<ExtArgs>;
    _count?: boolean | Prisma.PersonaAutorizadaCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["personaAutorizada"]>;
export type PersonaAutorizadaSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    cargo?: boolean;
    firmaHashPersona?: boolean;
    estacionId?: boolean;
    creadoPorId?: boolean;
    createdAt?: boolean;
    estacion?: boolean | Prisma.EstacionDefaultArgs<ExtArgs>;
    creadoPor?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["personaAutorizada"]>;
export type PersonaAutorizadaSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    cargo?: boolean;
    firmaHashPersona?: boolean;
    estacionId?: boolean;
    creadoPorId?: boolean;
    createdAt?: boolean;
    estacion?: boolean | Prisma.EstacionDefaultArgs<ExtArgs>;
    creadoPor?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["personaAutorizada"]>;
export type PersonaAutorizadaSelectScalar = {
    id?: boolean;
    nombre?: boolean;
    cargo?: boolean;
    firmaHashPersona?: boolean;
    estacionId?: boolean;
    creadoPorId?: boolean;
    createdAt?: boolean;
};
export type PersonaAutorizadaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nombre" | "cargo" | "firmaHashPersona" | "estacionId" | "creadoPorId" | "createdAt", ExtArgs["result"]["personaAutorizada"]>;
export type PersonaAutorizadaInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    estacion?: boolean | Prisma.EstacionDefaultArgs<ExtArgs>;
    creadoPor?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
    registros?: boolean | Prisma.PersonaAutorizada$registrosArgs<ExtArgs>;
    _count?: boolean | Prisma.PersonaAutorizadaCountOutputTypeDefaultArgs<ExtArgs>;
};
export type PersonaAutorizadaIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    estacion?: boolean | Prisma.EstacionDefaultArgs<ExtArgs>;
    creadoPor?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
};
export type PersonaAutorizadaIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    estacion?: boolean | Prisma.EstacionDefaultArgs<ExtArgs>;
    creadoPor?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
};
export type $PersonaAutorizadaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PersonaAutorizada";
    objects: {
        estacion: Prisma.$EstacionPayload<ExtArgs>;
        creadoPor: Prisma.$UsuarioPayload<ExtArgs>;
        registros: Prisma.$RegistroBitacoraPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        nombre: string;
        cargo: string;
        firmaHashPersona: string;
        estacionId: number;
        creadoPorId: number;
        createdAt: Date;
    }, ExtArgs["result"]["personaAutorizada"]>;
    composites: {};
};
export type PersonaAutorizadaGetPayload<S extends boolean | null | undefined | PersonaAutorizadaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PersonaAutorizadaPayload, S>;
export type PersonaAutorizadaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PersonaAutorizadaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PersonaAutorizadaCountAggregateInputType | true;
};
export interface PersonaAutorizadaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PersonaAutorizada'];
        meta: {
            name: 'PersonaAutorizada';
        };
    };
    findUnique<T extends PersonaAutorizadaFindUniqueArgs>(args: Prisma.SelectSubset<T, PersonaAutorizadaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PersonaAutorizadaClient<runtime.Types.Result.GetResult<Prisma.$PersonaAutorizadaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PersonaAutorizadaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PersonaAutorizadaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PersonaAutorizadaClient<runtime.Types.Result.GetResult<Prisma.$PersonaAutorizadaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PersonaAutorizadaFindFirstArgs>(args?: Prisma.SelectSubset<T, PersonaAutorizadaFindFirstArgs<ExtArgs>>): Prisma.Prisma__PersonaAutorizadaClient<runtime.Types.Result.GetResult<Prisma.$PersonaAutorizadaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PersonaAutorizadaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PersonaAutorizadaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PersonaAutorizadaClient<runtime.Types.Result.GetResult<Prisma.$PersonaAutorizadaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PersonaAutorizadaFindManyArgs>(args?: Prisma.SelectSubset<T, PersonaAutorizadaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PersonaAutorizadaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PersonaAutorizadaCreateArgs>(args: Prisma.SelectSubset<T, PersonaAutorizadaCreateArgs<ExtArgs>>): Prisma.Prisma__PersonaAutorizadaClient<runtime.Types.Result.GetResult<Prisma.$PersonaAutorizadaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PersonaAutorizadaCreateManyArgs>(args?: Prisma.SelectSubset<T, PersonaAutorizadaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PersonaAutorizadaCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PersonaAutorizadaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PersonaAutorizadaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PersonaAutorizadaDeleteArgs>(args: Prisma.SelectSubset<T, PersonaAutorizadaDeleteArgs<ExtArgs>>): Prisma.Prisma__PersonaAutorizadaClient<runtime.Types.Result.GetResult<Prisma.$PersonaAutorizadaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PersonaAutorizadaUpdateArgs>(args: Prisma.SelectSubset<T, PersonaAutorizadaUpdateArgs<ExtArgs>>): Prisma.Prisma__PersonaAutorizadaClient<runtime.Types.Result.GetResult<Prisma.$PersonaAutorizadaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PersonaAutorizadaDeleteManyArgs>(args?: Prisma.SelectSubset<T, PersonaAutorizadaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PersonaAutorizadaUpdateManyArgs>(args: Prisma.SelectSubset<T, PersonaAutorizadaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PersonaAutorizadaUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PersonaAutorizadaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PersonaAutorizadaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PersonaAutorizadaUpsertArgs>(args: Prisma.SelectSubset<T, PersonaAutorizadaUpsertArgs<ExtArgs>>): Prisma.Prisma__PersonaAutorizadaClient<runtime.Types.Result.GetResult<Prisma.$PersonaAutorizadaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PersonaAutorizadaCountArgs>(args?: Prisma.Subset<T, PersonaAutorizadaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PersonaAutorizadaCountAggregateOutputType> : number>;
    aggregate<T extends PersonaAutorizadaAggregateArgs>(args: Prisma.Subset<T, PersonaAutorizadaAggregateArgs>): Prisma.PrismaPromise<GetPersonaAutorizadaAggregateType<T>>;
    groupBy<T extends PersonaAutorizadaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PersonaAutorizadaGroupByArgs['orderBy'];
    } : {
        orderBy?: PersonaAutorizadaGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PersonaAutorizadaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonaAutorizadaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PersonaAutorizadaFieldRefs;
}
export interface Prisma__PersonaAutorizadaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    estacion<T extends Prisma.EstacionDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EstacionDefaultArgs<ExtArgs>>): Prisma.Prisma__EstacionClient<runtime.Types.Result.GetResult<Prisma.$EstacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    creadoPor<T extends Prisma.UsuarioDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UsuarioDefaultArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    registros<T extends Prisma.PersonaAutorizada$registrosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PersonaAutorizada$registrosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RegistroBitacoraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PersonaAutorizadaFieldRefs {
    readonly id: Prisma.FieldRef<"PersonaAutorizada", 'Int'>;
    readonly nombre: Prisma.FieldRef<"PersonaAutorizada", 'String'>;
    readonly cargo: Prisma.FieldRef<"PersonaAutorizada", 'String'>;
    readonly firmaHashPersona: Prisma.FieldRef<"PersonaAutorizada", 'String'>;
    readonly estacionId: Prisma.FieldRef<"PersonaAutorizada", 'Int'>;
    readonly creadoPorId: Prisma.FieldRef<"PersonaAutorizada", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"PersonaAutorizada", 'DateTime'>;
}
export type PersonaAutorizadaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PersonaAutorizadaSelect<ExtArgs> | null;
    omit?: Prisma.PersonaAutorizadaOmit<ExtArgs> | null;
    include?: Prisma.PersonaAutorizadaInclude<ExtArgs> | null;
    where: Prisma.PersonaAutorizadaWhereUniqueInput;
};
export type PersonaAutorizadaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PersonaAutorizadaSelect<ExtArgs> | null;
    omit?: Prisma.PersonaAutorizadaOmit<ExtArgs> | null;
    include?: Prisma.PersonaAutorizadaInclude<ExtArgs> | null;
    where: Prisma.PersonaAutorizadaWhereUniqueInput;
};
export type PersonaAutorizadaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PersonaAutorizadaSelect<ExtArgs> | null;
    omit?: Prisma.PersonaAutorizadaOmit<ExtArgs> | null;
    include?: Prisma.PersonaAutorizadaInclude<ExtArgs> | null;
    where?: Prisma.PersonaAutorizadaWhereInput;
    orderBy?: Prisma.PersonaAutorizadaOrderByWithRelationInput | Prisma.PersonaAutorizadaOrderByWithRelationInput[];
    cursor?: Prisma.PersonaAutorizadaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PersonaAutorizadaScalarFieldEnum | Prisma.PersonaAutorizadaScalarFieldEnum[];
};
export type PersonaAutorizadaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PersonaAutorizadaSelect<ExtArgs> | null;
    omit?: Prisma.PersonaAutorizadaOmit<ExtArgs> | null;
    include?: Prisma.PersonaAutorizadaInclude<ExtArgs> | null;
    where?: Prisma.PersonaAutorizadaWhereInput;
    orderBy?: Prisma.PersonaAutorizadaOrderByWithRelationInput | Prisma.PersonaAutorizadaOrderByWithRelationInput[];
    cursor?: Prisma.PersonaAutorizadaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PersonaAutorizadaScalarFieldEnum | Prisma.PersonaAutorizadaScalarFieldEnum[];
};
export type PersonaAutorizadaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PersonaAutorizadaSelect<ExtArgs> | null;
    omit?: Prisma.PersonaAutorizadaOmit<ExtArgs> | null;
    include?: Prisma.PersonaAutorizadaInclude<ExtArgs> | null;
    where?: Prisma.PersonaAutorizadaWhereInput;
    orderBy?: Prisma.PersonaAutorizadaOrderByWithRelationInput | Prisma.PersonaAutorizadaOrderByWithRelationInput[];
    cursor?: Prisma.PersonaAutorizadaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PersonaAutorizadaScalarFieldEnum | Prisma.PersonaAutorizadaScalarFieldEnum[];
};
export type PersonaAutorizadaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PersonaAutorizadaSelect<ExtArgs> | null;
    omit?: Prisma.PersonaAutorizadaOmit<ExtArgs> | null;
    include?: Prisma.PersonaAutorizadaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PersonaAutorizadaCreateInput, Prisma.PersonaAutorizadaUncheckedCreateInput>;
};
export type PersonaAutorizadaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PersonaAutorizadaCreateManyInput | Prisma.PersonaAutorizadaCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PersonaAutorizadaCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PersonaAutorizadaSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PersonaAutorizadaOmit<ExtArgs> | null;
    data: Prisma.PersonaAutorizadaCreateManyInput | Prisma.PersonaAutorizadaCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PersonaAutorizadaIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PersonaAutorizadaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PersonaAutorizadaSelect<ExtArgs> | null;
    omit?: Prisma.PersonaAutorizadaOmit<ExtArgs> | null;
    include?: Prisma.PersonaAutorizadaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PersonaAutorizadaUpdateInput, Prisma.PersonaAutorizadaUncheckedUpdateInput>;
    where: Prisma.PersonaAutorizadaWhereUniqueInput;
};
export type PersonaAutorizadaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PersonaAutorizadaUpdateManyMutationInput, Prisma.PersonaAutorizadaUncheckedUpdateManyInput>;
    where?: Prisma.PersonaAutorizadaWhereInput;
    limit?: number;
};
export type PersonaAutorizadaUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PersonaAutorizadaSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PersonaAutorizadaOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PersonaAutorizadaUpdateManyMutationInput, Prisma.PersonaAutorizadaUncheckedUpdateManyInput>;
    where?: Prisma.PersonaAutorizadaWhereInput;
    limit?: number;
    include?: Prisma.PersonaAutorizadaIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PersonaAutorizadaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PersonaAutorizadaSelect<ExtArgs> | null;
    omit?: Prisma.PersonaAutorizadaOmit<ExtArgs> | null;
    include?: Prisma.PersonaAutorizadaInclude<ExtArgs> | null;
    where: Prisma.PersonaAutorizadaWhereUniqueInput;
    create: Prisma.XOR<Prisma.PersonaAutorizadaCreateInput, Prisma.PersonaAutorizadaUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PersonaAutorizadaUpdateInput, Prisma.PersonaAutorizadaUncheckedUpdateInput>;
};
export type PersonaAutorizadaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PersonaAutorizadaSelect<ExtArgs> | null;
    omit?: Prisma.PersonaAutorizadaOmit<ExtArgs> | null;
    include?: Prisma.PersonaAutorizadaInclude<ExtArgs> | null;
    where: Prisma.PersonaAutorizadaWhereUniqueInput;
};
export type PersonaAutorizadaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PersonaAutorizadaWhereInput;
    limit?: number;
};
export type PersonaAutorizada$registrosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PersonaAutorizadaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PersonaAutorizadaSelect<ExtArgs> | null;
    omit?: Prisma.PersonaAutorizadaOmit<ExtArgs> | null;
    include?: Prisma.PersonaAutorizadaInclude<ExtArgs> | null;
};
export {};
