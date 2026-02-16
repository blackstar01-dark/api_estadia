/*
  Warnings:

  - You are about to drop the column `periodicidad` on the `Bitacora` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Bitacora" DROP COLUMN "periodicidad";

-- AlterTable
ALTER TABLE "RegistroBitacora" ADD COLUMN     "periodicidad" "PeriodicidadBitacora";
