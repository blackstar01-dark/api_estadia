import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type DescargaPipaModel = runtime.Types.Result.DefaultSelection<Prisma.$DescargaPipaPayload>;
export type AggregateDescargaPipa = {
    _count: DescargaPipaCountAggregateOutputType | null;
    _avg: DescargaPipaAvgAggregateOutputType | null;
    _sum: DescargaPipaSumAggregateOutputType | null;
    _min: DescargaPipaMinAggregateOutputType | null;
    _max: DescargaPipaMaxAggregateOutputType | null;
};
export type DescargaPipaAvgAggregateOutputType = {
    id: number | null;
    registroId: number | null;
    volumenRecibido: number | null;
};
export type DescargaPipaSumAggregateOutputType = {
    id: number | null;
    registroId: number | null;
    volumenRecibido: number | null;
};
export type DescargaPipaMinAggregateOutputType = {
    id: number | null;
    registroId: number | null;
    numeroPipa: string | null;
    producto: string | null;
    volumenRecibido: number | null;
    proveedor: string | null;
};
export type DescargaPipaMaxAggregateOutputType = {
    id: number | null;
    registroId: number | null;
    numeroPipa: string | null;
    producto: string | null;
    volumenRecibido: number | null;
    proveedor: string | null;
};
export type DescargaPipaCountAggregateOutputType = {
    id: number;
    registroId: number;
    numeroPipa: number;
    producto: number;
    volumenRecibido: number;
    proveedor: number;
    _all: number;
};
export type DescargaPipaAvgAggregateInputType = {
    id?: true;
    registroId?: true;
    volumenRecibido?: true;
};
export type DescargaPipaSumAggregateInputType = {
    id?: true;
    registroId?: true;
    volumenRecibido?: true;
};
export type DescargaPipaMinAggregateInputType = {
    id?: true;
    registroId?: true;
    numeroPipa?: true;
    producto?: true;
    volumenRecibido?: true;
    proveedor?: true;
};
export type DescargaPipaMaxAggregateInputType = {
    id?: true;
    registroId?: true;
    numeroPipa?: true;
    producto?: true;
    volumenRecibido?: true;
    proveedor?: true;
};
export type DescargaPipaCountAggregateInputType = {
    id?: true;
    registroId?: true;
    numeroPipa?: true;
    producto?: true;
    volumenRecibido?: true;
    proveedor?: true;
    _all?: true;
};
export type DescargaPipaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DescargaPipaWhereInput;
    orderBy?: Prisma.DescargaPipaOrderByWithRelationInput | Prisma.DescargaPipaOrderByWithRelationInput[];
    cursor?: Prisma.DescargaPipaWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | DescargaPipaCountAggregateInputType;
    _avg?: DescargaPipaAvgAggregateInputType;
    _sum?: DescargaPipaSumAggregateInputType;
    _min?: DescargaPipaMinAggregateInputType;
    _max?: DescargaPipaMaxAggregateInputType;
};
export type GetDescargaPipaAggregateType<T extends DescargaPipaAggregateArgs> = {
    [P in keyof T & keyof AggregateDescargaPipa]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDescargaPipa[P]> : Prisma.GetScalarType<T[P], AggregateDescargaPipa[P]>;
};
export type DescargaPipaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DescargaPipaWhereInput;
    orderBy?: Prisma.DescargaPipaOrderByWithAggregationInput | Prisma.DescargaPipaOrderByWithAggregationInput[];
    by: Prisma.DescargaPipaScalarFieldEnum[] | Prisma.DescargaPipaScalarFieldEnum;
    having?: Prisma.DescargaPipaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DescargaPipaCountAggregateInputType | true;
    _avg?: DescargaPipaAvgAggregateInputType;
    _sum?: DescargaPipaSumAggregateInputType;
    _min?: DescargaPipaMinAggregateInputType;
    _max?: DescargaPipaMaxAggregateInputType;
};
export type DescargaPipaGroupByOutputType = {
    id: number;
    registroId: number;
    numeroPipa: string;
    producto: string;
    volumenRecibido: number;
    proveedor: string;
    _count: DescargaPipaCountAggregateOutputType | null;
    _avg: DescargaPipaAvgAggregateOutputType | null;
    _sum: DescargaPipaSumAggregateOutputType | null;
    _min: DescargaPipaMinAggregateOutputType | null;
    _max: DescargaPipaMaxAggregateOutputType | null;
};
type GetDescargaPipaGroupByPayload<T extends DescargaPipaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DescargaPipaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DescargaPipaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DescargaPipaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DescargaPipaGroupByOutputType[P]>;
}>>;
export type DescargaPipaWhereInput = {
    AND?: Prisma.DescargaPipaWhereInput | Prisma.DescargaPipaWhereInput[];
    OR?: Prisma.DescargaPipaWhereInput[];
    NOT?: Prisma.DescargaPipaWhereInput | Prisma.DescargaPipaWhereInput[];
    id?: Prisma.IntFilter<"DescargaPipa"> | number;
    registroId?: Prisma.IntFilter<"DescargaPipa"> | number;
    numeroPipa?: Prisma.StringFilter<"DescargaPipa"> | string;
    producto?: Prisma.StringFilter<"DescargaPipa"> | string;
    volumenRecibido?: Prisma.FloatFilter<"DescargaPipa"> | number;
    proveedor?: Prisma.StringFilter<"DescargaPipa"> | string;
    registro?: Prisma.XOR<Prisma.RegistroBitacoraScalarRelationFilter, Prisma.RegistroBitacoraWhereInput>;
};
export type DescargaPipaOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    registroId?: Prisma.SortOrder;
    numeroPipa?: Prisma.SortOrder;
    producto?: Prisma.SortOrder;
    volumenRecibido?: Prisma.SortOrder;
    proveedor?: Prisma.SortOrder;
    registro?: Prisma.RegistroBitacoraOrderByWithRelationInput;
};
export type DescargaPipaWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    registroId?: number;
    AND?: Prisma.DescargaPipaWhereInput | Prisma.DescargaPipaWhereInput[];
    OR?: Prisma.DescargaPipaWhereInput[];
    NOT?: Prisma.DescargaPipaWhereInput | Prisma.DescargaPipaWhereInput[];
    numeroPipa?: Prisma.StringFilter<"DescargaPipa"> | string;
    producto?: Prisma.StringFilter<"DescargaPipa"> | string;
    volumenRecibido?: Prisma.FloatFilter<"DescargaPipa"> | number;
    proveedor?: Prisma.StringFilter<"DescargaPipa"> | string;
    registro?: Prisma.XOR<Prisma.RegistroBitacoraScalarRelationFilter, Prisma.RegistroBitacoraWhereInput>;
}, "id" | "registroId">;
export type DescargaPipaOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    registroId?: Prisma.SortOrder;
    numeroPipa?: Prisma.SortOrder;
    producto?: Prisma.SortOrder;
    volumenRecibido?: Prisma.SortOrder;
    proveedor?: Prisma.SortOrder;
    _count?: Prisma.DescargaPipaCountOrderByAggregateInput;
    _avg?: Prisma.DescargaPipaAvgOrderByAggregateInput;
    _max?: Prisma.DescargaPipaMaxOrderByAggregateInput;
    _min?: Prisma.DescargaPipaMinOrderByAggregateInput;
    _sum?: Prisma.DescargaPipaSumOrderByAggregateInput;
};
export type DescargaPipaScalarWhereWithAggregatesInput = {
    AND?: Prisma.DescargaPipaScalarWhereWithAggregatesInput | Prisma.DescargaPipaScalarWhereWithAggregatesInput[];
    OR?: Prisma.DescargaPipaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DescargaPipaScalarWhereWithAggregatesInput | Prisma.DescargaPipaScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"DescargaPipa"> | number;
    registroId?: Prisma.IntWithAggregatesFilter<"DescargaPipa"> | number;
    numeroPipa?: Prisma.StringWithAggregatesFilter<"DescargaPipa"> | string;
    producto?: Prisma.StringWithAggregatesFilter<"DescargaPipa"> | string;
    volumenRecibido?: Prisma.FloatWithAggregatesFilter<"DescargaPipa"> | number;
    proveedor?: Prisma.StringWithAggregatesFilter<"DescargaPipa"> | string;
};
export type DescargaPipaCreateInput = {
    numeroPipa: string;
    producto: string;
    volumenRecibido: number;
    proveedor: string;
    registro: Prisma.RegistroBitacoraCreateNestedOneWithoutDescargaPipaInput;
};
export type DescargaPipaUncheckedCreateInput = {
    id?: number;
    registroId: number;
    numeroPipa: string;
    producto: string;
    volumenRecibido: number;
    proveedor: string;
};
export type DescargaPipaUpdateInput = {
    numeroPipa?: Prisma.StringFieldUpdateOperationsInput | string;
    producto?: Prisma.StringFieldUpdateOperationsInput | string;
    volumenRecibido?: Prisma.FloatFieldUpdateOperationsInput | number;
    proveedor?: Prisma.StringFieldUpdateOperationsInput | string;
    registro?: Prisma.RegistroBitacoraUpdateOneRequiredWithoutDescargaPipaNestedInput;
};
export type DescargaPipaUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    registroId?: Prisma.IntFieldUpdateOperationsInput | number;
    numeroPipa?: Prisma.StringFieldUpdateOperationsInput | string;
    producto?: Prisma.StringFieldUpdateOperationsInput | string;
    volumenRecibido?: Prisma.FloatFieldUpdateOperationsInput | number;
    proveedor?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type DescargaPipaCreateManyInput = {
    id?: number;
    registroId: number;
    numeroPipa: string;
    producto: string;
    volumenRecibido: number;
    proveedor: string;
};
export type DescargaPipaUpdateManyMutationInput = {
    numeroPipa?: Prisma.StringFieldUpdateOperationsInput | string;
    producto?: Prisma.StringFieldUpdateOperationsInput | string;
    volumenRecibido?: Prisma.FloatFieldUpdateOperationsInput | number;
    proveedor?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type DescargaPipaUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    registroId?: Prisma.IntFieldUpdateOperationsInput | number;
    numeroPipa?: Prisma.StringFieldUpdateOperationsInput | string;
    producto?: Prisma.StringFieldUpdateOperationsInput | string;
    volumenRecibido?: Prisma.FloatFieldUpdateOperationsInput | number;
    proveedor?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type DescargaPipaNullableScalarRelationFilter = {
    is?: Prisma.DescargaPipaWhereInput | null;
    isNot?: Prisma.DescargaPipaWhereInput | null;
};
export type DescargaPipaCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    registroId?: Prisma.SortOrder;
    numeroPipa?: Prisma.SortOrder;
    producto?: Prisma.SortOrder;
    volumenRecibido?: Prisma.SortOrder;
    proveedor?: Prisma.SortOrder;
};
export type DescargaPipaAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    registroId?: Prisma.SortOrder;
    volumenRecibido?: Prisma.SortOrder;
};
export type DescargaPipaMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    registroId?: Prisma.SortOrder;
    numeroPipa?: Prisma.SortOrder;
    producto?: Prisma.SortOrder;
    volumenRecibido?: Prisma.SortOrder;
    proveedor?: Prisma.SortOrder;
};
export type DescargaPipaMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    registroId?: Prisma.SortOrder;
    numeroPipa?: Prisma.SortOrder;
    producto?: Prisma.SortOrder;
    volumenRecibido?: Prisma.SortOrder;
    proveedor?: Prisma.SortOrder;
};
export type DescargaPipaSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    registroId?: Prisma.SortOrder;
    volumenRecibido?: Prisma.SortOrder;
};
export type DescargaPipaCreateNestedOneWithoutRegistroInput = {
    create?: Prisma.XOR<Prisma.DescargaPipaCreateWithoutRegistroInput, Prisma.DescargaPipaUncheckedCreateWithoutRegistroInput>;
    connectOrCreate?: Prisma.DescargaPipaCreateOrConnectWithoutRegistroInput;
    connect?: Prisma.DescargaPipaWhereUniqueInput;
};
export type DescargaPipaUncheckedCreateNestedOneWithoutRegistroInput = {
    create?: Prisma.XOR<Prisma.DescargaPipaCreateWithoutRegistroInput, Prisma.DescargaPipaUncheckedCreateWithoutRegistroInput>;
    connectOrCreate?: Prisma.DescargaPipaCreateOrConnectWithoutRegistroInput;
    connect?: Prisma.DescargaPipaWhereUniqueInput;
};
export type DescargaPipaUpdateOneWithoutRegistroNestedInput = {
    create?: Prisma.XOR<Prisma.DescargaPipaCreateWithoutRegistroInput, Prisma.DescargaPipaUncheckedCreateWithoutRegistroInput>;
    connectOrCreate?: Prisma.DescargaPipaCreateOrConnectWithoutRegistroInput;
    upsert?: Prisma.DescargaPipaUpsertWithoutRegistroInput;
    disconnect?: Prisma.DescargaPipaWhereInput | boolean;
    delete?: Prisma.DescargaPipaWhereInput | boolean;
    connect?: Prisma.DescargaPipaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DescargaPipaUpdateToOneWithWhereWithoutRegistroInput, Prisma.DescargaPipaUpdateWithoutRegistroInput>, Prisma.DescargaPipaUncheckedUpdateWithoutRegistroInput>;
};
export type DescargaPipaUncheckedUpdateOneWithoutRegistroNestedInput = {
    create?: Prisma.XOR<Prisma.DescargaPipaCreateWithoutRegistroInput, Prisma.DescargaPipaUncheckedCreateWithoutRegistroInput>;
    connectOrCreate?: Prisma.DescargaPipaCreateOrConnectWithoutRegistroInput;
    upsert?: Prisma.DescargaPipaUpsertWithoutRegistroInput;
    disconnect?: Prisma.DescargaPipaWhereInput | boolean;
    delete?: Prisma.DescargaPipaWhereInput | boolean;
    connect?: Prisma.DescargaPipaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DescargaPipaUpdateToOneWithWhereWithoutRegistroInput, Prisma.DescargaPipaUpdateWithoutRegistroInput>, Prisma.DescargaPipaUncheckedUpdateWithoutRegistroInput>;
};
export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type DescargaPipaCreateWithoutRegistroInput = {
    numeroPipa: string;
    producto: string;
    volumenRecibido: number;
    proveedor: string;
};
export type DescargaPipaUncheckedCreateWithoutRegistroInput = {
    id?: number;
    numeroPipa: string;
    producto: string;
    volumenRecibido: number;
    proveedor: string;
};
export type DescargaPipaCreateOrConnectWithoutRegistroInput = {
    where: Prisma.DescargaPipaWhereUniqueInput;
    create: Prisma.XOR<Prisma.DescargaPipaCreateWithoutRegistroInput, Prisma.DescargaPipaUncheckedCreateWithoutRegistroInput>;
};
export type DescargaPipaUpsertWithoutRegistroInput = {
    update: Prisma.XOR<Prisma.DescargaPipaUpdateWithoutRegistroInput, Prisma.DescargaPipaUncheckedUpdateWithoutRegistroInput>;
    create: Prisma.XOR<Prisma.DescargaPipaCreateWithoutRegistroInput, Prisma.DescargaPipaUncheckedCreateWithoutRegistroInput>;
    where?: Prisma.DescargaPipaWhereInput;
};
export type DescargaPipaUpdateToOneWithWhereWithoutRegistroInput = {
    where?: Prisma.DescargaPipaWhereInput;
    data: Prisma.XOR<Prisma.DescargaPipaUpdateWithoutRegistroInput, Prisma.DescargaPipaUncheckedUpdateWithoutRegistroInput>;
};
export type DescargaPipaUpdateWithoutRegistroInput = {
    numeroPipa?: Prisma.StringFieldUpdateOperationsInput | string;
    producto?: Prisma.StringFieldUpdateOperationsInput | string;
    volumenRecibido?: Prisma.FloatFieldUpdateOperationsInput | number;
    proveedor?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type DescargaPipaUncheckedUpdateWithoutRegistroInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    numeroPipa?: Prisma.StringFieldUpdateOperationsInput | string;
    producto?: Prisma.StringFieldUpdateOperationsInput | string;
    volumenRecibido?: Prisma.FloatFieldUpdateOperationsInput | number;
    proveedor?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type DescargaPipaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    registroId?: boolean;
    numeroPipa?: boolean;
    producto?: boolean;
    volumenRecibido?: boolean;
    proveedor?: boolean;
    registro?: boolean | Prisma.RegistroBitacoraDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["descargaPipa"]>;
export type DescargaPipaSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    registroId?: boolean;
    numeroPipa?: boolean;
    producto?: boolean;
    volumenRecibido?: boolean;
    proveedor?: boolean;
    registro?: boolean | Prisma.RegistroBitacoraDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["descargaPipa"]>;
export type DescargaPipaSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    registroId?: boolean;
    numeroPipa?: boolean;
    producto?: boolean;
    volumenRecibido?: boolean;
    proveedor?: boolean;
    registro?: boolean | Prisma.RegistroBitacoraDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["descargaPipa"]>;
export type DescargaPipaSelectScalar = {
    id?: boolean;
    registroId?: boolean;
    numeroPipa?: boolean;
    producto?: boolean;
    volumenRecibido?: boolean;
    proveedor?: boolean;
};
export type DescargaPipaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "registroId" | "numeroPipa" | "producto" | "volumenRecibido" | "proveedor", ExtArgs["result"]["descargaPipa"]>;
export type DescargaPipaInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    registro?: boolean | Prisma.RegistroBitacoraDefaultArgs<ExtArgs>;
};
export type DescargaPipaIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    registro?: boolean | Prisma.RegistroBitacoraDefaultArgs<ExtArgs>;
};
export type DescargaPipaIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    registro?: boolean | Prisma.RegistroBitacoraDefaultArgs<ExtArgs>;
};
export type $DescargaPipaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "DescargaPipa";
    objects: {
        registro: Prisma.$RegistroBitacoraPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        registroId: number;
        numeroPipa: string;
        producto: string;
        volumenRecibido: number;
        proveedor: string;
    }, ExtArgs["result"]["descargaPipa"]>;
    composites: {};
};
export type DescargaPipaGetPayload<S extends boolean | null | undefined | DescargaPipaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DescargaPipaPayload, S>;
export type DescargaPipaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DescargaPipaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DescargaPipaCountAggregateInputType | true;
};
export interface DescargaPipaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['DescargaPipa'];
        meta: {
            name: 'DescargaPipa';
        };
    };
    findUnique<T extends DescargaPipaFindUniqueArgs>(args: Prisma.SelectSubset<T, DescargaPipaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DescargaPipaClient<runtime.Types.Result.GetResult<Prisma.$DescargaPipaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends DescargaPipaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DescargaPipaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DescargaPipaClient<runtime.Types.Result.GetResult<Prisma.$DescargaPipaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends DescargaPipaFindFirstArgs>(args?: Prisma.SelectSubset<T, DescargaPipaFindFirstArgs<ExtArgs>>): Prisma.Prisma__DescargaPipaClient<runtime.Types.Result.GetResult<Prisma.$DescargaPipaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends DescargaPipaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DescargaPipaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DescargaPipaClient<runtime.Types.Result.GetResult<Prisma.$DescargaPipaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends DescargaPipaFindManyArgs>(args?: Prisma.SelectSubset<T, DescargaPipaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DescargaPipaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends DescargaPipaCreateArgs>(args: Prisma.SelectSubset<T, DescargaPipaCreateArgs<ExtArgs>>): Prisma.Prisma__DescargaPipaClient<runtime.Types.Result.GetResult<Prisma.$DescargaPipaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends DescargaPipaCreateManyArgs>(args?: Prisma.SelectSubset<T, DescargaPipaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends DescargaPipaCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DescargaPipaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DescargaPipaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends DescargaPipaDeleteArgs>(args: Prisma.SelectSubset<T, DescargaPipaDeleteArgs<ExtArgs>>): Prisma.Prisma__DescargaPipaClient<runtime.Types.Result.GetResult<Prisma.$DescargaPipaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends DescargaPipaUpdateArgs>(args: Prisma.SelectSubset<T, DescargaPipaUpdateArgs<ExtArgs>>): Prisma.Prisma__DescargaPipaClient<runtime.Types.Result.GetResult<Prisma.$DescargaPipaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends DescargaPipaDeleteManyArgs>(args?: Prisma.SelectSubset<T, DescargaPipaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends DescargaPipaUpdateManyArgs>(args: Prisma.SelectSubset<T, DescargaPipaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends DescargaPipaUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DescargaPipaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DescargaPipaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends DescargaPipaUpsertArgs>(args: Prisma.SelectSubset<T, DescargaPipaUpsertArgs<ExtArgs>>): Prisma.Prisma__DescargaPipaClient<runtime.Types.Result.GetResult<Prisma.$DescargaPipaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends DescargaPipaCountArgs>(args?: Prisma.Subset<T, DescargaPipaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DescargaPipaCountAggregateOutputType> : number>;
    aggregate<T extends DescargaPipaAggregateArgs>(args: Prisma.Subset<T, DescargaPipaAggregateArgs>): Prisma.PrismaPromise<GetDescargaPipaAggregateType<T>>;
    groupBy<T extends DescargaPipaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DescargaPipaGroupByArgs['orderBy'];
    } : {
        orderBy?: DescargaPipaGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DescargaPipaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDescargaPipaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: DescargaPipaFieldRefs;
}
export interface Prisma__DescargaPipaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    registro<T extends Prisma.RegistroBitacoraDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RegistroBitacoraDefaultArgs<ExtArgs>>): Prisma.Prisma__RegistroBitacoraClient<runtime.Types.Result.GetResult<Prisma.$RegistroBitacoraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface DescargaPipaFieldRefs {
    readonly id: Prisma.FieldRef<"DescargaPipa", 'Int'>;
    readonly registroId: Prisma.FieldRef<"DescargaPipa", 'Int'>;
    readonly numeroPipa: Prisma.FieldRef<"DescargaPipa", 'String'>;
    readonly producto: Prisma.FieldRef<"DescargaPipa", 'String'>;
    readonly volumenRecibido: Prisma.FieldRef<"DescargaPipa", 'Float'>;
    readonly proveedor: Prisma.FieldRef<"DescargaPipa", 'String'>;
}
export type DescargaPipaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DescargaPipaSelect<ExtArgs> | null;
    omit?: Prisma.DescargaPipaOmit<ExtArgs> | null;
    include?: Prisma.DescargaPipaInclude<ExtArgs> | null;
    where: Prisma.DescargaPipaWhereUniqueInput;
};
export type DescargaPipaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DescargaPipaSelect<ExtArgs> | null;
    omit?: Prisma.DescargaPipaOmit<ExtArgs> | null;
    include?: Prisma.DescargaPipaInclude<ExtArgs> | null;
    where: Prisma.DescargaPipaWhereUniqueInput;
};
export type DescargaPipaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DescargaPipaSelect<ExtArgs> | null;
    omit?: Prisma.DescargaPipaOmit<ExtArgs> | null;
    include?: Prisma.DescargaPipaInclude<ExtArgs> | null;
    where?: Prisma.DescargaPipaWhereInput;
    orderBy?: Prisma.DescargaPipaOrderByWithRelationInput | Prisma.DescargaPipaOrderByWithRelationInput[];
    cursor?: Prisma.DescargaPipaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DescargaPipaScalarFieldEnum | Prisma.DescargaPipaScalarFieldEnum[];
};
export type DescargaPipaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DescargaPipaSelect<ExtArgs> | null;
    omit?: Prisma.DescargaPipaOmit<ExtArgs> | null;
    include?: Prisma.DescargaPipaInclude<ExtArgs> | null;
    where?: Prisma.DescargaPipaWhereInput;
    orderBy?: Prisma.DescargaPipaOrderByWithRelationInput | Prisma.DescargaPipaOrderByWithRelationInput[];
    cursor?: Prisma.DescargaPipaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DescargaPipaScalarFieldEnum | Prisma.DescargaPipaScalarFieldEnum[];
};
export type DescargaPipaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DescargaPipaSelect<ExtArgs> | null;
    omit?: Prisma.DescargaPipaOmit<ExtArgs> | null;
    include?: Prisma.DescargaPipaInclude<ExtArgs> | null;
    where?: Prisma.DescargaPipaWhereInput;
    orderBy?: Prisma.DescargaPipaOrderByWithRelationInput | Prisma.DescargaPipaOrderByWithRelationInput[];
    cursor?: Prisma.DescargaPipaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DescargaPipaScalarFieldEnum | Prisma.DescargaPipaScalarFieldEnum[];
};
export type DescargaPipaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DescargaPipaSelect<ExtArgs> | null;
    omit?: Prisma.DescargaPipaOmit<ExtArgs> | null;
    include?: Prisma.DescargaPipaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DescargaPipaCreateInput, Prisma.DescargaPipaUncheckedCreateInput>;
};
export type DescargaPipaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.DescargaPipaCreateManyInput | Prisma.DescargaPipaCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DescargaPipaCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DescargaPipaSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DescargaPipaOmit<ExtArgs> | null;
    data: Prisma.DescargaPipaCreateManyInput | Prisma.DescargaPipaCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.DescargaPipaIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type DescargaPipaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DescargaPipaSelect<ExtArgs> | null;
    omit?: Prisma.DescargaPipaOmit<ExtArgs> | null;
    include?: Prisma.DescargaPipaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DescargaPipaUpdateInput, Prisma.DescargaPipaUncheckedUpdateInput>;
    where: Prisma.DescargaPipaWhereUniqueInput;
};
export type DescargaPipaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.DescargaPipaUpdateManyMutationInput, Prisma.DescargaPipaUncheckedUpdateManyInput>;
    where?: Prisma.DescargaPipaWhereInput;
    limit?: number;
};
export type DescargaPipaUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DescargaPipaSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DescargaPipaOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DescargaPipaUpdateManyMutationInput, Prisma.DescargaPipaUncheckedUpdateManyInput>;
    where?: Prisma.DescargaPipaWhereInput;
    limit?: number;
    include?: Prisma.DescargaPipaIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type DescargaPipaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DescargaPipaSelect<ExtArgs> | null;
    omit?: Prisma.DescargaPipaOmit<ExtArgs> | null;
    include?: Prisma.DescargaPipaInclude<ExtArgs> | null;
    where: Prisma.DescargaPipaWhereUniqueInput;
    create: Prisma.XOR<Prisma.DescargaPipaCreateInput, Prisma.DescargaPipaUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.DescargaPipaUpdateInput, Prisma.DescargaPipaUncheckedUpdateInput>;
};
export type DescargaPipaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DescargaPipaSelect<ExtArgs> | null;
    omit?: Prisma.DescargaPipaOmit<ExtArgs> | null;
    include?: Prisma.DescargaPipaInclude<ExtArgs> | null;
    where: Prisma.DescargaPipaWhereUniqueInput;
};
export type DescargaPipaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DescargaPipaWhereInput;
    limit?: number;
};
export type DescargaPipaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DescargaPipaSelect<ExtArgs> | null;
    omit?: Prisma.DescargaPipaOmit<ExtArgs> | null;
    include?: Prisma.DescargaPipaInclude<ExtArgs> | null;
};
export {};
