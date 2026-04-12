import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type EstacionModel = runtime.Types.Result.DefaultSelection<Prisma.$EstacionPayload>;
export type AggregateEstacion = {
    _count: EstacionCountAggregateOutputType | null;
    _avg: EstacionAvgAggregateOutputType | null;
    _sum: EstacionSumAggregateOutputType | null;
    _min: EstacionMinAggregateOutputType | null;
    _max: EstacionMaxAggregateOutputType | null;
};
export type EstacionAvgAggregateOutputType = {
    id: number | null;
    adminId: number | null;
};
export type EstacionSumAggregateOutputType = {
    id: number | null;
    adminId: number | null;
};
export type EstacionMinAggregateOutputType = {
    id: number | null;
    nombre: string | null;
    razonSocial: string | null;
    rfc: string | null;
    permisoCRE: string | null;
    direccion: string | null;
    representante: string | null;
    telefono: string | null;
    adminId: number | null;
    createdAt: Date | null;
};
export type EstacionMaxAggregateOutputType = {
    id: number | null;
    nombre: string | null;
    razonSocial: string | null;
    rfc: string | null;
    permisoCRE: string | null;
    direccion: string | null;
    representante: string | null;
    telefono: string | null;
    adminId: number | null;
    createdAt: Date | null;
};
export type EstacionCountAggregateOutputType = {
    id: number;
    nombre: number;
    razonSocial: number;
    rfc: number;
    permisoCRE: number;
    direccion: number;
    representante: number;
    telefono: number;
    adminId: number;
    createdAt: number;
    _all: number;
};
export type EstacionAvgAggregateInputType = {
    id?: true;
    adminId?: true;
};
export type EstacionSumAggregateInputType = {
    id?: true;
    adminId?: true;
};
export type EstacionMinAggregateInputType = {
    id?: true;
    nombre?: true;
    razonSocial?: true;
    rfc?: true;
    permisoCRE?: true;
    direccion?: true;
    representante?: true;
    telefono?: true;
    adminId?: true;
    createdAt?: true;
};
export type EstacionMaxAggregateInputType = {
    id?: true;
    nombre?: true;
    razonSocial?: true;
    rfc?: true;
    permisoCRE?: true;
    direccion?: true;
    representante?: true;
    telefono?: true;
    adminId?: true;
    createdAt?: true;
};
export type EstacionCountAggregateInputType = {
    id?: true;
    nombre?: true;
    razonSocial?: true;
    rfc?: true;
    permisoCRE?: true;
    direccion?: true;
    representante?: true;
    telefono?: true;
    adminId?: true;
    createdAt?: true;
    _all?: true;
};
export type EstacionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EstacionWhereInput;
    orderBy?: Prisma.EstacionOrderByWithRelationInput | Prisma.EstacionOrderByWithRelationInput[];
    cursor?: Prisma.EstacionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | EstacionCountAggregateInputType;
    _avg?: EstacionAvgAggregateInputType;
    _sum?: EstacionSumAggregateInputType;
    _min?: EstacionMinAggregateInputType;
    _max?: EstacionMaxAggregateInputType;
};
export type GetEstacionAggregateType<T extends EstacionAggregateArgs> = {
    [P in keyof T & keyof AggregateEstacion]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEstacion[P]> : Prisma.GetScalarType<T[P], AggregateEstacion[P]>;
};
export type EstacionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EstacionWhereInput;
    orderBy?: Prisma.EstacionOrderByWithAggregationInput | Prisma.EstacionOrderByWithAggregationInput[];
    by: Prisma.EstacionScalarFieldEnum[] | Prisma.EstacionScalarFieldEnum;
    having?: Prisma.EstacionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EstacionCountAggregateInputType | true;
    _avg?: EstacionAvgAggregateInputType;
    _sum?: EstacionSumAggregateInputType;
    _min?: EstacionMinAggregateInputType;
    _max?: EstacionMaxAggregateInputType;
};
export type EstacionGroupByOutputType = {
    id: number;
    nombre: string;
    razonSocial: string;
    rfc: string;
    permisoCRE: string;
    direccion: string;
    representante: string;
    telefono: string | null;
    adminId: number;
    createdAt: Date;
    _count: EstacionCountAggregateOutputType | null;
    _avg: EstacionAvgAggregateOutputType | null;
    _sum: EstacionSumAggregateOutputType | null;
    _min: EstacionMinAggregateOutputType | null;
    _max: EstacionMaxAggregateOutputType | null;
};
type GetEstacionGroupByPayload<T extends EstacionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EstacionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EstacionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EstacionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EstacionGroupByOutputType[P]>;
}>>;
export type EstacionWhereInput = {
    AND?: Prisma.EstacionWhereInput | Prisma.EstacionWhereInput[];
    OR?: Prisma.EstacionWhereInput[];
    NOT?: Prisma.EstacionWhereInput | Prisma.EstacionWhereInput[];
    id?: Prisma.IntFilter<"Estacion"> | number;
    nombre?: Prisma.StringFilter<"Estacion"> | string;
    razonSocial?: Prisma.StringFilter<"Estacion"> | string;
    rfc?: Prisma.StringFilter<"Estacion"> | string;
    permisoCRE?: Prisma.StringFilter<"Estacion"> | string;
    direccion?: Prisma.StringFilter<"Estacion"> | string;
    representante?: Prisma.StringFilter<"Estacion"> | string;
    telefono?: Prisma.StringNullableFilter<"Estacion"> | string | null;
    adminId?: Prisma.IntFilter<"Estacion"> | number;
    createdAt?: Prisma.DateTimeFilter<"Estacion"> | Date | string;
    admin?: Prisma.XOR<Prisma.UsuarioScalarRelationFilter, Prisma.UsuarioWhereInput>;
    personas?: Prisma.PersonaAutorizadaListRelationFilter;
    bitacoras?: Prisma.BitacoraListRelationFilter;
    programasMantenimiento?: Prisma.ProgramaMantenimientoListRelationFilter;
};
export type EstacionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    razonSocial?: Prisma.SortOrder;
    rfc?: Prisma.SortOrder;
    permisoCRE?: Prisma.SortOrder;
    direccion?: Prisma.SortOrder;
    representante?: Prisma.SortOrder;
    telefono?: Prisma.SortOrderInput | Prisma.SortOrder;
    adminId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    admin?: Prisma.UsuarioOrderByWithRelationInput;
    personas?: Prisma.PersonaAutorizadaOrderByRelationAggregateInput;
    bitacoras?: Prisma.BitacoraOrderByRelationAggregateInput;
    programasMantenimiento?: Prisma.ProgramaMantenimientoOrderByRelationAggregateInput;
};
export type EstacionWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    permisoCRE?: string;
    AND?: Prisma.EstacionWhereInput | Prisma.EstacionWhereInput[];
    OR?: Prisma.EstacionWhereInput[];
    NOT?: Prisma.EstacionWhereInput | Prisma.EstacionWhereInput[];
    nombre?: Prisma.StringFilter<"Estacion"> | string;
    razonSocial?: Prisma.StringFilter<"Estacion"> | string;
    rfc?: Prisma.StringFilter<"Estacion"> | string;
    direccion?: Prisma.StringFilter<"Estacion"> | string;
    representante?: Prisma.StringFilter<"Estacion"> | string;
    telefono?: Prisma.StringNullableFilter<"Estacion"> | string | null;
    adminId?: Prisma.IntFilter<"Estacion"> | number;
    createdAt?: Prisma.DateTimeFilter<"Estacion"> | Date | string;
    admin?: Prisma.XOR<Prisma.UsuarioScalarRelationFilter, Prisma.UsuarioWhereInput>;
    personas?: Prisma.PersonaAutorizadaListRelationFilter;
    bitacoras?: Prisma.BitacoraListRelationFilter;
    programasMantenimiento?: Prisma.ProgramaMantenimientoListRelationFilter;
}, "id" | "permisoCRE">;
export type EstacionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    razonSocial?: Prisma.SortOrder;
    rfc?: Prisma.SortOrder;
    permisoCRE?: Prisma.SortOrder;
    direccion?: Prisma.SortOrder;
    representante?: Prisma.SortOrder;
    telefono?: Prisma.SortOrderInput | Prisma.SortOrder;
    adminId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.EstacionCountOrderByAggregateInput;
    _avg?: Prisma.EstacionAvgOrderByAggregateInput;
    _max?: Prisma.EstacionMaxOrderByAggregateInput;
    _min?: Prisma.EstacionMinOrderByAggregateInput;
    _sum?: Prisma.EstacionSumOrderByAggregateInput;
};
export type EstacionScalarWhereWithAggregatesInput = {
    AND?: Prisma.EstacionScalarWhereWithAggregatesInput | Prisma.EstacionScalarWhereWithAggregatesInput[];
    OR?: Prisma.EstacionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EstacionScalarWhereWithAggregatesInput | Prisma.EstacionScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Estacion"> | number;
    nombre?: Prisma.StringWithAggregatesFilter<"Estacion"> | string;
    razonSocial?: Prisma.StringWithAggregatesFilter<"Estacion"> | string;
    rfc?: Prisma.StringWithAggregatesFilter<"Estacion"> | string;
    permisoCRE?: Prisma.StringWithAggregatesFilter<"Estacion"> | string;
    direccion?: Prisma.StringWithAggregatesFilter<"Estacion"> | string;
    representante?: Prisma.StringWithAggregatesFilter<"Estacion"> | string;
    telefono?: Prisma.StringNullableWithAggregatesFilter<"Estacion"> | string | null;
    adminId?: Prisma.IntWithAggregatesFilter<"Estacion"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Estacion"> | Date | string;
};
export type EstacionCreateInput = {
    nombre: string;
    razonSocial: string;
    rfc: string;
    permisoCRE: string;
    direccion: string;
    representante: string;
    telefono?: string | null;
    createdAt?: Date | string;
    admin: Prisma.UsuarioCreateNestedOneWithoutEstacionesInput;
    personas?: Prisma.PersonaAutorizadaCreateNestedManyWithoutEstacionInput;
    bitacoras?: Prisma.BitacoraCreateNestedManyWithoutEstacionInput;
    programasMantenimiento?: Prisma.ProgramaMantenimientoCreateNestedManyWithoutEstacionInput;
};
export type EstacionUncheckedCreateInput = {
    id?: number;
    nombre: string;
    razonSocial: string;
    rfc: string;
    permisoCRE: string;
    direccion: string;
    representante: string;
    telefono?: string | null;
    adminId: number;
    createdAt?: Date | string;
    personas?: Prisma.PersonaAutorizadaUncheckedCreateNestedManyWithoutEstacionInput;
    bitacoras?: Prisma.BitacoraUncheckedCreateNestedManyWithoutEstacionInput;
    programasMantenimiento?: Prisma.ProgramaMantenimientoUncheckedCreateNestedManyWithoutEstacionInput;
};
export type EstacionUpdateInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    razonSocial?: Prisma.StringFieldUpdateOperationsInput | string;
    rfc?: Prisma.StringFieldUpdateOperationsInput | string;
    permisoCRE?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion?: Prisma.StringFieldUpdateOperationsInput | string;
    representante?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    admin?: Prisma.UsuarioUpdateOneRequiredWithoutEstacionesNestedInput;
    personas?: Prisma.PersonaAutorizadaUpdateManyWithoutEstacionNestedInput;
    bitacoras?: Prisma.BitacoraUpdateManyWithoutEstacionNestedInput;
    programasMantenimiento?: Prisma.ProgramaMantenimientoUpdateManyWithoutEstacionNestedInput;
};
export type EstacionUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    razonSocial?: Prisma.StringFieldUpdateOperationsInput | string;
    rfc?: Prisma.StringFieldUpdateOperationsInput | string;
    permisoCRE?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion?: Prisma.StringFieldUpdateOperationsInput | string;
    representante?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adminId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    personas?: Prisma.PersonaAutorizadaUncheckedUpdateManyWithoutEstacionNestedInput;
    bitacoras?: Prisma.BitacoraUncheckedUpdateManyWithoutEstacionNestedInput;
    programasMantenimiento?: Prisma.ProgramaMantenimientoUncheckedUpdateManyWithoutEstacionNestedInput;
};
export type EstacionCreateManyInput = {
    id?: number;
    nombre: string;
    razonSocial: string;
    rfc: string;
    permisoCRE: string;
    direccion: string;
    representante: string;
    telefono?: string | null;
    adminId: number;
    createdAt?: Date | string;
};
export type EstacionUpdateManyMutationInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    razonSocial?: Prisma.StringFieldUpdateOperationsInput | string;
    rfc?: Prisma.StringFieldUpdateOperationsInput | string;
    permisoCRE?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion?: Prisma.StringFieldUpdateOperationsInput | string;
    representante?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EstacionUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    razonSocial?: Prisma.StringFieldUpdateOperationsInput | string;
    rfc?: Prisma.StringFieldUpdateOperationsInput | string;
    permisoCRE?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion?: Prisma.StringFieldUpdateOperationsInput | string;
    representante?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adminId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EstacionListRelationFilter = {
    every?: Prisma.EstacionWhereInput;
    some?: Prisma.EstacionWhereInput;
    none?: Prisma.EstacionWhereInput;
};
export type EstacionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type EstacionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    razonSocial?: Prisma.SortOrder;
    rfc?: Prisma.SortOrder;
    permisoCRE?: Prisma.SortOrder;
    direccion?: Prisma.SortOrder;
    representante?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    adminId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type EstacionAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    adminId?: Prisma.SortOrder;
};
export type EstacionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    razonSocial?: Prisma.SortOrder;
    rfc?: Prisma.SortOrder;
    permisoCRE?: Prisma.SortOrder;
    direccion?: Prisma.SortOrder;
    representante?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    adminId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type EstacionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    razonSocial?: Prisma.SortOrder;
    rfc?: Prisma.SortOrder;
    permisoCRE?: Prisma.SortOrder;
    direccion?: Prisma.SortOrder;
    representante?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    adminId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type EstacionSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    adminId?: Prisma.SortOrder;
};
export type EstacionScalarRelationFilter = {
    is?: Prisma.EstacionWhereInput;
    isNot?: Prisma.EstacionWhereInput;
};
export type EstacionCreateNestedManyWithoutAdminInput = {
    create?: Prisma.XOR<Prisma.EstacionCreateWithoutAdminInput, Prisma.EstacionUncheckedCreateWithoutAdminInput> | Prisma.EstacionCreateWithoutAdminInput[] | Prisma.EstacionUncheckedCreateWithoutAdminInput[];
    connectOrCreate?: Prisma.EstacionCreateOrConnectWithoutAdminInput | Prisma.EstacionCreateOrConnectWithoutAdminInput[];
    createMany?: Prisma.EstacionCreateManyAdminInputEnvelope;
    connect?: Prisma.EstacionWhereUniqueInput | Prisma.EstacionWhereUniqueInput[];
};
export type EstacionUncheckedCreateNestedManyWithoutAdminInput = {
    create?: Prisma.XOR<Prisma.EstacionCreateWithoutAdminInput, Prisma.EstacionUncheckedCreateWithoutAdminInput> | Prisma.EstacionCreateWithoutAdminInput[] | Prisma.EstacionUncheckedCreateWithoutAdminInput[];
    connectOrCreate?: Prisma.EstacionCreateOrConnectWithoutAdminInput | Prisma.EstacionCreateOrConnectWithoutAdminInput[];
    createMany?: Prisma.EstacionCreateManyAdminInputEnvelope;
    connect?: Prisma.EstacionWhereUniqueInput | Prisma.EstacionWhereUniqueInput[];
};
export type EstacionUpdateManyWithoutAdminNestedInput = {
    create?: Prisma.XOR<Prisma.EstacionCreateWithoutAdminInput, Prisma.EstacionUncheckedCreateWithoutAdminInput> | Prisma.EstacionCreateWithoutAdminInput[] | Prisma.EstacionUncheckedCreateWithoutAdminInput[];
    connectOrCreate?: Prisma.EstacionCreateOrConnectWithoutAdminInput | Prisma.EstacionCreateOrConnectWithoutAdminInput[];
    upsert?: Prisma.EstacionUpsertWithWhereUniqueWithoutAdminInput | Prisma.EstacionUpsertWithWhereUniqueWithoutAdminInput[];
    createMany?: Prisma.EstacionCreateManyAdminInputEnvelope;
    set?: Prisma.EstacionWhereUniqueInput | Prisma.EstacionWhereUniqueInput[];
    disconnect?: Prisma.EstacionWhereUniqueInput | Prisma.EstacionWhereUniqueInput[];
    delete?: Prisma.EstacionWhereUniqueInput | Prisma.EstacionWhereUniqueInput[];
    connect?: Prisma.EstacionWhereUniqueInput | Prisma.EstacionWhereUniqueInput[];
    update?: Prisma.EstacionUpdateWithWhereUniqueWithoutAdminInput | Prisma.EstacionUpdateWithWhereUniqueWithoutAdminInput[];
    updateMany?: Prisma.EstacionUpdateManyWithWhereWithoutAdminInput | Prisma.EstacionUpdateManyWithWhereWithoutAdminInput[];
    deleteMany?: Prisma.EstacionScalarWhereInput | Prisma.EstacionScalarWhereInput[];
};
export type EstacionUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: Prisma.XOR<Prisma.EstacionCreateWithoutAdminInput, Prisma.EstacionUncheckedCreateWithoutAdminInput> | Prisma.EstacionCreateWithoutAdminInput[] | Prisma.EstacionUncheckedCreateWithoutAdminInput[];
    connectOrCreate?: Prisma.EstacionCreateOrConnectWithoutAdminInput | Prisma.EstacionCreateOrConnectWithoutAdminInput[];
    upsert?: Prisma.EstacionUpsertWithWhereUniqueWithoutAdminInput | Prisma.EstacionUpsertWithWhereUniqueWithoutAdminInput[];
    createMany?: Prisma.EstacionCreateManyAdminInputEnvelope;
    set?: Prisma.EstacionWhereUniqueInput | Prisma.EstacionWhereUniqueInput[];
    disconnect?: Prisma.EstacionWhereUniqueInput | Prisma.EstacionWhereUniqueInput[];
    delete?: Prisma.EstacionWhereUniqueInput | Prisma.EstacionWhereUniqueInput[];
    connect?: Prisma.EstacionWhereUniqueInput | Prisma.EstacionWhereUniqueInput[];
    update?: Prisma.EstacionUpdateWithWhereUniqueWithoutAdminInput | Prisma.EstacionUpdateWithWhereUniqueWithoutAdminInput[];
    updateMany?: Prisma.EstacionUpdateManyWithWhereWithoutAdminInput | Prisma.EstacionUpdateManyWithWhereWithoutAdminInput[];
    deleteMany?: Prisma.EstacionScalarWhereInput | Prisma.EstacionScalarWhereInput[];
};
export type EstacionCreateNestedOneWithoutPersonasInput = {
    create?: Prisma.XOR<Prisma.EstacionCreateWithoutPersonasInput, Prisma.EstacionUncheckedCreateWithoutPersonasInput>;
    connectOrCreate?: Prisma.EstacionCreateOrConnectWithoutPersonasInput;
    connect?: Prisma.EstacionWhereUniqueInput;
};
export type EstacionUpdateOneRequiredWithoutPersonasNestedInput = {
    create?: Prisma.XOR<Prisma.EstacionCreateWithoutPersonasInput, Prisma.EstacionUncheckedCreateWithoutPersonasInput>;
    connectOrCreate?: Prisma.EstacionCreateOrConnectWithoutPersonasInput;
    upsert?: Prisma.EstacionUpsertWithoutPersonasInput;
    connect?: Prisma.EstacionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.EstacionUpdateToOneWithWhereWithoutPersonasInput, Prisma.EstacionUpdateWithoutPersonasInput>, Prisma.EstacionUncheckedUpdateWithoutPersonasInput>;
};
export type EstacionCreateNestedOneWithoutBitacorasInput = {
    create?: Prisma.XOR<Prisma.EstacionCreateWithoutBitacorasInput, Prisma.EstacionUncheckedCreateWithoutBitacorasInput>;
    connectOrCreate?: Prisma.EstacionCreateOrConnectWithoutBitacorasInput;
    connect?: Prisma.EstacionWhereUniqueInput;
};
export type EstacionUpdateOneRequiredWithoutBitacorasNestedInput = {
    create?: Prisma.XOR<Prisma.EstacionCreateWithoutBitacorasInput, Prisma.EstacionUncheckedCreateWithoutBitacorasInput>;
    connectOrCreate?: Prisma.EstacionCreateOrConnectWithoutBitacorasInput;
    upsert?: Prisma.EstacionUpsertWithoutBitacorasInput;
    connect?: Prisma.EstacionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.EstacionUpdateToOneWithWhereWithoutBitacorasInput, Prisma.EstacionUpdateWithoutBitacorasInput>, Prisma.EstacionUncheckedUpdateWithoutBitacorasInput>;
};
export type EstacionCreateNestedOneWithoutProgramasMantenimientoInput = {
    create?: Prisma.XOR<Prisma.EstacionCreateWithoutProgramasMantenimientoInput, Prisma.EstacionUncheckedCreateWithoutProgramasMantenimientoInput>;
    connectOrCreate?: Prisma.EstacionCreateOrConnectWithoutProgramasMantenimientoInput;
    connect?: Prisma.EstacionWhereUniqueInput;
};
export type EstacionUpdateOneRequiredWithoutProgramasMantenimientoNestedInput = {
    create?: Prisma.XOR<Prisma.EstacionCreateWithoutProgramasMantenimientoInput, Prisma.EstacionUncheckedCreateWithoutProgramasMantenimientoInput>;
    connectOrCreate?: Prisma.EstacionCreateOrConnectWithoutProgramasMantenimientoInput;
    upsert?: Prisma.EstacionUpsertWithoutProgramasMantenimientoInput;
    connect?: Prisma.EstacionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.EstacionUpdateToOneWithWhereWithoutProgramasMantenimientoInput, Prisma.EstacionUpdateWithoutProgramasMantenimientoInput>, Prisma.EstacionUncheckedUpdateWithoutProgramasMantenimientoInput>;
};
export type EstacionCreateWithoutAdminInput = {
    nombre: string;
    razonSocial: string;
    rfc: string;
    permisoCRE: string;
    direccion: string;
    representante: string;
    telefono?: string | null;
    createdAt?: Date | string;
    personas?: Prisma.PersonaAutorizadaCreateNestedManyWithoutEstacionInput;
    bitacoras?: Prisma.BitacoraCreateNestedManyWithoutEstacionInput;
    programasMantenimiento?: Prisma.ProgramaMantenimientoCreateNestedManyWithoutEstacionInput;
};
export type EstacionUncheckedCreateWithoutAdminInput = {
    id?: number;
    nombre: string;
    razonSocial: string;
    rfc: string;
    permisoCRE: string;
    direccion: string;
    representante: string;
    telefono?: string | null;
    createdAt?: Date | string;
    personas?: Prisma.PersonaAutorizadaUncheckedCreateNestedManyWithoutEstacionInput;
    bitacoras?: Prisma.BitacoraUncheckedCreateNestedManyWithoutEstacionInput;
    programasMantenimiento?: Prisma.ProgramaMantenimientoUncheckedCreateNestedManyWithoutEstacionInput;
};
export type EstacionCreateOrConnectWithoutAdminInput = {
    where: Prisma.EstacionWhereUniqueInput;
    create: Prisma.XOR<Prisma.EstacionCreateWithoutAdminInput, Prisma.EstacionUncheckedCreateWithoutAdminInput>;
};
export type EstacionCreateManyAdminInputEnvelope = {
    data: Prisma.EstacionCreateManyAdminInput | Prisma.EstacionCreateManyAdminInput[];
    skipDuplicates?: boolean;
};
export type EstacionUpsertWithWhereUniqueWithoutAdminInput = {
    where: Prisma.EstacionWhereUniqueInput;
    update: Prisma.XOR<Prisma.EstacionUpdateWithoutAdminInput, Prisma.EstacionUncheckedUpdateWithoutAdminInput>;
    create: Prisma.XOR<Prisma.EstacionCreateWithoutAdminInput, Prisma.EstacionUncheckedCreateWithoutAdminInput>;
};
export type EstacionUpdateWithWhereUniqueWithoutAdminInput = {
    where: Prisma.EstacionWhereUniqueInput;
    data: Prisma.XOR<Prisma.EstacionUpdateWithoutAdminInput, Prisma.EstacionUncheckedUpdateWithoutAdminInput>;
};
export type EstacionUpdateManyWithWhereWithoutAdminInput = {
    where: Prisma.EstacionScalarWhereInput;
    data: Prisma.XOR<Prisma.EstacionUpdateManyMutationInput, Prisma.EstacionUncheckedUpdateManyWithoutAdminInput>;
};
export type EstacionScalarWhereInput = {
    AND?: Prisma.EstacionScalarWhereInput | Prisma.EstacionScalarWhereInput[];
    OR?: Prisma.EstacionScalarWhereInput[];
    NOT?: Prisma.EstacionScalarWhereInput | Prisma.EstacionScalarWhereInput[];
    id?: Prisma.IntFilter<"Estacion"> | number;
    nombre?: Prisma.StringFilter<"Estacion"> | string;
    razonSocial?: Prisma.StringFilter<"Estacion"> | string;
    rfc?: Prisma.StringFilter<"Estacion"> | string;
    permisoCRE?: Prisma.StringFilter<"Estacion"> | string;
    direccion?: Prisma.StringFilter<"Estacion"> | string;
    representante?: Prisma.StringFilter<"Estacion"> | string;
    telefono?: Prisma.StringNullableFilter<"Estacion"> | string | null;
    adminId?: Prisma.IntFilter<"Estacion"> | number;
    createdAt?: Prisma.DateTimeFilter<"Estacion"> | Date | string;
};
export type EstacionCreateWithoutPersonasInput = {
    nombre: string;
    razonSocial: string;
    rfc: string;
    permisoCRE: string;
    direccion: string;
    representante: string;
    telefono?: string | null;
    createdAt?: Date | string;
    admin: Prisma.UsuarioCreateNestedOneWithoutEstacionesInput;
    bitacoras?: Prisma.BitacoraCreateNestedManyWithoutEstacionInput;
    programasMantenimiento?: Prisma.ProgramaMantenimientoCreateNestedManyWithoutEstacionInput;
};
export type EstacionUncheckedCreateWithoutPersonasInput = {
    id?: number;
    nombre: string;
    razonSocial: string;
    rfc: string;
    permisoCRE: string;
    direccion: string;
    representante: string;
    telefono?: string | null;
    adminId: number;
    createdAt?: Date | string;
    bitacoras?: Prisma.BitacoraUncheckedCreateNestedManyWithoutEstacionInput;
    programasMantenimiento?: Prisma.ProgramaMantenimientoUncheckedCreateNestedManyWithoutEstacionInput;
};
export type EstacionCreateOrConnectWithoutPersonasInput = {
    where: Prisma.EstacionWhereUniqueInput;
    create: Prisma.XOR<Prisma.EstacionCreateWithoutPersonasInput, Prisma.EstacionUncheckedCreateWithoutPersonasInput>;
};
export type EstacionUpsertWithoutPersonasInput = {
    update: Prisma.XOR<Prisma.EstacionUpdateWithoutPersonasInput, Prisma.EstacionUncheckedUpdateWithoutPersonasInput>;
    create: Prisma.XOR<Prisma.EstacionCreateWithoutPersonasInput, Prisma.EstacionUncheckedCreateWithoutPersonasInput>;
    where?: Prisma.EstacionWhereInput;
};
export type EstacionUpdateToOneWithWhereWithoutPersonasInput = {
    where?: Prisma.EstacionWhereInput;
    data: Prisma.XOR<Prisma.EstacionUpdateWithoutPersonasInput, Prisma.EstacionUncheckedUpdateWithoutPersonasInput>;
};
export type EstacionUpdateWithoutPersonasInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    razonSocial?: Prisma.StringFieldUpdateOperationsInput | string;
    rfc?: Prisma.StringFieldUpdateOperationsInput | string;
    permisoCRE?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion?: Prisma.StringFieldUpdateOperationsInput | string;
    representante?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    admin?: Prisma.UsuarioUpdateOneRequiredWithoutEstacionesNestedInput;
    bitacoras?: Prisma.BitacoraUpdateManyWithoutEstacionNestedInput;
    programasMantenimiento?: Prisma.ProgramaMantenimientoUpdateManyWithoutEstacionNestedInput;
};
export type EstacionUncheckedUpdateWithoutPersonasInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    razonSocial?: Prisma.StringFieldUpdateOperationsInput | string;
    rfc?: Prisma.StringFieldUpdateOperationsInput | string;
    permisoCRE?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion?: Prisma.StringFieldUpdateOperationsInput | string;
    representante?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adminId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bitacoras?: Prisma.BitacoraUncheckedUpdateManyWithoutEstacionNestedInput;
    programasMantenimiento?: Prisma.ProgramaMantenimientoUncheckedUpdateManyWithoutEstacionNestedInput;
};
export type EstacionCreateWithoutBitacorasInput = {
    nombre: string;
    razonSocial: string;
    rfc: string;
    permisoCRE: string;
    direccion: string;
    representante: string;
    telefono?: string | null;
    createdAt?: Date | string;
    admin: Prisma.UsuarioCreateNestedOneWithoutEstacionesInput;
    personas?: Prisma.PersonaAutorizadaCreateNestedManyWithoutEstacionInput;
    programasMantenimiento?: Prisma.ProgramaMantenimientoCreateNestedManyWithoutEstacionInput;
};
export type EstacionUncheckedCreateWithoutBitacorasInput = {
    id?: number;
    nombre: string;
    razonSocial: string;
    rfc: string;
    permisoCRE: string;
    direccion: string;
    representante: string;
    telefono?: string | null;
    adminId: number;
    createdAt?: Date | string;
    personas?: Prisma.PersonaAutorizadaUncheckedCreateNestedManyWithoutEstacionInput;
    programasMantenimiento?: Prisma.ProgramaMantenimientoUncheckedCreateNestedManyWithoutEstacionInput;
};
export type EstacionCreateOrConnectWithoutBitacorasInput = {
    where: Prisma.EstacionWhereUniqueInput;
    create: Prisma.XOR<Prisma.EstacionCreateWithoutBitacorasInput, Prisma.EstacionUncheckedCreateWithoutBitacorasInput>;
};
export type EstacionUpsertWithoutBitacorasInput = {
    update: Prisma.XOR<Prisma.EstacionUpdateWithoutBitacorasInput, Prisma.EstacionUncheckedUpdateWithoutBitacorasInput>;
    create: Prisma.XOR<Prisma.EstacionCreateWithoutBitacorasInput, Prisma.EstacionUncheckedCreateWithoutBitacorasInput>;
    where?: Prisma.EstacionWhereInput;
};
export type EstacionUpdateToOneWithWhereWithoutBitacorasInput = {
    where?: Prisma.EstacionWhereInput;
    data: Prisma.XOR<Prisma.EstacionUpdateWithoutBitacorasInput, Prisma.EstacionUncheckedUpdateWithoutBitacorasInput>;
};
export type EstacionUpdateWithoutBitacorasInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    razonSocial?: Prisma.StringFieldUpdateOperationsInput | string;
    rfc?: Prisma.StringFieldUpdateOperationsInput | string;
    permisoCRE?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion?: Prisma.StringFieldUpdateOperationsInput | string;
    representante?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    admin?: Prisma.UsuarioUpdateOneRequiredWithoutEstacionesNestedInput;
    personas?: Prisma.PersonaAutorizadaUpdateManyWithoutEstacionNestedInput;
    programasMantenimiento?: Prisma.ProgramaMantenimientoUpdateManyWithoutEstacionNestedInput;
};
export type EstacionUncheckedUpdateWithoutBitacorasInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    razonSocial?: Prisma.StringFieldUpdateOperationsInput | string;
    rfc?: Prisma.StringFieldUpdateOperationsInput | string;
    permisoCRE?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion?: Prisma.StringFieldUpdateOperationsInput | string;
    representante?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adminId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    personas?: Prisma.PersonaAutorizadaUncheckedUpdateManyWithoutEstacionNestedInput;
    programasMantenimiento?: Prisma.ProgramaMantenimientoUncheckedUpdateManyWithoutEstacionNestedInput;
};
export type EstacionCreateWithoutProgramasMantenimientoInput = {
    nombre: string;
    razonSocial: string;
    rfc: string;
    permisoCRE: string;
    direccion: string;
    representante: string;
    telefono?: string | null;
    createdAt?: Date | string;
    admin: Prisma.UsuarioCreateNestedOneWithoutEstacionesInput;
    personas?: Prisma.PersonaAutorizadaCreateNestedManyWithoutEstacionInput;
    bitacoras?: Prisma.BitacoraCreateNestedManyWithoutEstacionInput;
};
export type EstacionUncheckedCreateWithoutProgramasMantenimientoInput = {
    id?: number;
    nombre: string;
    razonSocial: string;
    rfc: string;
    permisoCRE: string;
    direccion: string;
    representante: string;
    telefono?: string | null;
    adminId: number;
    createdAt?: Date | string;
    personas?: Prisma.PersonaAutorizadaUncheckedCreateNestedManyWithoutEstacionInput;
    bitacoras?: Prisma.BitacoraUncheckedCreateNestedManyWithoutEstacionInput;
};
export type EstacionCreateOrConnectWithoutProgramasMantenimientoInput = {
    where: Prisma.EstacionWhereUniqueInput;
    create: Prisma.XOR<Prisma.EstacionCreateWithoutProgramasMantenimientoInput, Prisma.EstacionUncheckedCreateWithoutProgramasMantenimientoInput>;
};
export type EstacionUpsertWithoutProgramasMantenimientoInput = {
    update: Prisma.XOR<Prisma.EstacionUpdateWithoutProgramasMantenimientoInput, Prisma.EstacionUncheckedUpdateWithoutProgramasMantenimientoInput>;
    create: Prisma.XOR<Prisma.EstacionCreateWithoutProgramasMantenimientoInput, Prisma.EstacionUncheckedCreateWithoutProgramasMantenimientoInput>;
    where?: Prisma.EstacionWhereInput;
};
export type EstacionUpdateToOneWithWhereWithoutProgramasMantenimientoInput = {
    where?: Prisma.EstacionWhereInput;
    data: Prisma.XOR<Prisma.EstacionUpdateWithoutProgramasMantenimientoInput, Prisma.EstacionUncheckedUpdateWithoutProgramasMantenimientoInput>;
};
export type EstacionUpdateWithoutProgramasMantenimientoInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    razonSocial?: Prisma.StringFieldUpdateOperationsInput | string;
    rfc?: Prisma.StringFieldUpdateOperationsInput | string;
    permisoCRE?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion?: Prisma.StringFieldUpdateOperationsInput | string;
    representante?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    admin?: Prisma.UsuarioUpdateOneRequiredWithoutEstacionesNestedInput;
    personas?: Prisma.PersonaAutorizadaUpdateManyWithoutEstacionNestedInput;
    bitacoras?: Prisma.BitacoraUpdateManyWithoutEstacionNestedInput;
};
export type EstacionUncheckedUpdateWithoutProgramasMantenimientoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    razonSocial?: Prisma.StringFieldUpdateOperationsInput | string;
    rfc?: Prisma.StringFieldUpdateOperationsInput | string;
    permisoCRE?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion?: Prisma.StringFieldUpdateOperationsInput | string;
    representante?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adminId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    personas?: Prisma.PersonaAutorizadaUncheckedUpdateManyWithoutEstacionNestedInput;
    bitacoras?: Prisma.BitacoraUncheckedUpdateManyWithoutEstacionNestedInput;
};
export type EstacionCreateManyAdminInput = {
    id?: number;
    nombre: string;
    razonSocial: string;
    rfc: string;
    permisoCRE: string;
    direccion: string;
    representante: string;
    telefono?: string | null;
    createdAt?: Date | string;
};
export type EstacionUpdateWithoutAdminInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    razonSocial?: Prisma.StringFieldUpdateOperationsInput | string;
    rfc?: Prisma.StringFieldUpdateOperationsInput | string;
    permisoCRE?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion?: Prisma.StringFieldUpdateOperationsInput | string;
    representante?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    personas?: Prisma.PersonaAutorizadaUpdateManyWithoutEstacionNestedInput;
    bitacoras?: Prisma.BitacoraUpdateManyWithoutEstacionNestedInput;
    programasMantenimiento?: Prisma.ProgramaMantenimientoUpdateManyWithoutEstacionNestedInput;
};
export type EstacionUncheckedUpdateWithoutAdminInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    razonSocial?: Prisma.StringFieldUpdateOperationsInput | string;
    rfc?: Prisma.StringFieldUpdateOperationsInput | string;
    permisoCRE?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion?: Prisma.StringFieldUpdateOperationsInput | string;
    representante?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    personas?: Prisma.PersonaAutorizadaUncheckedUpdateManyWithoutEstacionNestedInput;
    bitacoras?: Prisma.BitacoraUncheckedUpdateManyWithoutEstacionNestedInput;
    programasMantenimiento?: Prisma.ProgramaMantenimientoUncheckedUpdateManyWithoutEstacionNestedInput;
};
export type EstacionUncheckedUpdateManyWithoutAdminInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    razonSocial?: Prisma.StringFieldUpdateOperationsInput | string;
    rfc?: Prisma.StringFieldUpdateOperationsInput | string;
    permisoCRE?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion?: Prisma.StringFieldUpdateOperationsInput | string;
    representante?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EstacionCountOutputType = {
    personas: number;
    bitacoras: number;
    programasMantenimiento: number;
};
export type EstacionCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    personas?: boolean | EstacionCountOutputTypeCountPersonasArgs;
    bitacoras?: boolean | EstacionCountOutputTypeCountBitacorasArgs;
    programasMantenimiento?: boolean | EstacionCountOutputTypeCountProgramasMantenimientoArgs;
};
export type EstacionCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EstacionCountOutputTypeSelect<ExtArgs> | null;
};
export type EstacionCountOutputTypeCountPersonasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PersonaAutorizadaWhereInput;
};
export type EstacionCountOutputTypeCountBitacorasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BitacoraWhereInput;
};
export type EstacionCountOutputTypeCountProgramasMantenimientoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProgramaMantenimientoWhereInput;
};
export type EstacionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    razonSocial?: boolean;
    rfc?: boolean;
    permisoCRE?: boolean;
    direccion?: boolean;
    representante?: boolean;
    telefono?: boolean;
    adminId?: boolean;
    createdAt?: boolean;
    admin?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
    personas?: boolean | Prisma.Estacion$personasArgs<ExtArgs>;
    bitacoras?: boolean | Prisma.Estacion$bitacorasArgs<ExtArgs>;
    programasMantenimiento?: boolean | Prisma.Estacion$programasMantenimientoArgs<ExtArgs>;
    _count?: boolean | Prisma.EstacionCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["estacion"]>;
