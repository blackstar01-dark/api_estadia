import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PlantillaMantenimientoModel = runtime.Types.Result.DefaultSelection<Prisma.$PlantillaMantenimientoPayload>;
export type AggregatePlantillaMantenimiento = {
    _count: PlantillaMantenimientoCountAggregateOutputType | null;
    _avg: PlantillaMantenimientoAvgAggregateOutputType | null;
    _sum: PlantillaMantenimientoSumAggregateOutputType | null;
    _min: PlantillaMantenimientoMinAggregateOutputType | null;
    _max: PlantillaMantenimientoMaxAggregateOutputType | null;
};
export type PlantillaMantenimientoAvgAggregateOutputType = {
    id: number | null;
};
export type PlantillaMantenimientoSumAggregateOutputType = {
    id: number | null;
};
export type PlantillaMantenimientoMinAggregateOutputType = {
    id: number | null;
    numeralNom: string | null;
    actividad: string | null;
    periodicidad: $Enums.PeriodicidadBitacora | null;
    activa: boolean | null;
};
export type PlantillaMantenimientoMaxAggregateOutputType = {
    id: number | null;
    numeralNom: string | null;
    actividad: string | null;
    periodicidad: $Enums.PeriodicidadBitacora | null;
    activa: boolean | null;
};
export type PlantillaMantenimientoCountAggregateOutputType = {
    id: number;
    numeralNom: number;
    actividad: number;
    periodicidad: number;
    activa: number;
    _all: number;
};
export type PlantillaMantenimientoAvgAggregateInputType = {
    id?: true;
};
export type PlantillaMantenimientoSumAggregateInputType = {
    id?: true;
};
export type PlantillaMantenimientoMinAggregateInputType = {
    id?: true;
    numeralNom?: true;
    actividad?: true;
    periodicidad?: true;
    activa?: true;
};
export type PlantillaMantenimientoMaxAggregateInputType = {
    id?: true;
    numeralNom?: true;
    actividad?: true;
    periodicidad?: true;
    activa?: true;
};
export type PlantillaMantenimientoCountAggregateInputType = {
    id?: true;
    numeralNom?: true;
    actividad?: true;
    periodicidad?: true;
    activa?: true;
    _all?: true;
};
export type PlantillaMantenimientoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PlantillaMantenimientoWhereInput;
    orderBy?: Prisma.PlantillaMantenimientoOrderByWithRelationInput | Prisma.PlantillaMantenimientoOrderByWithRelationInput[];
    cursor?: Prisma.PlantillaMantenimientoWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PlantillaMantenimientoCountAggregateInputType;
    _avg?: PlantillaMantenimientoAvgAggregateInputType;
    _sum?: PlantillaMantenimientoSumAggregateInputType;
    _min?: PlantillaMantenimientoMinAggregateInputType;
    _max?: PlantillaMantenimientoMaxAggregateInputType;
};
export type GetPlantillaMantenimientoAggregateType<T extends PlantillaMantenimientoAggregateArgs> = {
    [P in keyof T & keyof AggregatePlantillaMantenimiento]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePlantillaMantenimiento[P]> : Prisma.GetScalarType<T[P], AggregatePlantillaMantenimiento[P]>;
};
export type PlantillaMantenimientoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PlantillaMantenimientoWhereInput;
    orderBy?: Prisma.PlantillaMantenimientoOrderByWithAggregationInput | Prisma.PlantillaMantenimientoOrderByWithAggregationInput[];
    by: Prisma.PlantillaMantenimientoScalarFieldEnum[] | Prisma.PlantillaMantenimientoScalarFieldEnum;
    having?: Prisma.PlantillaMantenimientoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PlantillaMantenimientoCountAggregateInputType | true;
    _avg?: PlantillaMantenimientoAvgAggregateInputType;
    _sum?: PlantillaMantenimientoSumAggregateInputType;
    _min?: PlantillaMantenimientoMinAggregateInputType;
    _max?: PlantillaMantenimientoMaxAggregateInputType;
};
export type PlantillaMantenimientoGroupByOutputType = {
    id: number;
    numeralNom: string;
    actividad: string;
    periodicidad: $Enums.PeriodicidadBitacora;
    activa: boolean;
    _count: PlantillaMantenimientoCountAggregateOutputType | null;
    _avg: PlantillaMantenimientoAvgAggregateOutputType | null;
    _sum: PlantillaMantenimientoSumAggregateOutputType | null;
    _min: PlantillaMantenimientoMinAggregateOutputType | null;
    _max: PlantillaMantenimientoMaxAggregateOutputType | null;
};
type GetPlantillaMantenimientoGroupByPayload<T extends PlantillaMantenimientoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PlantillaMantenimientoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PlantillaMantenimientoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PlantillaMantenimientoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PlantillaMantenimientoGroupByOutputType[P]>;
}>>;
export type PlantillaMantenimientoWhereInput = {
    AND?: Prisma.PlantillaMantenimientoWhereInput | Prisma.PlantillaMantenimientoWhereInput[];
    OR?: Prisma.PlantillaMantenimientoWhereInput[];
    NOT?: Prisma.PlantillaMantenimientoWhereInput | Prisma.PlantillaMantenimientoWhereInput[];
    id?: Prisma.IntFilter<"PlantillaMantenimiento"> | number;
    numeralNom?: Prisma.StringFilter<"PlantillaMantenimiento"> | string;
    actividad?: Prisma.StringFilter<"PlantillaMantenimiento"> | string;
    periodicidad?: Prisma.EnumPeriodicidadBitacoraFilter<"PlantillaMantenimiento"> | $Enums.PeriodicidadBitacora;
    activa?: Prisma.BoolFilter<"PlantillaMantenimiento"> | boolean;
    programas?: Prisma.ProgramaMantenimientoListRelationFilter;
};
export type PlantillaMantenimientoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    numeralNom?: Prisma.SortOrder;
    actividad?: Prisma.SortOrder;
    periodicidad?: Prisma.SortOrder;
    activa?: Prisma.SortOrder;
    programas?: Prisma.ProgramaMantenimientoOrderByRelationAggregateInput;
};
export type PlantillaMantenimientoWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.PlantillaMantenimientoWhereInput | Prisma.PlantillaMantenimientoWhereInput[];
    OR?: Prisma.PlantillaMantenimientoWhereInput[];
    NOT?: Prisma.PlantillaMantenimientoWhereInput | Prisma.PlantillaMantenimientoWhereInput[];
    numeralNom?: Prisma.StringFilter<"PlantillaMantenimiento"> | string;
    actividad?: Prisma.StringFilter<"PlantillaMantenimiento"> | string;
    periodicidad?: Prisma.EnumPeriodicidadBitacoraFilter<"PlantillaMantenimiento"> | $Enums.PeriodicidadBitacora;
    activa?: Prisma.BoolFilter<"PlantillaMantenimiento"> | boolean;
    programas?: Prisma.ProgramaMantenimientoListRelationFilter;
}, "id">;
export type PlantillaMantenimientoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    numeralNom?: Prisma.SortOrder;
    actividad?: Prisma.SortOrder;
    periodicidad?: Prisma.SortOrder;
    activa?: Prisma.SortOrder;
    _count?: Prisma.PlantillaMantenimientoCountOrderByAggregateInput;
    _avg?: Prisma.PlantillaMantenimientoAvgOrderByAggregateInput;
    _max?: Prisma.PlantillaMantenimientoMaxOrderByAggregateInput;
    _min?: Prisma.PlantillaMantenimientoMinOrderByAggregateInput;
    _sum?: Prisma.PlantillaMantenimientoSumOrderByAggregateInput;
};
export type PlantillaMantenimientoScalarWhereWithAggregatesInput = {
    AND?: Prisma.PlantillaMantenimientoScalarWhereWithAggregatesInput | Prisma.PlantillaMantenimientoScalarWhereWithAggregatesInput[];
    OR?: Prisma.PlantillaMantenimientoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PlantillaMantenimientoScalarWhereWithAggregatesInput | Prisma.PlantillaMantenimientoScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"PlantillaMantenimiento"> | number;
    numeralNom?: Prisma.StringWithAggregatesFilter<"PlantillaMantenimiento"> | string;
    actividad?: Prisma.StringWithAggregatesFilter<"PlantillaMantenimiento"> | string;
    periodicidad?: Prisma.EnumPeriodicidadBitacoraWithAggregatesFilter<"PlantillaMantenimiento"> | $Enums.PeriodicidadBitacora;
    activa?: Prisma.BoolWithAggregatesFilter<"PlantillaMantenimiento"> | boolean;
};
export type PlantillaMantenimientoCreateInput = {
    numeralNom: string;
    actividad: string;
    periodicidad: $Enums.PeriodicidadBitacora;
    activa?: boolean;
    programas?: Prisma.ProgramaMantenimientoCreateNestedManyWithoutPlantillaInput;
};
export type PlantillaMantenimientoUncheckedCreateInput = {
    id?: number;
    numeralNom: string;
    actividad: string;
    periodicidad: $Enums.PeriodicidadBitacora;
    activa?: boolean;
    programas?: Prisma.ProgramaMantenimientoUncheckedCreateNestedManyWithoutPlantillaInput;
};
export type PlantillaMantenimientoUpdateInput = {
    numeralNom?: Prisma.StringFieldUpdateOperationsInput | string;
    actividad?: Prisma.StringFieldUpdateOperationsInput | string;
    periodicidad?: Prisma.EnumPeriodicidadBitacoraFieldUpdateOperationsInput | $Enums.PeriodicidadBitacora;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    programas?: Prisma.ProgramaMantenimientoUpdateManyWithoutPlantillaNestedInput;
};
export type PlantillaMantenimientoUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    numeralNom?: Prisma.StringFieldUpdateOperationsInput | string;
    actividad?: Prisma.StringFieldUpdateOperationsInput | string;
    periodicidad?: Prisma.EnumPeriodicidadBitacoraFieldUpdateOperationsInput | $Enums.PeriodicidadBitacora;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    programas?: Prisma.ProgramaMantenimientoUncheckedUpdateManyWithoutPlantillaNestedInput;
};
export type PlantillaMantenimientoCreateManyInput = {
    id?: number;
    numeralNom: string;
    actividad: string;
    periodicidad: $Enums.PeriodicidadBitacora;
    activa?: boolean;
};
export type PlantillaMantenimientoUpdateManyMutationInput = {
    numeralNom?: Prisma.StringFieldUpdateOperationsInput | string;
    actividad?: Prisma.StringFieldUpdateOperationsInput | string;
    periodicidad?: Prisma.EnumPeriodicidadBitacoraFieldUpdateOperationsInput | $Enums.PeriodicidadBitacora;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type PlantillaMantenimientoUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    numeralNom?: Prisma.StringFieldUpdateOperationsInput | string;
    actividad?: Prisma.StringFieldUpdateOperationsInput | string;
    periodicidad?: Prisma.EnumPeriodicidadBitacoraFieldUpdateOperationsInput | $Enums.PeriodicidadBitacora;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type PlantillaMantenimientoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    numeralNom?: Prisma.SortOrder;
    actividad?: Prisma.SortOrder;
    periodicidad?: Prisma.SortOrder;
    activa?: Prisma.SortOrder;
};
export type PlantillaMantenimientoAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type PlantillaMantenimientoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    numeralNom?: Prisma.SortOrder;
    actividad?: Prisma.SortOrder;
    periodicidad?: Prisma.SortOrder;
    activa?: Prisma.SortOrder;
};
export type PlantillaMantenimientoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    numeralNom?: Prisma.SortOrder;
    actividad?: Prisma.SortOrder;
    periodicidad?: Prisma.SortOrder;
    activa?: Prisma.SortOrder;
};
export type PlantillaMantenimientoSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type PlantillaMantenimientoScalarRelationFilter = {
    is?: Prisma.PlantillaMantenimientoWhereInput;
    isNot?: Prisma.PlantillaMantenimientoWhereInput;
};
export type EnumPeriodicidadBitacoraFieldUpdateOperationsInput = {
    set?: $Enums.PeriodicidadBitacora;
};
export type PlantillaMantenimientoCreateNestedOneWithoutProgramasInput = {
    create?: Prisma.XOR<Prisma.PlantillaMantenimientoCreateWithoutProgramasInput, Prisma.PlantillaMantenimientoUncheckedCreateWithoutProgramasInput>;
    connectOrCreate?: Prisma.PlantillaMantenimientoCreateOrConnectWithoutProgramasInput;
    connect?: Prisma.PlantillaMantenimientoWhereUniqueInput;
};
export type PlantillaMantenimientoUpdateOneRequiredWithoutProgramasNestedInput = {
    create?: Prisma.XOR<Prisma.PlantillaMantenimientoCreateWithoutProgramasInput, Prisma.PlantillaMantenimientoUncheckedCreateWithoutProgramasInput>;
    connectOrCreate?: Prisma.PlantillaMantenimientoCreateOrConnectWithoutProgramasInput;
    upsert?: Prisma.PlantillaMantenimientoUpsertWithoutProgramasInput;
    connect?: Prisma.PlantillaMantenimientoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PlantillaMantenimientoUpdateToOneWithWhereWithoutProgramasInput, Prisma.PlantillaMantenimientoUpdateWithoutProgramasInput>, Prisma.PlantillaMantenimientoUncheckedUpdateWithoutProgramasInput>;
};
export type PlantillaMantenimientoCreateWithoutProgramasInput = {
    numeralNom: string;
    actividad: string;
    periodicidad: $Enums.PeriodicidadBitacora;
    activa?: boolean;
};
export type PlantillaMantenimientoUncheckedCreateWithoutProgramasInput = {
    id?: number;
    numeralNom: string;
    actividad: string;
    periodicidad: $Enums.PeriodicidadBitacora;
    activa?: boolean;
};
export type PlantillaMantenimientoCreateOrConnectWithoutProgramasInput = {
    where: Prisma.PlantillaMantenimientoWhereUniqueInput;
    create: Prisma.XOR<Prisma.PlantillaMantenimientoCreateWithoutProgramasInput, Prisma.PlantillaMantenimientoUncheckedCreateWithoutProgramasInput>;
};
export type PlantillaMantenimientoUpsertWithoutProgramasInput = {
    update: Prisma.XOR<Prisma.PlantillaMantenimientoUpdateWithoutProgramasInput, Prisma.PlantillaMantenimientoUncheckedUpdateWithoutProgramasInput>;
    create: Prisma.XOR<Prisma.PlantillaMantenimientoCreateWithoutProgramasInput, Prisma.PlantillaMantenimientoUncheckedCreateWithoutProgramasInput>;
    where?: Prisma.PlantillaMantenimientoWhereInput;
};
export type PlantillaMantenimientoUpdateToOneWithWhereWithoutProgramasInput = {
    where?: Prisma.PlantillaMantenimientoWhereInput;
    data: Prisma.XOR<Prisma.PlantillaMantenimientoUpdateWithoutProgramasInput, Prisma.PlantillaMantenimientoUncheckedUpdateWithoutProgramasInput>;
};
export type PlantillaMantenimientoUpdateWithoutProgramasInput = {
    numeralNom?: Prisma.StringFieldUpdateOperationsInput | string;
    actividad?: Prisma.StringFieldUpdateOperationsInput | string;
    periodicidad?: Prisma.EnumPeriodicidadBitacoraFieldUpdateOperationsInput | $Enums.PeriodicidadBitacora;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type PlantillaMantenimientoUncheckedUpdateWithoutProgramasInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    numeralNom?: Prisma.StringFieldUpdateOperationsInput | string;
    actividad?: Prisma.StringFieldUpdateOperationsInput | string;
    periodicidad?: Prisma.EnumPeriodicidadBitacoraFieldUpdateOperationsInput | $Enums.PeriodicidadBitacora;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type PlantillaMantenimientoCountOutputType = {
    programas: number;
};
export type PlantillaMantenimientoCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    programas?: boolean | PlantillaMantenimientoCountOutputTypeCountProgramasArgs;
};
export type PlantillaMantenimientoCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlantillaMantenimientoCountOutputTypeSelect<ExtArgs> | null;
};
export type PlantillaMantenimientoCountOutputTypeCountProgramasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProgramaMantenimientoWhereInput;
};
export type PlantillaMantenimientoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    numeralNom?: boolean;
    actividad?: boolean;
    periodicidad?: boolean;
    activa?: boolean;
    programas?: boolean | Prisma.PlantillaMantenimiento$programasArgs<ExtArgs>;
    _count?: boolean | Prisma.PlantillaMantenimientoCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["plantillaMantenimiento"]>;
