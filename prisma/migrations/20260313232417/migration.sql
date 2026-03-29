-- AlterTable
ALTER TABLE "Mantenimiento" ADD COLUMN     "programaId" INTEGER;

-- CreateTable
CREATE TABLE "PlantillaMantenimiento" (
    "id" SERIAL NOT NULL,
    "numeralNom" TEXT NOT NULL,
    "actividad" TEXT NOT NULL,
    "periodicidad" "PeriodicidadBitacora" NOT NULL,
    "activa" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "PlantillaMantenimiento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProgramaMantenimiento" (
    "id" SERIAL NOT NULL,
    "estacionId" INTEGER NOT NULL,
    "plantillaId" INTEGER NOT NULL,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "fechaInicio" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProgramaMantenimiento_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ProgramaMantenimiento_estacionId_plantillaId_key" ON "ProgramaMantenimiento"("estacionId", "plantillaId");

-- AddForeignKey
ALTER TABLE "Mantenimiento" ADD CONSTRAINT "Mantenimiento_programaId_fkey" FOREIGN KEY ("programaId") REFERENCES "ProgramaMantenimiento"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProgramaMantenimiento" ADD CONSTRAINT "ProgramaMantenimiento_estacionId_fkey" FOREIGN KEY ("estacionId") REFERENCES "Estacion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProgramaMantenimiento" ADD CONSTRAINT "ProgramaMantenimiento_plantillaId_fkey" FOREIGN KEY ("plantillaId") REFERENCES "PlantillaMantenimiento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
