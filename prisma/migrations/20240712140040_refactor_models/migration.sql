/*
  Warnings:

  - You are about to drop the `family` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `member` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Category" AS ENUM ('FRUITS', 'VEGETABLES', 'MEAT', 'DRINK', 'BAKERY');

-- DropForeignKey
ALTER TABLE "member" DROP CONSTRAINT "member_familyId_fkey";

-- DropTable
DROP TABLE "family";

-- DropTable
DROP TABLE "member";

-- CreateTable
CREATE TABLE "grocery" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "category" "Category" NOT NULL,

    CONSTRAINT "grocery_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "apiKey" (
    "id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "apiKey_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "apiKey_key_key" ON "apiKey"("key");
