/*
  Warnings:

  - You are about to drop the column `firmaHash` on the `PersonaAutorizada` table. All the data in the column will be lost.
  - You are about to drop the column `firmaResponsable` on the `RegistroBitacora` table. All the data in the column will be lost.
  - Added the required column `adminId` to the `Estacion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `creadoPorId` to the `PersonaAutorizada` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firmaHashPersona` to the `PersonaAutorizada` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firmaHashRegistro` to the `RegistroBitacora` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "RolUsuario" AS ENUM ('ADMIN', 'OPERADOR');

-- AlterTable
ALTER TABLE "Estacion" ADD COLUMN     "adminId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "PersonaAutorizada" DROP COLUMN "firmaHash",
ADD COLUMN     "creadoPorId" INTEGER NOT NULL,
ADD COLUMN     "firmaHashPersona" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "RegistroBitacora" DROP COLUMN "firmaResponsable",
ADD COLUMN     "firmaHashRegistro" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "correo" TEXT NOT NULL,
    "contrasenaHash" TEXT NOT NULL,
    "rol" "RolUsuario" NOT NULL DEFAULT 'OPERADOR',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_correo_key" ON "Usuario"("correo");

-- CreateIndex
CREATE INDEX "Bitacora_estacionId_idx" ON "Bitacora"("estacionId");

-- CreateIndex
CREATE INDEX "PersonaAutorizada_estacionId_idx" ON "PersonaAutorizada"("estacionId");

-- CreateIndex
CREATE INDEX "RegistroBitacora_personaId_idx" ON "RegistroBitacora"("personaId");

-- AddForeignKey
ALTER TABLE "Estacion" ADD CONSTRAINT "Estacion_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PersonaAutorizada" ADD CONSTRAINT "PersonaAutorizada_creadoPorId_fkey" FOREIGN KEY ("creadoPorId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
