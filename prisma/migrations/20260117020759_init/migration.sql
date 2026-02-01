-- CreateEnum
CREATE TYPE "TipoBitacora" AS ENUM ('ACTIVIDADES_DIARIAS', 'DESCARGA_PIPAS', 'OPERACION_MANTENIMIENTO');

-- CreateEnum
CREATE TYPE "TipoMantenimiento" AS ENUM ('TRIMESTRAL', 'ANUAL');

-- CreateTable
CREATE TABLE "Estacion" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "razonSocial" TEXT NOT NULL,
    "permisoCRE" TEXT NOT NULL,
    "direccion" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Estacion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PersonaAutorizada" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "cargo" TEXT NOT NULL,
    "firmaHash" TEXT NOT NULL,
    "estacionId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PersonaAutorizada_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bitacora" (
    "id" SERIAL NOT NULL,
    "tipo" "TipoBitacora" NOT NULL,
    "estacionId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Bitacora_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RegistroBitacora" (
    "id" SERIAL NOT NULL,
    "folio" INTEGER NOT NULL,
    "fechaHora" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "descripcion" TEXT NOT NULL,
    "firmaResponsable" TEXT NOT NULL,
    "personaId" INTEGER NOT NULL,
    "bitacoraId" INTEGER NOT NULL,

    CONSTRAINT "RegistroBitacora_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DescargaPipa" (
    "id" SERIAL NOT NULL,
    "registroId" INTEGER NOT NULL,
    "numeroPipa" TEXT NOT NULL,
    "producto" TEXT NOT NULL,
    "volumenRecibido" DOUBLE PRECISION NOT NULL,
    "proveedor" TEXT NOT NULL,

    CONSTRAINT "DescargaPipa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Mantenimiento" (
    "id" SERIAL NOT NULL,
    "registroId" INTEGER NOT NULL,
    "tipo" "TipoMantenimiento" NOT NULL,
    "actividad" TEXT NOT NULL,
    "observaciones" TEXT,

    CONSTRAINT "Mantenimiento_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Estacion_permisoCRE_key" ON "Estacion"("permisoCRE");

-- CreateIndex
CREATE UNIQUE INDEX "RegistroBitacora_bitacoraId_folio_key" ON "RegistroBitacora"("bitacoraId", "folio");

-- CreateIndex
CREATE UNIQUE INDEX "DescargaPipa_registroId_key" ON "DescargaPipa"("registroId");

-- CreateIndex
CREATE UNIQUE INDEX "Mantenimiento_registroId_key" ON "Mantenimiento"("registroId");

-- AddForeignKey
ALTER TABLE "PersonaAutorizada" ADD CONSTRAINT "PersonaAutorizada_estacionId_fkey" FOREIGN KEY ("estacionId") REFERENCES "Estacion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bitacora" ADD CONSTRAINT "Bitacora_estacionId_fkey" FOREIGN KEY ("estacionId") REFERENCES "Estacion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RegistroBitacora" ADD CONSTRAINT "RegistroBitacora_personaId_fkey" FOREIGN KEY ("personaId") REFERENCES "PersonaAutorizada"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RegistroBitacora" ADD CONSTRAINT "RegistroBitacora_bitacoraId_fkey" FOREIGN KEY ("bitacoraId") REFERENCES "Bitacora"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DescargaPipa" ADD CONSTRAINT "DescargaPipa_registroId_fkey" FOREIGN KEY ("registroId") REFERENCES "RegistroBitacora"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mantenimiento" ADD CONSTRAINT "Mantenimiento_registroId_fkey" FOREIGN KEY ("registroId") REFERENCES "RegistroBitacora"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
