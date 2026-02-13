/*
  Warnings:

  - You are about to drop the column `tipoBitacora` on the `RegistroBitacora` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[estacionId,bitacoraId,folio]` on the table `RegistroBitacora` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `periodicidad` to the `Bitacora` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "PeriodicidadBitacora" AS ENUM ('DIARIA', 'POR_EVENTO', 'TRIMESTRAL', 'ANUAL');

-- DropIndex
DROP INDEX "RegistroBitacora_estacionId_tipoBitacora_folio_key";

-- AlterTable
ALTER TABLE "Bitacora" ADD COLUMN     "periodicidad" "PeriodicidadBitacora" NOT NULL;

-- AlterTable
ALTER TABLE "RegistroBitacora" DROP COLUMN "tipoBitacora";

-- CreateIndex
CREATE UNIQUE INDEX "RegistroBitacora_estacionId_bitacoraId_folio_key" ON "RegistroBitacora"("estacionId", "bitacoraId", "folio");
