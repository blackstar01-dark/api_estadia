import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AuditoriaModel = runtime.Types.Result.DefaultSelection<Prisma.$AuditoriaPayload>;
export type AggregateAuditoria = {
    _count: AuditoriaCountAggregateOutputType | null;
    _avg: AuditoriaAvgAggregateOutputType | null;
    _sum: AuditoriaSumAggregateOutputType | null;
    _min: AuditoriaMinAggregateOutputType | null;
    _max: AuditoriaMaxAggregateOutputType | null;
};
export type AuditoriaAvgAggregateOutputType = {
    id: number | null;
    registroId: number | null;
    usuarioId: number | null;
};
export type AuditoriaSumAggregateOutputType = {
    id: number | null;
    registroId: number | null;
    usuarioId: number | null;
};
export type AuditoriaMinAggregateOutputType = {
    id: number | null;
    tabla: string | null;
    registroId: number | null;
    accion: string | null;
    fecha: Date | null;
    usuarioId: number | null;
};
export type AuditoriaMaxAggregateOutputType = {
    id: number | null;
    tabla: string | null;
    registroId: number | null;
    accion: string | null;
    fecha: Date | null;
    usuarioId: number | null;
};
export type AuditoriaCountAggregateOutputType = {
    id: number;
    tabla: number;
    registroId: number;
    accion: number;
    fecha: number;
    usuarioId: number;
    _all: number;
};
export type AuditoriaAvgAggregateInputType = {
    id?: true;
    registroId?: true;
    usuarioId?: true;
};
export type AuditoriaSumAggregateInputType = {
    id?: true;
    registroId?: true;
    usuarioId?: true;
};
export type AuditoriaMinAggregateInputType = {
    id?: true;
    tabla?: true;
    registroId?: true;
    accion?: true;
    fecha?: true;
    usuarioId?: true;
};
export type AuditoriaMaxAggregateInputType = {
    id?: true;
    tabla?: true;
    registroId?: true;
    accion?: true;
    fecha?: true;
    usuarioId?: true;
};
export type AuditoriaCountAggregateInputType = {
    id?: true;
    tabla?: true;
    registroId?: true;
    accion?: true;
    fecha?: true;
    usuarioId?: true;
    _all?: true;
};
export type AuditoriaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AuditoriaWhereInput;
    orderBy?: Prisma.AuditoriaOrderByWithRelationInput | Prisma.AuditoriaOrderByWithRelationInput[];
    cursor?: Prisma.AuditoriaWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AuditoriaCountAggregateInputType;
    _avg?: AuditoriaAvgAggregateInputType;
    _sum?: AuditoriaSumAggregateInputType;
    _min?: AuditoriaMinAggregateInputType;
    _max?: AuditoriaMaxAggregateInputType;
};
export type GetAuditoriaAggregateType<T extends AuditoriaAggregateArgs> = {
    [P in keyof T & keyof AggregateAuditoria]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAuditoria[P]> : Prisma.GetScalarType<T[P], AggregateAuditoria[P]>;
};
export type AuditoriaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AuditoriaWhereInput;
    orderBy?: Prisma.AuditoriaOrderByWithAggregationInput | Prisma.AuditoriaOrderByWithAggregationInput[];
    by: Prisma.AuditoriaScalarFieldEnum[] | Prisma.AuditoriaScalarFieldEnum;
    having?: Prisma.AuditoriaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AuditoriaCountAggregateInputType | true;
    _avg?: AuditoriaAvgAggregateInputType;
    _sum?: AuditoriaSumAggregateInputType;
    _min?: AuditoriaMinAggregateInputType;
    _max?: AuditoriaMaxAggregateInputType;
};
export type AuditoriaGroupByOutputType = {
    id: number;
    tabla: string;
    registroId: number;
    accion: string;
    fecha: Date;
    usuarioId: number;
    _count: AuditoriaCountAggregateOutputType | null;
    _avg: AuditoriaAvgAggregateOutputType | null;
    _sum: AuditoriaSumAggregateOutputType | null;
    _min: AuditoriaMinAggregateOutputType | null;
    _max: AuditoriaMaxAggregateOutputType | null;
};
type GetAuditoriaGroupByPayload<T extends AuditoriaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AuditoriaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AuditoriaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AuditoriaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AuditoriaGroupByOutputType[P]>;
}>>;
export type AuditoriaWhereInput = {
    AND?: Prisma.AuditoriaWhereInput | Prisma.AuditoriaWhereInput[];
    OR?: Prisma.AuditoriaWhereInput[];
    NOT?: Prisma.AuditoriaWhereInput | Prisma.AuditoriaWhereInput[];
    id?: Prisma.IntFilter<"Auditoria"> | number;
    tabla?: Prisma.StringFilter<"Auditoria"> | string;
    registroId?: Prisma.IntFilter<"Auditoria"> | number;
    accion?: Prisma.StringFilter<"Auditoria"> | string;
    fecha?: Prisma.DateTimeFilter<"Auditoria"> | Date | string;
    usuarioId?: Prisma.IntFilter<"Auditoria"> | number;
    usuario?: Prisma.XOR<Prisma.UsuarioScalarRelationFilter, Prisma.UsuarioWhereInput>;
};
export type AuditoriaOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    tabla?: Prisma.SortOrder;
    registroId?: Prisma.SortOrder;
    accion?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
    usuario?: Prisma.UsuarioOrderByWithRelationInput;
};
export type AuditoriaWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.AuditoriaWhereInput | Prisma.AuditoriaWhereInput[];
    OR?: Prisma.AuditoriaWhereInput[];
    NOT?: Prisma.AuditoriaWhereInput | Prisma.AuditoriaWhereInput[];
    tabla?: Prisma.StringFilter<"Auditoria"> | string;
    registroId?: Prisma.IntFilter<"Auditoria"> | number;
    accion?: Prisma.StringFilter<"Auditoria"> | string;
    fecha?: Prisma.DateTimeFilter<"Auditoria"> | Date | string;
    usuarioId?: Prisma.IntFilter<"Auditoria"> | number;
    usuario?: Prisma.XOR<Prisma.UsuarioScalarRelationFilter, Prisma.UsuarioWhereInput>;
}, "id">;
export type AuditoriaOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    tabla?: Prisma.SortOrder;
    registroId?: Prisma.SortOrder;
    accion?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
    _count?: Prisma.AuditoriaCountOrderByAggregateInput;
    _avg?: Prisma.AuditoriaAvgOrderByAggregateInput;
    _max?: Prisma.AuditoriaMaxOrderByAggregateInput;
    _min?: Prisma.AuditoriaMinOrderByAggregateInput;
    _sum?: Prisma.AuditoriaSumOrderByAggregateInput;
};
export type AuditoriaScalarWhereWithAggregatesInput = {
    AND?: Prisma.AuditoriaScalarWhereWithAggregatesInput | Prisma.AuditoriaScalarWhereWithAggregatesInput[];
    OR?: Prisma.AuditoriaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AuditoriaScalarWhereWithAggregatesInput | Prisma.AuditoriaScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Auditoria"> | number;
    tabla?: Prisma.StringWithAggregatesFilter<"Auditoria"> | string;
    registroId?: Prisma.IntWithAggregatesFilter<"Auditoria"> | number;
    accion?: Prisma.StringWithAggregatesFilter<"Auditoria"> | string;
    fecha?: Prisma.DateTimeWithAggregatesFilter<"Auditoria"> | Date | string;
    usuarioId?: Prisma.IntWithAggregatesFilter<"Auditoria"> | number;
};
export type AuditoriaCreateInput = {
    tabla: string;
    registroId: number;
    accion: string;
    fecha?: Date | string;
    usuario: Prisma.UsuarioCreateNestedOneWithoutAuditoriasInput;
};
export type AuditoriaUncheckedCreateInput = {
    id?: number;
    tabla: string;
    registroId: number;
    accion: string;
    fecha?: Date | string;
    usuarioId: number;
};
export type AuditoriaUpdateInput = {
    tabla?: Prisma.StringFieldUpdateOperationsInput | string;
    registroId?: Prisma.IntFieldUpdateOperationsInput | number;
    accion?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    usuario?: Prisma.UsuarioUpdateOneRequiredWithoutAuditoriasNestedInput;
};
export type AuditoriaUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    tabla?: Prisma.StringFieldUpdateOperationsInput | string;
    registroId?: Prisma.IntFieldUpdateOperationsInput | number;
    accion?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    usuarioId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type AuditoriaCreateManyInput = {
    id?: number;
    tabla: string;
    registroId: number;
    accion: string;
    fecha?: Date | string;
    usuarioId: number;
};
export type AuditoriaUpdateManyMutationInput = {
    tabla?: Prisma.StringFieldUpdateOperationsInput | string;
    registroId?: Prisma.IntFieldUpdateOperationsInput | number;
    accion?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AuditoriaUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    tabla?: Prisma.StringFieldUpdateOperationsInput | string;
    registroId?: Prisma.IntFieldUpdateOperationsInput | number;
    accion?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    usuarioId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type AuditoriaListRelationFilter = {
    every?: Prisma.AuditoriaWhereInput;
    some?: Prisma.AuditoriaWhereInput;
    none?: Prisma.AuditoriaWhereInput;
};
export type AuditoriaOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AuditoriaCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tabla?: Prisma.SortOrder;
    registroId?: Prisma.SortOrder;
    accion?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
};
export type AuditoriaAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    registroId?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
};
export type AuditoriaMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tabla?: Prisma.SortOrder;
    registroId?: Prisma.SortOrder;
    accion?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
};
export type AuditoriaMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tabla?: Prisma.SortOrder;
    registroId?: Prisma.SortOrder;
    accion?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
};
export type AuditoriaSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    registroId?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
};
export type AuditoriaCreateNestedManyWithoutUsuarioInput = {
    create?: Prisma.XOR<Prisma.AuditoriaCreateWithoutUsuarioInput, Prisma.AuditoriaUncheckedCreateWithoutUsuarioInput> | Prisma.AuditoriaCreateWithoutUsuarioInput[] | Prisma.AuditoriaUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.AuditoriaCreateOrConnectWithoutUsuarioInput | Prisma.AuditoriaCreateOrConnectWithoutUsuarioInput[];
    createMany?: Prisma.AuditoriaCreateManyUsuarioInputEnvelope;
    connect?: Prisma.AuditoriaWhereUniqueInput | Prisma.AuditoriaWhereUniqueInput[];
};
export type AuditoriaUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: Prisma.XOR<Prisma.AuditoriaCreateWithoutUsuarioInput, Prisma.AuditoriaUncheckedCreateWithoutUsuarioInput> | Prisma.AuditoriaCreateWithoutUsuarioInput[] | Prisma.AuditoriaUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.AuditoriaCreateOrConnectWithoutUsuarioInput | Prisma.AuditoriaCreateOrConnectWithoutUsuarioInput[];
    createMany?: Prisma.AuditoriaCreateManyUsuarioInputEnvelope;
    connect?: Prisma.AuditoriaWhereUniqueInput | Prisma.AuditoriaWhereUniqueInput[];
};
export type AuditoriaUpdateManyWithoutUsuarioNestedInput = {
    create?: Prisma.XOR<Prisma.AuditoriaCreateWithoutUsuarioInput, Prisma.AuditoriaUncheckedCreateWithoutUsuarioInput> | Prisma.AuditoriaCreateWithoutUsuarioInput[] | Prisma.AuditoriaUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.AuditoriaCreateOrConnectWithoutUsuarioInput | Prisma.AuditoriaCreateOrConnectWithoutUsuarioInput[];
    upsert?: Prisma.AuditoriaUpsertWithWhereUniqueWithoutUsuarioInput | Prisma.AuditoriaUpsertWithWhereUniqueWithoutUsuarioInput[];
    createMany?: Prisma.AuditoriaCreateManyUsuarioInputEnvelope;
    set?: Prisma.AuditoriaWhereUniqueInput | Prisma.AuditoriaWhereUniqueInput[];
    disconnect?: Prisma.AuditoriaWhereUniqueInput | Prisma.AuditoriaWhereUniqueInput[];
    delete?: Prisma.AuditoriaWhereUniqueInput | Prisma.AuditoriaWhereUniqueInput[];
    connect?: Prisma.AuditoriaWhereUniqueInput | Prisma.AuditoriaWhereUniqueInput[];
    update?: Prisma.AuditoriaUpdateWithWhereUniqueWithoutUsuarioInput | Prisma.AuditoriaUpdateWithWhereUniqueWithoutUsuarioInput[];
    updateMany?: Prisma.AuditoriaUpdateManyWithWhereWithoutUsuarioInput | Prisma.AuditoriaUpdateManyWithWhereWithoutUsuarioInput[];
    deleteMany?: Prisma.AuditoriaScalarWhereInput | Prisma.AuditoriaScalarWhereInput[];
};
export type AuditoriaUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: Prisma.XOR<Prisma.AuditoriaCreateWithoutUsuarioInput, Prisma.AuditoriaUncheckedCreateWithoutUsuarioInput> | Prisma.AuditoriaCreateWithoutUsuarioInput[] | Prisma.AuditoriaUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.AuditoriaCreateOrConnectWithoutUsuarioInput | Prisma.AuditoriaCreateOrConnectWithoutUsuarioInput[];
    upsert?: Prisma.AuditoriaUpsertWithWhereUniqueWithoutUsuarioInput | Prisma.AuditoriaUpsertWithWhereUniqueWithoutUsuarioInput[];
    createMany?: Prisma.AuditoriaCreateManyUsuarioInputEnvelope;
    set?: Prisma.AuditoriaWhereUniqueInput | Prisma.AuditoriaWhereUniqueInput[];
    disconnect?: Prisma.AuditoriaWhereUniqueInput | Prisma.AuditoriaWhereUniqueInput[];
    delete?: Prisma.AuditoriaWhereUniqueInput | Prisma.AuditoriaWhereUniqueInput[];
    connect?: Prisma.AuditoriaWhereUniqueInput | Prisma.AuditoriaWhereUniqueInput[];
    update?: Prisma.AuditoriaUpdateWithWhereUniqueWithoutUsuarioInput | Prisma.AuditoriaUpdateWithWhereUniqueWithoutUsuarioInput[];
    updateMany?: Prisma.AuditoriaUpdateManyWithWhereWithoutUsuarioInput | Prisma.AuditoriaUpdateManyWithWhereWithoutUsuarioInput[];
    deleteMany?: Prisma.AuditoriaScalarWhereInput | Prisma.AuditoriaScalarWhereInput[];
};
export type AuditoriaCreateWithoutUsuarioInput = {
    tabla: string;
    registroId: number;
    accion: string;
    fecha?: Date | string;
};
export type AuditoriaUncheckedCreateWithoutUsuarioInput = {
    id?: number;
    tabla: string;
    registroId: number;
    accion: string;
    fecha?: Date | string;
};
export type AuditoriaCreateOrConnectWithoutUsuarioInput = {
    where: Prisma.AuditoriaWhereUniqueInput;
    create: Prisma.XOR<Prisma.AuditoriaCreateWithoutUsuarioInput, Prisma.AuditoriaUncheckedCreateWithoutUsuarioInput>;
};
export type AuditoriaCreateManyUsuarioInputEnvelope = {
    data: Prisma.AuditoriaCreateManyUsuarioInput | Prisma.AuditoriaCreateManyUsuarioInput[];
    skipDuplicates?: boolean;
};
export type AuditoriaUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: Prisma.AuditoriaWhereUniqueInput;
    update: Prisma.XOR<Prisma.AuditoriaUpdateWithoutUsuarioInput, Prisma.AuditoriaUncheckedUpdateWithoutUsuarioInput>;
    create: Prisma.XOR<Prisma.AuditoriaCreateWithoutUsuarioInput, Prisma.AuditoriaUncheckedCreateWithoutUsuarioInput>;
};
export type AuditoriaUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: Prisma.AuditoriaWhereUniqueInput;
    data: Prisma.XOR<Prisma.AuditoriaUpdateWithoutUsuarioInput, Prisma.AuditoriaUncheckedUpdateWithoutUsuarioInput>;
};
export type AuditoriaUpdateManyWithWhereWithoutUsuarioInput = {
    where: Prisma.AuditoriaScalarWhereInput;
    data: Prisma.XOR<Prisma.AuditoriaUpdateManyMutationInput, Prisma.AuditoriaUncheckedUpdateManyWithoutUsuarioInput>;
};
export type AuditoriaScalarWhereInput = {
    AND?: Prisma.AuditoriaScalarWhereInput | Prisma.AuditoriaScalarWhereInput[];
    OR?: Prisma.AuditoriaScalarWhereInput[];
    NOT?: Prisma.AuditoriaScalarWhereInput | Prisma.AuditoriaScalarWhereInput[];
    id?: Prisma.IntFilter<"Auditoria"> | number;
    tabla?: Prisma.StringFilter<"Auditoria"> | string;
    registroId?: Prisma.IntFilter<"Auditoria"> | number;
    accion?: Prisma.StringFilter<"Auditoria"> | string;
    fecha?: Prisma.DateTimeFilter<"Auditoria"> | Date | string;
    usuarioId?: Prisma.IntFilter<"Auditoria"> | number;
};
export type AuditoriaCreateManyUsuarioInput = {
    id?: number;
    tabla: string;
    registroId: number;
    accion: string;
    fecha?: Date | string;
};
export type AuditoriaUpdateWithoutUsuarioInput = {
    tabla?: Prisma.StringFieldUpdateOperationsInput | string;
    registroId?: Prisma.IntFieldUpdateOperationsInput | number;
    accion?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AuditoriaUncheckedUpdateWithoutUsuarioInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    tabla?: Prisma.StringFieldUpdateOperationsInput | string;
    registroId?: Prisma.IntFieldUpdateOperationsInput | number;
    accion?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AuditoriaUncheckedUpdateManyWithoutUsuarioInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    tabla?: Prisma.StringFieldUpdateOperationsInput | string;
    registroId?: Prisma.IntFieldUpdateOperationsInput | number;
    accion?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AuditoriaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tabla?: boolean;
    registroId?: boolean;
    accion?: boolean;
    fecha?: boolean;
    usuarioId?: boolean;
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["auditoria"]>;
export type AuditoriaSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tabla?: boolean;
    registroId?: boolean;
    accion?: boolean;
    fecha?: boolean;
    usuarioId?: boolean;
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["auditoria"]>;
export type AuditoriaSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tabla?: boolean;
    registroId?: boolean;
    accion?: boolean;
    fecha?: boolean;
    usuarioId?: boolean;
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["auditoria"]>;
export type AuditoriaSelectScalar = {
    id?: boolean;
    tabla?: boolean;
    registroId?: boolean;
    accion?: boolean;
    fecha?: boolean;
    usuarioId?: boolean;
};
export type AuditoriaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "tabla" | "registroId" | "accion" | "fecha" | "usuarioId", ExtArgs["result"]["auditoria"]>;
export type AuditoriaInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
};
export type AuditoriaIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
};
export type AuditoriaIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
};
export type $AuditoriaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Auditoria";
    objects: {
        usuario: Prisma.$UsuarioPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        tabla: string;
        registroId: number;
        accion: string;
        fecha: Date;
        usuarioId: number;
    }, ExtArgs["result"]["auditoria"]>;
    composites: {};
};
export type AuditoriaGetPayload<S extends boolean | null | undefined | AuditoriaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AuditoriaPayload, S>;
export type AuditoriaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AuditoriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AuditoriaCountAggregateInputType | true;
};
export interface AuditoriaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Auditoria'];
        meta: {
            name: 'Auditoria';
        };
    };
    findUnique<T extends AuditoriaFindUniqueArgs>(args: Prisma.SelectSubset<T, AuditoriaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AuditoriaClient<runtime.Types.Result.GetResult<Prisma.$AuditoriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AuditoriaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AuditoriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AuditoriaClient<runtime.Types.Result.GetResult<Prisma.$AuditoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AuditoriaFindFirstArgs>(args?: Prisma.SelectSubset<T, AuditoriaFindFirstArgs<ExtArgs>>): Prisma.Prisma__AuditoriaClient<runtime.Types.Result.GetResult<Prisma.$AuditoriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AuditoriaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AuditoriaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AuditoriaClient<runtime.Types.Result.GetResult<Prisma.$AuditoriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AuditoriaFindManyArgs>(args?: Prisma.SelectSubset<T, AuditoriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AuditoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AuditoriaCreateArgs>(args: Prisma.SelectSubset<T, AuditoriaCreateArgs<ExtArgs>>): Prisma.Prisma__AuditoriaClient<runtime.Types.Result.GetResult<Prisma.$AuditoriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AuditoriaCreateManyArgs>(args?: Prisma.SelectSubset<T, AuditoriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AuditoriaCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AuditoriaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AuditoriaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AuditoriaDeleteArgs>(args: Prisma.SelectSubset<T, AuditoriaDeleteArgs<ExtArgs>>): Prisma.Prisma__AuditoriaClient<runtime.Types.Result.GetResult<Prisma.$AuditoriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AuditoriaUpdateArgs>(args: Prisma.SelectSubset<T, AuditoriaUpdateArgs<ExtArgs>>): Prisma.Prisma__AuditoriaClient<runtime.Types.Result.GetResult<Prisma.$AuditoriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AuditoriaDeleteManyArgs>(args?: Prisma.SelectSubset<T, AuditoriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AuditoriaUpdateManyArgs>(args: Prisma.SelectSubset<T, AuditoriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AuditoriaUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AuditoriaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AuditoriaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AuditoriaUpsertArgs>(args: Prisma.SelectSubset<T, AuditoriaUpsertArgs<ExtArgs>>): Prisma.Prisma__AuditoriaClient<runtime.Types.Result.GetResult<Prisma.$AuditoriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AuditoriaCountArgs>(args?: Prisma.Subset<T, AuditoriaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AuditoriaCountAggregateOutputType> : number>;
    aggregate<T extends AuditoriaAggregateArgs>(args: Prisma.Subset<T, AuditoriaAggregateArgs>): Prisma.PrismaPromise<GetAuditoriaAggregateType<T>>;
    groupBy<T extends AuditoriaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AuditoriaGroupByArgs['orderBy'];
    } : {
        orderBy?: AuditoriaGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AuditoriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditoriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AuditoriaFieldRefs;
}
export interface Prisma__AuditoriaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    usuario<T extends Prisma.UsuarioDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UsuarioDefaultArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AuditoriaFieldRefs {
    readonly id: Prisma.FieldRef<"Auditoria", 'Int'>;
    readonly tabla: Prisma.FieldRef<"Auditoria", 'String'>;
    readonly registroId: Prisma.FieldRef<"Auditoria", 'Int'>;
    readonly accion: Prisma.FieldRef<"Auditoria", 'String'>;
    readonly fecha: Prisma.FieldRef<"Auditoria", 'DateTime'>;
    readonly usuarioId: Prisma.FieldRef<"Auditoria", 'Int'>;
}
export type AuditoriaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditoriaSelect<ExtArgs> | null;
    omit?: Prisma.AuditoriaOmit<ExtArgs> | null;
    include?: Prisma.AuditoriaInclude<ExtArgs> | null;
    where: Prisma.AuditoriaWhereUniqueInput;
};
export type AuditoriaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditoriaSelect<ExtArgs> | null;
    omit?: Prisma.AuditoriaOmit<ExtArgs> | null;
    include?: Prisma.AuditoriaInclude<ExtArgs> | null;
    where: Prisma.AuditoriaWhereUniqueInput;
};
export type AuditoriaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AuditoriaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AuditoriaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AuditoriaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditoriaSelect<ExtArgs> | null;
    omit?: Prisma.AuditoriaOmit<ExtArgs> | null;
    include?: Prisma.AuditoriaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AuditoriaCreateInput, Prisma.AuditoriaUncheckedCreateInput>;
};
export type AuditoriaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AuditoriaCreateManyInput | Prisma.AuditoriaCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AuditoriaCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditoriaSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AuditoriaOmit<ExtArgs> | null;
    data: Prisma.AuditoriaCreateManyInput | Prisma.AuditoriaCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AuditoriaIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AuditoriaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditoriaSelect<ExtArgs> | null;
    omit?: Prisma.AuditoriaOmit<ExtArgs> | null;
    include?: Prisma.AuditoriaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AuditoriaUpdateInput, Prisma.AuditoriaUncheckedUpdateInput>;
    where: Prisma.AuditoriaWhereUniqueInput;
};
export type AuditoriaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AuditoriaUpdateManyMutationInput, Prisma.AuditoriaUncheckedUpdateManyInput>;
    where?: Prisma.AuditoriaWhereInput;
    limit?: number;
};
export type AuditoriaUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditoriaSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AuditoriaOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AuditoriaUpdateManyMutationInput, Prisma.AuditoriaUncheckedUpdateManyInput>;
    where?: Prisma.AuditoriaWhereInput;
    limit?: number;
    include?: Prisma.AuditoriaIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AuditoriaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditoriaSelect<ExtArgs> | null;
    omit?: Prisma.AuditoriaOmit<ExtArgs> | null;
    include?: Prisma.AuditoriaInclude<ExtArgs> | null;
    where: Prisma.AuditoriaWhereUniqueInput;
    create: Prisma.XOR<Prisma.AuditoriaCreateInput, Prisma.AuditoriaUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AuditoriaUpdateInput, Prisma.AuditoriaUncheckedUpdateInput>;
};
export type AuditoriaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditoriaSelect<ExtArgs> | null;
    omit?: Prisma.AuditoriaOmit<ExtArgs> | null;
    include?: Prisma.AuditoriaInclude<ExtArgs> | null;
    where: Prisma.AuditoriaWhereUniqueInput;
};
export type AuditoriaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AuditoriaWhereInput;
    limit?: number;
};
export type AuditoriaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditoriaSelect<ExtArgs> | null;
    omit?: Prisma.AuditoriaOmit<ExtArgs> | null;
    include?: Prisma.AuditoriaInclude<ExtArgs> | null;
};
export {};
