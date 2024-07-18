/*
  Warnings:

  - Added the required column `purchased` to the `grocery` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `grocery` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "grocery" ADD COLUMN     "purchased" BOOLEAN NOT NULL,
ADD COLUMN     "quantity" INTEGER NOT NULL;
