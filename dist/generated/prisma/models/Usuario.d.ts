import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type UsuarioModel = runtime.Types.Result.DefaultSelection<Prisma.$UsuarioPayload>;
export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null;
    _avg: UsuarioAvgAggregateOutputType | null;
    _sum: UsuarioSumAggregateOutputType | null;
    _min: UsuarioMinAggregateOutputType | null;
    _max: UsuarioMaxAggregateOutputType | null;
};
export type UsuarioAvgAggregateOutputType = {
    id: number | null;
};
export type UsuarioSumAggregateOutputType = {
    id: number | null;
};
export type UsuarioMinAggregateOutputType = {
    id: number | null;
    nombre: string | null;
    correo: string | null;
    contrasenaHash: string | null;
    rol: $Enums.RolUsuario | null;
    refreshTokenHash: string | null;
    createdAt: Date | null;
};
export type UsuarioMaxAggregateOutputType = {
    id: number | null;
    nombre: string | null;
    correo: string | null;
    contrasenaHash: string | null;
    rol: $Enums.RolUsuario | null;
    refreshTokenHash: string | null;
    createdAt: Date | null;
};
export type UsuarioCountAggregateOutputType = {
    id: number;
    nombre: number;
    correo: number;
    contrasenaHash: number;
    rol: number;
    refreshTokenHash: number;
    createdAt: number;
    _all: number;
};
export type UsuarioAvgAggregateInputType = {
    id?: true;
};
export type UsuarioSumAggregateInputType = {
    id?: true;
};
export type UsuarioMinAggregateInputType = {
    id?: true;
    nombre?: true;
    correo?: true;
    contrasenaHash?: true;
    rol?: true;
    refreshTokenHash?: true;
    createdAt?: true;
};
export type UsuarioMaxAggregateInputType = {
    id?: true;
    nombre?: true;
    correo?: true;
    contrasenaHash?: true;
    rol?: true;
    refreshTokenHash?: true;
    createdAt?: true;
};
export type UsuarioCountAggregateInputType = {
    id?: true;
    nombre?: true;
    correo?: true;
    contrasenaHash?: true;
    rol?: true;
    refreshTokenHash?: true;
    createdAt?: true;
    _all?: true;
};
export type UsuarioAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UsuarioWhereInput;
    orderBy?: Prisma.UsuarioOrderByWithRelationInput | Prisma.UsuarioOrderByWithRelationInput[];
    cursor?: Prisma.UsuarioWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UsuarioCountAggregateInputType;
    _avg?: UsuarioAvgAggregateInputType;
    _sum?: UsuarioSumAggregateInputType;
    _min?: UsuarioMinAggregateInputType;
    _max?: UsuarioMaxAggregateInputType;
};
export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
    [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUsuario[P]> : Prisma.GetScalarType<T[P], AggregateUsuario[P]>;
};
export type UsuarioGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UsuarioWhereInput;
    orderBy?: Prisma.UsuarioOrderByWithAggregationInput | Prisma.UsuarioOrderByWithAggregationInput[];
    by: Prisma.UsuarioScalarFieldEnum[] | Prisma.UsuarioScalarFieldEnum;
    having?: Prisma.UsuarioScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UsuarioCountAggregateInputType | true;
    _avg?: UsuarioAvgAggregateInputType;
    _sum?: UsuarioSumAggregateInputType;
    _min?: UsuarioMinAggregateInputType;
    _max?: UsuarioMaxAggregateInputType;
};
export type UsuarioGroupByOutputType = {
    id: number;
    nombre: string;
    correo: string;
    contrasenaHash: string;
    rol: $Enums.RolUsuario;
    refreshTokenHash: string | null;
    createdAt: Date;
    _count: UsuarioCountAggregateOutputType | null;
    _avg: UsuarioAvgAggregateOutputType | null;
    _sum: UsuarioSumAggregateOutputType | null;
    _min: UsuarioMinAggregateOutputType | null;
    _max: UsuarioMaxAggregateOutputType | null;
};
type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UsuarioGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UsuarioGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UsuarioGroupByOutputType[P]>;
}>>;
export type UsuarioWhereInput = {
    AND?: Prisma.UsuarioWhereInput | Prisma.UsuarioWhereInput[];
    OR?: Prisma.UsuarioWhereInput[];
    NOT?: Prisma.UsuarioWhereInput | Prisma.UsuarioWhereInput[];
    id?: Prisma.IntFilter<"Usuario"> | number;
    nombre?: Prisma.StringFilter<"Usuario"> | string;
    correo?: Prisma.StringFilter<"Usuario"> | string;
    contrasenaHash?: Prisma.StringFilter<"Usuario"> | string;
    rol?: Prisma.EnumRolUsuarioFilter<"Usuario"> | $Enums.RolUsuario;
    refreshTokenHash?: Prisma.StringNullableFilter<"Usuario"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Usuario"> | Date | string;
    estaciones?: Prisma.EstacionListRelationFilter;
    personasCreadas?: Prisma.PersonaAutorizadaListRelationFilter;
    auditorias?: Prisma.AuditoriaListRelationFilter;
};
export type UsuarioOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    correo?: Prisma.SortOrder;
    contrasenaHash?: Prisma.SortOrder;
    rol?: Prisma.SortOrder;
    refreshTokenHash?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    estaciones?: Prisma.EstacionOrderByRelationAggregateInput;
    personasCreadas?: Prisma.PersonaAutorizadaOrderByRelationAggregateInput;
    auditorias?: Prisma.AuditoriaOrderByRelationAggregateInput;
};
export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    correo?: string;
    AND?: Prisma.UsuarioWhereInput | Prisma.UsuarioWhereInput[];
    OR?: Prisma.UsuarioWhereInput[];
    NOT?: Prisma.UsuarioWhereInput | Prisma.UsuarioWhereInput[];
    nombre?: Prisma.StringFilter<"Usuario"> | string;
    contrasenaHash?: Prisma.StringFilter<"Usuario"> | string;
    rol?: Prisma.EnumRolUsuarioFilter<"Usuario"> | $Enums.RolUsuario;
    refreshTokenHash?: Prisma.StringNullableFilter<"Usuario"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Usuario"> | Date | string;
    estaciones?: Prisma.EstacionListRelationFilter;
    personasCreadas?: Prisma.PersonaAutorizadaListRelationFilter;
    auditorias?: Prisma.AuditoriaListRelationFilter;
}, "id" | "correo">;
export type UsuarioOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    correo?: Prisma.SortOrder;
    contrasenaHash?: Prisma.SortOrder;
    rol?: Prisma.SortOrder;
    refreshTokenHash?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.UsuarioCountOrderByAggregateInput;
    _avg?: Prisma.UsuarioAvgOrderByAggregateInput;
    _max?: Prisma.UsuarioMaxOrderByAggregateInput;
    _min?: Prisma.UsuarioMinOrderByAggregateInput;
    _sum?: Prisma.UsuarioSumOrderByAggregateInput;
};
export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: Prisma.UsuarioScalarWhereWithAggregatesInput | Prisma.UsuarioScalarWhereWithAggregatesInput[];
    OR?: Prisma.UsuarioScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UsuarioScalarWhereWithAggregatesInput | Prisma.UsuarioScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Usuario"> | number;
    nombre?: Prisma.StringWithAggregatesFilter<"Usuario"> | string;
    correo?: Prisma.StringWithAggregatesFilter<"Usuario"> | string;
    contrasenaHash?: Prisma.StringWithAggregatesFilter<"Usuario"> | string;
    rol?: Prisma.EnumRolUsuarioWithAggregatesFilter<"Usuario"> | $Enums.RolUsuario;
    refreshTokenHash?: Prisma.StringNullableWithAggregatesFilter<"Usuario"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Usuario"> | Date | string;
};
export type UsuarioCreateInput = {
    nombre: string;
    correo: string;
    contrasenaHash: string;
    rol?: $Enums.RolUsuario;
    refreshTokenHash?: string | null;
    createdAt?: Date | string;
    estaciones?: Prisma.EstacionCreateNestedManyWithoutAdminInput;
    personasCreadas?: Prisma.PersonaAutorizadaCreateNestedManyWithoutCreadoPorInput;
    auditorias?: Prisma.AuditoriaCreateNestedManyWithoutUsuarioInput;
};
export type UsuarioUncheckedCreateInput = {
    id?: number;
    nombre: string;
    correo: string;
    contrasenaHash: string;
    rol?: $Enums.RolUsuario;
    refreshTokenHash?: string | null;
    createdAt?: Date | string;
    estaciones?: Prisma.EstacionUncheckedCreateNestedManyWithoutAdminInput;
    personasCreadas?: Prisma.PersonaAutorizadaUncheckedCreateNestedManyWithoutCreadoPorInput;
    auditorias?: Prisma.AuditoriaUncheckedCreateNestedManyWithoutUsuarioInput;
};
export type UsuarioUpdateInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    correo?: Prisma.StringFieldUpdateOperationsInput | string;
    contrasenaHash?: Prisma.StringFieldUpdateOperationsInput | string;
    rol?: Prisma.EnumRolUsuarioFieldUpdateOperationsInput | $Enums.RolUsuario;
    refreshTokenHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estaciones?: Prisma.EstacionUpdateManyWithoutAdminNestedInput;
    personasCreadas?: Prisma.PersonaAutorizadaUpdateManyWithoutCreadoPorNestedInput;
    auditorias?: Prisma.AuditoriaUpdateManyWithoutUsuarioNestedInput;
};
export type UsuarioUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    correo?: Prisma.StringFieldUpdateOperationsInput | string;
    contrasenaHash?: Prisma.StringFieldUpdateOperationsInput | string;
    rol?: Prisma.EnumRolUsuarioFieldUpdateOperationsInput | $Enums.RolUsuario;
    refreshTokenHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estaciones?: Prisma.EstacionUncheckedUpdateManyWithoutAdminNestedInput;
    personasCreadas?: Prisma.PersonaAutorizadaUncheckedUpdateManyWithoutCreadoPorNestedInput;
    auditorias?: Prisma.AuditoriaUncheckedUpdateManyWithoutUsuarioNestedInput;
};
export type UsuarioCreateManyInput = {
    id?: number;
    nombre: string;
    correo: string;
    contrasenaHash: string;
    rol?: $Enums.RolUsuario;
    refreshTokenHash?: string | null;
    createdAt?: Date | string;
};
export type UsuarioUpdateManyMutationInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    correo?: Prisma.StringFieldUpdateOperationsInput | string;
    contrasenaHash?: Prisma.StringFieldUpdateOperationsInput | string;
    rol?: Prisma.EnumRolUsuarioFieldUpdateOperationsInput | $Enums.RolUsuario;
    refreshTokenHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UsuarioUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    correo?: Prisma.StringFieldUpdateOperationsInput | string;
    contrasenaHash?: Prisma.StringFieldUpdateOperationsInput | string;
    rol?: Prisma.EnumRolUsuarioFieldUpdateOperationsInput | $Enums.RolUsuario;
    refreshTokenHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UsuarioCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    correo?: Prisma.SortOrder;
    contrasenaHash?: Prisma.SortOrder;
    rol?: Prisma.SortOrder;
    refreshTokenHash?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type UsuarioAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type UsuarioMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    correo?: Prisma.SortOrder;
    contrasenaHash?: Prisma.SortOrder;
    rol?: Prisma.SortOrder;
    refreshTokenHash?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type UsuarioMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    correo?: Prisma.SortOrder;
    contrasenaHash?: Prisma.SortOrder;
    rol?: Prisma.SortOrder;
    refreshTokenHash?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type UsuarioSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type UsuarioScalarRelationFilter = {
    is?: Prisma.UsuarioWhereInput;
    isNot?: Prisma.UsuarioWhereInput;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type EnumRolUsuarioFieldUpdateOperationsInput = {
    set?: $Enums.RolUsuario;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type UsuarioCreateNestedOneWithoutEstacionesInput = {
    create?: Prisma.XOR<Prisma.UsuarioCreateWithoutEstacionesInput, Prisma.UsuarioUncheckedCreateWithoutEstacionesInput>;
    connectOrCreate?: Prisma.UsuarioCreateOrConnectWithoutEstacionesInput;
    connect?: Prisma.UsuarioWhereUniqueInput;
};
export type UsuarioUpdateOneRequiredWithoutEstacionesNestedInput = {
    create?: Prisma.XOR<Prisma.UsuarioCreateWithoutEstacionesInput, Prisma.UsuarioUncheckedCreateWithoutEstacionesInput>;
    connectOrCreate?: Prisma.UsuarioCreateOrConnectWithoutEstacionesInput;
    upsert?: Prisma.UsuarioUpsertWithoutEstacionesInput;
    connect?: Prisma.UsuarioWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UsuarioUpdateToOneWithWhereWithoutEstacionesInput, Prisma.UsuarioUpdateWithoutEstacionesInput>, Prisma.UsuarioUncheckedUpdateWithoutEstacionesInput>;
};
export type UsuarioCreateNestedOneWithoutPersonasCreadasInput = {
    create?: Prisma.XOR<Prisma.UsuarioCreateWithoutPersonasCreadasInput, Prisma.UsuarioUncheckedCreateWithoutPersonasCreadasInput>;
    connectOrCreate?: Prisma.UsuarioCreateOrConnectWithoutPersonasCreadasInput;
    connect?: Prisma.UsuarioWhereUniqueInput;
};
export type UsuarioUpdateOneRequiredWithoutPersonasCreadasNestedInput = {
    create?: Prisma.XOR<Prisma.UsuarioCreateWithoutPersonasCreadasInput, Prisma.UsuarioUncheckedCreateWithoutPersonasCreadasInput>;
    connectOrCreate?: Prisma.UsuarioCreateOrConnectWithoutPersonasCreadasInput;
    upsert?: Prisma.UsuarioUpsertWithoutPersonasCreadasInput;
    connect?: Prisma.UsuarioWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UsuarioUpdateToOneWithWhereWithoutPersonasCreadasInput, Prisma.UsuarioUpdateWithoutPersonasCreadasInput>, Prisma.UsuarioUncheckedUpdateWithoutPersonasCreadasInput>;
};
export type UsuarioCreateNestedOneWithoutAuditoriasInput = {
    create?: Prisma.XOR<Prisma.UsuarioCreateWithoutAuditoriasInput, Prisma.UsuarioUncheckedCreateWithoutAuditoriasInput>;
    connectOrCreate?: Prisma.UsuarioCreateOrConnectWithoutAuditoriasInput;
    connect?: Prisma.UsuarioWhereUniqueInput;
};
export type UsuarioUpdateOneRequiredWithoutAuditoriasNestedInput = {
    create?: Prisma.XOR<Prisma.UsuarioCreateWithoutAuditoriasInput, Prisma.UsuarioUncheckedCreateWithoutAuditoriasInput>;
    connectOrCreate?: Prisma.UsuarioCreateOrConnectWithoutAuditoriasInput;
    upsert?: Prisma.UsuarioUpsertWithoutAuditoriasInput;
    connect?: Prisma.UsuarioWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UsuarioUpdateToOneWithWhereWithoutAuditoriasInput, Prisma.UsuarioUpdateWithoutAuditoriasInput>, Prisma.UsuarioUncheckedUpdateWithoutAuditoriasInput>;
};
export type UsuarioCreateWithoutEstacionesInput = {
    nombre: string;
    correo: string;
    contrasenaHash: string;
    rol?: $Enums.RolUsuario;
    refreshTokenHash?: string | null;
    createdAt?: Date | string;
    personasCreadas?: Prisma.PersonaAutorizadaCreateNestedManyWithoutCreadoPorInput;
    auditorias?: Prisma.AuditoriaCreateNestedManyWithoutUsuarioInput;
};
export type UsuarioUncheckedCreateWithoutEstacionesInput = {
    id?: number;
    nombre: string;
    correo: string;
    contrasenaHash: string;
    rol?: $Enums.RolUsuario;
    refreshTokenHash?: string | null;
    createdAt?: Date | string;
    personasCreadas?: Prisma.PersonaAutorizadaUncheckedCreateNestedManyWithoutCreadoPorInput;
    auditorias?: Prisma.AuditoriaUncheckedCreateNestedManyWithoutUsuarioInput;
};
export type UsuarioCreateOrConnectWithoutEstacionesInput = {
    where: Prisma.UsuarioWhereUniqueInput;
    create: Prisma.XOR<Prisma.UsuarioCreateWithoutEstacionesInput, Prisma.UsuarioUncheckedCreateWithoutEstacionesInput>;
};
export type UsuarioUpsertWithoutEstacionesInput = {
    update: Prisma.XOR<Prisma.UsuarioUpdateWithoutEstacionesInput, Prisma.UsuarioUncheckedUpdateWithoutEstacionesInput>;
    create: Prisma.XOR<Prisma.UsuarioCreateWithoutEstacionesInput, Prisma.UsuarioUncheckedCreateWithoutEstacionesInput>;
    where?: Prisma.UsuarioWhereInput;
};
export type UsuarioUpdateToOneWithWhereWithoutEstacionesInput = {
    where?: Prisma.UsuarioWhereInput;
    data: Prisma.XOR<Prisma.UsuarioUpdateWithoutEstacionesInput, Prisma.UsuarioUncheckedUpdateWithoutEstacionesInput>;
};
export type UsuarioUpdateWithoutEstacionesInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    correo?: Prisma.StringFieldUpdateOperationsInput | string;
    contrasenaHash?: Prisma.StringFieldUpdateOperationsInput | string;
    rol?: Prisma.EnumRolUsuarioFieldUpdateOperationsInput | $Enums.RolUsuario;
    refreshTokenHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    personasCreadas?: Prisma.PersonaAutorizadaUpdateManyWithoutCreadoPorNestedInput;
    auditorias?: Prisma.AuditoriaUpdateManyWithoutUsuarioNestedInput;
};
export type UsuarioUncheckedUpdateWithoutEstacionesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    correo?: Prisma.StringFieldUpdateOperationsInput | string;
    contrasenaHash?: Prisma.StringFieldUpdateOperationsInput | string;
    rol?: Prisma.EnumRolUsuarioFieldUpdateOperationsInput | $Enums.RolUsuario;
    refreshTokenHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    personasCreadas?: Prisma.PersonaAutorizadaUncheckedUpdateManyWithoutCreadoPorNestedInput;
    auditorias?: Prisma.AuditoriaUncheckedUpdateManyWithoutUsuarioNestedInput;
};
export type UsuarioCreateWithoutPersonasCreadasInput = {
    nombre: string;
    correo: string;
    contrasenaHash: string;
    rol?: $Enums.RolUsuario;
    refreshTokenHash?: string | null;
    createdAt?: Date | string;
    estaciones?: Prisma.EstacionCreateNestedManyWithoutAdminInput;
    auditorias?: Prisma.AuditoriaCreateNestedManyWithoutUsuarioInput;
};
export type UsuarioUncheckedCreateWithoutPersonasCreadasInput = {
    id?: number;
    nombre: string;
    correo: string;
    contrasenaHash: string;
    rol?: $Enums.RolUsuario;
    refreshTokenHash?: string | null;
    createdAt?: Date | string;
    estaciones?: Prisma.EstacionUncheckedCreateNestedManyWithoutAdminInput;
    auditorias?: Prisma.AuditoriaUncheckedCreateNestedManyWithoutUsuarioInput;
};
export type UsuarioCreateOrConnectWithoutPersonasCreadasInput = {
    where: Prisma.UsuarioWhereUniqueInput;
    create: Prisma.XOR<Prisma.UsuarioCreateWithoutPersonasCreadasInput, Prisma.UsuarioUncheckedCreateWithoutPersonasCreadasInput>;
};
export type UsuarioUpsertWithoutPersonasCreadasInput = {
    update: Prisma.XOR<Prisma.UsuarioUpdateWithoutPersonasCreadasInput, Prisma.UsuarioUncheckedUpdateWithoutPersonasCreadasInput>;
    create: Prisma.XOR<Prisma.UsuarioCreateWithoutPersonasCreadasInput, Prisma.UsuarioUncheckedCreateWithoutPersonasCreadasInput>;
    where?: Prisma.UsuarioWhereInput;
};
export type UsuarioUpdateToOneWithWhereWithoutPersonasCreadasInput = {
    where?: Prisma.UsuarioWhereInput;
    data: Prisma.XOR<Prisma.UsuarioUpdateWithoutPersonasCreadasInput, Prisma.UsuarioUncheckedUpdateWithoutPersonasCreadasInput>;
};
export type UsuarioUpdateWithoutPersonasCreadasInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    correo?: Prisma.StringFieldUpdateOperationsInput | string;
    contrasenaHash?: Prisma.StringFieldUpdateOperationsInput | string;
    rol?: Prisma.EnumRolUsuarioFieldUpdateOperationsInput | $Enums.RolUsuario;
    refreshTokenHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estaciones?: Prisma.EstacionUpdateManyWithoutAdminNestedInput;
    auditorias?: Prisma.AuditoriaUpdateManyWithoutUsuarioNestedInput;
};
export type UsuarioUncheckedUpdateWithoutPersonasCreadasInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    correo?: Prisma.StringFieldUpdateOperationsInput | string;
    contrasenaHash?: Prisma.StringFieldUpdateOperationsInput | string;
    rol?: Prisma.EnumRolUsuarioFieldUpdateOperationsInput | $Enums.RolUsuario;
    refreshTokenHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estaciones?: Prisma.EstacionUncheckedUpdateManyWithoutAdminNestedInput;
    auditorias?: Prisma.AuditoriaUncheckedUpdateManyWithoutUsuarioNestedInput;
};
export type UsuarioCreateWithoutAuditoriasInput = {
    nombre: string;
    correo: string;
    contrasenaHash: string;
    rol?: $Enums.RolUsuario;
    refreshTokenHash?: string | null;
    createdAt?: Date | string;
    estaciones?: Prisma.EstacionCreateNestedManyWithoutAdminInput;
    personasCreadas?: Prisma.PersonaAutorizadaCreateNestedManyWithoutCreadoPorInput;
};
export type UsuarioUncheckedCreateWithoutAuditoriasInput = {
    id?: number;
    nombre: string;
    correo: string;
    contrasenaHash: string;
    rol?: $Enums.RolUsuario;
    refreshTokenHash?: string | null;
    createdAt?: Date | string;
    estaciones?: Prisma.EstacionUncheckedCreateNestedManyWithoutAdminInput;
    personasCreadas?: Prisma.PersonaAutorizadaUncheckedCreateNestedManyWithoutCreadoPorInput;
};
export type UsuarioCreateOrConnectWithoutAuditoriasInput = {
    where: Prisma.UsuarioWhereUniqueInput;
    create: Prisma.XOR<Prisma.UsuarioCreateWithoutAuditoriasInput, Prisma.UsuarioUncheckedCreateWithoutAuditoriasInput>;
};
export type UsuarioUpsertWithoutAuditoriasInput = {
    update: Prisma.XOR<Prisma.UsuarioUpdateWithoutAuditoriasInput, Prisma.UsuarioUncheckedUpdateWithoutAuditoriasInput>;
    create: Prisma.XOR<Prisma.UsuarioCreateWithoutAuditoriasInput, Prisma.UsuarioUncheckedCreateWithoutAuditoriasInput>;
    where?: Prisma.UsuarioWhereInput;
};
export type UsuarioUpdateToOneWithWhereWithoutAuditoriasInput = {
    where?: Prisma.UsuarioWhereInput;
    data: Prisma.XOR<Prisma.UsuarioUpdateWithoutAuditoriasInput, Prisma.UsuarioUncheckedUpdateWithoutAuditoriasInput>;
};
export type UsuarioUpdateWithoutAuditoriasInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    correo?: Prisma.StringFieldUpdateOperationsInput | string;
    contrasenaHash?: Prisma.StringFieldUpdateOperationsInput | string;
    rol?: Prisma.EnumRolUsuarioFieldUpdateOperationsInput | $Enums.RolUsuario;
    refreshTokenHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estaciones?: Prisma.EstacionUpdateManyWithoutAdminNestedInput;
    personasCreadas?: Prisma.PersonaAutorizadaUpdateManyWithoutCreadoPorNestedInput;
};
export type UsuarioUncheckedUpdateWithoutAuditoriasInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    correo?: Prisma.StringFieldUpdateOperationsInput | string;
    contrasenaHash?: Prisma.StringFieldUpdateOperationsInput | string;
    rol?: Prisma.EnumRolUsuarioFieldUpdateOperationsInput | $Enums.RolUsuario;
    refreshTokenHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estaciones?: Prisma.EstacionUncheckedUpdateManyWithoutAdminNestedInput;
    personasCreadas?: Prisma.PersonaAutorizadaUncheckedUpdateManyWithoutCreadoPorNestedInput;
};
export type UsuarioCountOutputType = {
    estaciones: number;
    personasCreadas: number;
    auditorias: number;
};
export type UsuarioCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    estaciones?: boolean | UsuarioCountOutputTypeCountEstacionesArgs;
    personasCreadas?: boolean | UsuarioCountOutputTypeCountPersonasCreadasArgs;
    auditorias?: boolean | UsuarioCountOutputTypeCountAuditoriasArgs;
};
export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioCountOutputTypeSelect<ExtArgs> | null;
};
export type UsuarioCountOutputTypeCountEstacionesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EstacionWhereInput;
};
export type UsuarioCountOutputTypeCountPersonasCreadasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PersonaAutorizadaWhereInput;
};
export type UsuarioCountOutputTypeCountAuditoriasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AuditoriaWhereInput;
};
export type UsuarioSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    correo?: boolean;
    contrasenaHash?: boolean;
    rol?: boolean;
    refreshTokenHash?: boolean;
    createdAt?: boolean;
    estaciones?: boolean | Prisma.Usuario$estacionesArgs<ExtArgs>;
    personasCreadas?: boolean | Prisma.Usuario$personasCreadasArgs<ExtArgs>;
    auditorias?: boolean | Prisma.Usuario$auditoriasArgs<ExtArgs>;
    _count?: boolean | Prisma.UsuarioCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["usuario"]>;
