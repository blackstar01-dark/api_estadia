/*
  Warnings:

  - The values [TRIMESTRAL,ANUAL] on the enum `TipoMantenimiento` will be removed. If these variants are still used in the database, this will fail.
  - A unique constraint covering the columns `[estacionId,tipo]` on the table `Bitacora` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[estacionId,tipoBitacora,folio]` on the table `RegistroBitacora` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `representante` to the `Estacion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rfc` to the `Estacion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `estacionId` to the `RegistroBitacora` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipoBitacora` to the `RegistroBitacora` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "TipoMantenimiento_new" AS ENUM ('PREVENTIVO', 'CORRECTIVO');
ALTER TABLE "Mantenimiento" ALTER COLUMN "tipo" TYPE "TipoMantenimiento_new" USING ("tipo"::text::"TipoMantenimiento_new");
ALTER TYPE "TipoMantenimiento" RENAME TO "TipoMantenimiento_old";
ALTER TYPE "TipoMantenimiento_new" RENAME TO "TipoMantenimiento";
DROP TYPE "public"."TipoMantenimiento_old";
COMMIT;

-- DropIndex
DROP INDEX "RegistroBitacora_bitacoraId_folio_key";

-- AlterTable
ALTER TABLE "Bitacora" ADD COLUMN     "fundamento" TEXT NOT NULL DEFAULT 'NOM-005-ASEA-2016';

-- AlterTable
ALTER TABLE "Estacion" ADD COLUMN     "representante" TEXT NOT NULL,
ADD COLUMN     "rfc" TEXT NOT NULL,
ADD COLUMN     "telefono" TEXT;

-- AlterTable
ALTER TABLE "RegistroBitacora" ADD COLUMN     "cerrado" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "estacionId" INTEGER NOT NULL,
ADD COLUMN     "fechaCierre" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "firmaAlgoritmo" TEXT NOT NULL DEFAULT 'SHA-256',
ADD COLUMN     "firmaFecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "tipoBitacora" "TipoBitacora" NOT NULL;

-- CreateTable
CREATE TABLE "Auditoria" (
    "id" SERIAL NOT NULL,
    "tabla" TEXT NOT NULL,
    "registroId" INTEGER NOT NULL,
    "accion" TEXT NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "usuarioId" INTEGER NOT NULL,

    CONSTRAINT "Auditoria_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Bitacora_estacionId_tipo_key" ON "Bitacora"("estacionId", "tipo");

-- CreateIndex
CREATE UNIQUE INDEX "RegistroBitacora_estacionId_tipoBitacora_folio_key" ON "RegistroBitacora"("estacionId", "tipoBitacora", "folio");

-- AddForeignKey
ALTER TABLE "Auditoria" ADD CONSTRAINT "Auditoria_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