export type PlantillaMantenimientoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    numeralNom?: boolean;
    actividad?: boolean;
    periodicidad?: boolean;
    activa?: boolean;
}, ExtArgs["result"]["plantillaMantenimiento"]>;
export type PlantillaMantenimientoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    numeralNom?: boolean;
    actividad?: boolean;
    periodicidad?: boolean;
    activa?: boolean;
}, ExtArgs["result"]["plantillaMantenimiento"]>;
export type PlantillaMantenimientoSelectScalar = {
    id?: boolean;
    numeralNom?: boolean;
    actividad?: boolean;
    periodicidad?: boolean;
    activa?: boolean;
};
export type PlantillaMantenimientoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "numeralNom" | "actividad" | "periodicidad" | "activa", ExtArgs["result"]["plantillaMantenimiento"]>;
export type PlantillaMantenimientoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    programas?: boolean | Prisma.PlantillaMantenimiento$programasArgs<ExtArgs>;
    _count?: boolean | Prisma.PlantillaMantenimientoCountOutputTypeDefaultArgs<ExtArgs>;
};
export type PlantillaMantenimientoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type PlantillaMantenimientoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $PlantillaMantenimientoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PlantillaMantenimiento";
    objects: {
        programas: Prisma.$ProgramaMantenimientoPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        numeralNom: string;
        actividad: string;
        periodicidad: $Enums.PeriodicidadBitacora;
        activa: boolean;
    }, ExtArgs["result"]["plantillaMantenimiento"]>;
    composites: {};
};
export type PlantillaMantenimientoGetPayload<S extends boolean | null | undefined | PlantillaMantenimientoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PlantillaMantenimientoPayload, S>;
export type PlantillaMantenimientoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PlantillaMantenimientoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PlantillaMantenimientoCountAggregateInputType | true;
};
export interface PlantillaMantenimientoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PlantillaMantenimiento'];
        meta: {
            name: 'PlantillaMantenimiento';
        };
    };
    findUnique<T extends PlantillaMantenimientoFindUniqueArgs>(args: Prisma.SelectSubset<T, PlantillaMantenimientoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PlantillaMantenimientoClient<runtime.Types.Result.GetResult<Prisma.$PlantillaMantenimientoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PlantillaMantenimientoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PlantillaMantenimientoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PlantillaMantenimientoClient<runtime.Types.Result.GetResult<Prisma.$PlantillaMantenimientoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PlantillaMantenimientoFindFirstArgs>(args?: Prisma.SelectSubset<T, PlantillaMantenimientoFindFirstArgs<ExtArgs>>): Prisma.Prisma__PlantillaMantenimientoClient<runtime.Types.Result.GetResult<Prisma.$PlantillaMantenimientoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PlantillaMantenimientoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PlantillaMantenimientoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PlantillaMantenimientoClient<runtime.Types.Result.GetResult<Prisma.$PlantillaMantenimientoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PlantillaMantenimientoFindManyArgs>(args?: Prisma.SelectSubset<T, PlantillaMantenimientoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PlantillaMantenimientoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PlantillaMantenimientoCreateArgs>(args: Prisma.SelectSubset<T, PlantillaMantenimientoCreateArgs<ExtArgs>>): Prisma.Prisma__PlantillaMantenimientoClient<runtime.Types.Result.GetResult<Prisma.$PlantillaMantenimientoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PlantillaMantenimientoCreateManyArgs>(args?: Prisma.SelectSubset<T, PlantillaMantenimientoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PlantillaMantenimientoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PlantillaMantenimientoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PlantillaMantenimientoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PlantillaMantenimientoDeleteArgs>(args: Prisma.SelectSubset<T, PlantillaMantenimientoDeleteArgs<ExtArgs>>): Prisma.Prisma__PlantillaMantenimientoClient<runtime.Types.Result.GetResult<Prisma.$PlantillaMantenimientoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PlantillaMantenimientoUpdateArgs>(args: Prisma.SelectSubset<T, PlantillaMantenimientoUpdateArgs<ExtArgs>>): Prisma.Prisma__PlantillaMantenimientoClient<runtime.Types.Result.GetResult<Prisma.$PlantillaMantenimientoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PlantillaMantenimientoDeleteManyArgs>(args?: Prisma.SelectSubset<T, PlantillaMantenimientoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PlantillaMantenimientoUpdateManyArgs>(args: Prisma.SelectSubset<T, PlantillaMantenimientoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PlantillaMantenimientoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PlantillaMantenimientoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PlantillaMantenimientoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PlantillaMantenimientoUpsertArgs>(args: Prisma.SelectSubset<T, PlantillaMantenimientoUpsertArgs<ExtArgs>>): Prisma.Prisma__PlantillaMantenimientoClient<runtime.Types.Result.GetResult<Prisma.$PlantillaMantenimientoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PlantillaMantenimientoCountArgs>(args?: Prisma.Subset<T, PlantillaMantenimientoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PlantillaMantenimientoCountAggregateOutputType> : number>;
    aggregate<T extends PlantillaMantenimientoAggregateArgs>(args: Prisma.Subset<T, PlantillaMantenimientoAggregateArgs>): Prisma.PrismaPromise<GetPlantillaMantenimientoAggregateType<T>>;
    groupBy<T extends PlantillaMantenimientoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PlantillaMantenimientoGroupByArgs['orderBy'];
    } : {
        orderBy?: PlantillaMantenimientoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PlantillaMantenimientoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlantillaMantenimientoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PlantillaMantenimientoFieldRefs;
}
export interface Prisma__PlantillaMantenimientoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    programas<T extends Prisma.PlantillaMantenimiento$programasArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PlantillaMantenimiento$programasArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProgramaMantenimientoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PlantillaMantenimientoFieldRefs {
    readonly id: Prisma.FieldRef<"PlantillaMantenimiento", 'Int'>;
    readonly numeralNom: Prisma.FieldRef<"PlantillaMantenimiento", 'String'>;
    readonly actividad: Prisma.FieldRef<"PlantillaMantenimiento", 'String'>;
    readonly periodicidad: Prisma.FieldRef<"PlantillaMantenimiento", 'PeriodicidadBitacora'>;
    readonly activa: Prisma.FieldRef<"PlantillaMantenimiento", 'Boolean'>;
}
export type PlantillaMantenimientoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlantillaMantenimientoSelect<ExtArgs> | null;
    omit?: Prisma.PlantillaMantenimientoOmit<ExtArgs> | null;
    include?: Prisma.PlantillaMantenimientoInclude<ExtArgs> | null;
    where: Prisma.PlantillaMantenimientoWhereUniqueInput;
};
export type PlantillaMantenimientoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlantillaMantenimientoSelect<ExtArgs> | null;
    omit?: Prisma.PlantillaMantenimientoOmit<ExtArgs> | null;
    include?: Prisma.PlantillaMantenimientoInclude<ExtArgs> | null;
    where: Prisma.PlantillaMantenimientoWhereUniqueInput;
};
export type PlantillaMantenimientoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlantillaMantenimientoSelect<ExtArgs> | null;
    omit?: Prisma.PlantillaMantenimientoOmit<ExtArgs> | null;
    include?: Prisma.PlantillaMantenimientoInclude<ExtArgs> | null;
    where?: Prisma.PlantillaMantenimientoWhereInput;
    orderBy?: Prisma.PlantillaMantenimientoOrderByWithRelationInput | Prisma.PlantillaMantenimientoOrderByWithRelationInput[];
    cursor?: Prisma.PlantillaMantenimientoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PlantillaMantenimientoScalarFieldEnum | Prisma.PlantillaMantenimientoScalarFieldEnum[];
};
export type PlantillaMantenimientoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlantillaMantenimientoSelect<ExtArgs> | null;
    omit?: Prisma.PlantillaMantenimientoOmit<ExtArgs> | null;
    include?: Prisma.PlantillaMantenimientoInclude<ExtArgs> | null;
    where?: Prisma.PlantillaMantenimientoWhereInput;
    orderBy?: Prisma.PlantillaMantenimientoOrderByWithRelationInput | Prisma.PlantillaMantenimientoOrderByWithRelationInput[];
    cursor?: Prisma.PlantillaMantenimientoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PlantillaMantenimientoScalarFieldEnum | Prisma.PlantillaMantenimientoScalarFieldEnum[];
};
export type PlantillaMantenimientoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlantillaMantenimientoSelect<ExtArgs> | null;
    omit?: Prisma.PlantillaMantenimientoOmit<ExtArgs> | null;
    include?: Prisma.PlantillaMantenimientoInclude<ExtArgs> | null;
    where?: Prisma.PlantillaMantenimientoWhereInput;
    orderBy?: Prisma.PlantillaMantenimientoOrderByWithRelationInput | Prisma.PlantillaMantenimientoOrderByWithRelationInput[];
    cursor?: Prisma.PlantillaMantenimientoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PlantillaMantenimientoScalarFieldEnum | Prisma.PlantillaMantenimientoScalarFieldEnum[];
};
export type PlantillaMantenimientoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlantillaMantenimientoSelect<ExtArgs> | null;
    omit?: Prisma.PlantillaMantenimientoOmit<ExtArgs> | null;
    include?: Prisma.PlantillaMantenimientoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PlantillaMantenimientoCreateInput, Prisma.PlantillaMantenimientoUncheckedCreateInput>;
};
export type PlantillaMantenimientoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PlantillaMantenimientoCreateManyInput | Prisma.PlantillaMantenimientoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PlantillaMantenimientoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlantillaMantenimientoSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PlantillaMantenimientoOmit<ExtArgs> | null;
    data: Prisma.PlantillaMantenimientoCreateManyInput | Prisma.PlantillaMantenimientoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PlantillaMantenimientoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlantillaMantenimientoSelect<ExtArgs> | null;
    omit?: Prisma.PlantillaMantenimientoOmit<ExtArgs> | null;
    include?: Prisma.PlantillaMantenimientoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PlantillaMantenimientoUpdateInput, Prisma.PlantillaMantenimientoUncheckedUpdateInput>;
    where: Prisma.PlantillaMantenimientoWhereUniqueInput;
};
export type PlantillaMantenimientoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PlantillaMantenimientoUpdateManyMutationInput, Prisma.PlantillaMantenimientoUncheckedUpdateManyInput>;
    where?: Prisma.PlantillaMantenimientoWhereInput;
    limit?: number;
};
export type PlantillaMantenimientoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlantillaMantenimientoSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PlantillaMantenimientoOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PlantillaMantenimientoUpdateManyMutationInput, Prisma.PlantillaMantenimientoUncheckedUpdateManyInput>;
    where?: Prisma.PlantillaMantenimientoWhereInput;
    limit?: number;
};
export type PlantillaMantenimientoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlantillaMantenimientoSelect<ExtArgs> | null;
    omit?: Prisma.PlantillaMantenimientoOmit<ExtArgs> | null;
    include?: Prisma.PlantillaMantenimientoInclude<ExtArgs> | null;
    where: Prisma.PlantillaMantenimientoWhereUniqueInput;
    create: Prisma.XOR<Prisma.PlantillaMantenimientoCreateInput, Prisma.PlantillaMantenimientoUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PlantillaMantenimientoUpdateInput, Prisma.PlantillaMantenimientoUncheckedUpdateInput>;
};
export type PlantillaMantenimientoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlantillaMantenimientoSelect<ExtArgs> | null;
    omit?: Prisma.PlantillaMantenimientoOmit<ExtArgs> | null;
    include?: Prisma.PlantillaMantenimientoInclude<ExtArgs> | null;
    where: Prisma.PlantillaMantenimientoWhereUniqueInput;
};
export type PlantillaMantenimientoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PlantillaMantenimientoWhereInput;
    limit?: number;
};
export type PlantillaMantenimiento$programasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PlantillaMantenimientoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlantillaMantenimientoSelect<ExtArgs> | null;
    omit?: Prisma.PlantillaMantenimientoOmit<ExtArgs> | null;
    include?: Prisma.PlantillaMantenimientoInclude<ExtArgs> | null;
};
export {};