export type UsuarioSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    correo?: boolean;
    contrasenaHash?: boolean;
    rol?: boolean;
    refreshTokenHash?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["usuario"]>;
export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    correo?: boolean;
    contrasenaHash?: boolean;
    rol?: boolean;
    refreshTokenHash?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["usuario"]>;
export type UsuarioSelectScalar = {
    id?: boolean;
    nombre?: boolean;
    correo?: boolean;
    contrasenaHash?: boolean;
    rol?: boolean;
    refreshTokenHash?: boolean;
    createdAt?: boolean;
};
export type UsuarioOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nombre" | "correo" | "contrasenaHash" | "rol" | "refreshTokenHash" | "createdAt", ExtArgs["result"]["usuario"]>;
export type UsuarioInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    estaciones?: boolean | Prisma.Usuario$estacionesArgs<ExtArgs>;
    personasCreadas?: boolean | Prisma.Usuario$personasCreadasArgs<ExtArgs>;
    auditorias?: boolean | Prisma.Usuario$auditoriasArgs<ExtArgs>;
    _count?: boolean | Prisma.UsuarioCountOutputTypeDefaultArgs<ExtArgs>;
};
export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $UsuarioPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Usuario";
    objects: {
        estaciones: Prisma.$EstacionPayload<ExtArgs>[];
        personasCreadas: Prisma.$PersonaAutorizadaPayload<ExtArgs>[];
        auditorias: Prisma.$AuditoriaPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        nombre: string;
        correo: string;
        contrasenaHash: string;
        rol: $Enums.RolUsuario;
        refreshTokenHash: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["usuario"]>;
    composites: {};
};
export type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UsuarioPayload, S>;
export type UsuarioCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UsuarioCountAggregateInputType | true;
};
export interface UsuarioDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Usuario'];
        meta: {
            name: 'Usuario';
        };
    };
    findUnique<T extends UsuarioFindUniqueArgs>(args: Prisma.SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends UsuarioFindFirstArgs>(args?: Prisma.SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends UsuarioFindManyArgs>(args?: Prisma.SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends UsuarioCreateArgs>(args: Prisma.SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends UsuarioCreateManyArgs>(args?: Prisma.SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends UsuarioDeleteArgs>(args: Prisma.SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends UsuarioUpdateArgs>(args: Prisma.SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: Prisma.SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends UsuarioUpdateManyArgs>(args: Prisma.SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends UsuarioUpsertArgs>(args: Prisma.SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends UsuarioCountArgs>(args?: Prisma.Subset<T, UsuarioCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UsuarioCountAggregateOutputType> : number>;
    aggregate<T extends UsuarioAggregateArgs>(args: Prisma.Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>;
    groupBy<T extends UsuarioGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UsuarioGroupByArgs['orderBy'];
    } : {
        orderBy?: UsuarioGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: UsuarioFieldRefs;
}
export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    estaciones<T extends Prisma.Usuario$estacionesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Usuario$estacionesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EstacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    personasCreadas<T extends Prisma.Usuario$personasCreadasArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Usuario$personasCreadasArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PersonaAutorizadaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    auditorias<T extends Prisma.Usuario$auditoriasArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Usuario$auditoriasArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AuditoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface UsuarioFieldRefs {
    readonly id: Prisma.FieldRef<"Usuario", 'Int'>;
    readonly nombre: Prisma.FieldRef<"Usuario", 'String'>;
    readonly correo: Prisma.FieldRef<"Usuario", 'String'>;
    readonly contrasenaHash: Prisma.FieldRef<"Usuario", 'String'>;
    readonly rol: Prisma.FieldRef<"Usuario", 'RolUsuario'>;
    readonly refreshTokenHash: Prisma.FieldRef<"Usuario", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Usuario", 'DateTime'>;
}
export type UsuarioFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
    where: Prisma.UsuarioWhereUniqueInput;
};
export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
    where: Prisma.UsuarioWhereUniqueInput;
};
export type UsuarioFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
    where?: Prisma.UsuarioWhereInput;
    orderBy?: Prisma.UsuarioOrderByWithRelationInput | Prisma.UsuarioOrderByWithRelationInput[];
    cursor?: Prisma.UsuarioWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UsuarioScalarFieldEnum | Prisma.UsuarioScalarFieldEnum[];
};
export type UsuarioFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
    where?: Prisma.UsuarioWhereInput;
    orderBy?: Prisma.UsuarioOrderByWithRelationInput | Prisma.UsuarioOrderByWithRelationInput[];
    cursor?: Prisma.UsuarioWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UsuarioScalarFieldEnum | Prisma.UsuarioScalarFieldEnum[];
};
export type UsuarioFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
    where?: Prisma.UsuarioWhereInput;
    orderBy?: Prisma.UsuarioOrderByWithRelationInput | Prisma.UsuarioOrderByWithRelationInput[];
    cursor?: Prisma.UsuarioWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UsuarioScalarFieldEnum | Prisma.UsuarioScalarFieldEnum[];
};
export type UsuarioCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UsuarioCreateInput, Prisma.UsuarioUncheckedCreateInput>;
};
export type UsuarioCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UsuarioCreateManyInput | Prisma.UsuarioCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UsuarioCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    data: Prisma.UsuarioCreateManyInput | Prisma.UsuarioCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UsuarioUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UsuarioUpdateInput, Prisma.UsuarioUncheckedUpdateInput>;
    where: Prisma.UsuarioWhereUniqueInput;
};
export type UsuarioUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UsuarioUpdateManyMutationInput, Prisma.UsuarioUncheckedUpdateManyInput>;
    where?: Prisma.UsuarioWhereInput;
    limit?: number;
};
export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UsuarioUpdateManyMutationInput, Prisma.UsuarioUncheckedUpdateManyInput>;
    where?: Prisma.UsuarioWhereInput;
    limit?: number;
};
export type UsuarioUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
    where: Prisma.UsuarioWhereUniqueInput;
    create: Prisma.XOR<Prisma.UsuarioCreateInput, Prisma.UsuarioUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.UsuarioUpdateInput, Prisma.UsuarioUncheckedUpdateInput>;
};
export type UsuarioDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
    where: Prisma.UsuarioWhereUniqueInput;
};
export type UsuarioDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UsuarioWhereInput;
    limit?: number;
};
export type Usuario$estacionesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Usuario$personasCreadasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Usuario$auditoriasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditoriaSelect<ExtArgs> | null;
    omit?: Prisma.AuditoriaOmit<ExtArgs> | null;
    include?: Prisma.AuditoriaInclude<ExtArgs> | null;
    where?: Prisma.AuditoriaWhereInput;
    orderBy?: Prisma.AuditoriaOrderByWithRelationInput | Prisma.AuditoriaOrderByWithRelationInput[];
    cursor?: Prisma.AuditoriaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AuditoriaScalarFieldEnum | Prisma.AuditoriaScalarFieldEnum[];
};
export type UsuarioDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
};
export {};
