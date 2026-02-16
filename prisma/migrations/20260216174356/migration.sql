/*
  Warnings:

  - Made the column `periodicidad` on table `RegistroBitacora` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "RegistroBitacora" ALTER COLUMN "periodicidad" SET NOT NULL;
