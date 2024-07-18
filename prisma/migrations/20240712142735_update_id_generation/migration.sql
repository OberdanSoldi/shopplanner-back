/*
  Warnings:

  - The primary key for the `apiKey` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `apiKey` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `grocery` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `grocery` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "apiKey" DROP CONSTRAINT "apiKey_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL DEFAULT gen_random_uuid(),
ADD CONSTRAINT "apiKey_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "grocery" DROP CONSTRAINT "grocery_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL DEFAULT gen_random_uuid(),
ADD CONSTRAINT "grocery_pkey" PRIMARY KEY ("id");