export type EstacionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    razonSocial?: boolean;
    rfc?: boolean;
    permisoCRE?: boolean;
    direccion?: boolean;
    representante?: boolean;
    telefono?: boolean;
    adminId?: boolean;
    createdAt?: boolean;
    admin?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["estacion"]>;
export type EstacionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    razonSocial?: boolean;
    rfc?: boolean;
    permisoCRE?: boolean;
    direccion?: boolean;
    representante?: boolean;
    telefono?: boolean;
    adminId?: boolean;
    createdAt?: boolean;
    admin?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["estacion"]>;
export type EstacionSelectScalar = {
    id?: boolean;
    nombre?: boolean;
    razonSocial?: boolean;
    rfc?: boolean;
    permisoCRE?: boolean;
    direccion?: boolean;
    representante?: boolean;
    telefono?: boolean;
    adminId?: boolean;
    createdAt?: boolean;
};
export type EstacionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nombre" | "razonSocial" | "rfc" | "permisoCRE" | "direccion" | "representante" | "telefono" | "adminId" | "createdAt", ExtArgs["result"]["estacion"]>;
export type EstacionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    admin?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
    personas?: boolean | Prisma.Estacion$personasArgs<ExtArgs>;
    bitacoras?: boolean | Prisma.Estacion$bitacorasArgs<ExtArgs>;
    programasMantenimiento?: boolean | Prisma.Estacion$programasMantenimientoArgs<ExtArgs>;
    _count?: boolean | Prisma.EstacionCountOutputTypeDefaultArgs<ExtArgs>;
};
export type EstacionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    admin?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
};
export type EstacionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    admin?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
};
export type $EstacionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Estacion";
    objects: {
        admin: Prisma.$UsuarioPayload<ExtArgs>;
        personas: Prisma.$PersonaAutorizadaPayload<ExtArgs>[];
        bitacoras: Prisma.$BitacoraPayload<ExtArgs>[];
        programasMantenimiento: Prisma.$ProgramaMantenimientoPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        nombre: string;
        razonSocial: string;
        rfc: string;
        permisoCRE: string;
        direccion: string;
        representante: string;
        telefono: string | null;
        adminId: number;
        createdAt: Date;
    }, ExtArgs["result"]["estacion"]>;
    composites: {};
};
export type EstacionGetPayload<S extends boolean | null | undefined | EstacionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EstacionPayload, S>;
export type EstacionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EstacionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EstacionCountAggregateInputType | true;
};
export interface EstacionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Estacion'];
        meta: {
            name: 'Estacion';
        };
    };
    findUnique<T extends EstacionFindUniqueArgs>(args: Prisma.SelectSubset<T, EstacionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EstacionClient<runtime.Types.Result.GetResult<Prisma.$EstacionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends EstacionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EstacionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EstacionClient<runtime.Types.Result.GetResult<Prisma.$EstacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends EstacionFindFirstArgs>(args?: Prisma.SelectSubset<T, EstacionFindFirstArgs<ExtArgs>>): Prisma.Prisma__EstacionClient<runtime.Types.Result.GetResult<Prisma.$EstacionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends EstacionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EstacionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EstacionClient<runtime.Types.Result.GetResult<Prisma.$EstacionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends EstacionFindManyArgs>(args?: Prisma.SelectSubset<T, EstacionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EstacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends EstacionCreateArgs>(args: Prisma.SelectSubset<T, EstacionCreateArgs<ExtArgs>>): Prisma.Prisma__EstacionClient<runtime.Types.Result.GetResult<Prisma.$EstacionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends EstacionCreateManyArgs>(args?: Prisma.SelectSubset<T, EstacionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends EstacionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EstacionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EstacionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends EstacionDeleteArgs>(args: Prisma.SelectSubset<T, EstacionDeleteArgs<ExtArgs>>): Prisma.Prisma__EstacionClient<runtime.Types.Result.GetResult<Prisma.$EstacionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends EstacionUpdateArgs>(args: Prisma.SelectSubset<T, EstacionUpdateArgs<ExtArgs>>): Prisma.Prisma__EstacionClient<runtime.Types.Result.GetResult<Prisma.$EstacionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends EstacionDeleteManyArgs>(args?: Prisma.SelectSubset<T, EstacionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends EstacionUpdateManyArgs>(args: Prisma.SelectSubset<T, EstacionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends EstacionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EstacionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EstacionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends EstacionUpsertArgs>(args: Prisma.SelectSubset<T, EstacionUpsertArgs<ExtArgs>>): Prisma.Prisma__EstacionClient<runtime.Types.Result.GetResult<Prisma.$EstacionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends EstacionCountArgs>(args?: Prisma.Subset<T, EstacionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EstacionCountAggregateOutputType> : number>;
    aggregate<T extends EstacionAggregateArgs>(args: Prisma.Subset<T, EstacionAggregateArgs>): Prisma.PrismaPromise<GetEstacionAggregateType<T>>;
    groupBy<T extends EstacionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EstacionGroupByArgs['orderBy'];
    } : {
        orderBy?: EstacionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EstacionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEstacionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: EstacionFieldRefs;
}
export interface Prisma__EstacionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    admin<T extends Prisma.UsuarioDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UsuarioDefaultArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    personas<T extends Prisma.Estacion$personasArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Estacion$personasArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PersonaAutorizadaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    bitacoras<T extends Prisma.Estacion$bitacorasArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Estacion$bitacorasArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BitacoraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    programasMantenimiento<T extends Prisma.Estacion$programasMantenimientoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Estacion$programasMantenimientoArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProgramaMantenimientoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface EstacionFieldRefs {
    readonly id: Prisma.FieldRef<"Estacion", 'Int'>;
    readonly nombre: Prisma.FieldRef<"Estacion", 'String'>;
    readonly razonSocial: Prisma.FieldRef<"Estacion", 'String'>;
    readonly rfc: Prisma.FieldRef<"Estacion", 'String'>;
    readonly permisoCRE: Prisma.FieldRef<"Estacion", 'String'>;
    readonly direccion: Prisma.FieldRef<"Estacion", 'String'>;
    readonly representante: Prisma.FieldRef<"Estacion", 'String'>;
    readonly telefono: Prisma.FieldRef<"Estacion", 'String'>;
    readonly adminId: Prisma.FieldRef<"Estacion", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"Estacion", 'DateTime'>;
}
export type EstacionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EstacionSelect<ExtArgs> | null;
    omit?: Prisma.EstacionOmit<ExtArgs> | null;
    include?: Prisma.EstacionInclude<ExtArgs> | null;
    where: Prisma.EstacionWhereUniqueInput;
};
export type EstacionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EstacionSelect<ExtArgs> | null;
    omit?: Prisma.EstacionOmit<ExtArgs> | null;
    include?: Prisma.EstacionInclude<ExtArgs> | null;
    where: Prisma.EstacionWhereUniqueInput;
};
export type EstacionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EstacionSelect<ExtArgs> | null;
    omit?: Prisma.EstacionOmit<ExtArgs> | null;
    include?: Prisma.EstacionInclude<ExtArgs> | null;
    where?: Prisma.EstacionWhereInput;
    orderBy?: Prisma.EstacionOrderByWithRelationInput | Prisma.EstacionOrderByWithRelationInput[];
    cursor?: Prisma.EstacionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EstacionScalarFieldEnum | Prisma.EstacionScalarFieldEnum[];
};
export type EstacionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EstacionSelect<ExtArgs> | null;
    omit?: Prisma.EstacionOmit<ExtArgs> | null;
    include?: Prisma.EstacionInclude<ExtArgs> | null;
    where?: Prisma.EstacionWhereInput;
    orderBy?: Prisma.EstacionOrderByWithRelationInput | Prisma.EstacionOrderByWithRelationInput[];
    cursor?: Prisma.EstacionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EstacionScalarFieldEnum | Prisma.EstacionScalarFieldEnum[];
};
export type EstacionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EstacionSelect<ExtArgs> | null;
    omit?: Prisma.EstacionOmit<ExtArgs> | null;
    include?: Prisma.EstacionInclude<ExtArgs> | null;
    where?: Prisma.EstacionWhereInput;
    orderBy?: Prisma.EstacionOrderByWithRelationInput | Prisma.EstacionOrderByWithRelationInput[];
    cursor?: Prisma.EstacionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EstacionScalarFieldEnum | Prisma.EstacionScalarFieldEnum[];
};
export type EstacionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EstacionSelect<ExtArgs> | null;
    omit?: Prisma.EstacionOmit<ExtArgs> | null;
    include?: Prisma.EstacionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EstacionCreateInput, Prisma.EstacionUncheckedCreateInput>;
};
export type EstacionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.EstacionCreateManyInput | Prisma.EstacionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type EstacionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EstacionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EstacionOmit<ExtArgs> | null;
    data: Prisma.EstacionCreateManyInput | Prisma.EstacionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.EstacionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type EstacionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EstacionSelect<ExtArgs> | null;
    omit?: Prisma.EstacionOmit<ExtArgs> | null;
    include?: Prisma.EstacionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EstacionUpdateInput, Prisma.EstacionUncheckedUpdateInput>;
    where: Prisma.EstacionWhereUniqueInput;
};
export type EstacionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.EstacionUpdateManyMutationInput, Prisma.EstacionUncheckedUpdateManyInput>;
    where?: Prisma.EstacionWhereInput;
    limit?: number;
};
export type EstacionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EstacionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EstacionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EstacionUpdateManyMutationInput, Prisma.EstacionUncheckedUpdateManyInput>;
    where?: Prisma.EstacionWhereInput;
    limit?: number;
    include?: Prisma.EstacionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type EstacionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EstacionSelect<ExtArgs> | null;
    omit?: Prisma.EstacionOmit<ExtArgs> | null;
    include?: Prisma.EstacionInclude<ExtArgs> | null;
    where: Prisma.EstacionWhereUniqueInput;
    create: Prisma.XOR<Prisma.EstacionCreateInput, Prisma.EstacionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.EstacionUpdateInput, Prisma.EstacionUncheckedUpdateInput>;
};
export type EstacionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EstacionSelect<ExtArgs> | null;
    omit?: Prisma.EstacionOmit<ExtArgs> | null;
    include?: Prisma.EstacionInclude<ExtArgs> | null;
    where: Prisma.EstacionWhereUniqueInput;
};
export type EstacionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EstacionWhereInput;
    limit?: number;
};
export type Estacion$personasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Estacion$bitacorasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Estacion$programasMantenimientoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type EstacionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EstacionSelect<ExtArgs> | null;
    omit?: Prisma.EstacionOmit<ExtArgs> | null;
    include?: Prisma.EstacionInclude<ExtArgs> | null;
};
export {};
